// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://raghavguptaa.github.io",
  base: "/",
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
  // page CSS is small; inlining it removes a render-blocking request ahead of first paint
  build: { inlineStylesheets: "always" },
  vite: {
    // pre-bundle up front so Vite never re-optimises mid-session
    optimizeDeps: {
      include: ["gsap", "gsap/ScrollTrigger", "lenis", "three"],
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      weights: ["200 600"],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
      options: { experimental: { variableAxis: { opsz: [["9", "144"]], SOFT: ["50"] } } },
    },
    { provider: fontProviders.google(), name: "Manrope", cssVariable: "--font-manrope", weights: ["400 600"], styles: ["normal"], subsets: ["latin"], fallbacks: ["system-ui", "sans-serif"] },
    { provider: fontProviders.google(), name: "IBM Plex Mono", cssVariable: "--font-plex-mono", weights: [400, 500], styles: ["normal"], subsets: ["latin"], fallbacks: ["ui-monospace", "monospace"] },
    { provider: fontProviders.google(), name: "Inter", cssVariable: "--font-inter", weights: ["400 500"], styles: ["normal"], subsets: ["latin"], fallbacks: ["system-ui", "sans-serif"] },
    { provider: fontProviders.google(), name: "Instrument Serif", cssVariable: "--font-instrument", weights: [400], styles: ["normal", "italic"], subsets: ["latin"], fallbacks: ["Georgia", "serif"] },
  ],
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/concepts/"),
    }),
  ],
});