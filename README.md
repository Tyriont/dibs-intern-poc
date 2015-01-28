Testing intern...

```sh
clone repo
$ cd dibs-intern
$ npm install
$ ./node_modules/.bin/intern-runner config=tests/intern-local (if running locally.  Must have selenium server running)
$ SAUCE_USERNAME=<sauce user name> SAUCE_ACCESS_KEY=<sauce access key> ./node_modules/.bin/intern-runner config=tests/intern-saucelabs.js (if using SauceLabs)
```