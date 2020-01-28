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
