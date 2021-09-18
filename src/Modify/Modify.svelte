<script>
  import {
    includePunctuation,
    regex,
    selectSimilar,
    percentageClozed,
    updateFlag,
  } from "../stores.js";

  import { onMount } from "svelte";
  import ModifySettings from "./ModifySettings.svelte";
  import ModifyContent from "./ModifyContent.svelte";

  let text =
    "Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  // export let text;

  let punctuation = ["!", "?", ";", ":", ".", ","];
  let autoClozedIndices = [];
  let parsedText;

  function checkIfSelectable(word, isPunctuation) {
    if (!word.trim()) {
      return false;
    } else if (isPunctuation && !includePunctuation) {
      return false;
    }
    return true;
  }

  function checkIfPunctuation(word) {
    if (punctuation.includes(word.trim())) {
      return true;
    }
    return false;
  }

  function processText() {
    parsedText = [];

    for (const word of text.split($regex)) {
      if (word != undefined) {
        let isPunctuation = checkIfPunctuation(word);
        let isSelectable = checkIfSelectable(word, isPunctuation);

        parsedText.push({
          word: word,
          selected: false,
          selectable: isSelectable,
          punctuation: isPunctuation,
        });
      }
    }
    parsedText = parsedText;
    $updateFlag = !$updateFlag;
  }

  function toggleAll(index) {
    let state = !parsedText[index].selected;
    let word = parsedText[index].word;
    for (let i = 0; i < parsedText.length; i++) {
      if (parsedText[i].word == word) {
        toggleSingle(i, state);
      }
    }
  }

  function toggleWord(index) {
    if ($selectSimilar) {
      toggleAll(index);
    } else {
      toggleSingle(index, !parsedText[index].selected);
    }
  }

  function toggleSingle(index, state) {
    parsedText[index].selected = state;
    if (parsedText[index].selected) {
      parsedText[index].color = "#ff5d73";
    } else {
      parsedText[index].color = "#000000";
    }
  }

  function updateParsedText(updatedText) {
    parsedText = updatedText;
  }

  function runAutoCloze() {
    let iterations = parseInt(($percentageClozed / 100) * autoClozedIndices.length);

    for (let i = 0; i < parsedText.length; i++) {
      parsedText[i].selected = false;
    }

    for (let i = 0; i < iterations; i++) {
      parsedText[autoClozedIndices[i]].selected = true;
    }
    updateParsedText(parsedText);
  }

  function generateAutoClozeIndices() {
    let indices = [];
    for (let i = 0; i < parsedText.length; i++) {
      let word = parsedText[i];
      if (word.selectable) {
        if (includePunctuation && !word.punctuation) {
          indices.push(i);
        }
      }
    }
    autoClozedIndices = indices.sort(() => Math.random() - 0.5);
    runAutoCloze();
  }

  onMount(async () => {
    processText();
    generateAutoClozeIndices();
    runAutoCloze();
  });

  $: if ($regex) {
    processText();
    generateAutoClozeIndices();
    runAutoCloze();
  }
  $: $percentageClozed, runAutoCloze();
</script>

<div class="row">
  <div class="col-lg-9 mt-2">
    <ModifyContent {parsedText} {toggleWord} />
  </div>

  <div class="col-lg-3">
    <div class="row">
      <div class="col">
        <span class="title">Adjust</span>
      </div>
    </div>

    <div class="row">
      <div class="col d-flex flex-column">
        <ModifySettings />
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
</style>
