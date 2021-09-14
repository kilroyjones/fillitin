<script>
  import { parsedText, percentageClozed } from "./stores.js";
  import { onMount } from "svelte";

  export let setSelectSimilar;

  let autoClozedIndices = [];
  let selectSimilar = false;

  function runAutoCloze() {
    let iterations = parseInt(($percentageClozed / 100) * $parsedText.length);

    for (let i = 0; i < $parsedText.length; i++) {
      $parsedText[i].selected = false;
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

<div class="row mt-4">
  <div class="col">
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        id="selectSimilar"
        bind:checked={selectSimilar}
        on:input={() => setSelectSimilar(!selectSimilar)}
      />
      <label class="form-check-label" for="selectSimilar">Select similar</label>
    </div>
  </div>
</div>

<div class="row mt-4">
  <div class="col">
    <button type="button" class="btn">Clear</button>
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

  .form-check-input {
    color: #ff5d73;
  }

  .form-check-input:checked {
    background-color: #ff5d73;
  }

  button {
    color: #fff;
    background-color: #ff5d73;
  }
</style>
