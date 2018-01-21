using System;

namespace Healthy.API.Controllers.Resources
{
    public class ScaleResultResource
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }        
        public float Weight { get; set; }
        public float PercentageMuscles { get; set; }
        public float PercentageFat { get; set; }
        public float Bmi { get; set; }        
    }
}