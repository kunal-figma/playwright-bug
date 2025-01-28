# Description

Playwright doesn't allow me to serve gzip compressed content to the browser via the `routeFromHAR` functionality. Whenever I attempt to serve gzip compressed Javascript, I get an "Unexpected syntax error" in the browser. However, when I serve the uncompressed Javascript, the browser does not complain and is able to execute the Javascript.

## Reproduce

Notice that in `assets.har` we are serving `web.js.gz` under `localhost:9000/web.js` with the right `Content-Encoding` header. `web.js.gz` is a gzip compressed version of `web.js`. 

To reproduce the error, run:
1. `git clone` this repository 
2. `npm i` to install dependencies
3. Run `node index.js` and it will open up a browser and show the syntax error in the console
