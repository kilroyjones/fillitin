<script>
  import { groupSameWords } from "../stores.js";
  export let missingWords;
  export let missingWordsGrouped;
</script>

<div class="row answers">
  {#if $groupSameWords}
    {#each missingWordsGrouped as word}
      <div class="col-4 mb-1">
        <span class="pill text-center">{word.count} </span>
        <span class="word" style="color: #000">{word.word}</span>
      </div>
    {/each}
  {:else}
    {#each missingWords as word}
      <div class="col-4">
        <span class="word" style="color: #000">
          {word.word}
        </span>
      </div>
    {/each}
  {/if}
</div>

<style>
  .answers {
    border: solid 2px #000;
    border-radius: 20px;
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .pill {
    background-color: #ff5d73;
    color: #fff;
    border: solid 0px #ff5d73;
    border-radius: 10px;
    min-width: 30px;
    font-weight: 700;
  }

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

  span {
    display: inline-block;
    background-color: #e7dfc6;
    border: 0px;
  }
</style>
