<script>
  import {
    includePunctuation,
    regex,
    selectSimilar,
    percentageClozed,
    updateFlag,
    parsedText,
    originalText,
  } from "../stores.js";

  import { onMount } from "svelte";
  import ModifySettings from "./ModifySettings.svelte";
  import ModifyContent from "./ModifyContent.svelte";

  let punctuation = ["!", "?", ";", ":", ".", ","];
  let autoClozedIndices = [];

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
    $parsedText = [];

    for (const word of $originalText.split($regex)) {
      if (word != undefined) {
        let isPunctuation = checkIfPunctuation(word);
        let isSelectable = checkIfSelectable(word, isPunctuation);

        $parsedText.push({
          word: word,
          selected: false,
          selectable: isSelectable,
          punctuation: isPunctuation,
        });
      }
    }

    $parsedText = $parsedText;
    $updateFlag = !$updateFlag;
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
    if ($selectSimilar) {
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

  function runAutoCloze() {
    let iterations = parseInt(($percentageClozed / 100) * autoClozedIndices.length);

    for (let i = 0; i < $parsedText.length; i++) {
      $parsedText[i].selected = false;
    }

    for (let i = 0; i < iterations; i++) {
      $parsedText[autoClozedIndices[i]].selected = true;
    }
  }

  function generateAutoClozeIndices() {
    let indices = [];
    for (let i = 0; i < $parsedText.length; i++) {
      let word = $parsedText[i];
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
    $parsedText = $parsedText;
  });

  $: if ($regex || $originalText) {
    $percentageClozed = 0;
    processText();
    generateAutoClozeIndices();
    runAutoCloze();
    console.log($parsedText);
  }
  $: $percentageClozed, runAutoCloze();
</script>

<div class="row">
  <div class="col-lg-9 mt-2">
    <ModifyContent {toggleWord} />
  </div>

  <div class="col-lg-3">
    <div class="row">
      <div class="col">
        <span class="title ">Modify</span>
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
