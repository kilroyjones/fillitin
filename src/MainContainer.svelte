<script>
  import Add from "./Add/Add.svelte";
  import Modify from "./Modify/Modify.svelte";
  import Finalize from "./Finalize/Finalize.svelte";

  import { step } from "./stores.js";
  let text = "";

  function updateText(updatedText) {
    text = updatedText;
  }
</script>

<div class="row">
  <div class="col" />
</div>
<div class="row">
  <div class="col">
    {#if $step == 0}
      <Add {updateText} />
    {/if}

    {#if $step == 1}
      <Modify {text} />
    {/if}

    {#if $step == 2}
      <Finalize />
    {/if}
  </div>
</div>
