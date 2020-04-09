<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    text-align: left;

    padding: 3em 3em 3em 3em;
    overflow: auto;
  }
  .wrapper {
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 100%;
    position: relative;
  }
  .content {
    position: relative;
    min-height: 600px;
    padding-top: 91px;
    padding-left: 614px;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }
  .outline {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99;
  }
  .outline .box {
    height: 100%;
    padding: 80px 95px 100px 100px;
  }

  @media only screen and (max-width: 480px) {
    .outline .box {
      height: 115%;
    }
  }

  @media only screen and (max-width: 767px) {
    .content {
      padding-left: 0;
      height: auto;
    }
    .outline {
      position: relative;
      width: 100%;
      height: auto;
    }
    .outline .box {
      padding: 40px 30px;
      padding-left: 30px;
      max-width: 420px;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .content {
      padding-left: 0;
      height: auto;
    }
    .outline {
      position: relative;
      width: 100%;
      height: auto;
    }
  }
  @media only screen and (min-width: 1200px) {
    .wrapper {
      width: 1000px;
    }
  }
</style>

<main>
  <div class="wrapper">
    <Nav {segment} />
    <div class="content">
      <div class="outline" style="overflow: hidden; outline: none;">
        <div class="box">
          <slot />
        </div>
      </div>
    </div>
  </div>
</main>
