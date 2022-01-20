## Changes to one file in two branches

	HEAD
		When merging two branches with git, git attempts to reconcile the differences in the files on its own. When it is unable to do so, it flags the significant differences between changed files as conflicts. It is up to you or the person managing the repo to manually correct these conflicts before the merge can be completed.# gra-494-charity

If one file has been changed in more than one branch, attempting to merge those branches will cause a conflict in that file. This is because the branches have diverged from one another. Had the file only had changes in the new branch, git whould see these changes as a continuation of master. It then would have been able to "Fast-forward" and would not have created a conflict.

asdfasdfasdfasdf

		When merging two branches with git, git attempts to reconcile the differences in the files on its own. When it is unable to do so, it flags the significant differences between changed files as conflicts. It is up to you or the person managing the repo to manually correct these conflicts before the merge can be completed.
		merge-test
