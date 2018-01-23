using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Healthy.API.Controllers.Resources;
using Healthy.API.Models;
using Healthy.API.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Healthy.API.Controllers
{
    public class PersonsController : Controller
    {
        private readonly HealthyDbContext dbContext;
        private readonly IMapper mapper;

        public PersonsController(HealthyDbContext dbContext, IMapper mapper)
        {
            this.mapper = mapper;
            this.dbContext = dbContext;
        }

        [HttpGet("api/persons")]
        public async Task<IEnumerable<PersonResource>> GetPersons()
        {
            var persons = await dbContext.Persons.Include(p => p.ScaleResults).ToListAsync();
            return mapper.Map<List<Person>, List<PersonResource>>(persons);
        }        
    }
}