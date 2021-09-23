<script>
  import { percentageClozed } from "../stores.js";

  export let runAutoCloze;
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

  input[type="range"]::-moz-range-thumb {
    background-color: #ff5d73;
  }

  input[type="range"]::-moz-range-track {
    background-color: #fff;
  }
</style>
