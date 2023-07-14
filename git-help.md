- open your git repo to clone ( https://xxxx/repoName.git )

    ' git clone " https://xxxx/repoName.git" '

- checkout to the required branch - default branch is master

- move into the cloned git repo (repoName)

- cd repoName

<!-- updating the changeds to git -->

- To stage / add all the changes to git
    `git add .` <!--  to add all the chnges in current local git repo  -->
    `git add filename`  <!--  to add only one file "filename" -->
- To commit the staged / added changes 
    `git commit -m "custom message" `
- To push the commit to remote( cloud )
    `git push `