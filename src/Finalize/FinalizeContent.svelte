<script>
  import { parsedText, finalizeFontFamily, finalizeFontSize } from "../stores.js";
</script>

<span rows="8" class="form-control">
  {#each $parsedText as word, index}
    {#if word.selected}
      <span
        class="word mt-2 word-selected"
        style="font-family:{$finalizeFontFamily.font}, {$finalizeFontFamily.type}; font-size: {$finalizeFontSize}px !important;"
        >{word.word}</span
      >
    {:else}
      <span
        class="word mt-2"
        style="font-family:{$finalizeFontFamily.font}, {$finalizeFontFamily.type}; font-size: {$finalizeFontSize}px !important;"
        >{word.word}</span
      >
    {/if}
  {/each}
</span>

<style>
  .word {
    font-weight: 600;
    margin: auto;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: pre-wrap;
  }

  span.form-control {
    display: inline-block;
    background-color: #e7dfc6;
    border: solid 0px;
    padding-top: 10px;
  }

  .word-selected {
    color: #00000000;
    border-bottom: solid 2px #000;
  }
</style>
