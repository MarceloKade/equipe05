import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
        manrope: ["var(--font-manrope)"],
      },
      transitionDuration: {
        hoverDelay: "300ms",
      },
      transitionProperty: {
        colors: "background-color, border-color, color",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        secondary: "#111114",
        backgroundDef: "#09090B",
        "primitive-400": "#F27777",
        "primitive-500": "#E53939",
        "neutral-100": "#F5F5F5",
        "neutral-200": "#E5E5E5",
        "neutral-300": "#D4D4D4",
        "neutral-400": "#A3A3A3",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-750": "#494949",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "gray-200": "#E5E7EB",
        "gray-300": "#D1D5DB",
        "gray-400": "#9CA3AF",
        "zinc-300": "#D4D4D8",
        "zinc-400": "#A1A1AA",
        "zinc-700": "#3F3F46",
        "zinc-800": "#27272A",
        "zinc-900": "#191D1F",
      },
      opacity: {
        "06": "0.06",
      },
      lineHeight: {
        "custom-57": "5.76rem",
        "24px": "24px",
      },
      spacing: {
        "768px": "768px",
        "106px": "106px",
        "58px": "58px",
        "80px": "80px",
        "24px": "24px",
      },
      maxWidth: {
        "1512px": "1512px",
      },
      borderWidth: {
        "1": "1px", // Adiciona uma borda de 1px
      },
      borderImageSource: {
        "gradient-custom":
          "linear-gradient(101.16deg, rgba(255, 255, 255, 0.4) 1.96%, rgba(255, 255, 255, 0.1) 110.25%)",
      },
      borderImageSlice: {
        custom: "1",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg": {
          backgroundColor: "#191D1F",
        },
        ".heroSection": {
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          alignSelf: "stretch",
          justifyContent: "center",
        },
        ".containerText": {
          display: "flex",
          maxWidth: "1024px",
          maxHeight: "440px",
          padding: "32px",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        },
        ".title-heroSection": {
          width: "334px",
          maxWidth: "646px",
          fontFamily: "var(--font-manrope)",
          fontSize: "40px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "48px",
          letterSpacing: "-2.56px",
        },
        ".description-heroSection": {
          fontFamily: "var(--font-manrope)",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "-0.6px",
          color: "#E5E5E5",
        },
        ".description-heroSection .potencial": {
          color: "#FFF",
        },
        ".description-heroSection .ilimitado": {
          color: "#FFF",
          fontWeight: "700",
        },
        ".description-heroSection .constante": {
          fontWeight: "700",
        },
        ".containerButtons": {
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "16px",
          padding: "16px 0",
        },
        ".btn-participe": {
          display: "flex",
          padding: "8px 32px",
          alignItems: "center",
          borderRadius: "50px",
          border: "1px solid var(--Grad-stroke, rgba(255, 255, 255, 0.40))",
          background: "var(--Primitive-500, #E53939)",
          fontFamily: "var(--font-manrope)",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "-0.54px",
          color: "#FFF",
        },
        ".btn-saibaMais": {
          display: "flex",
          padding: "8px 32px",
          alignItems: "center",
          borderRadius: "50px",
          border: "1px solid var(--Grad-stroke, rgba(255, 255, 255, 0.40))",
          fontFamily: "var(--font-manrope)",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "-0.54px",
        },
        ".comunidade": {
          alignItems: "center",
          display: "flex",
          color: "#D4D4D4",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
          gap: "8px",
        },
        ".img-mapaMundi": {
          width: "398px",
          flex: "1 0 0",
        },
        ".beneficios": {
          fontFamily: "var(--font-roboto)",
        },
        ".gradient-text": {
          background:
            "linear-gradient(90deg, #A6A6A6 0%, #FFFFFF 50.15%, #A3A3A3 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
          "text-fill-color": "transparent",
        },
      });
    }),
  ],
};

export default config;
