using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;



namespace RBrasil_api.Models
{
    public class Destinos
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public float Preco { get; set; }

        [JsonIgnore]
        public List<Reserva> Reserva { get; set; }

    }
}
