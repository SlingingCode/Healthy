# Markus Notes to self

## Line ending problems
For example:  
`warning: CRLF will be replaced by LF in Healthy.API/obj/project.assets.json.
The file will have its original line endings in your working directory.`

### Solution to line ending poroblems

Mac: `$ git config --global core.autocrlf input`  
PC: `$ git config --global core.autocrlf true`

Solution source:  
https://stackoverflow.com/questions/5834014/lf-will-be-replaced-by-crlf-in-git-what-is-that-and-is-it-important
  
    
## .gitignore content generator
 https://www.gitignore.io/api/angular,aspnetcore,visualstudiocode