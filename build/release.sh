#!/usr/bin/env sh
set -e

VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION npm run build:lib

  # commit
  npm version $VERSION --message "release(release): $VERSION"
  # push
  git push origin refs/tags/v$VERSION
  # doc
  npm run log
  # npm run build:doc
  git add -A
  git commit -m "docs(docs): $VERSION"
  git push
  # publish
  npm publish --access=public
fi
