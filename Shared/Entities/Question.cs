using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuts_Yarden_Irit_Shiran.Shared.Entities
{
    public class Question
    {
        public int ID { get; set; }

        public string QuestText { get; set; }

        public string QuestImg { get; set; }

        public List<Answer> QuestionAnswers { get; set; }

        public int GameID { get; set; }

        public Game QuestionGame { get; set; }
    }
}
