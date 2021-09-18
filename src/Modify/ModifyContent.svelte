<script>
  export let parsedText;
  export let toggleWord;
</script>

<span rows="8" class="form-control">
  {#each parsedText as word, index}
    {#if word.selected}
      <span class="word" style="color: #ff5d73;" on:pointerdown={() => toggleWord(index)}
        >{word.word}</span
      >
    {:else}
      <span class="word" style="color: #000" on:pointerdown={() => toggleWord(index)}
        >{word.word}</span
      >
    {/if}
  {/each}
</span>

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
    white-space: pre-wrap;
  }

  span.form-control {
    display: inline-block;
    background-color: #e7dfc6;
    border-top: solid 3px #000;
    border-bottom: solid 3px #000;
    border-left: solid 0px;
    border-right: solid 0px;
  }
</style>
