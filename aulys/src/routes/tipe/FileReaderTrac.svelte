<script lang="ts">
  import circuit2 from "$lib/haha.txt?raw"; // Charger le fichier Python brut
  import { onMount } from "svelte";

  let formattedCode2: any;

  // Préparer le contenu à l'affichage
  onMount(() => {
    formattedCode2 = circuit2;
  });

  //Highlith

  import hljs from "highlight.js";
  import "highlight.js/styles/github-dark.css"; // Choisir un thème adapté

  // Appliquer la coloration syntaxique après le rendu
  function highlightCode2() {
    setTimeout(() => {
      const codeBlock = document.querySelectorAll("pre code")[0];
      if (codeBlock) {
        codeBlock.innerHTML = hljs.highlight(codeBlock.textContent, {
          language: "python",
        }).value;
      }
    });
  }

  onMount(() => {
    highlightCode2();
  });
</script>

<div class="mockup-code">
  <pre><code>{formattedCode2}</code></pre>
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
