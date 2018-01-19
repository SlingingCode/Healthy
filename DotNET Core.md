# .NET Core commands
Run application `dotnet run`


# Tips
## Set .NET Core Enviroment on machine level.
On Mac, go to your users home folder with command `cd --` and open .bash_profile for Bash or .zshrc for Zsh or your config for whatevr shell you are using.  
Add line `export ASPNETCORE_ENVIRONMENT=Development`.
You should have this on your dev machine for hot reloading.

## Add .NET Watch Tool, for Hot reloading from serverside!
Recompile the application (backend code) and restart the server automatically. Smooth development experience, just like frontendcoding!  
You can find it at https://github.com/aspnet/DotNetTools  
Install it from terminal with `dotnet install tool dotnet-watch` or add it manully to your .csproj file. 

    <ItemGroup>
        <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="2.0.0" />        
    </ItemGroup>

Check what the current version is at https://www.nuget.org/packages/Microsoft.DotNet.Watcher.Tools/ 
Don't forget to run `dotnet restore` after, to restore the nuget packages.

Make sure it works with `dotnet watch`
When you want to use it (all the time) start it with `dotnet watch run`