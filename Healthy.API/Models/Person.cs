using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Healthy.API.Models
{
    [Table("Persons")]
    public class Person
    {
        public int Id { get; set; }
        [Required]
        [StringLength(255)]        
        public string FirstName { get; set; }
        [Required]
        [StringLength(255)]        
        public string LastName { get; set; }
        [Required]        
        public bool IsPublic { get; set;}
        
        [StringLength(255)]
        public string ImageUrl { get; set; }
        [StringLength(255)]        
        public string Motto { get; set; }        

        public ICollection<ScaleResult> ScaleResults { get; set; }


        public Person()
        {
            ScaleResults = new Collection<ScaleResult>();            
        }
        
    }
}