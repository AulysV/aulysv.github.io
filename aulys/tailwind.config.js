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
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      {
        emerald: {
          ...require("daisyui/src/theming/themes")["emerald"],
          primary: "#f0b90b",
          secondary: " #f0b90b",
        },
      },
      "corporate",
      {
        gnome: {
          primary: "#f6d32d",
          "primary-focus": "#e5a50a",
          "primary-content": "#241f31",
          secondary: "#57e389",
          "secondary-focus": "#2ec27e",
          "secondary-content": "#241f31",
          accent: "#62a0ea",
          "accent-focus": "#3584e4",
          "accent-content": "#241f31",
          neutral: "#151515",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",
          "base-100": "#241f31",
          "base-200": "#3d3846",
          "base-300": "#2c2639",
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

      {
        adwaita: {
          primary: "#f6d32d",
          "primary-focus": "#e5a50a",
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
    darkTheme: "emerald", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
