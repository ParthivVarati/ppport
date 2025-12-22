/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        primary: "#00C2FF",    // stronger cyan like original
        accent: "#7C3AED",     // purple accent
        bg: "#0b1020",
        card: "#0f1724"
      },
      boxShadow: {
        "soft-glow": "0 8px 30px rgba(124,58,237,0.12)",
        "accent-glow": "0 10px 50px rgba(0,194,255,0.08)"
      },
      keyframes: {
        floaty: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" }
        },
        slowspin: { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        slowspin: "slowspin 30s linear infinite"
      }
    }
  },
  plugins: []
};
