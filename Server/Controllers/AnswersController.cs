using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nuts_Yarden_Irit_Shiran.Server.Data;
using Nuts_Yarden_Irit_Shiran.Server.Helpers;
using Nuts_Yarden_Irit_Shiran.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuts_Yarden_Irit_Shiran.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswersController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly FileStorage _fileStorage;

        public AnswersController(DataContext context, FileStorage fileStorage)
        {
            _context = context;
            _fileStorage = fileStorage;
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetAllGames(int id)
        {
            //מנסה לשלוף את המשחק לפי האיידי
            Question questToReturn = await _context.Questions.Include(u => u.QuestionAnswers).FirstOrDefaultAsync(u => u.ID == id);
            Game gameToReturn = await _context.Games.FirstOrDefaultAsync(u => u.ID == questToReturn.GameID);
            //אם קיים משחק באיידי הזה
            if (questToReturn != null)
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
                        //מחזיר למשתמש את המשחק
                        return Ok(questToReturn);

                    }
                    //אם זה לא השחקן המתאים
                    return BadRequest("User not login");
                }
                //אם אין שחקן בסשיין
                return BadRequest("Empty session");
            }
            //אם אין משחק
            return BadRequest("question not found");
        }
    }
}
