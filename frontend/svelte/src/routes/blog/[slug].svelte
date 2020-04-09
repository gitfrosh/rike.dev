<script context="module">
  import marked from "marked";

  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const options = {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGNlMTNlMjQwNmMzMDA4NTRiMTQzMSIsImlhdCI6MTU4NjI5MjAxMSwiZXhwIjoxNTg4ODg0MDExfQ.Wicl1PfLf1tWG6Dq8c6SjjtKoj78yX0qOM76HyGryWA",
        "Content-Type": "application/json"
      }
    };
    const res = await this.fetch(`http://localhost:1337/posts`, options);
    const data = await res.json();
    const post = data.filter(post => post.slug === params.slug)[0];
    const markDown = post.html;
    const htmlFromMarkDown = marked(markDown);
    post.html = htmlFromMarkDown;

    if (res.status === 200) {
      return { post: post };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Breadcrumb from "../../components/Breadcrumb.svelte";

  export let post;
  export let segment;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Breadcrumb {segment} />

<h2>{post.title}</h2>

<div class="content">
  {@html post.html}
</div>
