using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nuts_Yarden_Irit_Shiran.Shared.Entities;
using Nuts_Yarden_Irit_Shiran.Server.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuts_Yarden_Irit_Shiran.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{mail}")]
        public async Task<IActionResult> LoginUser(string mail)
        {
            User userToReturn = await _context.Users.FirstOrDefaultAsync(u => u.Email.ToLower() == mail.ToLower());
            if (userToReturn != null)
            {
                HttpContext.Session.SetString("UserId", userToReturn.ID.ToString());
                return Ok(userToReturn.ID);
            }
            return BadRequest("User not found");
        }


    }
}
