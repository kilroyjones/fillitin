<script>
  import { onMount } from "svelte";

  import { finalizeFontFamily, finalizeFontSize, fontList } from "../stores.js";

  let fonts = [{ font: "Anonymous Pro", type: "monospace" }];
  let fontSizes = Array.from(Array(128).keys()).slice(4, 128);

  function changeFont() {
    let element = document.getElementById("font-select");
    $finalizeFontFamily = fonts[element.selectedIndex];
  }

  function changeSize() {
    let element = document.getElementById("size-select");
    $finalizeFontSize = fontSizes[element.selectedIndex];
  }

  function loadFonts() {
    for (let font of $fontList) {
      if (document.fonts.check("12px " + font)) {
        fonts.push({ font: font, type: "sans-serif" });
      }
    }
    fonts = fonts;
  }

  onMount(() => {
    loadFonts();
  });
</script>

<select id="font-select" class="form-select" aria-label="select-font" on:change={changeFont}>
  {#each fonts as font, i}
    {#if i == 0}
      <option value={i} selected style="font-family: {font.font}, {font.type}">
        {font.font}
      </option>
    {:else}
      <option value={font} style="font-family: {font.font}, {font.type}">
        {font.font}
      </option>
    {/if}
  {/each}
</select>

<select id="size-select" class="form-select mt-2" aria-label="select-font" on:change={changeSize}>
  {#each fontSizes as size, i}
    {#if i == 10}
      <option value={i} selected>
        {size}
      </option>
    {:else}
      <option value={i}>
        {size}
      </option>
    {/if}
  {/each}
</select>
