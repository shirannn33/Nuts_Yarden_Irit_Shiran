using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Nuts_Yarden_Irit_Shiran.Shared.Entities;

namespace Nuts_Yarden_Irit_Shiran.Server.Data
{
    public class DataContext : DbContext

    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Answer> Answers { get; set; }

    }
}
