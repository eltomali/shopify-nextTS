module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    "postcss-nesting",
    "tailwindcss",
    "autoprefixer",
  ],
};

// Just for testing to generate post css output
// module.exports = {
//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };
