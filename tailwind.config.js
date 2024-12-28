/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/froala-editor/css/froala_editor.pkgd.min.css",
    "./node_modules/froala-editor/css/froala_style.min.css",
  ],
  theme: {
    extend: {
      colors: {
        "black-border-rgba": "rgba(22, 22, 22, 0.05)",
        "red-border-rgba": "rgba(255, 77, 77, 0.50)",
        "red-bg-rgba": "rgba(255, 77, 77, 0.10)",
      },
    },
    fontFamily: {
      sans: ["sans", "Montserrat"],
      serif: ["serif", "Marck Script"],
      inter: ['sans-serif', 'Inter'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
