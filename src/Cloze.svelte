<script>
  import { onMount } from "svelte";
  import { addedText } from "./stores.js";
  import Settings from "./Settings.svelte";

  let text = [];
  $addedText =
    "Lorem Ipsum\n is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  async function processText() {
    for (const word of $addedText.split(" ")) {
      text.push({
        word: word,
        selected: true,
        color: "#000000",
      });
    }
    text = text;
  }

  function toggleWord(index) {
    text[index].selected = !text[index].selected;
    if (text[index].selected) {
      text[index].color = "#ff5d73";
    } else {
      text[index].color = "#000000";
    }
  }

  onMount(async () => {
    processText();
  });
</script>

<div class="row">
  <div class="col">
    {#each text as word, index}
      <span
        class="word"
        style="color: {word.color}; white-space: pre-wrap"
        on:click={() => toggleWord(index)}
      >
        <span style="color:{word.color}">{word.word}</span>
      </span>
    {/each}
  </div>
</div>

<div class="row">
  <div class="col">
    <hr />
    <Settings />
  </div>
</div>

<style>
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
  }
</style>
