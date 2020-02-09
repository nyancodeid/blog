#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn blog:build

# navigate into the build output directory
cd dist/

# if you are deploying to a custom domain
echo 'blog.nyandev.id' > CNAME

cd -

git add dist

echo "Commit message for gh-pages commit?"
read pagecommit

git commit -m 'deploy: $pagecommit'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git subtree push --prefix dist origin gh-pages

git add -A

echo "Commit message for gh-pages commit?"
read mastercommit
git commit -m 'update: $mastercommit'

# push master 
git push origin master