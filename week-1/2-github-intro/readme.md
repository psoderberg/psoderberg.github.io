[Week 1 Home](../)

# Introduction to Version Control, git, and GitHub

## Learning Competencies
By the end of this lesson, you should be able to:
- Navigate repositories in GitHub
- Compare git and GitHub
- Explain what version control is and does

## Summary
Web Developers use tools to track their progress and create backups. GitHub is a popular platform for doing this, especially in the open source community. In this introduction, we want to introduce you to GitHub so you don't feel lost when working through the material.

## Releases

## Release 0: GitHub Vocabulary

#### Repositories
You know how you make folders on your computers? In each folder, you can have other folders or files. A GitHub repository is essentially the same as a folder on your computer, except that it's on the web. It can have folders and files. If you take a look at [phase-0-unit-1](../../), you'll see three folders (week-1, week-2, and week-3) listed at the top, and a file called "readme.md." Github displays readme files on the main page of a repository by default.

![repository-main](../imgs/repository-main.png)

From the main page of a repository, click on the appropriate link to access that week's curriculum. You've already proved you've made it to week-1 by navigating to and reading this challenge.

The readme in each directory will be the main source of instructions that will direct you through the curriculum. Make sure to read all the instructions carefully. If you have questions on instructions, post them in the google+ community.

Challenges will be contained in directories or individual files. You can determine the order of the challenges in two ways:
  1. The readme lists the challenges in order.
  2. The challenges are numbered in the order needed to complete them in the section where directories and files are displayed (above the readme).

Don't overthink the web version of github too much. It's a very similar structure to a computer's file structure you already know.

#### Branches
Instructions for current curriculum (i.e. the unit you are currently in) is stored on the master branch (i.e. main, working branch) of each Phase 0 repository. When Unit 1 is over, we will make a branch that will be a record of the final state of the unit curriculum.

![repository-branches](../imgs/repository-branches.png)

#### Commits

![repository-commits-1](../imgs/repository-commits-1.png)

Commits are records of changes. It's kind of like saving your work, only you get to associate your changes with a message. The great thing about git is that you can revert back to any previous commit. So say I'm working on a project and accidentally delete a directory that I didn't mean to, and I commit the change and push it to the master branch. Major oops in programs like Microsoft Word or Excel. But GitHub is great, because I can just go back to the previous commit. Because you may have to do this, it's good to commit early and often.

![repository-commits-2](../imgs/repository-commits-2.png)

## Release 1: What is git?

GitHub uses git for version control. Go through the following resources to learn a bit about verson control and git.

- Read: [Version Control](http://skillcrush.com/2013/02/11/version-control/)
- Read: Skillcrush's Git Series [Git](http://skillcrush.com/2013/02/18/git/) and [Getting Started with Git](http://skillcrush.com/2013/02/20/get-started-working-with-git/)
- Watch: [Git 3 Minute Primer](http://www.youtube.com/watch?v=_Jmkvv_nKTE)

## Release 2: Git vs. GitHub

Confused about the difference between git and GitHub? Try one of these articles:

- [Git vs. GitHub for Dummies](http://stephaniehoh.github.io/blog/2013/10/07/git-vs-github-for-dummies/)
- [Is Git the same as GitHub?](http://www.jahya.net/blog/?2013-05-git-vs-github)

## Release 3: Fork this Repository
NOTE: I'm sure you've chosen an excellent and memorable username for GitHub, so don't forget it! When you see "[USERNAME]" in this guide, replace it with your username. For example, my username is "mbtomori".  So "github.com/**[USERNAME]**" becomes "github.com/**mbtomori**".

Now that you can navigate GitHub and know a bit about version control, git, and GitHub, it's time to get your own personal copy of the curriculum!

Click the "Fork" button at the top right of this page.

![Repo to Fork](../imgs/repo-to-fork.jpg)

This will make a copy of the unit 1 curriculum repository into your personal GitHub account. This will be where you add reflections and your challenge code. After you click fork, you should be taken from the Devbootcamp.com/phase-0-unit-1 repo to [USERNAME]/phase-0-unit-1.

![Forked Repo](../imgs/forked-repo.jpg)

Finally, you will need to enable issues as a feature so other students can leave you feedback.

![Enable Issues](../imgs/enable-issues.png)

**Please note** Your repository will be private by default. That is intentional. But others in Phase 0 will have access to see your code and will be able to give you feedback because you are all on the same team (and have issues enabled). Please do not make your repository public.


## Release 4: Reflection
Reflecting is essential for solidifying your learning. You will be expected to complete a reflection for each challenge in Phase 0. It will help you learn how you learn, give opportunities for sharing resources, and help your instructors gauge your progress. Reflections are for you, but they will also be read by others, so make sure to write for an audience.

**Writing reflections for each challenge is mandatory.**

Reflect on your learning in this challenge by editing the my_reflection.md file in the [2_github_intro](./) folder (the folder you are in). You will be learning HTML this week, but these files have a `.md` extension. Do you know what that stands for? It stands for markdown, which is a text-to-HTML conversion tool.  If you would rather write in HTML, you can do that by changing the file extension from .md to .html.

You can complete the first challenge reflections on github.com. Click on the my_reflection.md file in this folder. There should be a button to edit (it looks like a pencil) at the top. Click it. You'll add your reflection in markdown and write a commit message under "Commit changes" to describe the changes you made. Once you type something there, you will want to click the "commit changes" button. **NOTE: It will not let you commit changes without a commit message.**

![Editing Reflection](../imgs/adding-reflection.jpg)

Once you press "commit changes," your new file should be automatically visible on your www.github.com/[USERNAME]/phase-0-unit-1 directory.

After you learn how to edit files locally and push your changes (in the next challenge), you'll want to read and edit all files on your local `phase-0-unit-1` repository--more on that later.


