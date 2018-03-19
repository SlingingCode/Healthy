using AutoMapper;
using Healthy.API.Controllers.Resources;
using Healthy.API.Models;

namespace Healthy.API.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Person, PersonResource>();
            CreateMap<ScaleResult, ScaleResultResource>(); //.ReverseMap();
            
        }        
    }
}