# Starting a new project, using .NET Core WebApi, Angular and Git

## Generate application
In the examples the application is named *Healthy*

### Generate new Angular application
    ng new Healthy.Web -si -sg --style scss --routing true

### Generate new .NET Core Web API project
    dotnet new webapi -n Healthy.API

### Add .gitignore
You can generate a .gitignore file at https://www.gitignore.io/     
Just add `VisualStudioCode`, `Angular` and `ASPNETCore` and hit the create button, and you will have a nice .gitignore generated for you.

## GIT Commands and Workflow - for new project

### Create repos
#### Create a repo manually in GitHub
Go to https://github.com/SlingingCode and select "create new repo"
#### Create a local repo
    git init

#### Link local repo to github repo
    git remote add origin https://github.com/SlingingCode/Healthy.git

#### First push to repo
    git push -u origin master --tags

***

## GIT Commands and Workflow - for existing project

### Get changes from remote repo
    git pull (fetch and merge)`
    git fetch (no merge)`

### Add changes in filesystem to staging (index), mark ready to commit
    git add .
    git add filename.extension

### Commit staged files to local repo (versioned history)
    git commit -m "Commit message"

***

## Random useful GIT commands
#### Info about pending changes
    git status

#### Get help about a command
    git command --help

#### Remove directory and files (recursive) and make GIT aware
    git rm -rv name
If you don't write *git* in front of *rm*, you will have to do a "*git add*" afterwards, to add the changes you made to the filesystem.

***

## Random useful terminal commands

#### Create directory
    mkdir

#### Show hidden files in folder
    ls -la