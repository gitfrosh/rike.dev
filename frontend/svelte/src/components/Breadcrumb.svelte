<script>
  export let segment;
</script>

<style>
  .breadcrumb {
    padding: 8px 0px;
    background-color: unset;
  }
</style>

 <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="blog">blog</a></li>
    <li class="breadcrumb-item active" aria-current={segment === undefined ? 'page' : undefined} >post</li>
  </ol>

