using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Nuts_Yarden_Irit_Shiran.Server.Data;
using Nuts_Yarden_Irit_Shiran.Shared.Entities;
using Microsoft.EntityFrameworkCore;
using Nuts_Yarden_Irit_Shiran.Server.Helpers;

namespace Nuts_Yarden_Irit_Shiran.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly FileStorage _fileStorage;

        public QuestionsController(DataContext context, FileStorage fileStorage)
        {
            _context = context;
            _fileStorage = fileStorage;
        }

        [HttpGet("{gameId}")]
        public async Task<IActionResult> GetAllGames(int gameId)
        {
            //מנסה לשלוף את המשחק לפי האיידי
            Game gameToReturn = await _context.Games.Include(u => u.QuestList).FirstOrDefaultAsync(u => u.ID == gameId);
            //אם קיים משחק באיידי הזה
            if (gameToReturn != null)
            {
                //שולף את הסשיין של השחקן המחובר
                string sessionContent = HttpContext.Session.GetString("UserId");
                //האם יש שחקן מחובר- אם הסשיין לא ריק
                if (string.IsNullOrEmpty(sessionContent) == false)
                {
                    //הודק האם השחקן המחובר זה השחקן שהשאלה שייכת לו
                    int sessionId = Convert.ToInt32(sessionContent);
                    if (sessionId == gameToReturn.UserID)
                    {
                        //לשמור בסשיין את מספר המשחק שנערך
                        HttpContext.Session.SetString("GameId", gameToReturn.ID.ToString());
                        //מחזיר למשתמש את המשחק
                        return Ok(gameToReturn);

                    }
                    //אם זה לא השחקן המתאים
                    return BadRequest("User not login");
                }
                //אם אין שחקן בסשיין
                return BadRequest("Empty session");
            }
            //אם אין משחק
            return BadRequest("Game not found");
        }

        [HttpPost]
        public async Task<IActionResult> AddGame(Question questionToAdd)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");
            Game gameToReturn = await _context.Games.Include(g => g.QuestList).FirstOrDefaultAsync(u => u.ID == questionToAdd.GameID);

            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int SessionID = Convert.ToInt32(sessionContent);
                if (SessionID == gameToReturn.UserID)
                {

                    if (gameToReturn != null)
                    {
                        gameToReturn.QuestList.Add(questionToAdd);
                        await _context.SaveChangesAsync();//שמירת שינויים
                        return Ok(questionToAdd);
                    }
                    else
                    {
                        return BadRequest("user not found");
                    }
                }
                else
                {
                    return BadRequest("user not login");
                }
            }
            else
            {
                return BadRequest("empty Session");
            }
        }
        [HttpPost("update")]
        public async Task<IActionResult> updateGame(Question questionToAdd)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");
            Question questToReturn = await _context.Questions.Include(u => u.QuestionAnswers).FirstOrDefaultAsync(u => u.ID == questionToAdd.ID);

            Game gameToReturn = await _context.Games.FirstOrDefaultAsync(u => u.ID == questionToAdd.GameID);

            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int SessionID = Convert.ToInt32(sessionContent);
                if (SessionID == gameToReturn.UserID)
                {

                    if (questToReturn != null)
                    {
                        questToReturn.QuestionAnswers = questionToAdd.QuestionAnswers;
                        questToReturn.QuestImg = questionToAdd.QuestImg;
                        questToReturn.QuestText = questionToAdd.QuestText;
                        await _context.SaveChangesAsync();//שמירת שינויים
                        return Ok(questToReturn);
                    }
                    else
                    {
                        return BadRequest("user not found");
                    }
                }
                else
                {
                    return BadRequest("user not login");
                }
            }
            else
            {
                return BadRequest("empty Session");
            }
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile([FromBody] string imageBase64)
        {
            byte[] picture = Convert.FromBase64String(imageBase64);
            string url = await _fileStorage.SaveFile(picture, "png", "uploadedFiles");
            return Ok(url);
        }

        [HttpPost("deleteImages")]
        public async Task<IActionResult> DeleteImages([FromBody] List<string> images)
        {
            foreach (string img in images)
            {
                await _fileStorage.DeleteFile(img, "uploadedFiles");
            }
            return Ok("deleted");
        }


        [HttpDelete("{userID}/{QuestionID}")]
        public async Task<IActionResult> DeleteQuestion(int userID, int QuestionID)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int sessionId = Convert.ToInt32(sessionContent);

                if (sessionId == userID)
                {
                    Question QuestionFromDB = await _context.Questions.FirstOrDefaultAsync(q => q.ID == QuestionID);
                    if (QuestionFromDB != null)
                    {
                        _context.Questions.Remove(QuestionFromDB);
                        await _context.SaveChangesAsync();
                        return Ok(true);
                    }
                    return BadRequest("no such Question...");
                }
                return BadRequest("User not login");
            }
            return BadRequest("Empty session");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestion(int id)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");

            Question questToReturn = await _context.Questions.FirstOrDefaultAsync(u => u.ID == id);
            if (questToReturn != null)
            {
                Game gameToReturn = await _context.Games.FirstOrDefaultAsync(u => u.ID == questToReturn.GameID);

                if (string.IsNullOrEmpty(sessionContent) == false)
                {
                    int SessionID = Convert.ToInt32(sessionContent);
                    if (SessionID == gameToReturn.UserID)
                    {
                        gameToReturn.QuestList.RemoveAll(q=>q.ID == id);
                         await _context.SaveChangesAsync();//שמירת שינויים
                         return Ok(true);

                    }
                    else
                    {
                        return BadRequest("user not login");
                    }
                }
                else
                {
                    return BadRequest("empty Session");
                }
            }
            else
            {
                return BadRequest("question not found");
            }

        }


    }
}


