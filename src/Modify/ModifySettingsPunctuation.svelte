<script>
  import { includePunctuation, regex } from "../stores.js";

  function toggleIncludePunctuation() {
    $includePunctuation = !$includePunctuation;
    if ($includePunctuation) {
      $regex = /(\s+)/;
    } else {
      $regex = /(\s+)|([\.\;\!\?\,\:\"])/;
    }
  }
</script>

<div class="row mt-4">
  <div class="col">
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        id="excludePunctuation"
        bind:checked={$includePunctuation}
        on:input={toggleIncludePunctuation}
      />
      <label class="form-check-label" for="excludePunctuation">Include punctuation</label>
    </div>
  </div>
</div>

<style>
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
</style>
