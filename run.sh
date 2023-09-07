#!/usr/bin/env bash


git submodule update --init --recursive
./js2bookmark/js2bookmark.js script.js > bookmark_link.txt
cat bookmark_link.txt | pbcopy
echo "Link text saved to bookmark_link.txt & copied to clipboard."
echo "Ready to paste."
