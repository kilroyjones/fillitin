<script>
  let percentageClozed = "0";
</script>

<div class="row">
  <div class="col-md-6">
    <label for="percentageClozed" class="form-label"
      ><strong>Percentage cloze {percentageClozed}%</strong></label
    >
    <input type="range" class="form-range" id="percentageClozed" bind:value={percentageClozed} />
  </div>
  <div class="col-md-3">
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="button"
      aria-pressed="false"
      autocomplete="off"
    >
      Single toggle
    </button>
  </div>
  <div class="col-md-3">Here</div>
</div>
