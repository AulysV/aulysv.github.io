<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import aulys from "$lib/images/aulys.png";
</script>

<div class="hero h-svh">
  <div
    class="hero-content flex-col lg:flex-row lg:max-w-5xl md:max-w-xl sm:max-w-md max-w-64"
  >
    <img src={aulys} class="lg:max-w-xs mx-20 sm:max-w-52 mb-10 max-w-60" />

    <div>
      <h1 class="text-5xl font-bold">Bonjour !</h1>
      <p class="py-6">
        Bienvenue sur le site d'Aulys, codé à l'arrache après un DS de physique.
      </p>

      <a href="/tipe"
        ><button class="btn btn-primary">
          <i class="fa-solid fa-microscope mr-3 text-ba"></i>Tipe</button
        >
      </a>
    </div>
  </div>
</div>

<!-- <style>
#landing {
    height: 90vh;
    width: 90vw;
    margin: 2em auto;
    border-radius: 20px;
    background-image: url('src/images/lush-min.jpg');
    background-attachment: fixed;
    background-size: cover;
    /* background-position: center; */
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#landing img {
    width: 15em;
    height: auto;
    border-radius: 10px;
}

#landing>img {
    margin-bottom: 2em;
}
</style> -->
