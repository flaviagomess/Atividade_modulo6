using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;


namespace RBrasil_api.Models
{
    public class Usuarios
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        [JsonIgnore]
        public List<Reserva> Reserva { get; set; }

    }
}
