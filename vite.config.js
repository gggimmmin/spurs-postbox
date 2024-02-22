import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@headers", replacement: "/src/components/headers" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@redux", replacement: "/src/redux" },
      { find: "@util", replacement: "/src/util" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@hooks", replacement: "/src/hooks" },
    ],
  },
});
