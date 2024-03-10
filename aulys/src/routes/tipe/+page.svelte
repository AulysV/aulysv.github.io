<script>
  import img from "$lib/images/aulys.png";
</script>

<div class="min-h-svh">
  <h1 class="text-5xl font-bold mt-32 text-center">Tipe</h1>

  <!-- <div id="image1" class="rounded-lg h-64" data-theme="dark">
    <div id="blur1" class="rounded-lg"></div>
  </div> -->

  <div id="image2" class="rounded h-64" data-theme="light">
    <div id="blur2" class="rounded"></div>
  </div>

  <div id="maindiv" class="text-xl">
    <p class="text-2xl font-bold my-5">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Concept
      général à développer :
    </p>
    <p>
      Résoudre des équations (mécaniques ou mathématiques) complexe en mesurant
      la sortie d'un circuit électrique régi par une équation semblable.
    </p>
    <p class="text-2xl font-bold my-5">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Idées
      principales :
    </p>
    <ul class="list-decimal ml-5">
      <li>
        Concevoir un système physique donc l'équation différentielle est connue
        et irrésolvable à la main : équation différentielle d'ordre 3 ou plus,
        non linéaire, ...
      </li>
      <li>
        Créer un système électrique dont l'équation différentielle est la même
        que celle du système physique en identifiant les coefficients.
      </li>
      <li>
        Mesurer la réponse du système électrique, et ainsi prévoir le
        comportement du système physique
      </li>
      <li>
        Comparer le résultat prévu et le comportement réel du système physique
        et en déduire la pertinence du modèle électrique
      </li>
      <li>
        Éventuellement résoudre de manière numérique l'équation pour avoir une
        meilleure précision liées aux erreurs.
      </li>
    </ul>
  </div>
</div>

<style>
  #image1,
  #image2 {
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    margin-bottom: 2em;
    margin-top: 2em;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  @media (max-width: 600px) {
    #image2 {
      background-size: 100svw;
      background-attachment: scroll;
    }
  }

  #image1 {
    background-image: url("$lib/images/redstone1.png");
  }

  #image2 {
    background-image: url("$lib/images/redstone2.png");
  }

  #blur1,
  #blur2 {
    /* backdrop-filter: blur(7px); */
    background: rgba(0, 0, 0, 0);
    height: 100%;
    width: auto;
  }

  #maindiv {
    display: flex;
    flex-direction: column;
    margin: 5vw;
  }

  #maindiv > ul > li {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  @media (min-width: 1024px) {
    #maindiv {
      margin-left: 15vw;
      margin-right: 15vw;
    }
  }
</style>
