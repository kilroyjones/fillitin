<script>
  import { step } from "../stores.js";
</script>

<div class="row">
  <div class="col">
    <span class="title">Add your text</span>
  </div>
</div>

<div class="row">
  <div class="col">
    Paste and modify your text. Add line breaks and problem numbers if you're making multiple
    clozes.
  </div>
</div>

<hr />
<div class="row mt-4">
  <div class="col d-flex justify-content-end">
    <button class="btn" on:click={() => ($step = $step + 1)}>Modify > </button>
  </div>
</div>

<style>
  .title {
    font-size: 36px;
    font-family: Anton, sans-serif;
    margin-left: 0px;
  }

  button {
    background-color: #ff5d73;
    font-weight: 700;
    color: #fff;
  }

  button:hover {
    color: #eee;
  }
</style>
