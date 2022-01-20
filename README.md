# Getting Started

Welcome to this basic HTML5 and Repository/Version Control starters guide.

## What is in a Read Me?

For more info on the purpose of a README.ms file and best practices, check out [this resource](https://www.makeareadme.com/). You can also check [here](https://www.markdownguide.org/basic-syntax/) for basic markdown syntax. Markdown is the industry standard language for writing a README file.

## Getting Started Next Steps

* Choose a google font of your choice and add to your project following [these guidelines](https://fonts.google.com/knowledge/using_type/using_web_fonts).
* Add a second google font. Set one as the default font for header elements and the other for all other text. For those of you without prior HTML experience, [this cheat sheet](https://htmlcheatsheet.com/) is a good resource.
* Add a reset style sheet to your project. Some good starting options are [reset css](https://meyerweb.com/eric/tools/css/reset/) and [normalize.css](https://necolas.github.io/normalize.css/). You can read about the consept behind and purpose of a reset style sheet [here](https://cssdeck.com/blog/what-is-a-css-reset/).

## Changes to one file in two branches

When merging two branches with git, git attempts to reconcile the differences in the files on its own. When it is unable to do so, it flags the significant differences between changed files as conflicts. It is up to you or the person managing the repo to manually correct these conflicts before the merge can be completed.

If one file has been changed in more than one branch, attempting to merge those branches will cause a conflict in that file. This is because the branches have diverged from one another. Had the file only had changes in the new branch, git whould see these changes as a continuation of master. It then would have been able to "Fast-forward" and would not have created a conflict.

## Changes to one file in two branches

When merging two branches with git, git attempts to reconcile the differences in the files on its own. When it is unable to do so, it flags the significant differences between changed files as conflicts. It is up to you or the person managing the repo to manually correct these conflicts before the merge can be completed.# gra-494-charity

If one file has been changed in more than one branch, attempting to merge those branches will cause a conflict in that file. This is because the branches have diverged from one another. Had the file only had changes in the new branch, git whould see these changes as a continuation of master. It then would have been able to "Fast-forward" and would not have created a conflict.
