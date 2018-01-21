using Healthy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Healthy.API.Persistence
{
    public class HealthyDbContext : DbContext
    {
        // EF 6 mode...
        // public HealthyDbContext(string connectionString): base(connectionString) { }

        public HealthyDbContext(DbContextOptions<HealthyDbContext> options): base(options) {
            
        }
        
        public DbSet<Person> Persons { get; set; }
        
    }
}