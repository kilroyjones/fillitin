<script>
  import { parsedText, percentageClozed } from "./stores.js";
  import { onMount } from "svelte";

  let autoClozedIndices = [];

  function runAutoCloze() {
    let iterations = parseInt(($percentageClozed / 100) * $parsedText.length);
    for (const word of $parsedText) {
      word.selected = false;
    }

    for (let i = 0; i < iterations; i++) {
      $parsedText[autoClozedIndices[i]].selected = true;
    }
  }

  function generateAutoClozeIndices() {
    autoClozedIndices = Array.from(Array($parsedText.length).keys());
    autoClozedIndices = autoClozedIndices
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  onMount(async () => {
    generateAutoClozeIndices();
  });
</script>

<div class="row">
  <div class="col">
    <input
      type="range"
      class="form-range"
      id="$percentageClozed"
      bind:value={$percentageClozed}
      on:input={runAutoCloze}
    />
    <strong>Cloze {$percentageClozed}%</strong>
    <label for="$percentageClozed" class="form-label" />
  </div>
</div>

<style>
  .form-range::-webkit-slider-thumb {
    background-color: #fff;
  }

  .form-range::-webkit-slider-runnable-track {
    background-color: #ff5d73;
  }

  .form-range::-moz-range-thumb {
    background-color: #fff;
  }

  .form-range::-ms-thumb {
    background-color: #fff;
  }
</style>
