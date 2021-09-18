<script>
  import { percentageClozed } from "../stores.js";

  function clearSelections() {
    $percentageClozed = 0;
  }
</script>

<div class="row mt-4">
  <div class="col">
    <button type="button" class="btn" on:click={clearSelections}>Clear</button>
  </div>
</div>

<style>
  button {
    background-color: #ff5d73;
    font-weight: 700;
    color: #fff;
  }

  button:hover {
    color: #eee;
  }
</style>
