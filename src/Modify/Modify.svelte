<script>
  import { parsedText } from "../stores.js";
  import { onMount } from "svelte";
  import ModifySettings from "./ModifySettings.svelte";
  let text =
    "Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  // export let text;
  let selectSimilar = false;
  let excludePunctuation;
  let punctuation = ["!", "?", ";", ":", ".", ","];

  async function processText(regex) {
    $parsedText = [];

    for (const word of text.split(regex)) {
      let isSelectable = false;
      let isPunctuation = false;

      if (word != undefined) {
        if (!word.trim()) {
          isSelectable = false;
        } else if (punctuation.includes(word.trim())) {
          isPunctuation = true;
          isSelectable = true;
        } else {
          isSelectable = true;
        }
        $parsedText.push({
          word: word,
          selected: false,
          selectable: isSelectable,
          punctuation: isPunctuation,
        });
      }
    }
    $parsedText = $parsedText;
    console.log($parsedText);
  }

  function setSelectSimilar(value) {
    selectSimilar = value;
  }

  function setExcludePunctuation(excludePunctuation) {
    if (excludePunctuation) {
      console.log("sfdskjfalkds");
      processText(/(\s+)|([\.\;\!\?\,\:\"])/);
    } else {
      processText(/(\s+)/);
    }
  }

  function toggleAll(index) {
    let state = !$parsedText[index].selected;
    let word = $parsedText[index].word;
    for (let i = 0; i < $parsedText.length; i++) {
      if ($parsedText[i].word == word) {
        toggleSingle(i, state);
      }
    }
  }

  function toggleWord(index) {
    if (selectSimilar) {
      toggleAll(index);
    } else {
      toggleSingle(index, !$parsedText[index].selected);
    }
  }

  function toggleSingle(index, state) {
    $parsedText[index].selected = state;
    if ($parsedText[index].selected) {
      $parsedText[index].color = "#ff5d73";
    } else {
      $parsedText[index].color = "#000000";
    }
  }

  onMount(async () => {
    await processText(/(\s+)/);
  });
</script>

<div class="row">
  <div class="col-lg-9 mt-2">
    <span rows="8" class="form-control">
      {#each $parsedText as word, index}
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
  </div>

  <div class="col-lg-3">
    <div class="row">
      <div class="col">
        <span class="title">Adjust</span>
      </div>
    </div>

    <div class="row">
      <div class="row">
        <div class="col">
          {#if $parsedText.length > 0}
            <ModifySettings {setSelectSimilar} {setExcludePunctuation} />
          {/if}
        </div>
      </div>
    </div>
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
  span.form-control {
    display: inline-block;
    background-color: #e7dfc6;
    border-top: solid 3px #000;
    border-bottom: solid 3px #000;
    border-left: solid 0px;
    border-right: solid 0px;
  }
</style>
