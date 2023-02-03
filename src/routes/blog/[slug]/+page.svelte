<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
    export let data;
    const { title, date, Content } = data
</script>
<svelte:head>
  <title>My blog - {title}</title>
  <meta property="og:title" content={title} />
</svelte:head>
<article>
    <h1>{title}</h1>
    <p>Published: {date}</p>
    <Content />
</article>