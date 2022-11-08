using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Nuts_Yarden_Irit_Shiran.Shared.Entities
{
    public class Game
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "נא להזין שם למשחק")]
        public string GameName { get; set; }
        public bool Ispublished { get; set; }
        public int GameTime { get; set; }
        public int GameCode { get; set; }
        public List<Question> QuestList { get; set; }

        public int UserID { get; set; }
        public User GameUser { get; set; }
    }
}
