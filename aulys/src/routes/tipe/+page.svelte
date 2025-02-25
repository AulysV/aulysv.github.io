<script lang="ts">
  import FileReader from "./FileReader.svelte";
  import circuitimg from "$lib/images/output.svg";

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
</script>

<div class="blur-bg w-screen"></div>
<div class="pat-bg w-screen"></div>

<div id="content" class="w-screen">
  <h1 class="text-5xl font-bold mt-32 text-center">TIPE</h1>
  <p class="text-center">(Travail d'initiative personnelle encadré)</p>
  <div class="divider mx-10">
    <i class="fa-solid fa-minus text-3xl text-primary"></i>
  </div>

  <article
    id="maindiv"
    class="prose max-w-none lg:text-xl lg:text-justify md:text-justify"
  >
    <h2>Résolution analogique d'équations différentielles</h2>

    <p>
      Je trouvais amusant de faire une petite page pour montrer à quel point je
      regrette d'avoir choisi ce sujet de TIPE sans fond. J'ai tenté de
      structurer un peu le tohu-bohu qu'est mon TIPE, donc voici comment est
      organisée la page :
    </p>
    <ul>
      <li><a href="#mcot">MCOT</a></li>
      <li>
        <a href="#travail">Travail réalisé</a>
        <ul>
          <li><a href="#piste">Piste actuelle</a></li>
          <li><a href="#tentative">Tentative de systématisation</a></li>
          <li><a href="#pina">Premières idées non abouties</a></li>
        </ul>
      </li>
    </ul>
  </article>

  <div class="divider mx-10 my-10">
    <i class="fa-solid fa-minus text-3xl text-primary"></i>
  </div>

  <article
    id="maindiv"
    class="prose max-w-none lg:text-xl lg:text-justify md:text-justify"
  >
    <div
      class="collapse dabg"
      style="border: 3px solid rgba(117, 117, 117, 0.342);"
    >
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">MCOT</div>
      <div class="collapse-content px-20">
        <h2>
          <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Ancrage
          au thème
        </h2>
        <p>
          Lorsqu'une solution analytique à un problème n'est pas accessible, on
          peut recourir au numérique. Une autre méthode de résolution peut faire
          gagner en temps de calcul ou en stabilité : la résolution analogique,
          grâce à des circuits électriques. On convertit ainsi un problème de
          résolution en un problème de modélisation.
        </p>

        <h2>
          <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Motivations
          du choix
        </h2>
        <p>
          Travailler sur le calcul analogique me permet à la fois de comprendre
          les similarités entre l'électronique et les autres domaines de la
          physique, mais aussi de comprendre les raisons de la réapparition
          récente du calcul analogique dans les dernières recherches
          technologiques, comme en machine learning.
        </p>

        <h2>
          <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Positionnement
          thématique
        </h2>
        <ul>
          <li><strong>Sciences industrielles</strong> : Électronique</li>
          <li><strong>Physique</strong> : Micro-technologies</li>
          <li>
            <strong>Mathématiques</strong> : Analyse : Équations différentielles
            (EDO)
          </li>
        </ul>

        <h2>
          <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Mots-clefs
        </h2>
        <ul>
          <li>
            <strong>Français</strong> : Analogique, Résolution, Équations
            différentielles, Numérique
          </li>
          <li>
            <strong>Anglais</strong> : Analog computing, Differential Equations,
            Numeric
          </li>
        </ul>

        <h2>
          <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Bibliographie
          commentée
        </h2>
        <p>
          Avant la révolution numérique, les calculs physiques étaient réalisés
          à la main et mécaniquement (anticythère), puis électroniquement depuis
          la fin du XIXe (Lord Kelvin et l'intégration mécanique)<sup
            id="fnref:1"><a href="#fn:1">[1]</a></sup
          >. Le numérique a fini par les remplacer, pour deux raisons
          principales : les ordinateurs numériques font des calculs exacts, et
          peuvent être programmés pour réaliser une variété infinie de tâches,
          contrairement à l’analogique qui consiste à réaliser des calculs en se
          basant sur les propriétés fondamentales de la physique qui est régie
          entre autres par des équations différentielles (loi des noeuds ou lois
          de fonctionnement).
        </p>
        <p>
          Cependant, l’analogique a plusieurs avantages qui les rendent
          particulièrement performants dans les nouvelles technologies
          actuelles. Les réseaux de neurones nécessitent une puissance de calcul
          phénoménale, et les avantages de l'analogique tels que la capacité à
          réaliser de nombreux calculs en parallèle, sans stockage, ont poussé
          des entreprises comme Aspinity, qui se base sur les travaux initiés
          par des chercheurs comme Hava T. Siegelmann<sup id="fnref:2"
            ><a href="#fn:2">[2]</a></sup
          >, à se servir de ces anciennes technologies pour les réutiliser dans
          des applications modernes.
        </p>
        <p>
          L'analogique, plus physiquement, possède aussi l'avantage de ne pas
          échantillonner le réel et de réaliser les calculs en se basant sur les
          propriétés de la physique, ce qui peut faire gagner en temps de
          calculs et des facteurs de 1000 en termes de coût énergétique lors
          d'applications usuelles<sup id="fnref:3"><a href="#fn:3">[3]</a></sup
          >, surtout si l'on considère l’impact écologique actuel du numérique.
        </p>
        <p>
          La résolution d'équations différentielles par méthodes analogiques est
          dirigée par une méthode clef décrite dans <em>Analog Computing</em> de
          Prof. Dr. Bernd Ulmann : la méthode d'intégrations successives<sup
            id="fnref:4"><a href="#fn:4">[4]</a></sup
          >. En partant d'une équation de la forme x'' + bx' + cx +d = f, on
          isole x'' = f - bx' - cx - d. On peut alors intégrer successivement
          pour obtenir les valeurs x' puis x. Les intégrations sont effectuées
          par un amplificateur linéaire en configuration intégrateur, ou par un
          intégrateur mécanique.
        </p>
        <p>
          Les principales limites de cette méthode élémentaire sont la
          difficulté de programmation, qui est élevée pour des résultats souvent
          moins précis que la résolution numérique. En effet, les erreurs
          peuvent se retrouver amplifiées, ce qui a longtemps été un frein à la
          méthode analogique (frein qui a été révolutionnairement levé par Edwin
          A. Goldberg dans les années 50)<sup id="fnref:5"
            ><a href="#fn:5">[5]</a></sup
          >.
        </p>

        <h3>Références</h3>
        <ol>
          <li id="fn:1">
            Tides A Scientific History - David Edgar Cartwright <a
              href="#fnref:1"
              title="Retour au texte">↩</a
            >
          </li>
          <li id="fn:2">
            Neural Networks and Analog Computation: Beyond the Turing Limit -
            Hava T. Siegelmann <a href="#fnref:2" title="Retour au texte">↩</a>
          </li>
          <li id="fn:3">
            12 Future and chances, Analog Computing - Prof. Dr. Bernd Ulmann <a
              href="#fnref:3"
              title="Retour au texte">↩</a
            >
          </li>
          <li id="fn:4">
            7.2 Kelvin’s feedback technique, Analog Computing - Prof. Dr. Bernd
            Ulmann <a href="#fnref:4" title="Retour au texte">↩</a>
          </li>
          <li id="fn:5">
            4.1.2 Drift stabilization, Analog Computing - Prof. Dr. Bernd Ulmann <a
              href="#fnref:5"
              title="Retour au texte">↩</a
            >
          </li>
        </ol>

        <h2>
          <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Problématique
          retenue :
        </h2>
        <p>
          Comment résoudre des équations différentielles grâce à des méthodes
          analogiques et quelles en sont les limites ?
        </p>

        <h2>
          <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Objectif
        </h2>
        <p>On propose donc :</p>
        <ul>
          <li>
            De comprendre les principes de base du calcul analogique et de la
            résolution d'équations différentielles, en résolvant des équations
            différentielles ordinaires.
          </li>
          <li>
            De comparer les résultats obtenus avec ceux de la résolution
            numérique
          </li>
          <li>Proposer une systématisation de la résolution</li>
        </ul>
      </div>
    </div>
  </article>

  <article
    id="maindiv"
    class="prose max-w-none lg:text-xl lg:text-justify md:text-justify"
  >
    <h1 id="travail" class="mt-14">Travail réalisé</h1>
    <h2 id="piste">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Piste
      actuelle
    </h2>

    <p>
      Grâce à la « Kelvin's feedback technique » que j'ai décrite dans la
      bibliographie commentée, on peut résoudre la plupart des équations
      différentielles linéaires par intégrations successives. On commence
      traditionnellement par faire un masse−ressort amorti.
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

    <div id="svgg" class="m-10">
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

    <p>Ce diagramme peut être converti en circuit électrique :</p>
    <div id="svgg" class="m-10">
      <img
        src={circuit}
        alt="Image de circuit électrique intégrateur"
        id="circuit"
      />
    </div>
    <p>
      On utilise des ALI en format intégrateurs (avec des résistances en
      parallèle). On remarque par ailleurs la nécessité d'avoir un inverseur
      après l'entrée en faisant les calculs.
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
    </div>

    <p>
      Voici les résultats pour une entrée en échelon pour le pendule-plan puis
      pour le circuit d'ordre 2. Les données du pendule-plan ont été prélevées
      d'une vidéo par un logiciel de pointage.
    </p>
    <div id="imggg">
      <img src={graph} alt="Graphe du pendule plan" />
      <img src={graph2} alt="Graphe du circuit" />
    </div>

    <p>
      (pas encore exporté les données du circuit, le deuxième graphe est un
      graphe test)
    </p>

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
    <FileReader />
    <h3>Voici le résultat pour l'entrée "ordre = 5"</h3>
    <img id="imgg" src={circuitimg} alt="Circuit pour une équation d'ordre 3" />
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
      Voici l'intégrateur mécanique auquel j'ai enlevé le support d'écriture
      afin de comprendre son fonctionnement :
    </p>

    <img id="imgg" src={im} alt="Intégrateur mécanique" />

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

    <img
      id="imgg"
      src={mec}
      alt="Résultats de l'intégrateur mécanique"
      class="w-[100%]"
    />

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
</div>

<style>
  #maindiv {
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
