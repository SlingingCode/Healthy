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
