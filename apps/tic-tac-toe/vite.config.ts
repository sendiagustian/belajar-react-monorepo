import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/tic-tac-toe/",
    server: {
        port: 80,
        host: "0.0.0.0",
        strictPort: true,
    },
});
