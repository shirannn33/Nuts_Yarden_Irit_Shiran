using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuts_Yarden_Irit_Shiran.Client.Shared.Entities
{
    public class Answer
    {
        public int ID { get; set; }
        public string newanswer { get; set; }
        public string Type { get; set; }

        public bool Iscorrect { get; set; }

        public int QuestionID { get; set; }

        public Question AnswerQuestion { get; set; }
    }
}
