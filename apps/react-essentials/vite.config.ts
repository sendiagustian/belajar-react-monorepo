import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/react-essentials/",
    server: {
        port: 5511,
        host: "0.0.0.0",
        strictPort: true,
        allowedHosts: ["turbo-apps.sendistudio.id"],
    },
});
