<script lang="ts">
  import circuit from "$lib/odeint.txt?raw"; // Charger le fichier Python brut
  import { onMount } from "svelte";

  let formattedCode: any;

  // Préparer le contenu à l'affichage
  onMount(() => {
    formattedCode = circuit;
  });

  //Highlith

  import hljs from "highlight.js";
  import "highlight.js/styles/github-dark.css"; // Choisir un thème adapté

  // Appliquer la coloration syntaxique après le rendu
  function highlightCode() {
    setTimeout(() => {
      const codeBlock = document.querySelectorAll("pre code")[2];
      if (codeBlock) {
        codeBlock.innerHTML = hljs.highlight(codeBlock.textContent, {
          language: "python",
        }).value;
      }
    });
  }

  onMount(() => {
    highlightCode();
  });
</script>

<div class="mockup-code">
  <pre><code>{formattedCode}</code></pre>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");
  .mockup-code {
    overflow-x: scroll;
    overflow-y: scroll;
    padding: 1em;
    border-radius: 20px;
    border: 3px solid rgba(117, 117, 117, 0.342);
    background: rgba(37, 37, 37, 0.185);
    max-height: 70vh;
  }
  pre {
    margin: 0;
    background: none;
  }
  code {
    font-size: 1.2em;
    font-family: "Roboto Mono", "Courrier New", monospace;
  }
</style>
