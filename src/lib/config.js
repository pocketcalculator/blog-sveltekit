/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = "Paul Sczurek's Blog"
export const siteDescription = 'Built with the SvelteKit Static Blog Starter'
export const siteURL = 'blog.pocketcalculator.io'
export const siteLink = 'https://github.com/pocketcalculator/blog-sveltekit'
export const siteAuthor = 'Paul Sczurek'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/'
	}, {
		title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact' 
	},
]