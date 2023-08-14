/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: [
      // ...other paths...
      './src/**/*.jsx', // Include your JSX files
      './public/**/*.html', // Include HTML files
      // Exclude the custom class from purging
      './src/Components/HtmlCodeEditor.jsx', 
    // Adjust the path accordingly
    ],
  },
}

