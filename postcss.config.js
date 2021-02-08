const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "purpose-banner": "url('/images/purpose/OurPurpose1.jpg')",
      }),
    },
  },
};
