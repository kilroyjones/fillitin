<script>
  import AddText from "./AddText.svelte";
  import Cloze from "./Cloze.svelte";
  import Finalize from "./Finalize.svelte";

  let step = 2;
  let text = "";

  function switchScreen(val) {
    step += val;
  }

  function updateText(updatedText) {
    text = updatedText;
  }
</script>

<div class="row">
  <div class="col" />
</div>
<div class="row">
  <div class="col">
    {#if step == 0}
      <AddText {updateText} />
    {/if}

    {#if step == 1}
      <Cloze {text} />
    {/if}

    {#if step == 2}
      <Finalize />
    {/if}
  </div>
</div>
