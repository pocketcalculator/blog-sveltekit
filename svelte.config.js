import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },

	extensions: ['.svelte', '.md'],
	
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/post.svelte'
			},
		})
	]
};

export default config;