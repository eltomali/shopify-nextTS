const { withFrameworkConfig } = require("./framework/common/config");

module.exports = withFrameworkConfig({
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "sv"],
    defaultLocale: "en-US",
  },
});
