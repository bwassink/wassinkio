<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: posts } = $q);
</script>

<!-- <main>
	<section>
		{#if posts.length}
			{#each posts as post}
				<Card {post} />
			{/each}
		{:else}
			<Welcome />
		{/if}
	</section>
</main> -->

<main>
	<h1>Welcome to my work in progress!</h1>
	<p>This is a site where I mess around and try to gain more of an understanding of development.</p>
	<p>Thanks for visiting! Go try your hand at some <a href="/quiz">Trivia</a>!</p>
</main>
