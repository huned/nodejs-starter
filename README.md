# Huned's opinionated nodejs starter repository for lazy developers

Main repo: [https://github.com/huned/nodejs-starter](https://github.com/huned/nodejs-starter)

Use this repository as a template for your next node.js project.

## Installation

    Nothing here yet.

## Command Line Usage

    npm start --silent

  See `man TODO` for more.

## Node.js Usage

    git clone git@github.com:huned/nodejs-starter <DIRNAME> && cd <DIRNAME>

    # Edit .git/config to reflect a different repo location
    $EDITOR .git/config

    # Edit package.json to suit your needs and re-generate package-lock.json
    $EDITOR package.json
    npm install

    # Copy environment variables file and edit as needed.
    cp .env.sample .env && $EDITOR .env

    # Run tests
    npm test

    # Run command line utility
    npm start

## Library Choices:

These come installed:

* debug: better debug printing
* dotenv: for loading environment variables from `.env`
* mocha: for testing
* sinon: for mocking and stubbing
* standard: enforces standard js style

Use these as needed in projects:

* lodash: utility stuff
* meow: helper for command line programs
* node-fetch: making http requests
  * alternatively: got
* cheerio: parsing html
* puppeteer: web scraping via headless chromium
* get-stdin: getting input from stdin

## TODOs

- Make a checklist of things to do when starting a new project
  - clone repo
  - update .git/config
  - update package.json
  - npm update (manually update package versions?)
  - npm test
  - add notes for how to remove parts you don't want/need
    - cli
    - reading from .env
    - usage generator (a really good one)
- Make a starter CLI program
  - set package.json's bin property
  - meow for arguments
  - getStdin for reading stdin
  - debug for debug printing
  - man page (see https://gist.github.com/dominikwilkowski/cba6c8c6b1ded8d3e3cc6bf0b7ddc432)
- Add jsdoc
  - npm insall --save-dev jsdoc
  - document some items with good jsdoc that I can just adopt everywhere
- Convert to typescript?
- Add a CONTRIBUTING.md, CODE_OF_CONDUCT.md, LICENSE
- How to generate changelogs?
- remove .n-node-version

## Author(s)

* [Huned Botee](huned@hunedbotee.com)

## License

MIT
