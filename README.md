# Hydra W3C Community Groups Meeting Minutes

This repository contains meeting minutes of the Hydra W3C Community
Group's bi-weekly conference calls.

More information about Hydra is available at http://www.hydra-cg.com/

## Adding meeting notes

1. Create a folder named using ISO date (for example `2018-11-12`)
1. Add `irc.log` file to the folder
1. Commit and submit PR
1. Updated site will be deployed to a PR-preview static page
1. Once merged, the updated site will be published

## Previewing meeting notes locally

1. Install nodejs and Jekyll
1. Add the `irc.log` file as described above
1. Generate HTML files from log

       find . -type f -name irc.log -exec node generate.js {} \;

1. Run jekyll

       jekyll serve
