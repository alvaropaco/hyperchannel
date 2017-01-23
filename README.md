[![Build Status](https://travis-ci.org/67P/hyperchannel.svg)](https://travis-ci.org/67P/hyperchannel)

# Hyperchannel (pre-alpha!)

**Hyperchannel** is the unhosted client application of the
[Kosmos](https://kosmos.org) project. It is based on
[Ember.js](http://emberjs.com), connecting to IRC/XMPP/etc. via
[Sockethub](http://sockethub.org) (WebSockets + ActivityStreams), and
optionally syncing configuration and user data via
[remoteStorage](https://remotestorage.io) (Webfinger + OAuth + CORS + REST).

Hyperchannel is not yet ready for public use, but contributions are very
welcome. If you know JavaScript, and ideally even have experience with
Ember.js, it is easy to hack on any feature imaginable. Check the [GitHub
issues](https://github.com/67P/hyperchannel/issues) to find things you could
start implementing right away.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Sockethub](http://sockethub.org/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`

### Libsass Bindings

You might need to manually execute:

    node node_modules/broccoli-sass/node_modules/node-sass/scripts/install.js

## Running / Development

* `npm start`
* Visit the app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

Caveat: when running the model generator, make sure to adjust the unit test to
not use moduleForModel, as we're not using Ember Data. See existing tests.

### Running Tests

* `npm test`
* `npm test -- --server` (will re-run on saving files)

### Building

(Not yet used.)

* `npm build` (development)
* `npm build --environment production` (production)

### Deploying

[TODO]

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## House Rules

[Contributor Code of Conduct](http://contributor-covenant.org/version/1/2/0/) (TL;DR: Be excellent to each other.)