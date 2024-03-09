<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import aulys from "$lib/images/aulys.png";
</script>

<main>
  <div class="h-svh">
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={aulys} class="max-w-xs mx-20" />
        <div>
          <h1 class="text-5xl font-bold">Bonjour !</h1>
          <p class="py-6">
            Bienvenue sur le site d'Aulys, codé à l'arrache après un DS de
            physique.
          </p>

          <a href="/tipe"
            ><button class="btn btn-primary">
              <i class="fa-solid fa-microscope mr-3 text-ba"></i>Tipe</button
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</main>

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
