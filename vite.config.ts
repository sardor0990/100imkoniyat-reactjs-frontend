import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';
dotenv.config();
export default defineConfig(() => {
	return {
		plugins: [react(), svgr()],
		define: {
			'process.env.REACT_APP_BASE_URL': `"${process.env.REACT_APP_BASE_URL}"`,
		},
		server: {
			port: 3003,
		},
	};
});
