# GIT Commands and Workflow - daily work

## Pull & Push
1. Get changes from remote repo
    - `git pull` (fetch and merge)    
    - `git fetch` (no merge)
2. Add changes in filesystem to staging (index), mark ready to commit
    - `git add .` to add all files in current folder
    - `git add filename.extension` to add one specific file
3. Commit staged files to local repo (versioned history) 
    - `git commit -m "Commit message"`
4. Push changes to remote repository
    - `git push`

# New Branch
1. `git branch mybranch` to create new local branch.     
2. `git checkout mybranch` to change to the new branch.  
3. `git push origin mybranch` to create remote branch. 
4. `git branch -u origin/mybranch` to change current HEAD branch (mybranch) to track the new remote branch.

You can also set upstream to new remote branch while pushing the first changes like this `git push --set-upstream origin mybranch`. This should also work with `-u`instead of `--set-upstream`.

# Random useful GIT commands
* Info about pending changes `git status`
* Get help about a command `git command --help`
* Make GIT aware of changes in filesystem. For example; remove directory and files (recursive) and make GIT aware `git rm -rv name`.    
If you don't write `git` in front of `rm`, GIT will not be aware of the changes. So you will have to do a `git add` afterwards, to add the changes you made to the filesystem.

# Random useful terminal commands

* Create directory `mkdir`
* Show hidden files in folder `ls -la`
