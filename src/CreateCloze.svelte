<script>
  import AddText from "./AddText.svelte";
  import Cloze from "./Cloze.svelte";
  import Finalize from "./Finalize.svelte";

  let step = 1;
  function switchScreen(val) {
    step += val;
  }
</script>

<div class="row">
  <div class="col" />
</div>
<div class="row">
  <div class="col">
    {#if step == 0}
      <AddText />
    {/if}

    {#if step == 1}
      <Cloze />
    {/if}

    {#if step == 2}
      <Finalize />
    {/if}
  </div>
</div>

<div class="row">
  {#if step > 0}
    <div class="col-6 text-end" on:click={() => switchScreen(-1)}>
      <button>Back</button>
    </div>
  {:else}
    <div class="col-6" />
  {/if}

  {#if step < 2}
    <div class="col-6" on:click={() => switchScreen(1)}>
      <button>Next</button>
    </div>
  {/if}
</div>

<style>
  button {
    text-decoration: none;
    border: none;
    background-color: #00000000;
    font-family: "Anton", sans-serif;
    font-size: 32px;
  }

  button:hover {
    color: #3f3f3f;
  }
</style>
