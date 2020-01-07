cd %~dp0

set GIT_SSL_NO_VERIFY=true
git status
git add .
git commit -m "added new code"
git push -u origin master