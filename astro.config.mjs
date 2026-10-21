// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://corneliusgruber.com',
    base: '/',
    redirects: {
        '/sites/about_me.html': '/'
    }
});
