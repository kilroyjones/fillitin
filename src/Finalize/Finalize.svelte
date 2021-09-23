<script>
  import { parsedText } from "../stores.js";
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

<div class="row d-block d-sm-block d-md-block d-lg-none">
  <div class="col ">
    <span class="title">Finalize</span>
  </div>
</div>

<div class="row">
  <div class="col-lg-9 mt-2">
    <div class="row borders" contenteditable>
      <div class="col d-flex flex-column">
        <div class="row section-to-print">
          <div class="col">
            <div class="row" style="width:95%; margin-left: 20px">
              <div class="col">
                <FinalizeAnswers {missingWords} {missingWordsGrouped} />
              </div>
            </div>
            <FinalizeContent />
          </div>
        </div>
      </div>
    </div>
  </div>
  <FinalizeSettings />
</div>

<style>
  div.borders[contenteditable] {
    background-color: #e7dfc6;
    border-top: solid 3px #000;
    border-bottom: solid 3px #000;
    border-left: solid 0px;
    border-right: solid 0px;
    display: inline-block;
    height: auto;
    margin: auto;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    min-height: 80px;
    white-space: pre-wrap;
    border-radius: 4px;
  }

  .title {
    font-size: 36px;
    font-family: Anton, sans-serif;
    margin-left: 0px;
  }
</style>
