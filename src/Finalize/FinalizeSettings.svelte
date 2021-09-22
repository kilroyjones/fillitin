<script>
  import { addHeader, groupSameWords, step } from "../stores.js";
  import FinalizeFont from "./FinalizeFont.svelte";
</script>

<div class="col-lg-3">
  <div class="row d-none d-lg-block d-xl-block d-xxl-block">
    <div class="col">
      <span class="title">Finalize</span>
    </div>
  </div>

  <div class="row">
    <div class="row mt-4">
      <div class="col">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="groupSameWords"
            bind:checked={$groupSameWords}
          />
          <label class="form-check-label" for="groupSameWords">Group similar</label>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="addHeader"
            bind:checked={$addHeader}
          />
          <label class="form-check-label" for="addHeader">Header</label>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-2">
    <FinalizeFont />
  </div>

  <div class="row mt-4">
    <div class="col d-flex mt-2 justify-content-top">
      <button class="btn" on:click={() => ($step = $step - 1)}> &lt;Modify </button>
    </div>
    <div class="col d-flex mt-2 justify-content-center">
      <button class="btn" on:click={() => window.print()}> Print </button>
    </div>
  </div>
</div>

<style>
  .title {
    font-size: 36px;
    font-family: Anton, sans-serif;
    margin-left: 0px;
  }

  .form-check-input {
    color: #ff5d73;
    box-shadow: none;
    border-width: 0px;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23ff5d73'/%3e%3c/svg%3e");
  }

  .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23ff5d73'/%3e%3c/svg%3e");
  }

  .form-check-input:checked {
    background-color: #ff5d73;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23ffffff'/%3e%3c/svg%3e");
  }

  button {
    background-color: #ff5d73;
    font-weight: 700;
    color: #fff;
    width: 100%;
  }

  button:hover {
    color: #eee;
  }
</style>
