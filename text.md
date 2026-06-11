Here's the workflow from a clean clone of your repo to a deployed PR. I'm assuming the patch file is sitting in your `~/Downloads` folder — adjust the path if it's somewhere else.

## Step 1 — Get your repo on the latest main

```bash
cd ~/path/to/portfolio        # wherever you cloned it
git checkout main
git pull origin main
```

## Step 2 — Create the branch

```bash
git checkout -b portfolio-improvements
```

## Step 3 — Apply the patch

```bash
git am ~/Downloads/portfolio-improvements.patch
```

This replays all four commits with their original messages onto your branch. Run `git log --oneline -5` to confirm you see the four new commits on top of your main.

**If `git am` errors out** (usually whitespace or line-ending issues), fall back to:

```bash
git am --abort                                          # only if it half-applied
git apply ~/Downloads/portfolio-improvements.patch
git add src/
git commit -m "Portfolio improvements: impact stats, Helm + Clouddley features, availability banner"
```

That collapses them into one commit instead of four, which is fine.

## Step 4 — Verify locally

```bash
yarn install        # or: npm install
yarn start          # or: npm run start
```

Opens at `http://localhost:3000`. Check:
- Home: green availability badge above your name, "By The Numbers" section below the hero
- Work tab: Helm Documentation Contributions appears first under Projects
- About: first paragraph ends with the 80% line

Then build to catch anything `start` might tolerate:

```bash
yarn build          # or: npm run build
```

## Step 5 — Push and open a PR

```bash
git push -u origin portfolio-improvements
```

GitHub will print a "Compare & pull request" URL in the output — click it, or go to `https://github.com/FaithKovi/portfolio/pulls` and open the PR against `main`. Once you merge, your existing GitHub Actions deploy should pick it up automatically.

## If something goes sideways

To wipe the branch and start over:

```bash
git checkout main
git branch -D portfolio-improvements
```

Then run Step 2 again. Your `main` is untouched throughout — none of this can break the live site until you merge the PR.

Want me to also write the PR description for you?