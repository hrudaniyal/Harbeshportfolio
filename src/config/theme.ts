export const themeConfig = {
  colors: {
    background: "#030712",
    surface: "#0B1120",
    primary: "#8B5CF6", // Purple
    secondary: "#6366F1", // Indigo
    accent: "#22D3EE", // Cyan
    highlight: "#A78BFA", // Light Purple
    text: "#FFFFFF",
    muted: "#94A3B8",
    border: "rgba(255, 255, 255, 0.08)",
    cardBg: "rgba(255, 255, 255, 0.03)"
  },
  gradients: {
    aurora: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #22D3EE 100%)",
    textGradient: "bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#22D3EE]",
    textGradientSecondary: "bg-clip-text text-transparent bg-gradient-to-r from-[#22D3EE] via-[#6366F1] to-[#8B5CF6]"
  },
  shadows: {
    glowPrimary: "0 0 20px rgba(139, 92, 246, 0.3)",
    glowSecondary: "0 0 20px rgba(99, 102, 241, 0.3)",
    glowAccent: "0 0 20px rgba(34, 211, 238, 0.3)"
  },
  typography: {
    headingFont: "font-sora",
    bodyFont: "font-sans",
    monoFont: "font-mono"
  }
};
