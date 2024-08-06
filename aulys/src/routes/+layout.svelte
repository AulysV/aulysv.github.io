<script>
  import aulys from "$lib/images/aulys.png";
  import "../app.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  // import { fade } from "svelte/transition";
  import { slide } from "svelte/transition";
  export let data;

  // import Loader from "$lib/components/Loader.svelte"; // Or whatever your component path is
  import { beforeNavigate, afterNavigate } from "$app/navigation";

  let isLoading = false;

  beforeNavigate(() => (isLoading = true));
  afterNavigate(() => (isLoading = false));

  import { afterUpdate } from "svelte";

  let showMessage = false;

  afterUpdate(() => {
    setTimeout(() => {
      showMessage = true;
    }, 5000);
  });
</script>

{#if isLoading}
  <div
    class="fixed top-0 left-0 w-svw h-screen z-[99] flex flex-col justify-center bg-base-200"
  >
    <span class="loading loading-ring self-center ml-auto mr-auto w-24 h-24"
    ></span>
    <p class="text-primary text-xl mt-10 ml-auto mr-auto">Chargementation...</p>

    <p class="mt-10 ml-auto mr-auto">(Recharger la page si necessaire)</p>
  </div>
{/if}

<div class="drawer">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {#key data.pathname}
      <div transition:slide>
        <slot />
      </div>
    {/key}
    <label
      for="my-drawer-2"
      class="toast toast-start toast-top btn btn-circle btn-primary drawer-button m-5 ml-7"
    >
      <i class="fa-solid fa-bars"></i>
    </label>
  </div>

  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"
    ></label>

    <ul class="menu bg-base-200 w-80 p-4 min-h-svh">
      <div class="flex justify-evenly">
        <a class="btn btn-ghost text-xl" href="/"
          ><i class="fas fa-home"></i> Accueil</a
        >
        <label class="swap swap-rotate">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" class="theme-controller" value="adwaita" />

          <!-- sun icon -->
          <svg
            class="swap-off h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>

          <!-- moon icon -->

          <svg
            class="swap-on h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>
        </label>
      </div>
      <!-- <li>
        <div class="flex w-52 flex-col gap-4 self-center my-5">
          <div class="flex items-center gap-4">
            <div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
            <div class="flex flex-col gap-4">
              <div class="skeleton h-4 w-20"></div>
              <div class="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div class="skeleton h-32 w-full"></div>
        </div>
      </li> -->

      <li></li>
      <li>
        <a href="https://biblio.aulysv.fr" target="_blank"
          >Bibliothèque de notes <i class="fa-solid fa-up-right-from-square"
          ></i></a
        >
      </li>
      <!-- <li><a href="/reims">Reims</a></li> -->
      <li>
        <a
          href="https://biblio.aulysv.fr/Liste/TIPE"
          target="_blank"
          rel="noopener noreferrer"
          >TIPE <i class="fa-solid fa-up-right-from-square"></i></a
        >
      </li>

      <!-- <li>
        <a>Parent</a>
        <ul>
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li>
            <a>Parent</a>
            <ul>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a>Item 3</a></li> -->
    </ul>
  </div>
</div>

<!-- <aside class="fixed top-0 left-0 w-64 h-screen bg-red-600">
  <div class="h-screen flex flex-col justify-center items-center">
    <h1 class="text-4xl font-bold">Test Div</h1>
    <p class="text-lg">This is a test div.</p>
  </div>
</aside> -->

<footer class="footer items-center bg-base-200 p-10 sm:flex-row flex-col">
  <aside>
    <img src={aulys} alt="logoauys" class="h-20 w-20" />
    <p>2024</p>
  </aside>
  <aside>
    <p>Imagine footer things here</p>
    <p>
      <a
        href="https://github.com/AulysV/aulysv.github.io"
        target="_blank"
        rel="noopener noreferrer"
        class="link">This website's source code</a
      >
    </p>
  </aside>
  <nav>
    <h6 class="footer-title">Lorem Ipsum</h6>
    <div class="grid grid-flow-col gap-4">
      <a
        href="https://github.com/AulysV"
        class="link text-2xl underline hover:text-primary mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-github"></i></a
      >
      <a
        href="https://discord.com/users/637695900382134303"
        class="link underline hover:text-primary text-2xl mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-discord"></i></a
      >
      <a
        href="https://www.instagram.com/aulysvinay/"
        class="link underline hover:text-primary text-2xl mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-instagram fa-solid"></i></a
      >
    </div>
  </nav>
</footer>

<!-- 
<footer class="footer items-center p-4 bg-base-300">
  <aside class="items-center grid-flow-col">
    <p>Aulys − 2024</p>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a
      href="https://github.com/AulysV"
      class="link text-2xl underline hover:text-primary mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fa-brands fa-github"></i></a
    >
    <a
      href="https://discord.com/users/637695900382134303"
      class="link underline hover:text-primary text-2xl mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fa-brands fa-discord"></i></a
    >
  </nav>
</footer> -->

<!-- <style>
#navbarmain {
  width: calc(97vw);
}

footer {
  width: calc(97vw);
}
</style> -->

<style>
  footer {
    display: flex;
    justify-content: space-between;
  }
  .backdrop-blur {
    --backdrop-blur-color: #0000ff;
  }
</style>
