<script>
	export let data;
</script>

<svelte:head>
	<title>{data.post.title} | My SvelteKit Blog</title>
</svelte:head>

<article>
	<h1>{data.post.title}</h1>
	<p>Published on {new Date(data.post.publishedAt).toLocaleDateString()}</p>
	<div>{@html data.post.content}</div>
</article>