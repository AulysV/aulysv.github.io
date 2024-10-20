<script>
  import "katex/dist/katex.min.css";
  import { onMount } from "svelte";

  let eq1 = "$$ i_{1} +i_{2} +i_{3} =i_{c} +i_{R'} $$";
  let eq2 =
    "$$ \\frac{-V_{i}}{R} +\\frac{V_{0}}{\\beta R} +\\frac{V_{x}}{\\alpha R} =-C\\frac{dV_{x}}{dt} -\\frac{V_{x}}{R} $$";
  let eq3 = "$$ \\frac{V_{x}}{R} =C\\frac{dV_{0}}{dt} -\\frac{V_{0}}{R} $$";
  let eq4 =
    "$$ V_{i} = R^{2} C^{2}\\frac{d^{2} V_{0}}{dt^{2}} +\\left[\\frac{RC}{\\alpha } +2RC\\frac{R}{R'}\\right]\\frac{dV_{0}}{dt} +\\left[\\frac{1}{\\beta } +\\frac{R}{R'}\\left(\\frac{1}{\\alpha } +\\frac{R}{R'}\\right)\\right] V_{0} $$";
  let eq5 =
    "$$ \\frac{d^{2} V_{0}}{dt} +\\left(\\frac{1}{\\alpha ( RC)^{2}}\\right)\\frac{dV_{0}}{dt} +\\frac{V_{0}}{\\beta ( RC)^{2}} = \\frac{V_{i}}{( RC)^{2}} $$";

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

    <h2>
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Ancrage
      au thème
    </h2>
    <p>
      Lorsqu'une solution analytique à un problème n'est pas accessible, on peut
      recourir au numérique. Une autre méthode de résolution peut faire gagner
      en temps de calcul ou en stabilité : la résolution analogique, grâce à des
      circuits électriques. On convertit ainsi un problème de résolution en un
      problème de modélisation.
    </p>

    <h2>
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i> Motivations
      du choix
    </h2>
    <p>
      Travailler sur le calcul analogique me permet à la fois de comprendre les
      similarités entre l'électronique et les autres domaines de la physique,
      mais aussi de comprendre les raisons de la réapparition récente du calcul
      analogique dans les dernières recherches technologiques, comme en machine
      learning.
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
    <p>(À faire)</p>
  </article>

  <div class="divider mx-10 my-10">
    <i class="fa-solid fa-minus text-3xl text-primary"></i>
  </div>

  <article
    id="maindiv"
    class="prose max-w-none lg:text-xl lg:text-justify md:text-justify"
  >
    <h1>Travail réalisé</h1>
    <h2>
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

    <h2>
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
</style>
