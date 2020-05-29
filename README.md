# Huned's opinionated nodejs starter repository for lazy developers

Main repo: [https://github.com/huned/nodejs-starter](https://github.com/huned/nodejs-starter)

The instructions below assume you're using MacOS and homebrew, but
should be easily adaptable to Linux systems.

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
* lodash: utility stuff
* dotenv: for loading environment variables from `.env`
* mocha: for testing
* sinon: for mocking and stubbing
* standard: enforces standard js style

Use these as needed in projects. They're of reasonable quality.

* numeral: number parsing and formatting
* moment: date/time parsing and formatting
* sequelize: orm
* pg: for sequelize
* pg-hstore: for sequelize
* bent: making http requests
* cheerio: parsing html
* puppeteer: web scraping via headless chromium
* pdfjs-dist: pdf parsing and rendering

## Author(s)

* [Huned Botee](huned@hunedbotee.com)

## License

MIT
