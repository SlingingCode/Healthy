using System;

namespace Healthy.API.Models
{
    public class ScaleResult
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }        
        public float Weight { get; set; }
        public float PercentageMuscles { get; set; }
        public float PercentageFat { get; set; }
        public float Bmi { get; set; }
        public Person Person { get; set; }
        public int PersonId { get; set; }              
                
    }
}