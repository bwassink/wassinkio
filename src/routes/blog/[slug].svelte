<script>
  export let post;
</script>

<ul>
  {#each post as posts}
    <li>
      <a href={`/blog/${post._id}/`}>{post.name}</a>
    </li>
  {/each}
</ul>

<h1>Hi, how are ya?</h1>

