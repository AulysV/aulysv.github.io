<script>
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
</script>

{#if isLoading}
  <div
    class="fixed top-0 left-0 w-svw h-screen z-[99] flex flex-col justify-center bg-base-300"
  >
    <span class="loading loading-ring self-center ml-auto mr-auto w-24 h-24"
    ></span>
    <p class="text-primary text-xl mt-10 ml-auto mr-auto">Chargementation...</p>
  </div>
{/if}

<div id="navbarmain" class="navbar rounded-md bg-base-300">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/tipe">Tipe</a></li>

        <li>
          <a>Autres</a>
          <ul class="p-2">
            <li><a href="/autres">Projets</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/">Accueil</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/tipe">Tipe</a></li>

      <li>
        <details>
          <summary>Autres</summary>
          <ul class="p-2">
            <li><a href="/autres">Projets</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    <label class="flex cursor-pointer gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
      >

      <input
        type="checkbox"
        value="corporate"
        class="toggle theme-controller"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><circle cx="12" cy="12" r="5" /><path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        /></svg
      >
    </label>
  </div>
</div>

{#key data.pathname}
  <div transition:slide>
    <slot />
  </div>
{/key}

<footer class="items-center p-4 bg-base-300 rounded m-5">
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
</footer>

<!-- <style>
#navbarmain {
  width: calc(97vw);
}

footer {
  width: calc(97vw);
}
</style> -->

<style>
  #navbarmain {
    /* padding: 1.4em 2em; */
    left: 50%;
    transform: translateX(-50%);
    position: fixed;
    width: 98vw;
    top: calc((100vw - 98vw) / 2);
    z-index: 1;
  }
  footer {
    display: flex;
    justify-content: space-between;
  }
  .backdrop-blur {
    --backdrop-blur-color: #0000ff;
  }
</style>
