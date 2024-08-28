#!/bin/bash

REVISION=$(git rev-parse --short=5 HEAD)
BRANCH=$(git rev-parse --abbrev-ref HEAD)
LAST_COMMIT_DATE=$(git log -1 --format=%cd --date=iso-strict)

cat <<EOF > revision.json
{
  "revision": "$REVISION",
  "branch": "$BRANCH",
  "lastCommitDate": "$LAST_COMMIT_DATE"
}
EOF