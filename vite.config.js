import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	envPrefix: "SVELTE_APP",
	server: {
		host: true,
		strictPort: true,
		port: 3000,
		watch: {
			usePolling: true,
		},
	},
});
