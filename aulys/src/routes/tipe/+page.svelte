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
  import im from "$lib/images/im.png";
  // import pendule from "$lib/pendule.mp4";
  import mainpy from "$lib/images/mainpy.png";
  import output from "$lib/images/output.png";
</script>

<div class="min-h-svh p-0">
  <h1 class="text-5xl font-bold mt-10 text-center">Tipe</h1>

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
      général :
    </h3>
    <p class="font-extrabold text-2xl">
      Comment résoudre une équation différentielle analogiquement ?
    </p>

    <p class="text-justify">
      Avant la révolution numérique, les calculs physiques étaient réalisés à la
      main et mécaniquement (anticythère), puis électroniquement depuis la fin
      du XIXe.
    </p>
    <p>
      Le numérique a fini par les remplacer, pour deux raisons principales : les
      ordinateurs numériques font des calculs exacts, et peuvent être programmés
      pour réaliser une variété infinie de tâches, contrairement à l’analogique
      qui consiste à réaliser des calculs en se basant sur les propriétés
      fondamentales de la physique qui est régie entre autres par des équations
      différentielles (loi des noeuds ou lois de fonctionnement).
    </p>
    <p>
      Cependant, l’analogique a l'énorme avantage de ne pas échantillonner le
      réel et réaliser les calculs en se basant sur les propriétés de la
      physique peut faire gagner des facteurs 1000 en termes de rapidité et de
      coût énergétique, surtout si on considère l’impact écologique actuel du
      numérique.
    </p>
    <p>
      Nous pouvons donc nous demander <span class="font-bold"
        >comment il est possible résoudre une équation différentielle
        analogiquement</span
      >.
    </p>
    <p>
      Les premières idées qui me sont venues à propos de ce sujet, c’est le lien
      fort qui existe entre la mécanique et l’électronique : les mêmes équations
      différentielles existent entre le masse-ressort amorti et le RLC par
      exemple. Donc naturellement, pourquoi ne pas résoudre le masse ressort
      avec un RLC, et mesurer la tension aux bornes du condensateur pour avoir
      une idée de l’angle en fonction du temps ? Puisqu’il ne s’agit pas des
      mêmes grandeurs, les coefficients de l’équation de l'oscillateur
      harmonique sont une des choses auxquelles il faut faire attention. Et par
      identification des coefficients, on peut trouver des valeurs de R, L, et C
      en fonction de la masse du pendule et de la raideur du ressort.
    </p>
    <p>
      Je me suis vite rendu compte que le problème de cette approche est la
      nécessité d’avoir l’équation du masse-ressort. J’ai donc créé un programme
      python permettant d’obtenir une équation différentielle potentielle à
      partir d’un tableau de mesures, en testant plusieurs modèles d’équations
      différentielles grâce à SciPy. Le programme fonctionne pour un pendule
      plan : la solution en sinusoïdale amortie est détectée, et le programme me
      renvoie des valeurs de R, L, C qui ne fonctionnent pas.
    </p>
    <p>
      Cette méthode, qu’on peut appeler la méthode du circuit analogue,
      fonctionne pour des modèles simples et linéaires, mais on se trouve
      rapidement limité par nos connaissances en électronique la complexité de
      l’équation différentielle, surtout si elle n’est pas linéaire (en
      induction par exemple).
    </p>
    <p>
      Les physiciens ont donc développé la méthode d’intégrations successives.
      Théoriquement, elle consiste à isoler le terme de plus haut degré n, de
      l’intégrer n fois, puis répéter l’opération pour chaque degré de n-1
      jusqu’à 1, tout en sommant à chaque fois les termes intégrés. → “schéma
      analytique”
    </p>
    <p>
      Le problème de résolution d’équation différentielle se résume donc en un
      problème d’intégration. Mais l’intégration est assez simplement réalisable
      grâce à des composants électroniques comme les amplificateurs linéaires.
      Après avoir transformé le schéma analytique en circuit électrique, on
      obtient un circuit théorique suivant, en faisant attention à ajouter des
      résistances variables pour simuler les coefficients de l’équation.
    </p>
    <p>
      L’avantage de cette méthode est son adaptabilité : il suffit de changer
      les résistances en des composants non linéaires pour avoir n’importe quel
      type d’équation différentielle.
    </p>
    <p>
      Une autre méthode pour intégrer successivement, est de le faire
      mécaniquement. Une entrée sous forme de translation est donnée à
      l’intégrateur mécanique, et le déplacement de la roue sur le disque en
      rotation permet de donner une vitesse de rotation intégrée en sortie.
    </p>
    <p>
      L’avantage de ces méthodes est le très faible coût énergétique. Le moteur
      lego est alimenté par 6 piles 1.5 volts pour une précision inexistante.
    </p>
    <p>
      Pour conclure, il existe plusieurs méthodes pour résoudre une équation
      différentielle analogiquement : avec un circuit analogue, ou grâce à la
      méthode d’intégrations successives.
    </p>
    <p>
      L’analogique reprend de la place de l'ingénierie surtout en traitement de
      signal et en machine learning, où le temps de calcul affreux le coût
      énergétique monstrueux sont une limite principale du numérique que
      l’analogique n’a pas.
    </p>
    <!-- <p class="font-extrabold text-2xl">
      Résoudre des équations différentielles en mesurant la sortie d'un circuit
      électrique régi par une équation analogue.
    </p>
    <p class="text-justify">
      Avant la révolution numériques, les calculateurs les plus puissants
      étaient les calculateurs analogiques : il permettaient d'obtenir le
      résultat d'équations complexes sans les résoudre. Plusieurs exemples
      illustrent leur utilité. La plus ancienne est sûrement l'Anthikythera, un
      calculateur en bronze datant de l'antiquité permettant de simuler les
      mouvement des astres célestes. Plus récemment, Kelvin s'est penché sur la
      prédiction des marées qui nécessitait de combiner les effets sinusoïdaux
      de la lune et du soleil. Les calculateurs analogiques on atteint leur
      faîte durant les guerres : elles permettaient de résoudre des équations
      différentielles couplées en temps réel, par exemple lors de situations de
      course-poursuite (pursuit curves).
    </p>
    <p class="text-justify">
      Le numérique a fini par les remplacer, car permettait des usages multiples
      et exacts. Répéter deux fois la même expérence donne deux résultats
      parfaitement égaux. Cette exactitude est possible grâce à
      l'échantillonnage des données, qui devient de moins en moins problématique
      grâce à la puissance de calcul des ordinateurs modernes. Néanmoins, les
      calculateurs analogiques sont loins d'être de vieux ordinateurs remplacés
      par des successeurs plus performants. Ils ont une utilité plus directe,
      celle de pouvoir effectuer des caluls instantanés et continus, sans
      échantillonnage. Si un ordinateur moderne doit utiliser une dizaines de
      transistors pour effectuer une addition, et quelques centaines voire
      milliers pour une multiplicaiton, le calculateur quant à lui utilise les
      propriétés intrinsèques des composants : la loi des neuds pour l'addition
      et la loi d'Ohm pour la multiplication. <br />
    </p>
    <p class="text-justify"></p> -->

    <h3>
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"
      ></i>Bibliographie :
    </h3>

    <p>Article principal :</p>
    <a
      href={buancom}
      target="_blank"
      rel="noopener noreferrer"
      class="link-primary">Analog Computing von Prof. Dr. Bernd Ulmann</a
    >

    <p><em>Attention : bibliographie mise à jour il y a un an</em></p>

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
            <th>8</th>
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
            <th>9</th>
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

    <p><em>Attention, dernière mise à jour : Il y a 6 mois</em></p>

    <h2>Intégrateur mécanique</h2>

    <h4>Travail réalisé</h4>

    <p>
      La première idée était celle d'un intégrateur mécanique permettant
      d'explorer rapidement les limites du calcul analogique mécanique.
      Malheuresement, le temps et les ressources n'ont pas été suffisants pour
      parvenir jusqu'au fonctionnement complet de l'intégrateur mécanique.
    </p>

    <p>
      Cependant, une grande partie du travail a été réalisé. Un moteur permet de
      fournir une vitesse de rotation constante à la plaque carrée faisant
      office de disque. <br />
      Plus haut, un module translatable permet le traçage de la courbe dont l'intégrale
      est voulue (la partie « contrôle du traçage » n'a pas encore été réalisée...").
      <br />
      La vitesse de rotation de la roue dépend donc de la position de cette dernière
      sur le "disque" en rotation. La distance de son point d’appui avec le centre
      du disque, <code>y</code>, varie dans le temps. <br />
      Quand le disque tourne d’un angle infinitésimal dθ, soit pendant un intervalle
      de temps <code>βdτ</code>, l’axe de la roulette tourne d’un angle
      <code>y(τ) dθ</code>. Pendant un intervalle de temps <code>[0, t]</code>,
      l’axe de la roulette tourne donc d’un angle <code>α ∫ y(τ) β dτ</code>.
      <br />
      Le cylindre en bois transmet donc la vitesse de rotation à une vis sans fin
      qui permet le traçage de l’intégrale (de 0 à t) : <code>∫ y(τ) dτ</code>,
      à un facteur de proportionnalité près. <br />
      <a
        href="https://interstices.info/les-calculateurs-analogiques/"
        target="_blank"
        rel="noopener noreferrer"
        class="link link-hover">Source des calculs</a
      >
    </p>

    <h4>Travail restant</h4>
    <ul>
      <li>
        Création de la partie qui controllera la courbe fournie à l'intégrateur.
      </li>

      <li>
        Mise en place des supports permettant le traçage (j'ai déjà relié le
        disque en rotation à des systèmes d'engrenages permettant de fournir
        d'autres tiges en rotation, dont celles nécessaires à la translation des
        supports).
      </li>
    </ul>

    <img src={im} alt="Intégrateur mécanique en légo" />

    <hr />

    <h2>Programme python</h2>

    <p>
      Seconde idée : réalisation d'un programme python qui prend en entrée un
      tableau de valeurs : <code>t</code> et une autre variable <code>x</code> (ou
      plusieurs autres variables), et qui renvoie en sortie les détails d'un circuit
      électrique possédant une équation différentielle dont le résultat est analogue
      aux données fournies par le fichier de données.
    </p>

    <h4>Étapes de la réalisation du programme :</h4>
    <p>
      J'ai commencé par travailler sur un système simple : le pendule plan
      amorti. <br />
      Une vidéo
      <!-- <a
        href={pendule}
        target="_blank"
        rel="noopener noreferrer"
        class="link-primary">vidéo</a
      > -->
      de pendule plan a été prise durant un TP de physque. J'ai réalisé le pointage
      grâce à <code>Tracker</code>, et ai exporté les données sur un fichier
      texte qui contient une liste de temps sur la première colonne, et une
      liste d'angles sur la deuxième.
    </p>
    <p>
      Le programme suivant permet d'approximer la courbe par une sinusoïdale
      amortie, et d'en retrouver l'équadiff correspondante. <br />
      J'ai ensuite réalisé les calculs pour retrouver les coefficients du circuit
      RLC correspondant.
    </p>

    <img src={mainpy} />

    <h4>Output :</h4>
    <img src={output} />

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
