<script>
	export let data;
</script>

<svelte:head>
	<title>Wassink.io Blog</title>
</svelte:head>

<h1>Welcome to My Blog</h1>

{#if data.posts}
	<ul>
		{#each data.posts as post}
			<li>
				<a href={`/blog/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>No posts found.</p>
{/if}