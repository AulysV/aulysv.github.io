/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Outfit", "Roboto", "Inter", "system-ui", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("katex"),
  ],

  daisyui: {
    themes: [
      {
        adwaita: {
          primary: "#007070",
          "primary-focus": "#004040",
          "primary-content": "#101010",
          secondary: "#57e389",
          "secondary-focus": "#2ec27e",
          "secondary-content": "#101010",
          accent: "#62a0ea",
          "accent-focus": "#3584e4",
          "accent-content": "#101010",
          neutral: "#202020",
          "neutral-focus": "#404040",
          "neutral-content": "#ffffff",
          "base-100": "#181818",
          "base-200": "#202020",
          "base-300": "#303030",
          "base-content": "#ebecf0",
          info: "#66c7ff",
          success: "#87cf3a",
          warning: "#e1d460",
          error: "#ff6b6b",
          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": ".25s",
          "--animation-input": ".2s",
          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
    // themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "adwaita", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
