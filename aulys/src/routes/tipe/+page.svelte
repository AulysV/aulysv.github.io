<script src="https://www.jsdelivr.com/package/npm/pdfjs-dist">
  import dpmc from "$lib/dpmc.pdf";
  import algarve from "$lib/bazar.pdf";
  import utk from "$lib/utk.pdf";
  import mit from "$lib/mit.pdf";
  import corio from "$lib/corio.pdf";
  import xx from "$lib/tipe.pdf";
  import buancom from "$lib/buancom.pdf";
  import hnanhycom from "$lib/hnanhycom.pdf";
  import coriocomplet from "$lib/coriocomplet.pdf";
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
      Résoudre des équations différentielles compliquées en mesurant la sortie
      d'un circuit électrique régi par cette équation.
    </p>
    <p>
      Le système proie/prédateur semble être un sujet particulièrement
      intéressant : il fait intervenir des équations différentielles couplées.
    </p>

    <h3>
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"
      ></i>Bibliographie :
    </h3>

    <div class="overflow-x-auto">
      <table class="table-xs md:table-md lg:table-lg">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <!-- <th>Classification</th> -->
            <th>Source</th>
            <th>Contenu et utilité</th>
            <th>Lien(s)</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <th>1</th>
            <!-- <td>
              <div class="badge text-teal-500">Culture</div>
            </td> -->
            <td>Wikipedia</td>
            <td
              >Contexte historique et idées pas ou peu scientifiques. Permettra
              d'agrandir la bibliographie et d'avoir une vue d'ensemble du
              sujet.</td
            >
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
          <tr>
            <th>2</th>
            <!-- <td>
              <div class="badge text-green-500">Abordable</div>
            </td> -->
            <td>DPMC Genève</td>
            <td
              >Article un peu plus scientifiquement poussé, abordable mais
              comportant des notions non vues en classes (dont des ALI).
              Peut-être un peu spécifique.
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
            <!-- <td>
              <div class="badge text-orange-500">Poussé</div>
              <div class="badge text-pink-500">À étudier</div>
            </td> -->
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
            <!-- <td>
              <div class="badge text-orange-500">Poussé</div>
              <div class="badge text-pink-500">À étudier</div>
            </td> -->
            <td>Univ. of Tennessee</td>
            <td
              >Article très vaste et général sur l'informatique analogique, fait
              intervenir des notions mathématiques abordables. Permettra surtout
              de trouver d'autres sources, car possède une bibliographie
              complète.
            </td><td>
              <a
                href={utk}
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">PDF</a
              >
            </td>
          </tr>

          <tr>
            <th>5</th>
            <!-- <td>
              <div class="badge text-teal-500">Culture</div>
              <div class="badge text-pink-500">À étudier</div>
            </td> -->
            <td> Note de G. Coriolis</td>
            <td
              >Petit paragraphe de Coriolis (de la 5e à la 9e page) sur le
              traçage de courbe d'équations différentielles de manière physique.</td
            >
            <td
              ><a
                href={corio}
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">PDF</a
              > <br />
              <a
                href={coriocomplet}
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">PDF (complet)</a
              ></td
            >
          </tr>

          <tr>
            <th>6</th>
            <!-- <td>
              <div class="badge text-green-500">Abordable</div>
              <div class="badge text-pink-500">À étudier</div>
            </td> -->
            <td>interstices.info</td>
            <td
              >Article assez complet sur les calculateurs analogiques. Développe
              beaucoup le côté historique, comme beaucoup d'autres documents à
              ce sujet, mais aborde tout de même des notions plus scientifiques
              et concrètes.
            </td>
            <td
              ><a
                href="https://interstices.info/les-calculateurs-analogiques/"
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">PDF</a
              ></td
            >
          </tr>

          <tr>
            <th>7</th>
            <!-- <td>
              <div class="badge text-pink-500">À étudier</div>
            </td> -->
            <td>MIT</td>
            <td
              >Document paraissant assez intéressant physiquement que je n'ai
              pas eu le temps d'étudier...
            </td>
            <td
              ><a
                href={mit}
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">Article</a
              ></td
            >
          </tr>

          <tr>
            <th>7</th>
            <!-- <td>
              <div class="badge text-green-500">Abordable</div>
              <div class="badge text-pink-500">À étudier</div>
            </td> -->
            <td>M. Molin</td>
            <td
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolores laboriosam temporibus soluta impedit aut?
            </td>
            <td
              ><a
                href={buancom}
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">PDF</a
              ></td
            >
          </tr>

          <tr>
            <th>8</th>
            <!-- <td>
              <div class="badge text-green-500">Abordable</div>
              <div class="badge text-pink-500">À étudier</div>
            </td> -->
            <td>M. Molin</td>
            <td
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat commodi quam dolorum at voluptatem nesciunt quo
              excepturi, libero odio tenetur.
            </td>
            <td
              ><a
                href={hnanhycom}
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary">PDF</a
              ></td
            >
          </tr>
        </tbody>
      </table>
    </div>

    <h3>
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Apport
      personnel:
    </h3>
    <!-- <ul class="list-decimal">
      <li>
        Concevoir un système physique<span class="text-accent">*</span> donc l'équation
        différentielle est connue et irrésolvable à la main : équation différentielle
        d'ordre 3 ou plus, non linéaire, ...
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

    <h4><span class="text-accent">*</span>Contraintes problématique :</h4>
    <p>
      Le système physque devrait répondre à des besoins particuliers, ce qui
      permettra de donner un fil conducteur à la partie « Apport personnel » (et
      éventuellement relier l'idée du projet au thème imposé ?).
      <br />
      Exemples :
    </p>
    <ul>
      <li>
        Masse-ressorts dopés (entrée non sinusoïdale/périodique), ou
        amortissement différents (milieu aquatique, ...) ?
      </li>
      <li>(pas trop d'idées actuellement)</li>
    </ul>

    <h<ul class="list-decimal">
      <li>
        Concevoir un système physique<span class="text-accent">*</span> donc l'équation
        différentielle est connue et irrésolvable à la main : équation différentielle
        d'ordre 3 ou plus, non linéaire, ...
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

    <h4><span class="text-accent">*</span>Contraintes problématique :</h4>
    <p>
      Le système physque devrait répondre à des besoins particuliers, ce qui
      permettra de donner un fil conducteur à la partie « Apport personnel » (et
      éventuellement relier l'idée du projet au thème imposé ?).
      <br />
      Exemples :
    </p>
    <ul>
      <li>
        Masse-ressorts dopés (entrée non sinusoïdale/périodique), ou
        amortissement différents (milieu aquatique, ...) ?
      </li>
      <li>(pas trop d'idées actuellement)</li>
    </ul>

    <h4>Sur les erreurs :</h4>
    <p>
      Étudier la propagation des erreurs dans le modèle, et comment elles se
      répercutent sur la prédiction du comportement du système physique :
      comment se comporte réellement un condensateur/une bobine, en contraste
      avec le dipôle idéal ? <span class="text-accent">À développer</span>
    </p>4>Sur les erreurs :</h4>
    <p>
      Étudier la propagation des erreurs dans le modèle, et comment elles se
      répercutent sur la prédiction du comportement du système physique :
      comment se comporte réellement un condensateur/une bobine, en contraste
      avec le dipôle idéal ? <span class="text-accent">À développer</span>
    </p> -->

    <!-- <h3>
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Dernier
      rendu PDF :
    </h3>

    <div class="collapse bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">13 mars 2024</div>
      <div class="collapse-content">
        <object data={xx} type="application/pdf" width="100%" height="600px">
          <p>
            Malheuresement, le PDF viewer n'est pas dispo sur votre
            appareil/navigateur. Testé sous Firefox. Veuillez télécharger le PDF
            : <a
              href={xx}
              target="_blank"
              rel="noopener noreferrer"
              class="link-primary">Télécharger le PDF</a
            >
          </p>
        </object>
      </div>
    </div> -->
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
