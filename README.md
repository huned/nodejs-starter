# Huned's opinionated nodejs starter repository for lazy developers

Main repo: [https://github.com/huned/nodejs-starter](https://github.com/huned/nodejs-starter)

Use this repository as a template for your next node.js project.

## Installation

    Nothing here yet.

## Usage

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

## Command Line Usage

    npm start --silent

## Library Choices:

These come installed:

* colors: use colors at the terminal
* debug: better debug printing
* dotenv: for loading environment variables from `.env`
* mocha: for testing
* sinon: for mocking and stubbing
* standard: enforces standard js style

Use these as needed in projects. They're of reasonable quality.

* lodash: utility stuff
* meow: helper for command line programs
* numeral: number parsing and formatting
* moment: date/time parsing and formatting
* got: making http requests
* cheerio: parsing html
* puppeteer: web scraping via headless chromium
* pdfjs-dist: pdf parsing and rendering

## Author(s)

* [Huned Botee](huned@hunedbotee.com)

## License

MIT
