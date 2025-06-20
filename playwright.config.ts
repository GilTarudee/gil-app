import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	use: {
		testIdAttribute: 'id'
	  },

	testDir: 'src'
});
