<script>
  // import img from "$lib/images/aulys.png";
  // import gsap from "gsap";

  // import { onMount } from "svelte";
  // onMount(() => {
  //   if (window.innerWidth > 768) {
  //     gsap.to("#maindiv", {
  //       scrollTrigger: {
  //         trigger: "#maindiv",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         scrub: 1,
  //       },
  //       x: -300,
  //     });
  //   }
  // });

  import dpmc from "$lib/dpmc.pdf";
  import algarve from "$lib/bazar.pdf";
  import utk from "$lib/utk.pdf";
</script>

<div class="min-h-svh">
  <h1 class="text-5xl font-bold mt-32 text-center">Tipe</h1>

  <div class="divider mx-10">
    <i class="fa-solid fa-minus text-3xl text-primary"></i>
  </div>

  <!-- <div id="image1" class="rounded-lg h-64" data-theme="dark">
    <div id="blur1" class="rounded-lg"></div>
  </div> -->

  <!-- <div id="image2" class="rounded h-64" data-theme="light">
    <div id="blur2" class="rounded"></div>
  </div> -->

  <div id="maindiv" class="text-xl my-16 flex flex-col mx-5">
    <p class="text-2xl font-bold my-5">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Concept
      général à développer :
    </p>
    <p>
      Résoudre des équations (mécaniques ou mathématiques) complexe en mesurant
      la sortie d'un circuit électrique régi par une équation semblable.
    </p>

    <p class="text-2xl font-bold my-5">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"
      ></i>Bibliographie :
    </p>

    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Source</th>
            <th>Contenu et utilité</th>
            <th>Lien(s)</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <th>1</th>
            <td>Wikipedia</td>
            <td>Contexte historique et idées pas ou peu scientifiques</td>
            <td
              ><a
                href="https://en.wikipedia.org/wiki/Analog_computer"
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">Analog computer</a
              >,
              <a
                href="https://fr.wikipedia.org/wiki/Calculateur_analogique"
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">Calculateur analogique</a
              >
              <br />
              <a
                href="https://fr.wikipedia.org/wiki/Analyseur_diff%C3%A9rentiel?"
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">Analyseur différentiel</a
              >,
              <a
                href="https://en.wikipedia.org/wiki/Differential_analyser"
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">Differential analyser</a
              >
            </td>
          </tr>
          <!-- row 2 -->
          <tr class="hover">
            <th>2</th>
            <td>DPMC Genève</td>
            <td
              >Article un peu plus scientifiquement poussé, abordable mais
              comportant des notions non vues en classes (dont des ALI).
            </td>
            <td
              ><a
                href={dpmc}
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">PDF</a
              ></td
            >
          </tr>
          <!-- row 3 -->
          <tr>
            <th>3</th>
            <td>Univ. d'Algarve</td>
            <td
              >Document comportant une partie mathématique plus poussée sur le
              sujet, mais semble plus complexe et moins général : étudie
              particulièrement le General Purpose Analog Computer (GPAC)</td
            >
            <td>
              <a
                href={algarve}
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">PDF</a
              >
            </td>
          </tr>
          <!-- row 4 -->
          <tr>
            <th>4</th>
            <td>Univ. of Tennessee</td>
            <td
              >Article très vaste et général sur l'informatique analogique, fait
              intervenir des notions mathématiques abordables, mais ne développe
              pas tellement ce côté.
            </td><td>
              <a
                href={utk}
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">PDF</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-2xl font-bold my-5">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Idées et
      apport personnel:
    </p>
    <ul class="list-decimal ml-5">
      <li>
        Concevoir un système physique <span class="text-accent"
          >(trouver une problématique ici)</span
        > donc l'équation différentielle est connue et irrésolvable à la main : équation
        différentielle d'ordre 3 ou plus, non linéaire, ...
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
  /* #image1,
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
      display: none;
    }
  }

  #image1 {
    background-image: url("$lib/images/ss/ssmc3.png");
  }

  #image2 {
    background-image: url("$lib/images/ss/ssmc2.png");
  }

  #blur1,
  #blur2 {
    background: rgba(0, 0, 0, 0);
    height: 100%;
    width: auto;
  } 
  */
  /* 
  #maindiv {
    display: flex;
    flex-direction: column;
    margin-left: calc(5vw + 300px);
    margin-right: 5vw;
    margin-top: 3em;
  } */

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
