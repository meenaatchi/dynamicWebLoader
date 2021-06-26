<#
Powershell Script to upload in GitHub Dynamically

Script created by Meenaatchi

#>
#Current script path
$scriptPath = Split-Path -parent $MyInvocation.MyCommand.Path
$scriptPath

#Import-Module PowerShellForGitHub

#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

cd $scriptPath


echo "# dynamicWebLoader" >> README.md

git init

git add README.md

git add .

git commit -m "first commit"

git branch -M master

git remote add origin https://github.com/meenaatchi/DjangoQuizProject.git

git push -u origin master



