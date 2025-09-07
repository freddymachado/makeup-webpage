module.exports = {
  mode: 'aot', 
  content: [
    './app/**/*.{js,ts,jsx,tsx,html}', // Include all files in the `app` folder
    './pages/**/*.{js,ts,jsx,tsx,html}', // Include all files in the `pages` folder
    './components/**/*.{js,ts,jsx,tsx,html}', // Include all files in the `components` folder
    './styles/**/*.css', // Include your CSS files
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(1 0 0)',
        foreground: 'oklch(0.145 0 0)',
      },
    },
  },
  plugins: [
    require('tw-animate-css'), // Include your plugins
  ],
};