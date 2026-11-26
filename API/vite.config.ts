import { defineConfig, loadEnv } from "vite-plus";

export default defineConfig(({ mode }) => ({
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${loadEnv(mode, process.cwd(), "").API_PORT || "3001"}`,
      },
    },
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
}));
