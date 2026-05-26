import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#030305",
        panel: "#0A0A0F",
        card: "#111118",
        interface: "#1A1A24",
        text: "#F4F7FB",
        muted: "#9CA3AF",
        accent: "#6D4AFF",
        steel: "#3B82F6",
        cyan: "#22D3EE"
      }
    }
  },
  plugins: []
};

export default config;
