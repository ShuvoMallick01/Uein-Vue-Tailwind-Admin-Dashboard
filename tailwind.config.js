/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter", sans-serif'],
    },
    extend: {
      colors: {
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        primary: {
          dark: "#0e73be",
          DEFAULT: "#2499ef",
          light: "#249aef31",
        },
        secondary: {
          dark: "#c1d2e5",
          DEFAULT: "#f1f6f9",
          light: "#f1f6f95b",
        },
        info: {
          dark: "#525b93",
          DEFAULT: "#585fdd",
          light: "rgba(140, 142, 255, 0.24)",
        },
        success: {
          dark: "#209e5f",
          DEFAULT: "#09ba70",
          light: "#09ba702c",
        },
        warning: {
          dark: "#d88619",
          DEFAULT: "#f49d1a",
          light: "rgba(255, 198, 117, 0.26)",
        },
        error: {
          dark: "#d62b64",
          DEFAULT: "#ff316f",
          light: "#ff316f33",
        },

        muted: "var(--muted)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        input: "var(--input)",
        hover: "var(--hover)",
        border: "var(--border)",
        active: "var(--active)",
      },

      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },

      animation: {
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
      },
    },
  },
  plugins: ["animation"],
};
