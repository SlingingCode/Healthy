# Setting up EF Core

In a clean project (generated with dotNET CLI) make a new folder in the Healthy.API folder with command  `mkdir Models` and add some models there.

Add packages    
`dotnet add package Microsoft.EntityFrameworkCore.SqlServer`
`dotnet restore`

Open csproj file, Healthy.API.csproj and make sure `<PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="2.0.1" />` has been added as below.

Also add EF Core Tools by adding this    
`<DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools" Version="2.0.1" />`  
and this      
`<DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="2.0.1" />`   
as shown below. Check latest versions at Nuget.

https://www.nuget.org/packages/Microsoft.VisualStudio.Web.CodeGeneration.Tools/
https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Tools/
https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Tools.DotNet/

    <ItemGroup>
        <PackageReference Include="Microsoft.AspNetCore.All" Version="2.0.5" />
        <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="2.0.1" />
    </ItemGroup>

    <ItemGroup>
        <DotNetCliToolReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Tools" Version="2.0.2" />
        <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools" Version="2.0.1" />
        <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="2.0.1" />
    </ItemGroup>

## When you need help
Ask dotnet CLI built in help. For example if you want help about migrations type `dotnet ef migrations --help`

## Create DB Context
Create a dbContext class like this
    public class HealthyDbContext : DbContext
    {
        // EF 6, so brownfield...
        // public HealthyDbContext(string connectionString): base(connectionString) { }

        // .NET Core
        public HealthyDbContext(DbContextOptions<HealthyDbContext> options): base(options) { }
        
        // Add DbSet(s) for the model(s)
        public DbSet<Person> Persons { get; set; }
    }

## Create Connection string
Add the following to appsettings.json
    "ConnectionStrings": {
        "Default" :  "server=localhost; database=healthy; user id=sa; password=P@ssw0rd!"
    },

## Migrations
Add a first migration `dotnet ef migrations add InitialModel`, remember to have SQLServer running in a docker container. If you don't have it up and running yet, fire up a new terminal instance and start it with `docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=P@ssw0rd' -p 1433:1433 -d microsoft/mssql-server-linux`.     
If you ever need to remove a migration, `dotnet ef migrations remove` removes the last migration (not yet applied to database).     
To push the changes to the database, `dotnet ef database update`.   
You can also rollback the database to a specific migration, `dotnet ef database update MigrationName` or 0 instead of *MigrationName* to rollback to inital state.

