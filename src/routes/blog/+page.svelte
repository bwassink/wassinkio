<script>
  import { onMount } from 'svelte';
  import sanity from '@sanity/client';
  import sanityConfig from '../wassinksanity/sanity.config';

  const client = sanity(sanityConfig);

  let posts = [];

  onMount(async () => {
    const response = await client.fetch('*[_type == "post"]');
    posts = response;
  });
</script>

<h1>Hi, how are ya?</h1>
<p>Is this thing on? 🎤</p>

<ul>
  {#each posts as post}
    <li>
      <h2>{post.title}</h2>
      <p>Category: {post.category}</p>
    </li>
  {/each}
</ul>