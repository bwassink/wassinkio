<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../../components/Card.svelte';
	import Welcome from '../../components/Welcome.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: posts } = $q);
</script>

<main>
	<h1>Welcome to My Blog</h1>
	<section>
		{#if posts.length}
			{#each posts as post}
				<Card {post} />
			{/each}
		{:else}
			<Welcome />
		{/if}
	</section>
</main>
