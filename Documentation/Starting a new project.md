# Starting a new project, using .NET Core WebApi, Angular and Git
In the following examples the application is named *Healthy* and the GitHub account is named *SlingingCode*.

## Generate new Angular application
`ng new Healthy.Web -si -sg --style scss --routing true` to generate a new Angular app using Angular CLI.

## Generate new .NET Core Web API project
`dotnet new webapi -n Healthy.API` to generate a new Web APi using .NET CLI.

## Add .gitignore file to project
You can generate a .gitignore file at https://www.gitignore.io/     
Just add `VisualStudioCode`, `Angular` and `ASPNETCore` and hit the create button, and you will have a nice .gitignore generated for you.

## Set up source control with GIT on GitHub

### Create a remote repo manually in GitHub
Go to https://github.com/SlingingCode and select "create new repo".
### Create a local repo
`git init` from terminal to create a local git repository in current folder.

### Link local repo to github repo
`git remote add origin https://github.com/SlingingCode/Healthy.git`

### First push to repo (master branch)
`git push -u origin master --tags` to push to- and track the master branch.
