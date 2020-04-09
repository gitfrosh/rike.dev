<script context="module">
  //export function preload({ params, query }) {
  // return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
  // 	return { posts };
  // });
  // }

  export function preload({ params, query }) {
    return this.fetch("http://localhost:1337/posts", {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGNlMTNlMjQwNmMzMDA4NTRiMTQzMSIsImlhdCI6MTU4NjI5MjAxMSwiZXhwIjoxNTg4ODg0MDExfQ.Wicl1PfLf1tWG6Dq8c6SjjtKoj78yX0qOM76HyGryWA",
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<!-- <svelte:head>
  <title>Blog</title>
</svelte:head> -->

  <a href="/" class="title">
    <h2>blog</h2>
  </a>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.date}: {post.title}</a>
    </li>
  {/each}
</ul>

