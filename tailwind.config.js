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
    dropShadow: {
      xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      xs: [
        "0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
        "0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
      ],
      md: [
        "0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
        "0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      ],
      lg: [
        "0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        "0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
      ],
      xl: [
        "0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        "0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
      ],
      "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
      "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
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
          dark: "#142297",
          DEFAULT: "#2940D3",
          light: "#F1F4FE",
        },
        gray: {
          dark: "var(--text-primary)",
          DEFAULT: "var(--text-secondary)",
          light: "#F9FAFB",
        },
        info: {
          dark: "#106093",
          DEFAULT: "#188FDD",
          light: "#EDF7FD",
        },
        success: {
          dark: "#109348",
          DEFAULT: "#18DD6C",
          light: "#EDFDF4",
        },
        warning: {
          dark: "#92400E",
          DEFAULT: "#D97706",
          light: "#FFFBEB",
        },
        error: {
          dark: "#9F1239",
          DEFAULT: "#E11D48",
          light: "#fff1f2",
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
