using System.Collections.Generic;
using System.Collections.ObjectModel;
using Healthy.API.Models;

namespace Healthy.API.Controllers.Resources
{
    public class PersonResource
    {
        public int Id { get; set; }
        public string FirstName { get; set; }        
        public string LastName { get; set; }
        public string ImageUrl { get; set; }
        public bool IsPublic { get; set; }
        public string Motto { get; set; }
        public ICollection<ScaleResultResource> ScaleResults { get; set; }

        public PersonResource()
        {
            ScaleResults = new Collection<ScaleResultResource>();            
        }
    }
}