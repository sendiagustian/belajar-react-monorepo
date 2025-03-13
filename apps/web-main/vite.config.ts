import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const proxy = {
        "/react-essentials": {
            target:
                mode === "development" ? "http://localhost:5511" : "http://react-essentials:5511",
            changeOrigin: true,
        },
        "/tic-tac-toe": {
            target: mode === "development" ? "http://localhost:5512" : "http://tic-tac-toe:5512",
            changeOrigin: true,
        },
        "/investment-calculator": {
            target:
                mode === "development"
                    ? "http://localhost:5513"
                    : "http://investment-calculator:5513",
            changeOrigin: true,
        },
    };

    return {
        plugins: [react(), tailwindcss()],
        base: "/",
        server: {
            port: 5510,
            host: "0.0.0.0",
            strictPort: true,
            proxy: proxy,
            allowedHosts: ["turbo-apps.sendistudio.id"],
        },
        preview: {
            port: 5510,
            host: "0.0.0.0",
            strictPort: true,
            proxy: proxy,
            allowedHosts: ["turbo-apps.sendistudio.id"],
        },
    };
});
