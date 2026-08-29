export const theme = {
  colors: {
    background: "#eef3ff",
    surface: "#FFFFFF",
    surfaceSoft: "#F7F8FA",
    text: "#1f2430",
    textSecondary: "#737a87",
    border: "#e4e8ef",
    primary: "#111827",
    pageBackgrounds: {
      pagination: "#ecf2fe",
      infinite: "#e9fdf2",
    },
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px",
  },

  fontSizes: {
    xs: "11px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "18px",
    xxl: "22px",
    h1: "2.35rem",
    h2: "1.15rem",
    h3: "0.82rem",
  },

  radii: {
    sm: "6px",
    md: "8px",
    lg: "12px",
  },

  layout: {
    maxWidth: "1380px",
  },

  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1280px",
  },
};

export type Theme = typeof theme;
