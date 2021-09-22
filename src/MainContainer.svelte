<script>
  import { parsedText } from "./stores.js";

  import Add from "./Add/Add.svelte";
  import Modify from "./Modify/Modify.svelte";
  import Finalize from "./Finalize/Finalize.svelte";

  import { step } from "./stores.js";

  $: if ($step == 0) {
    $parsedText = [];
  }
</script>

<div class="row">
  <div class="col" />
</div>
<div class="row">
  <div class="col">
    {#if $step == 0}
      <Add />
    {/if}

    {#if $step == 1}
      <Modify />
    {/if}

    {#if $step == 2}
      <Finalize />
    {/if}
  </div>
</div>
