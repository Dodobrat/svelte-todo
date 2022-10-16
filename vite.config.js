import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	const baseConfig = {
		plugins: [svelte()],
		envPrefix: "SVELTE_APP",
		server: {
			host: true,
			strictPort: true,
			port: 3000,
		},
	};

	if (env.SVELTE_APP_DOCKER_RUN === "true") {
		return baseConfig;
	}
	return {
		...baseConfig,
		server: {
			...baseConfig.server,
			open: "/",
		},
	};
});
