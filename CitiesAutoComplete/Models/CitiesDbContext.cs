using Microsoft.EntityFrameworkCore;

namespace CitiesAutoComplete.Models
{
    public class CitiesDbContext : DbContext
    {
        public DbSet<City> City { get; set; }


        public CitiesDbContext(DbContextOptions<CitiesDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<City>().ToTable("City");
        }
    }
}