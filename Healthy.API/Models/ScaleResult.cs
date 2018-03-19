using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Healthy.API.Models
{
    [Table("ScaleResults")]
    public class ScaleResult
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }        
        public float Weight { get; set; }
        public float PercentageMuscles { get; set; }
        public float PercentageFat { get; set; }
        public float PercentageFatViscal { get; set; }
        public float Bmi { get; set; }
        [Required]
        public Person Person { get; set; }
        public int PersonId { get; set; }              
                
    }
}