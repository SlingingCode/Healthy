using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Healthy.API.Persistence;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Healthy.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {            
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {            
            services.AddAutoMapper();
            services.AddCors();
            // services.AddDbContext<HealthyDbContext>(options => options.UseSqlServer(Configuration["ConnectionStrings:Default"]));
            services.AddDbContext<HealthyDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Default")));
            Console.Write(Configuration.GetConnectionString("Default"));
            
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(options => options.WithOrigins("http://localhost:4200", "http://localhost:4201"));
            // .AllowAnyOrigin()
            // .AllowAnyMethod()
            // .AllowAnyHeader()
            // .AllowCredentials()
                

            app.UseMvc();
        }
    }
}
