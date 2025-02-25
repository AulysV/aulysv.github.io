<script lang="ts" src="https://www.jsdelivr.com/package/npm/pdfjs-dist">
  import FileReaderSyst from "./FileReaderSyst.svelte";
  import FileReaderTrac from "./FileReaderTrac.svelte";
  import FileReaderComp from "./FileReaderComp.svelte";

  import circuitimg from "$lib/images/output.svg";

  import sorties from "$lib/images/sorties.svg";
  import comp from "$lib/images/comp.svg";
  import superp from "$lib/images/super.svg";

  import circ1 from "$lib/images/circuitirl1.jpg";
  import circ2 from "$lib/images/circuitirl2.jpg";

  import Mcot from "$lib/Mcot_13238.pdf";

  import "katex/dist/katex.min.css";
  import { onMount } from "svelte";

  let eq1 = "$$ i_{1} +i_{2} +i_{3} =i_{c} +i_{R'} $$";
  let eq2 =
    "$$ \\frac{-V_{i}}{R} +\\frac{V_{0}}{\\beta R} +\\frac{V_{x}}{\\alpha R} =-C\\frac{dV_{x}}{dt} -\\frac{V_{x}}{R} $$";
  let eq3 = "$$ \\frac{V_{x}}{R} =C\\frac{dV_{0}}{dt} -\\frac{V_{0}}{R} $$";
  let eq4 =
    "$$ V_{i} = R^{2} C^{2}\\frac{d^{2} V_{0}}{dt^{2}} +\\left[\\frac{RC}{\\alpha } +2RC\\frac{R}{R'}\\right]\\frac{dV_{0}}{dt} +\\left[\\frac{1}{\\beta } +\\frac{R}{R'}\\left(\\frac{1}{\\alpha } +\\frac{R}{R'}\\right)\\right] V_{0} $$";
  let eq5 =
    "$$ \\frac{d^{2} V_{0}}{dt} +\\left(\\frac{1}{\\alpha RC}\\right)\\frac{dV_{0}}{dt} +\\frac{V_{0}}{\\beta ( RC)^{2}} = \\frac{V_{i}}{( RC)^{2}} $$";

  let ed = "$$ y^{(n)} +a_{n-1}y^{(n-1)} +\\ldots +a_{1}y' +a_{0}y =e $$";

  let eq6 =
    "$$ V_{0}(t) = \\left( A \\cos(\\omega t) + B \\sin(\\omega t) \\right) e^{kt} + K $$";

  let eq7 =
    "$$ \\omega = \\frac{1}{RC} \\sqrt{\\frac{1}{\\beta} - \\frac{1}{4\\alpha^2}} $$";

  let eq8 = "$$ k = -\\frac{1}{2\\alpha RC} $$";

  let eq9 = "$$ A = -V_{i}(t) \\beta $$";

  let eq10 = "$$ B = \\frac{V_{i}(t) \\beta k}{\\omega} $$";

  let eq11 = "$$ K = V_{i}(t) \\beta $$";

  let eq12 =
    "$$ \\alpha \\rightarrow \\text{décroissance exponentielle}, \\quad \\beta \\rightarrow \\text{amplitude}, \\quad C \\rightarrow \\text{pseudo-période}, \\quad R \\rightarrow \\text{variable libre} $$";

  onMount(() => {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\(", right: "\\)", display: false },
        { left: "$$", right: "$$", display: true },
      ],
    });
  });

  // import dpmc from "$lib/dpmc.pdf";
  // import algarve from "$lib/bazar.pdf";
  // import utk from "$lib/utk.pdf";
  // import mit from "$lib/mit.pdf";
  // import corio from "$lib/corio.pdf";
  // import xx from "$lib/tipe.pdf";
  // import buancom from "$lib/buancom.pdf";
  // import hnanhycom from "$lib/hnanhycom.pdf";
  // import coriocomplet from "$lib/coriocomplet.pdf";
  import im from "$lib/images/im.png";
  // // import pendule from "$lib/pendule.mp4";
  // import mainpy from "$lib/images/mainpy.png";
  // import output from "$lib/images/output.png";
  import circuit from "$lib/images/circuit.svg";
  import mec from "$lib/images/mec.png";
  import diagram from "$lib/images/diagram.svg";
  import graph from "$lib/images/graph.svg";
  import graph2 from "$lib/images/graph2.svg";

  // Ajoute un espace quand la vue se déplace avec un lien anchor bref moi j'ai compris

  function smoothScroll(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    const targetId = event.currentTarget.getAttribute("href").substring(1); // Récupère l'ID sans le "#"
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0; // Récupère la hauteur de la navbar
      const offset = 20; // Espace supplémentaire après la navbar

      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight - offset,
        behavior: "smooth",
      });
    }
  }

  onMount(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });
  });
</script>

<div class="blur-bg w-screen"></div>
<div class="pat-bg w-screen"></div>

<div id="content" class="w-screen">
  <h1 class="text-5xl font-bold mt-32 text-center">TIPE</h1>
  <p class="text-center">(Travail d'initiative personnelle encadré)</p>
  <p class="text-center">(Oral de prépa)</p>
  <div class="divider mx-10">
    <i class="fa-solid fa-minus text-3xl text-primary"></i>
  </div>

  <article
    id="intro"
    class="prose max-w-none lg:text-xl lg:text-justify md:text-justify"
  >
    <h2>Résolution analogique d'équations différentielles</h2>

    <p>
      En deux mots. Pour résoudre des équadiffs, Python marche bien. Mais dans
      des petits systèmes (embarqués par exemple (genre robots)), un circuit
      peut être beaucoup plus efficace ! C'est grâce à de tels circuits que
      marchaient les premiers ordinateurs, qui pourraient d'ailleurs faire un
      comeback grâce à leur efficacité très souhaitée en machine learning.
    </p>
    <ul>
      <li><a href="#mcot">MCOT</a></li>
      <li>
        <a href="#travail">Travail réalisé</a>
        <ul>
          <li><a href="#expos">Exposition du problème</a></li>
          <li><a href="#principe">Principe de la résolution analogique</a></li>
          <li><a href="#circuit">Création du circuit</a></li>
          <li><a href="#exploitation">Exploitation des données</a></li>
          <li><a href="#comparaison">Comparaison avec le numérique</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
      </li>

      <li><a href="#tentative">Tentative de systématisation</a></li>
      <li><a href="#pina">Premières idées non abouties</a></li>
    </ul>
  </article>

  <div class="divider mx-10 my-10">
    <i class="fa-solid fa-minus text-3xl text-primary"></i>
  </div>

  <article
    id="mcot"
    class="prose max-w-none lg:text-xl lg:text-justify md:text-justify"
  >
    <div
      class="collapse dabg"
      style="border: 3px solid rgba(117, 117, 117, 0.342);"
    >
      <input type="checkbox" />
      <h2 id="mcot" class="collapse-title m-3">MCOT</h2>
      <div class="collapse-content px-20">
        <object data={Mcot} type="application/pdf" width="100%" height="600px">
          <p>
            Malheuresement, le PDF viewer n'est pas dispo sur votre
            appareil/navigateur. Testé sous Firefox. Veuillez télécharger le PDF
            : <a
              href={Mcot}
              target="_blank"
              rel="noopener noreferrer"
              class="link-primary">Télécharger le PDF</a
            >
          </p>
        </object>
      </div>
    </div>
  </article>

  <article
    id="maindiv"
    class="prose max-w-none lg:text-xl lg:text-justify md:text-justify"
  >
    <h1 id="travail" class="mt-14">Travail réalisé</h1>
    <h2 id="expos">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"
      ></i>Exposition du problème
    </h2>

    <p>
      Avant la révolution numérique, les calculs physiques étaient réalisés à la
      main et mécaniquement (anticythère), puis électroniquement depuis la fin
      du XIXe (Lord Kelvin et l'intégration mécanique)<sup id="fnref:1"
        ><a href="#fn:10">[1]</a></sup
      >. Le numérique a fini par les remplacer, pour deux raisons principales :
      les ordinateurs numériques font des calculs exacts, et peuvent être
      programmés pour réaliser une variété infinie de tâches, contrairement à
      l’analogique qui consiste à réaliser des calculs en se basant sur les
      propriétés fondamentales de la physique qui est régie entre autres par des
      équations différentielles (loi des noeuds ou lois de fonctionnement).
    </p>
    <p>
      Cependant, l’analogique a plusieurs avantages qui les rendent
      particulièrement performants dans les nouvelles technologies actuelles.
      Les réseaux de neurones nécessitent une puissance de calcul phénoménale,
      et les avantages de l'analogique tels que la capacité à réaliser de
      nombreux calculs en parallèle, sans stockage, ont poussé des entreprises
      comme Aspinity, qui se base sur les travaux initiés par des chercheurs
      comme Hava T. Siegelmann<sup id="fnref:20"><a href="#fn:20">[2]</a></sup>,
      à se servir de ces anciennes technologies pour les réutiliser dans des
      applications modernes.
    </p>
    <p>
      L'analogique, plus physiquement, possède aussi l'avantage de ne pas
      échantillonner le réel et de réaliser les calculs en se basant sur les
      propriétés de la physique, ce qui peut faire gagner en temps de calculs et
      des facteurs de 1000 en termes de coût énergétique lors d'applications
      usuelles<sup id="fnref:30"><a href="#fn:30">[3]</a></sup>, surtout si l'on
      considère l’impact écologique actuel du numérique.
    </p>

    <h2 id="principe">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Principe
      de la résolution analogique
    </h2>
    <p>
      La résolution d'équations différentielles par méthodes analogiques est
      dirigée par une méthode clef décrite dans <em>Analog Computing</em> de
      Prof. Dr. Bernd Ulmann : la méthode d'intégrations successives<sup
        id="fnref:40"><a href="#fn:40">[4]</a></sup
      >. En partant d'une équation de la forme x'' + bx' + cx +d = f, on isole
      x'' = f - bx' - cx - d. On peut alors intégrer successivement pour obtenir
      les valeurs x' puis x. Les intégrations sont effectuées par un
      amplificateur linéaire en configuration intégrateur, ou par un intégrateur
      mécanique.
    </p>
    <p>
      Grâce à cette méthode, la « Kelvin's feedback technique », on peut
      résoudre la plupart des équations différentielles linéaires par
      intégrations successives. On commence traditionnellement par faire un
      masse−ressort amorti.
    </p>

    <p>
      Voici un diagramme analytique associé au problème qu'on réalise
      généralement afin de programmer le calculateur analogique. Dans le cas du
      TIPE, il sert à schématiser le circuit électrique qui servira à la
      résolution. Ce diagramme dérangera par ailleurs certainement ceux qui se
      connaissent en calcul analogique. Il n'y a pas de volonté de rigueur
      absolue ici, seuls les éléments graphiques simplificateurs ont été
      retenus.
    </p>

    <p>(Les boites sont scrollables horizontalement)</p>

    <div class="svgg m-10">
      <img src={diagram} alt="Diagramme analytique du masse ressort" />
    </div>

    <h3>Explication :</h3>
    <p>
      On cherche à modéliser l'équation <code>ÿ + α·ẏ + β·y = e</code>. On a
      donc <code>ÿ = -α·ẏ -β·y + e</code>. Un sommateur permettra de calculer
      <code>ÿ</code> en sommant les trois termes. Chaque terme est obtenu en
      intégrant successivement <code>ÿ</code>. Chaque intégration successif est
      pondéré par une constante : <code>α</code> et <code>β</code>. On note
      qu'un inverseur est nécessaire pour retrouver du
      <code>-y</code> en sortie de l'intégrateur.
    </p>

    <h2 id="circuit">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Création
      du circuit
    </h2>

    <p>Ce diagramme peut être converti en circuit électrique :</p>
    <div class="svgg m-10">
      <img
        src={circuit}
        alt="Image de circuit électrique intégrateur"
        id="circuit"
      />
    </div>
    <p>
      On utilise des ALI en format intégrateurs (avec des résistances en
      parallèle pour des problèmes d'amplification de la composante continue).
      On remarque par ailleurs la nécessité d'avoir un inverseur après l'entrée
      en faisant les calculs.
    </p>
    <h3>Calculs :</h3>

    <div id="calculs">
      <p>
        On note <code>R'</code> les résistances de <code>1 MΩ</code>. On résonne
        en potentiels.
      </p>

      <p>La loi des nœuds en A donne :</p>

      <p>{@html eq1}</p>

      <p>On a donc l'équation suivante, qu'on note <code>(1)</code>:</p>

      <p>{@html eq2}</p>

      <p>La loi des nœuds en B donne :</p>

      <p>{@html eq3}</p>

      <p>On isole <code>Vx</code> et on substitue dans <code>(1)</code> :</p>

      <p>{@html eq4}</p>

      <p>
        On considère que <code>R</code> négligeable devant <code>R'</code>, ce
        qui donne sous forme normalisée :
      </p>

      <p>{@html eq5}</p>

      <p>
        On prend <code>RC = 1</code> à une puissance de 10 près, ce qui donnera bien
        ce que l'on veut. Il suffit de modifier les coeffs pour correspondre à l'équation
        modélisée.
      </p>
      <p>On résout classiquement {@html eq6}</p>
      <p>Et on identifie :</p>
      <p>{@html eq7}{@html eq8}{@html eq9}{@html eq10}{@html eq11}</p>
      <p>
        On a alors des paramètres réglables (α, β, C, R) pour différentes
        grandeurs de la solution de l'équadiff. (k, w, A, B) : {@html eq12}
      </p>
      <p>On a deux problèmes ici :</p>
      <ul>
        <li>
          Chaque paramètre (α, β, C, R) modifie plusieurs grandeurs (k, w, A,
          B). Il faut résoudre un système de 4 équations, 4 inconnues.
        </li>
        <li>La valeur finale dépend de β</li>
      </ul>
    </div>

    <div id="imggg">
      <img src={circ1} alt="Image circuit 1" />
      <img src={circ2} alt="Image circuit 2" />
    </div>

    <h2 id="exploitation">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"
      ></i>Exploitation des données
    </h2>

    <p>
      Je réalise l'aquisition de plusieurs signaux, pour plusieurs valeurs de
      alpha, beta, C (je préfère ne pas changer beta à cause de la modification
      de la valeur finale...).
    </p>

    <p>Je réalise un programme python qui les trace :</p>
    <FileReaderTrac />

    <p>On obtient une liste de sorties :</p>

    <div class="svgg">
      <img src={sorties} alt="Liste de sorties" />
    </div>

    <p>(Syntaxe : EXYCZ : alpha = X, beta = Y, C = Z*10 nF)</p>

    <p>
      Voici les résultats pour une entrée en échelon pour le pendule-plan puis
      pour le circuit d'ordre 2 (E81C3 je crois). Les données du pendule-plan
      ont été prélevées d'une vidéo par un logiciel de pointage.
    </p>
    <p>En superposant les deux courbes :</p>

    <div class="svgg">
      <img src={superp} alt="Superposition" />
    </div>

    <p>
      On voit que le pendule plan ne suit pas exactement l'allure d'un sinus
      amorti, je pense parce que Tracker ne traque pas super bien, et parce que
      la balle de ping-pong qui fait office de pendule est trop sensible aux
      incertitudes à cause de sa masse faible.
    </p>

    <h2 id="comparaison">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Comparaison
      avec le numérique
    </h2>

    <p>
      Voici un circuit qui résout des équadiffs numériquement, avec Odeint. Je
      trace également la sortie exacte, calculée précédemment sur un cahier.
    </p>

    <FileReaderComp />

    <p>Sortie du programme :</p>

    <div class="svgg">
      <img src={comp} alt="Sortie du programme" />
    </div>

    <p>
      On voit bien que Odeint et la solution calculée à la main sont
      indiscernables. Le circuit, lui, s'éloigne de la sortie attendue. La
      valeur finale n'est pas toute à fait la même, certainement à cause de
      l'incertitude sur Beta et Vi. Cependant, sans résoudre l'équation
      différentielle, on a une bonne allure de la solution.
    </p>

    <h2 id="conclusion">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Conclusion
    </h2>

    <p>Il reste désormais à expliquer cet écart, et à le quantifier.</p>
    <p>Numérique > Analogique mais ...</p>
    <p>
      Trouver des exemples où il est préférable d'avoir un circuit qui traite
      les données en direct, sans échantillonnage.
    </p>
    <p>Analyse énergétique aussi ?</p>

    <h2 id="tentative">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Tentative
      de systématisation
    </h2>

    <p>
      Pour tenter de systématiser un peu le processus de création de circuits,
      on propose par exemple de créer un circuit qui résout une équadiff
      linéaire d'ordre n, de la forme :
    </p>
    <p>{@html ed}</p>
    <p>Voici un script python qui dessine un circuit théorique.</p>
    <FileReaderSyst />
    <h3>Voici le résultat pour l'entrée "ordre = 5"</h3>
    <div class="svgg">
      <img src={circuitimg} alt="Circuit pour une équation d'ordre 3" />
    </div>

    <h3>Problèmes :</h3>
    <p>
      Il s'agit seulement d'un circuit théorique : il ne prend pas <em
        >(encore ?)</em
      > en compte les problèmes d'amplification de la composante continue. Il est
      en réalité impossible de mettre autant d'intégrateurs en série, surtout au-delà
      d'un ordre supérieur à 4. Mais il illustre bien la nécessité d'un inverseur
      à un retour sur deux, et le lien entre les coefficients de l'équation et les
      résistances pondérées du circuit.
    </p>

    <h2 id="pina">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Premières
      idées non abouties
    </h2>
    <p>
      Avant de cerner précisément la problématique et d'acquérir les
      connaissances précises, j'ai voulu explorer toutes les facettes du
      domaine, en particulier les méthodes de résolution mécaniques.
    </p>
    <h3>Intégrateur mécanique :</h3>
    <p>
      À la place d'utiliser des ALI pour intégrer successivement, on peut le
      faire mécaniquement avec cet intégrateur mécanique. Il faut ensuite
      assembler plusieurs de ces intégrateurs et ajouter des inverseurs et
      sommateurs (assez simples normalement) pour créer un circuit mécanique qui
      résout des équadiffs.
    </p>
    <p>
      Voici une tentative d'intégration mécanique. J'ai enlevé le support
      d'écriture afin de comprendre son fonctionnement :
    </p>
    <div class="svgg">
      <img src={im} alt="Intégrateur mécanique" />
    </div>

    <p>
      Un moteur permet de fournir une vitesse de rotation constante à la plaque
      carrée (je n'avais pas de disque). Plus haut, un module translatable
      permet le traçage de la courbe dont l'intégrale est voulue. La vitesse de
      rotation de la roue dépend de la position de cette dernière sur le
      "disque" en rotation. La distance de son point d’appui avec le centre du
      disque,
      <code>y</code>, varie dans le temps. Cette distance est contrôlée à la
      main en haut à droite. Quand le disque tourne d’un angle infinitésimal dθ,
      pendant un intervalle de temps <code>βdτ</code>, l’axe de la roue tourne
      d’un angle
      <code>y(τ) dθ</code>. Pendant un intervalle de temps
      <code>[0, t]</code>, l’axe de la roulette tourne donc d’un angle
      <code>α ∫ y(τ) β dτ</code>. Le cylindre en bois transmet donc la vitesse
      de rotation à une vis sans fin qui permet le traçage de l’intégrale (de 0
      à t) : <code>∫ y(τ) dτ</code>, à un facteur de proportionnalité près.
    </p>

    <p>
      Pour le dire simplement, plus la roue est éloignée du centre de rotation
      de la plateforme, plus elle tourne vite. Une relation linéaire entre
      vitesse et positon une opération de dérivée, et donc d'intégration dans
      l'autre sens.
    </p>

    <p>On obtient les résultats suivants :</p>

    <div class="svgg">
      <img
        src={mec}
        alt="Résultats de l'intégrateur mécanique"
        class="w-[100%]"
      />
    </div>

    <p>
      L'entrée est dessinée à la main en faisant translater le module
      translatable : la valeur de cette translation donne les y en fonction du
      temps. Les x sont données par la translation d'une feuille dont la vitesse
      est donnée par le moteur. Cette vitesse est synchronisée à celle de la
      translation de la feuille de sortie. Ici, j'ai tenté d'intégrer une courbe
      en 1/x en essayant de coller le plus possible au graphe que j'ai tracé au
      préalable.
    </p>
    <p>
      On voit bien que la sortie correspond grossièrement à du ln(x), même si on
      observe des erreurs. Ces erreurs sont dues à la transmission de la vitesse
      de rotation de la roue jusqu'à la roue et vis sans fin. Il y a souvent des
      accrochages qui créent un retard (ralentissement de la pente), qui est
      ensuite compensé quand la rotation reprend après le blocage.
    </p>

    <p>
      On voit bien que l'intégration mécanique n'est pas très optimisée :
      j'abandonne donc cette piste.
    </p>
  </article>

  <div class="divider mx-10 my-10">
    <i class="fa-solid fa-minus text-3xl text-primary"></i>
  </div>

  <article
    id="refs"
    class="prose max-w-none lg:text-xl lg:text-justify md:text-justify"
  >
    <h3>Références</h3>
    <ol class="mb-20">
      <li id="fn:10">
        Tides A Scientific History - David Edgar Cartwright <a
          href="#fnref:1"
          title="Retour au texte">↩</a
        >
      </li>
      <li id="fn:20">
        Neural Networks and Analog Computation: Beyond the Turing Limit - Hava
        T. Siegelmann <a href="#fnref:20" title="Retour au texte">↩</a>
      </li>
      <li id="fn:30">
        12 Future and chances, Analog Computing - Prof. Dr. Bernd Ulmann <a
          href="#fnref:30"
          title="Retour au texte">↩</a
        >
      </li>
      <li id="fn:40">
        7.2 Kelvin’s feedback technique, Analog Computing - Prof. Dr. Bernd
        Ulmann <a href="#fnref:40" title="Retour au texte">↩</a>
      </li>
      <li id="fn:50">
        4.1.2 Drift stabilization, Analog Computing - Prof. Dr. Bernd Ulmann <a
          href="#fnref:50"
          title="Retour au texte">↩</a
        >
      </li>
    </ol>
  </article>
</div>

<style>
  article {
    margin: 0 10%;
  }

  article #imggg {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: fit-content;
    overflow-x: scroll;
  }

  article #imggg > * {
    width: 48%;
    overflow-x: scroll;
    padding: 1em;
    border-radius: 20px;
    border: 3px solid rgba(117, 117, 117, 0.342);
    background: rgba(37, 37, 37, 0.185);
  }

  article img {
    min-height: 40vh;
  }

  @media (max-width: 768px) {
    article #imggg {
      flex-direction: column;
    }

    article #imggg > * {
      width: 100%;
    }
  }

  pre {
    margin: 0;
    padding: 0;
  }
</style>
