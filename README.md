# Huned's opinionated nodejs starter repository for lazy developers

Main repo: [https://github.com/huned/nodejs-starter](https://github.com/huned/nodejs-starter)

The instructions below assume you're using MacOS and homebrew, but
should be easily adaptable to Linux systems.

## Usage

Clone this repo, then:

    # You should use `n` to manage node versions.
    # Install `n` via `brew`.
    brew install n

    # Install node via `n`. Clobbers existing node installation in `/usr/local`.
    # Change the version of node by editing `.n-node-version`
    n install auto

    # Copy environment variables file to the right place.
    cp .env.sample .env

    # Run it
    npm test
    npm start

## Command Line Usage

This repo does not iclude a command line utility.

## Library Choices:

These come installed:

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
