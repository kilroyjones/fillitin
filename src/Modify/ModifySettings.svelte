<script>
  import { parsedText, percentageClozed } from "../stores.js";
  import { onMount } from "svelte";

  export let setSelectSimilar;
  export let setExcludePunctuation;

  let autoClozedIndices = [];
  let selectSimilar = false;
  let excludePunctuation = false;

  function runAutoCloze() {
    let iterations = parseInt(($percentageClozed / 100) * autoClozedIndices.length);

    for (let i = 0; i < $parsedText.length; i++) {
      $parsedText[i].selected = false;
    }

    for (let i = 0; i < iterations; i++) {
      console.log(i, autoClozedIndices[i]);
      $parsedText[autoClozedIndices[i]].selected = true;
    }
  }

  function generateAutoClozeIndices() {
    let indices = [];
    // autoClozedIndices = Array.from(Array($parsedText.length).keys());
    for (let i = 0; i < $parsedText.length; i++) {
      let word = $parsedText[i];
      if (word.selectable) {
        if (!excludePunctuation && !word.punctuation) {
          indices.push(i);
        }
      }
    }
    autoClozedIndices = indices.sort(() => Math.random() - 0.5);
  }

  function runExclude() {
    console.log("sdf");
    setExcludePunctuation(!excludePunctuation);
    generateAutoClozeIndices();
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
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        id="excludePunctuation"
        bind:checked={excludePunctuation}
        on:input={() => runExclude()}
      />
      <label class="form-check-label" for="excludePunctuation">ect similar</label>
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
