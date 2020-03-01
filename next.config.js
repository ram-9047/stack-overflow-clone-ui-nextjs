// next.config.js
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  /* config options here */
  theme: {
    extend: {
      colors: {
        "custom.yellow": "#ffcf11"
      }
    }
  }
});
