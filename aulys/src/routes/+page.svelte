<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import aulys from "$lib/images/napopiano.jpg";

  let greeting = "Bonjour";

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 18 || currentHour < 6) {
    greeting = "Bonsoir";
  }
</script>

<div id="hero" class="hero min-h-svh">
  <div
    class="hero-content flex-col lg:flex-row lg:max-w-5xl md:max-w-xl sm:max-w-md max-w-64"
  >
    <img
      src={aulys}
      class="mask mask-hexagon-2 lg:max-w-xs mx-20 sm:max-w-52 mb-10 max-w-60"
    />

    <div>
      <h1 class="text-5xl lg:text-8xl font-bold">{greeting}</h1>
      <p class="py-6 lg:text-3xl">
        This is Aulys VINAY's website, coded on the fly after a physics exam.
      </p>

      <a href="#Test"
        ><button class="btn btn-primary">
          <i class="fa-solid fa-arrow-down text-ba"></i>Ok</button
        >
      </a>
    </div>
  </div>
</div>

<div id="Test" class="min-h-svh bg-base-200 w-dvw">
  <article id="maindiv" class="prose max-w-none lg:text-xl lg:p-36 p-10">
    <h1>Why are you here?</h1>
    <h2>🤨 To know more about me</h2>
    <p>
      <a href="#about"
        ><i class="fa-solid fa-arrow-down text-ba mr-3"></i>Scroll down</a
      >
    </p>
    <h2>📬️ To contact me</h2>
    <p>Mail : <a href="mailto:contact@aulysv.fr">contact@aulysv.fr</a></p>
    <h2>🤷 No precise reason</h2>
    <p>
      Take a look at my notes library (in French) : <a
        href="https://biblio.aulysv.fr/"
        target="_blank"
        rel="noopener noreferrer">https://biblio.aulysv.fr/</a
      >, or simply continue scrolling
    </p>
  </article>
</div>

<div id="about" class="bg-base-100 w-dvw">
  <article id="maindiv" class="prose max-w-none lg:text-xl lg:p-36 p-10">
    <h1>Who am I?</h1>
    <p>
      I'm Aulys VINAY, a french student in engeneering, currently in "maths spé"
      (aka second year of eating maths and physics).
    </p>
    <p>I like :</p>
    <ul>
      <li>Science (stockholm syndrome)</li>
      <li>
        Music (🎹, 🎷, 🎸, 🪈 <span class="text-sm">(this is an oboe)</span>,
        ...)
      </li>
      <li>
        Tech-related stuff (web dev, linux <span class="text-sm">gnome ❤️</span
        >, ...)
      </li>
      <li>Lego (🗿)</li>
      <li>Travelling (→ cycling and photos)</li>
      <li>Minecraft</li>
      <li>
        <em>Doing stupid things</em> but seriously
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          class="link-hover"
          >(learn why
          <i class="fa-solid fa-up-right-from-square text-sm"></i>)</a
        >
      </li>
      <!-- Dire why : lien note biblio -->
    </ul>
    <p>I don't like :</p>
    <ul>
      <li>Pineapple on pizza 🔫</li>
    </ul>
  </article>
</div>
<!-- <style>
  #hero {
    height: 70vh;
  }
</style> -->

<!-- <style>
#landing {
    height: 90vh;
    width: 90vw;
    margin: 2em auto;
    border-radius: 20px;
    background-image: url('src/images/lush-min.jpg');
    background-attachment: fixed;document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
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
