using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Healthy.API.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<ScaleResult> ScaleResults { get; set; }

        public Person()
        {
            ScaleResults = new Collection<ScaleResult>();            
        }
        
    }
}