<!-- <script>
  import img from "$lib/images/yellowstone.png";
</script> -->

<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import gsap from "gsap";

  import { onMount } from "svelte";
  onMount(() => {
    if (window.innerWidth > 768) {
      gsap.to("#timeline", {
        scrollTrigger: {
          trigger: "#timeline",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        x: -300,
      });
    }
  });
</script>

<div class="min-h-svh">
  <h1 class="text-5xl font-bold mt-32 text-center">Fourre-tout</h1>

  <div class="divider mx-10">
    <i class="fa-solid fa-minus text-3xl text-primary"></i>
  </div>

  <!-- <div id="image1" class="rounded-lg h-64" data-theme="dark">
    <div id="blur1" class="rounded-lg"></div>
  </div> -->

  <!-- <div id="image2" class="rounded h-64" data-theme="light">
    <div id="blur2" class="rounded"></div>
  </div> -->

  <div id="maindiv" class="text-xl">
    <p class="text-2xl font-bold my-5">
      <i class="fa-regular fa-circle-dot text-primary text-xl mr-6"></i>Projets
      divers :
    </p>
    <div id="timeline">
      <ul class="timeline timeline-vertical">
        <li>
          <hr />
          <div class="timeline-start">2023 − 2024</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
              ><path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              /></svg
            >
          </div>
          <div class="timeline-end timeline-box">
            <a
              class="link underline hover:text-primary transition-colors duration-200"
              href="https://mpsi-1.vercel.app/">Site web de la MPSI 1</a
            >
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start">2024</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
              ><path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              /></svg
            >
          </div>
          <div class="timeline-end timeline-box">
            <a
              class="link underline hover:text-primary transition-colors duration-200"
              href="https://kholles.vercel.app/probleme.html"
              >Problème de répartitions de khôlles
            </a>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">2022 − 2023</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
              ><path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              /></svg
            >
          </div>
          <div class="timeline-end timeline-box">
            <a
              class="link underline hover:text-primary transition-colors duration-200"
              href="https://tg1.vercel.app/"
              >Site web de la Terminale Générale 1
            </a>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">2021 − 2022</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
              ><path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              /></svg
            >
          </div>
          <div class="timeline-end timeline-box">
            <a
              class="link underline hover:text-primary transition-colors duration-200"
              href="https://aulysv.github.io/exos-python-si/"
              >Premiers exercices python en première</a
            >
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">2021 − 2022</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
              ><path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              /></svg
            >
          </div>
          <div class="timeline-end timeline-box">
            <a
              class="link underline hover:text-primary transition-colors duration-200"
              href="https://aulysv.github.io/projet-si/"
              >Petit projet de spé SI en première
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  /* #image2 {
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    margin-bottom: 2em;
    margin-top: 2em;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  #image2 {
    background-image: url("$lib/images/ss/ssmc6.png");
  }

  @media (max-width: 600px) {
    #image2 {
      display: none;
    }
  }

  #blur1,
  #blur2 {
    background: rgba(0, 0, 0, 0);
    height: 100%;
    width: auto;
  } */

  #maindiv {
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 3em;
  }

  @media (min-width: 1024px) {
    #maindiv {
      margin-left: 15vw;
      margin-right: 15vw;
    }
  }
  #timeline {
    margin-top: 2em;
    max-width: 100vw;
    overflow: scroll;
  }
</style>
