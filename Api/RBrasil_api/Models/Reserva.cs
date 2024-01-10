using System.ComponentModel.DataAnnotations;

namespace RBrasil_api.Models
{
    public class Reserva
    {
        [Key]
        public int Id { get; set; }
        public string Data_reserva { get; set; }
        public string Total_reserva { get; set; }

        public int UsuarioId { get; set; }
        public Usuarios Usuario { get; set; }
        public int DestinoId { get; set; }
        public Destinos Destino { get; set; }

    }
}
