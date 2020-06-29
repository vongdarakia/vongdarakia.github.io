/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

require("ts-node").register();

module.exports.onCreateNode = require("./src/gatsby-config/onCreateNode").default;
module.exports.createPages = require("./src/gatsby-config/createPages").default;
