#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn blog:build

# navigate into the build output directory
cd docs/

# if you are deploying to a custom domain
echo 'blog.nyandev.id' > CNAME

cd -

git add -A
git commit -m 'deploy: blog'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:nyancodeid/blog.git master
