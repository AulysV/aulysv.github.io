<script>
  import reims from "$lib/reims.mp4";
</script>

<div class="min-h-svh p-0">
  <h1 class="text-5xl font-bold mt-32 text-center">Paris − Reims</h1>

  <div class="divider mx-10">
    <i class="fa-solid fa-minus text-3xl text-primary"></i>
  </div>

  <!-- <div id="image1" class="rounded-lg h-64" data-theme="dark">
    <div id="blur1" class="rounded-lg"></div>
  </div> -->

  <!-- <div id="image2" class="rounded h-64" data-theme="light">
    <div id="blur2" class="rounded"></div>
  </div> -->

  <!-- Video -->

  <video
    src={reims}
    class="my-14"
    controls
    style="width: calc(100% - 50px); margin: 0 25px;"
  ></video>

  <article id="maindiv" class="prose max-w-none lg:text-xl">
    <h2>Jour 1</h2>
    <p>
      Départ à 8h15, il faisait frais et brumeux, côtes dès le début, boue,
      monsieur St Jacques, fatigue musculaire donc camping
    </p>
    <h2>Jour 2</h2>
    <h2>Jour 3</h2>
  </article>
  <!-- <div>
    {@html $markdownContent}
  </div> -->
</div>

<style>
  #maindiv {
    margin: 0 10%;
  }
</style>
