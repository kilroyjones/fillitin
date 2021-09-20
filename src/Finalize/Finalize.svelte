<script>
  import { finalizeFontFamily, finalizeFontSize, parsedText } from "../stores.js";
  import FinalizeAnswers from "./FinalizeAnswers.svelte";
  import FinalizeSettings from "./FinalizeSettings.svelte";
  import FinalizeContent from "./FinalizeContent.svelte";

  let words = getMissingWords();
  let missingWords = words[0];
  let missingWordsGrouped = words[1];

  function getMissingWords() {
    let missingWords = [];
    let missingWordsDict = {};

    for (let i = 0; i < $parsedText.length; i++) {
      if ($parsedText[i].selected) {
        let word = $parsedText[i];
        missingWords.push(word);
        if (missingWordsDict[word.word]) {
          missingWordsDict[word.word] += 1;
        } else {
          missingWordsDict[word.word] = 1;
        }
      }
    }

    let missingWordsGrouped = [];
    for (const [word, count] of Object.entries(missingWordsDict)) {
      missingWordsGrouped.push({ word: word, count: count });
    }

    return [missingWords, missingWordsGrouped];
  }
</script>

<div class="row">
  <div class="col-lg-9 mt-2">
    <div class="row borders">
      <div class="row section-to-print">
        <div>
          <FinalizeAnswers {missingWords} {missingWordsGrouped} />
          <FinalizeContent />
        </div>
      </div>
    </div>
  </div>
  <FinalizeSettings />
</div>

<style>
  .borders {
    background-color: #e7dfc6;
    border-top: solid 3px #000;
    border-bottom: solid 3px #000;
    border-left: solid 0px;
    border-right: solid 0px;
  }
</style>
