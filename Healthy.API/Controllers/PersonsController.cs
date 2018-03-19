using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Healthy.API.Controllers.Resources;
using Healthy.API.Models;
using Healthy.API.Persistence;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Healthy.API.Controllers
{    
    [EnableCors("AllowLocalhost")]
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
        public async Task<IActionResult> GetPersons()
        {            
            var persons = await dbContext.Persons.Include(p => p.ScaleResults).ToListAsync();
            List<PersonResource> personResources = mapper.Map<List<Person>, List<PersonResource>>(persons);
            return Ok(personResources);
        }

        [HttpPut("api/person/{id}")]        
        public async Task<IActionResult> UpdatePerson(int id, [FromBody]PersonResource personChanged)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            Person personInDb = await dbContext.Persons.SingleOrDefaultAsync(p => p.Id == id);
            
            if(personInDb == null)
            {
                return NotFound();
            }

            personInDb.FirstName = personChanged.FirstName;
            personInDb.LastName = personChanged.LastName;
            personInDb.Motto = personChanged.Motto;
            personInDb.ImageUrl = personChanged.ImageUrl;
            personInDb.IsPublic = personChanged.IsPublic;
            
            dbContext.SaveChanges();
            
            return Ok(personInDb);
        }

        [HttpPost("api/addscaleresult/person/{id}/")]        
        public async Task<IActionResult> AddScaleResult(int id, [FromBody]ScaleResultResource newScaleResultResource)
        {            
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            Person personInDb = await dbContext.Persons.SingleOrDefaultAsync(p => p.Id == id);
            
            if(personInDb == null)
            {
                return NotFound();
            }
            
            ScaleResult newScaleResult = new ScaleResult() {                
                Date = TimeZoneInfo.ConvertTimeFromUtc(newScaleResultResource.Date, TimeZoneInfo.Local),// System.DateTime.Now,
                Weight = newScaleResultResource.Weight,
                PercentageMuscles = newScaleResultResource.PercentageMuscles,
                PercentageFat = newScaleResultResource.PercentageFat,
                PercentageFatViscal = newScaleResultResource.PercentageFatViscal,
                Bmi = newScaleResultResource.Bmi,
                PersonId = id
            };

            personInDb.ScaleResults.Add(newScaleResult);
            await dbContext.SaveChangesAsync();            
            
            ScaleResultResource res = mapper.Map<ScaleResult, ScaleResultResource>(newScaleResult);
            
            return Ok(res);
        }    
        
    }
}