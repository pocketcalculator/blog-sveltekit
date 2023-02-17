<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>Blog | pocketcalculator.io</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />
