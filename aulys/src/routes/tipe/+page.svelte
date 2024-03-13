<script src="https://www.jsdelivr.com/package/npm/pdfjs-dist">
  import { onMount } from "svelte";

  import dpmc from "$lib/dpmc.pdf";
  import algarve from "$lib/bazar.pdf";
  import utk from "$lib/utk.pdf";

  import xx from "$lib/tipe.pdf";

  // import markdownit from "markdown-it";
  // let markdownContent = "";

  // onMount(async () => {
  //   const response = await fetch("$lib/tipe.md");
  //   const markdownText = await response.text();
  //   const md = new markdownit();
  //   markdownContent = md.render(markdownText);
  // });
</script>

<div class="min-h-svh p-0">
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

  <article id="maindiv" class="prose max-w-none lg:text-xl">
    <h3>
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Concept
      général à développer :
    </h3>
    <p>
      Résoudre des équations (mécaniques ou mathématiques) complexe en mesurant
      la sortie d'un circuit électrique régi par une équation semblable.
    </p>

    <h3>
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"
      ></i>Bibliographie :
    </h3>

    <div class="overflow-x-auto">
      <table class="table-xs md:table-md lg:table-lg table-zebra">
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

    <h3>
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Idées et
      apport personnel:
    </h3>
    <ul class="list-decimal">
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

    <h3>
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Dernier
      rendu PDF :
    </h3>

    <div class="collapse bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">15 mars 2024</div>
      <div class="collapse-content">
        <object data={xx} type="application/pdf" width="100%" height="600px">
          <p>
            Malheuresement, le PDF viewer n'est pas dispo sur votre grille-pain.
            Veuillez télécharger le PDF : <a
              href={xx}
              target="_blank"
              rel="noopener noreferrer"
              class="link-primary">Download PDF</a
            >
          </p>
        </object>
      </div>
    </div>
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
