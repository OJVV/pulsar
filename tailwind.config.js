import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "4px", 
          medium: "6px", 
          large: "8px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#000000"
            },
            content1: {
              DEFAULT: "#121212",
              foreground: "#FFFFFF"
            },
            content2: {
              DEFAULT: "#1A1A1A",
              foreground: "#FFFFFF"
            },
            content3: {
              DEFAULT: "#242424",
              foreground: "#FFFFFF"
            },
            content4: {
              DEFAULT: "#2A2A2A",
              foreground: "#FFFFFF"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.15)"
            },
            focus: {
              DEFAULT: "#3B82F6"
            },
            foreground: {
              DEFAULT: "#FFFFFF"
            },
            primary: {
              50: "#EFF6FF",
              100: "#DBEAFE",
              200: "#BFDBFE",
              300: "#93C5FD",
              400: "#60A5FA",
              500: "#3B82F6",
              600: "#2563EB",
              700: "#1D4ED8",
              800: "#1E40AF",
              900: "#1E3A8A",
              DEFAULT: "#3B82F6",
              foreground: "#FFFFFF"
            },
            default: {
              50: "#F9FAFB",
              100: "#F3F4F6",
              200: "#E5E7EB",
              300: "#D1D5DB",
              400: "#9CA3AF",
              500: "#6B7280",
              600: "#4B5563",
              700: "#374151",
              800: "#1F2937",
              900: "#111827",
              DEFAULT: "#6B7280",
              foreground: "#FFFFFF"
            }
          }
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#000000"
            },
            content1: {
              DEFAULT: "#121212",
              foreground: "#FFFFFF"
            },
            content2: {
              DEFAULT: "#1A1A1A",
              foreground: "#FFFFFF"
            },
            content3: {
              DEFAULT: "#242424",
              foreground: "#FFFFFF"
            },
            content4: {
              DEFAULT: "#2A2A2A",
              foreground: "#FFFFFF"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.15)"
            },
            focus: {
              DEFAULT: "#3B82F6"
            },
            foreground: {
              DEFAULT: "#FFFFFF"
            },
            primary: {
              50: "#EFF6FF",
              100: "#DBEAFE",
              200: "#BFDBFE",
              300: "#93C5FD",
              400: "#60A5FA",
              500: "#3B82F6",
              600: "#2563EB",
              700: "#1D4ED8",
              800: "#1E40AF",
              900: "#1E3A8A",
              DEFAULT: "#3B82F6",
              foreground: "#FFFFFF"
            },
            default: {
              50: "#F9FAFB",
              100: "#F3F4F6",
              200: "#E5E7EB",
              300: "#D1D5DB",
              400: "#9CA3AF",
              500: "#6B7280",
              600: "#4B5563",
              700: "#374151",
              800: "#1F2937",
              900: "#111827",
              DEFAULT: "#6B7280",
              foreground: "#FFFFFF"
            }
          }
        }
      }
    })
  ]
}
