using Microsoft.EntityFrameworkCore;
using RBrasil_api.Models;


namespace RBrasil_api.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){ }

        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Destinos> Destinos { get; set; }
        public DbSet<Reserva> Reserva { get; set; }
    }
}
