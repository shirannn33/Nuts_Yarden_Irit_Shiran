using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Nuts_Yarden_Irit_Shiran.Server.Data;
using Nuts_Yarden_Irit_Shiran.Shared.Entities;
//מקבלת איי די של העורך
//האם קיים הסשן
//האם הסשן תואם לאיי די שקיבלנו
//האם המשתמשת קיימת בבסיס הנתונים
//שולפת את המשחקים של העורך
namespace TriangleProject_Sunny.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : Controller
    {
        private readonly DataContext _context;
        public GamesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetAllGames(int userId)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int sessionId = Convert.ToInt32(sessionContent);
                if (sessionId == userId)
                {
                    User userToReturn = await _context.Users.Include(u => u.UserGames).FirstOrDefaultAsync(u => u.ID == userId);
                    if (userToReturn != null)
                    {
                        return Ok(userToReturn);
                    }
                    return BadRequest("User not found");
                }
                return BadRequest("User not login");
            }
            return BadRequest("Empty session");
        }
        [HttpPost("Update")]
        public async Task<IActionResult> UpdateGame(Game gameToAdd)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");

            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int SessionID = Convert.ToInt32(sessionContent);
                if (SessionID == gameToAdd.UserID)
                {
                    User UserFromDB = await _context.Users.Include(u => u.UserGames).FirstOrDefaultAsync(u => u.ID == gameToAdd.UserID);

                    if (UserFromDB != null)
                    {
                        Game oldGame = UserFromDB.UserGames.Where(w => w.ID == gameToAdd.ID).FirstOrDefault();
                        if (oldGame != null)
                        {
                            oldGame.GameTime = gameToAdd.GameTime;
                            oldGame.GameName = gameToAdd.GameName;
                            oldGame.Ispublished = gameToAdd.Ispublished;

                        }
                        else
                        {
                            return BadRequest("game not found");
                        }

                        await _context.SaveChangesAsync();//שמירת שינויים

                        return Ok(gameToAdd);
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

        [HttpDelete("{userID}/{gameID}")]
        public async Task<IActionResult> DeleteGame(int userID, int gameID)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int sessionId = Convert.ToInt32(sessionContent);

                if (sessionId == userID)
                {
                    Game GameFromDB = await _context.Games.FirstOrDefaultAsync(g => g.ID == gameID);
                    if (GameFromDB != null)
                    {
                        _context.Games.Remove(GameFromDB);
                        await _context.SaveChangesAsync();
                        return Ok(true);
                    }
                    return BadRequest("Game not found");
                }
                return BadRequest("User not login");
            }
            return BadRequest("Empty session");
        }

        [HttpPost("publish")]
        public async Task<IActionResult> PublishGame(Game gameToPublish)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int sessionId = Convert.ToInt32(sessionContent);
                if (sessionId == gameToPublish.UserID)
                {
                    Game GameFromDB = await _context.Games.FirstOrDefaultAsync(g => g.ID == gameToPublish.ID);
                    if (GameFromDB != null)
                    {
                        GameFromDB.Ispublished = gameToPublish.Ispublished;
                        await _context.SaveChangesAsync();
                        return Ok(GameFromDB);
                    }
                    return BadRequest("Game not found");
                }
                return BadRequest("User not login");
            }
            return BadRequest("Empty session");
        }


        [HttpPost]
        public async Task<IActionResult> AddGame(Game gameToAdd)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");

            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int SessionID = Convert.ToInt32(sessionContent);
                if (SessionID == gameToAdd.UserID)
                {
                        User UserFromDB = await _context.Users.Include(u => u.UserGames).FirstOrDefaultAsync(u => u.ID == gameToAdd.UserID);
                    
                    if (UserFromDB != null)
                    {   
                            UserFromDB.UserGames.Add(gameToAdd);
                        await _context.SaveChangesAsync();//שמירת שינויים

                        gameToAdd.GameCode = gameToAdd.ID+100;
               
                        //יצירת קוד המשחק
                        // בשלב זה המשתנה
                        //gameToAdd
                        //מסונכרן עם בסיס הנתונים ויש למשחק
                        //ID

                        await _context.SaveChangesAsync();//שמירת שינויים

                        return Ok(gameToAdd);
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
        //[HttpGet("{userIdClient}")]

        //public async Task<IActionResult> GetAllGames(int userIdClient)//מתייחס לאותו פרמטר שקיבלנו
        //{
        //    string sessionContent = HttpContext.Session.GetString("UserId");//מתייחס לסשן 
        //    if (string.IsNullOrEmpty(sessionContent) == false)
        //    {
        //        int SessionID = Convert.ToInt32(sessionContent);
        //        if (SessionID == userIdClient)//האם המשתמש קיים בבסיס הנתונים
        //        {
        //            User UserFromDB = await _context.Users.Include(u => u.UserGames).FirstOrDefaultAsync(u => u.ID == userIdClient);
        //            if (UserFromDB != null)//בדיקה שלישית
        //            {
        //                return Ok(UserFromDB);
        //            }
        //            else
        //            {
        //                return BadRequest("user not found");
        //            }
        //        }
        //        else//אם האיי די לא תואם לסשן
        //        {
        //            return BadRequest("user not login");
        //        }
        //    }
        //    else
        //    {
        //        return BadRequest("empty Session");
        //    }
        //}


        [HttpGet("byCode/{gameCodeFromClient}")]//שליפת משחק ובדיקות
        public async Task<IActionResult> GetGameByCode(int gameCodeFromClient)
        {
            Game GameFromDb = await _context.Games.Include(q => q.QuestList).ThenInclude(a => a.QuestionAnswers).FirstOrDefaultAsync(g => g.GameCode == gameCodeFromClient);//לולאה שעוברת על כל המשחקים עד שמוצאת שעונה על התנאי
            if (GameFromDb != null)
            {
                if (GameFromDb.Ispublished == true)//אם המשחק פורסם
                {
                    return Ok(GameFromDb);//נחזיר את אותו משחק
                }
                else
                {
                    return BadRequest("game not publish");
                }
            }
            else
            {
                return BadRequest("game not found");
            }
        }

        [HttpGet("byId/{gameIdFromClient}")]//שליפת משחק ובדיקות
        public async Task<IActionResult> GetGameById(int gameIdFromClient)
        {
            Game GameFromDb = await _context.Games.Include(q => q.QuestList).ThenInclude(a => a.QuestionAnswers).FirstOrDefaultAsync(g => g.GameCode == gameIdFromClient);//לולאה שעוברת על כל המשחקים עד שמוצאת שעונה על התנאי
            if (GameFromDb != null)
            {
                return Ok(GameFromDb);//נחזיר את אותו משחק
            }
            else
            {
                return BadRequest("game not found");
            }
        }
    }
}
