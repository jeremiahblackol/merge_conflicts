In order to resolve a merge conflict with your text editor:

1) Go back to your main branch `git checkout main`
2) Pull down the most up to date changes on that main branch `git pull origin main`
3) Then, go back to your feature branch that you'd been working on when the merge conflict happened `git checkout <the-name-of-your-feature-branch>`
4) Merge the updates from the main branch into your feature branch `get merge main`

5) Carefully choose exactly what you want to keep and what you need to delete.  Triple check it.
6) Commit those changes
7) Push the feature branch up, it will update the already open PR and there should no longer be a merge conflict so you can review the PR and merge to main.
