<script>
  export let segment;
</script>

<style>
  header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    padding: 27px 45px;
    z-index: 999;
    background: #fff;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }
  nav {
    float: right;
  }

  nav a {
    display: inline-block;
    color: #242424;
    font-size: 18px;
    margin-right: 30px;
    padding: 5px;
  }
  
  @media only screen and (max-width: 767px) {
    nav a {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 480px) {
    nav a {
      font-size: 13px;
    }
  }
</style>

<header>
  <nav>
    <a aria-current={segment === undefined ? 'page' : undefined} href=".">
      home
    </a>
    <a aria-current={segment === 'projects' ? 'page' : undefined} href="projects">
      projects
    </a>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <a
      rel="prefetch"
      aria-current={segment === 'blog' ? 'page' : undefined}
      href="blog">
      blog
    </a>
  </nav>
</header>
