<script>
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";

  import "@fortawesome/fontawesome-free/css/all.min.css";
  import aulys from "$lib/images/napopiano.jpg";
  import logo from "$lib/images/logo.svg";
  import nap from "$lib/images/nap.svg";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import nut from "$lib/images/nut.svg";

  import img1 from "$lib/images/box/img (1).jpg";
  import img2 from "$lib/images/box/img (2).jpg";
  import img3 from "$lib/images/box/img (3).jpg";
  import img4 from "$lib/images/box/img (4).jpg";
  import img5 from "$lib/images/box/img (5).jpg";
  import img6 from "$lib/images/box/img (6).jpg";
  import img7 from "$lib/images/box/img (7).jpg";
  import img8 from "$lib/images/box/img (8).jpg";
  import img9 from "$lib/images/box/img (9).jpg";
  import img10 from "$lib/images/box/img (10).jpg";

  import miab from "$lib/images/zik/miab.jpg";
  import theriddle from "$lib/images/zik/theriddle.jpg";
  import hotelcalifornia from "$lib/images/zik/hotelcalifornia.jpg";
  import time from "$lib/images/zik/time.jpg";
  import thapf from "$lib/images/zik/thapf.jpg";
  import lgdp from "$lib/images/zik/lgdp.jpg";
  import greenday from "$lib/images/zik/greenday.jpg";
  import aceofbase from "$lib/images/zik/aceofbase.jpg";

  let imglist = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  let greeting = "Bonjour";

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 18 || currentHour < 6) {
    greeting = "Bonsoir";
  }

  // onMount(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.from("#Nut", {
  //     y: 200,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "bounce.out",
  //     scrollTrigger: {
  //       trigger: "#Nut",
  //       start: "top 80%",
  //       end: "top 50%",
  //       toggleActions: "play none none none",
  //     },
  //   });
  // });

  onMount(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#photos",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  });

  let musicList = [
    {
      cover: miab,
      title: "Message In A Bottle",
      artist: "The Police",
    },
    {
      cover: theriddle,
      title: "The Riddle",
      artist: "Nik Kershaw",
    },
    {
      cover: hotelcalifornia,
      title: "Hotel California",
      artist: "Eagles",
    },
    {
      cover: time,
      title: "Time",
      artist: "Pink Floyd",
    },
    {
      cover: thapf,
      title: "The Heart Asks Pleasure First",
      artist: "Michael Nyman",
    },
    {
      cover: lgdp,
      title: "La Groupie Du Pianiste",
      artist: "Michel Berger",
    },
    {
      cover: greenday,
      title: "Boulevard of Broken Dreams",
      artist: "Green Day",
    },
    {
      cover: aceofbase,
      title: "The Sign",
      artist: "Ace of Base",
    },
  ];
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

<div id="boiboites">
  <div id="div1">
    <h3 class="mb-5">🕰️ At the moment...</h3>
    <img src={logo} alt="logo" class="h-52 md:h-44 md:m-4 lg:h-60 m-7" />
  </div>

  <div id="div2">
    <h3>🥜 Me in a nutshell:</h3>
    <img src={nut} alt="Nut" id="Nut" class="h-60 mt-5" />
  </div>

  <div id="div3">
    <h3>👀 Why are you here?</h3>
    <h3>→ To contact me</h3>
    <p>
      Mail : <a class="link link-primary" href="mailto:contact@aulysv.fr"
        >contact@aulysv.fr</a
      >
    </p>
    <h3>→ No precise reason</h3>
    <p>
      Take a look at <a
        class="link link-primary"
        href="https://biblio.aulysv.fr/"
        target="_blank"
        rel="noopener noreferrer">my notes library</a
      >, or the
      <a class="link link-primary" href="/tipe">TIPE page</a> (both in french 🥖)
    </p>
  </div>

  <div id="div4">
    <h3>🖼️ Some photos</h3>
    <box id="photos">
      {#each imglist as img}
        <a
          href={img}
          data-pswp-width="800"
          data-pswp-height="600"
          target="_blank"
        >
          <img src={img} alt="img" class="max-w-52 h-auto m-2 object-contain" />
        </a>
      {/each}
    </box>
  </div>
  <div id="div5">
    <h3 class="mb-10">🎵 Lately</h3>
    {#each musicList as music}
      <box class="music-item">
        <img src={music.cover} alt={music.title} class="album-cover" />
        <span class="music-info">
          <h4>{music.title}</h4>
          <p>{music.artist}</p>
        </span>
      </box>
    {/each}
  </div>
</div>

<div id="fiskur" class="bg-base-200 w-dvw"></div>

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
    border: 3px solid rgba(0, 0, 0, 0.4);
    background: rgba(43, 43, 43, 0.137);
    backdrop-filter: blur(80px);
  }

  #hero h1 {
    font-family: "Outfit", "Fira Sans", "Trebuchet MS", "Lucida Sans Unicode",
      "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  }

  #boiboites div {
    display: flex;
    flex-direction: column;
    border-radius: 0.5em;
    padding: 2em;
    border: 3px solid rgba(0, 0, 0, 0.4);
    background: rgba(43, 43, 43, 0.137);
    backdrop-filter: blur(80px);
  }

  #boiboites {
    display: grid;
    margin: 2em;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1em;
  }

  #div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  #div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  #div3 {
    grid-area: 1 / 3 / 2 / 6;
  }
  #div4 {
    grid-area: 2 / 1 / 6 / 4;
  }
  #div5 {
    grid-area: 2 / 4 / 6 / 6;
  }

  @media (max-width: 1300px) {
    #boiboites {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, minmax(150px, auto));
    }

    #div1 {
      grid-area: 1 / 1 / 2 / 2;
    }

    #div2 {
      grid-area: 1 / 2 / 2 / 3;
    }

    #div3 {
      grid-area: 2 / 1 / 3 / 3;
    }

    #div4 {
      grid-area: 3 / 1 / 4 / 2;
    }

    #div5 {
      grid-area: 3 / 2 / 4 / 3;
    }

    #photos {
      margin: auto;
      display: flex;
    }

    #div5 box {
      margin: auto;
    }
  }

  /* @media (min-width: 600px) and (max-width: 1150px) {
    #boiboites {
      display: flex;
      flex-direction: column;
    }

    #div5 boite {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1em;
    }

    .music-item {
      flex-direction: column;
      align-items: flex-start;
    }

    .album-cover {
      width: 100%;
      height: auto;
      margin-bottom: 0.5em;
    }

    .music-info {
      text-align: center;
    }
  } */

  @media (max-width: 600px) {
    #boiboites {
      display: flex;
      flex-direction: column;
    }
    #photos {
      margin: auto;
      display: flex;
    }

    #div5 box {
      margin: auto;
    }
  }

  .music-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1em;
  }

  .album-cover {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-right: 1em;
  }

  .music-info h4 {
    margin: 0;
    font-size: 1.2em;
  }

  .music-info p {
    margin: 0;
    color: #666;
  }

  #div4 {
    overflow-y: auto;
  }
  #photos {
    max-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
  }
  #photos img {
    border-radius: 0.5em;
  }
</style>
