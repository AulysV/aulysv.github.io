<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import aulys from "$lib/images/napopiano.jpg";
  import nap from "$lib/images/nap.svg";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let greeting = "Bonjour";

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 18 || currentHour < 6) {
    greeting = "Bonsoir";
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#napoimg", {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: "#napoimg",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });
  });
</script>

<div class="blur-bg"></div>
<div class="pat-bg"></div>

<div id="hero" class="hero min-h-svh">
  <div
    class="hero-content flex-col lg:flex-row lg:max-w-5xl md:max-w-xl sm:max-w-md max-w-64"
  >
    <img
      src={aulys}
      class="mask mask-hexagon lg:max-w-xs mx-20 sm:max-w-52 mb-10 max-w-60"
    />

    <div>
      <h1 class="text-5xl lg:text-8xl font-bold">{greeting}</h1>
      <p class="py-6 lg:text-2xl font-medium">This is Aulys VINAY's website.</p>
      <a href="#fiskur"
        ><button class="btn btn-primary">
          <i class="fa-solid fa-arrow-down text-ba"></i>Ok</button
        >
      </a>
    </div>
  </div>
</div>

<div id="fiskur" class="bg-base-200 w-dvw">
  <article id="maindiv" class="prose max-w-none lg:text-xl lg:p-36 p-10">
    <!-- <h2>In 10 seconds?</h2>
    <p>
      I'm more of a playful thinker, an explorer, a musician and a sportsman
      than a french student in engineering.
    </p> -->
    <h2>Why are you here?</h2>
    <h3>📬️ To contact me</h3>
    <p>Mail : <a href="mailto:contact@aulysv.fr">contact@aulysv.fr</a></p>
    <h3>🤷 No precise reason</h3>
    <p>
      Take a look at <a
        href="https://biblio.aulysv.fr/"
        target="_blank"
        rel="noopener noreferrer">my notes library</a
      >, or the
      <a href="/tipe">TIPE page</a> (both in french 🥖)
    </p>
    <img src={nap} id="napoimg" alt="Napoléours" class="mx-auto h-60" />
  </article>
</div>

<style>
  .blur-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
        circle at 20% 20%,
        rgba(68, 0, 68, 0.171),
        transparent 60%
      ),
      radial-gradient(circle at 80% 40%, rgba(0, 41, 70, 0.3), transparent 60%),
      radial-gradient(circle at 50% 80%, rgba(0, 102, 60, 0.3), transparent 60%);
    filter: blur(80px);
    z-index: -1;
    overflow: hidden;
  }

  .pat-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: url("$lib/images/pattern.svg");
  }

  #fiskur {
    border-top: 3px solid rgba(0, 0, 0, 0.4);
    border-bottom: 3px solid rgba(0, 0, 0, 0.4);
    background: rgba(43, 43, 43, 0.137);
    backdrop-filter: blur(80px);
    margin-bottom: 2.5em;
  }
</style>
