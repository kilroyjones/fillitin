<script>
  import { onMount } from "svelte";
  import { originalText, parsedText, textChanged } from "./stores.js";
  import Settings from "./Settings.svelte";

  $originalText =
    "Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  async function processText() {
    for (const word of $originalText.split(" ")) {
      $parsedText.push({
        word: word,
        selected: false,
      });
    }
    $parsedText = $parsedText;
  }

  function toggleSelected(index) {
    $parsedText[index].selected = !$parsedText[index].selected;
    if ($parsedText[index].selected) {
      $parsedText[index].color = "#ff5d73";
    } else {
      $parsedText[index].color = "#000000";
    }
  }

  onMount(async () => {
    if ($textChanged) {
      await processText();
      $textChanged = false;
    }
  });
</script>

<div class="row">
  <div class="col">
    <span class="title">Cloze it</span>
  </div>
</div>

<div class="row">
  <div class="col">
    <span contenteditable rows="8" class="form-control">
      {#each $parsedText as word, index}
        {#if word.selected}
          <span class="word" style="color: #ff5d73;" on:pointerdown={() => toggleSelected(index)}>
            {word.word}
          </span>
        {:else}
          <span class="word" style="color: #000" on:pointerdown={() => toggleSelected(index)}>
            {word.word}
          </span>
        {/if}
      {/each}
    </span>
  </div>
</div>

<div class="row">
  <div class="col">
    {#if $parsedText.length > 0}
      <Settings />
    {/if}
  </div>
</div>

<style>
  .title {
    font-size: 36px;
    font-family: Anton, sans-serif;
    margin-left: 0px;
  }

  .word {
    border-radius: 8px;
    font-size: 20px;
    font-weight: 600;
    margin: auto;
    font-family: "Anonymous Pro", monospace;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: pre-wrap;
  }

  span.form-control[contenteditable] {
    display: inline-block;
    background-color: #e7dfc6;
    border-top: solid 3px #000;
    border-bottom: solid 3px #000;
    border-left: solid 0px;
    border-right: solid 0px;
  }
</style>
