# LEARNING GIT'S COMMANDS BY GIT TERMINAL
#### Youtube: https://www.youtube.com/watch?v=UBAX-13g8OM

## COMMANDS
#### - git init: inicializa um repositório GIT vazio. E estamos dentro da nossa branch principal.
##### git init: initialize an empty GIT repository. And we already in our principal branch.

#### - git add: manda os arquivos para a área unstage, aguardando o COMMIT.
##### git add: send the files to unstage area, just waiting the COMMIT command for.
###### Example: git add Readme.md

#### - git status: mostra as alterações realizadas mas ainda não COMMITADAS.
##### git status: show the performed changes but they are not COMMITEDS yet.

#### - git commit -m "mensagem": commita as alterações e o -m é para criar uma mensagem descritiva.
##### git commit -m "message": execute the commit on the changed files and the "-m" allows to create a descritive message.

#### - git branch -M "main": mudando a branch "master" para "main"
##### git branch -M "main": changing from "master" to "main" branch

#### - git remote add origin <url>: "origin" é o nome que damos e "url" é o caminho no github
##### git remote add origin <url>: "origin" is the name that we give to the gitHub repository and the "url" is the path on the gitHub
###### Example: git remote add origin https://github.com/gustavohrjesus/estudos.git
###### É a conexão do repo local com o remoto, de nome "origin"
#### TIVEMOS PROBLEMA PARA EFETUAR O PUSH. Para isto, mudamos a url do "origin", conforme abaixo (by https://careerkarma.com/blog/git-fatal-remote-origin-already-exists/):
###### git remote set-url origin https://github.com/gustavohrjesus/estudos.git

#### - git push -u origin main: envia do repositorio local para o repositorio remoto (para o GitHub) 
##### git push -u origin main: sending from the local repository to the remote repository (to the GitHub)
#### TIVEMOS PROBLEMA PARA AUTENTICAR NO PUSH
##### $ git push -u origin main
#### remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
#### remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
#### fatal: Authentication failed for 'https://github.com/gustavohrjesus/estudos.git/'
#### SOLUÇÃO (by token):
##### https://medium.com/geekculture/how-to-change-your-github-remote-authentication-from-username-password-to-personal-access-token-64e527a766cf
##### https://blog.cod3r.com.br/autenticacao-no-github-pela-linha-de-comando/

#### PROBLEMA:
##### $ git add .
##### warning: adding embedded git repository: learningGit
##### hint: You've added another git repository inside your current repository.
##### hint: Clones of the outer repository will not contain the contents of
##### hint: the embedded repository and will not know how to obtain it.
##### hint: If you meant to add a submodule, use:
##### hint:
##### hint:   git submodule add <url> learningGit
##### hint:
##### hint: If you added this path by mistake, you can remove it from the
##### hint: index with:
##### hint:
##### hint:   git rm --cached learningGit
##### hint:
##### hint: See "git help submodule" for more information.

#### SOLUÇÃO:
##### $ git submodule add https://github.com/gustavohrjesus/estudos.git learningGit
##### git commit -m "First commit by CLI Git"
##### git branch -M main
##### git push -u origin main

#### EXCLUINDO SUBMODULO: (by https://stackoverflow.com/questions/21381530/cannot-remove-submodule-from-git-repo)
##### git rm --cached path/to/submodule
##### git commit -m "Removendo submodulo"
##### rm -rf path/to/submodule


# _**FLUXO NORMAL**_
1. git status
2. git add -A
3. git commit -m "Mensagem"
4. git push -u origin main

### Referências: :clap: :eyes: :muscle: :+1:
> [COMO USAR GIT E GITHUB NA PRÁTICA! - desde o primeiro commit até o pull request! 2/2 - Rafaella Ballerini](https://www.youtube.com/watch?v=UBAX-13g8OM)

> [Git and GitHub for Beginners Tutorial - Kevin Stratvert](https://www.youtube.com/watch?v=tRZGeaHPoaw&t=1457s)