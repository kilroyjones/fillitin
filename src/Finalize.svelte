<script>
  import { parsedText } from "./stores.js";
  import { onMount } from "svelte";

  let text =
    "Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  $parsedText = [
    {
      word: "Lorem",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "Ipsum",
      selected: false,
    },
    {
      word: "is",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "simply",
      selected: false,
    },
    {
      word: "dummy",
      selected: false,
    },
    {
      word: "of",
      selected: false,
    },
    {
      word: "the",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "printing",
      selected: false,
    },
    {
      word: "and",
      selected: false,
    },
    {
      word: "typesetting",
      selected: false,
    },
    {
      word: "industry.",
      selected: false,
    },
    {
      word: "Lorem",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "Ipsum",
      selected: false,
    },
    {
      word: "has",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "been",
      selected: false,
    },
    {
      word: "the",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "industry's",
      selected: false,
    },
    {
      word: "standard",
      selected: false,
    },
    {
      word: "dummy",
      selected: false,
    },
    {
      word: "text",
      selected: false,
    },
    {
      word: "ever",
      selected: false,
    },
    {
      word: "since",
      selected: false,
    },
    {
      word: "the",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "1500s,",
      selected: false,
    },
    {
      word: "when",
      selected: false,
    },
    {
      word: "an",
      selected: false,
    },
    {
      word: "unknown",
      selected: false,
    },
    {
      word: "printer",
      selected: false,
    },
    {
      word: "took",
      selected: false,
    },
    {
      word: "a",
      selected: false,
    },
    {
      word: "galley",
      selected: false,
    },
    {
      word: "of",
      selected: false,
    },
    {
      word: "type",
      selected: false,
    },
    {
      word: "and",
      selected: false,
    },
    {
      word: "scrambled",
      selected: false,
    },
    {
      word: "it",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "to",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "make",
      selected: false,
    },
    {
      word: "a",
      selected: false,
    },
    {
      word: "type",
      selected: false,
    },
    {
      word: "specimen",
      selected: false,
    },
    {
      word: "book.",
      selected: false,
    },
    {
      word: "It",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "has",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "survived",
      selected: false,
    },
    {
      word: "not",
      selected: false,
    },
    {
      word: "only",
      selected: false,
    },
    {
      word: "five",
      selected: false,
    },
    {
      word: "centuries,",
      selected: false,
    },
    {
      word: "but",
      selected: false,
    },
    {
      word: "also",
      selected: false,
    },
    {
      word: "the",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "leap",
      selected: false,
    },
    {
      word: "into",
      selected: false,
    },
    {
      word: "electronic",
      selected: false,
    },
    {
      word: "typesetting,",
      selected: false,
    },
    {
      word: "remaining",
      selected: false,
    },
    {
      word: "essentially",
      selected: false,
    },
    {
      word: "unchanged.",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "It",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "was",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "popularised",
      selected: false,
    },
    {
      word: "in",
      selected: false,
    },
    {
      word: "the",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "1960s",
      selected: false,
    },
    {
      word: "with",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "the",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "release",
      selected: false,
    },
    {
      word: "of",
      selected: false,
    },
    {
      word: "Letraset",
      selected: false,
    },
    {
      word: "sheets",
      selected: false,
    },
    {
      word: "containing",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "Lorem",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "Ipsum",
      selected: false,
    },
    {
      word: "passages,",
      selected: false,
    },
    {
      word: "and",
      selected: false,
    },
    {
      word: "more",
      selected: false,
    },
    {
      word: "recently",
      selected: false,
    },
    {
      word: "with",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "desktop",
      selected: false,
    },
    {
      word: "publishing",
      selected: false,
    },
    {
      word: "software",
      selected: false,
    },
    {
      word: "like",
      selected: false,
    },
    {
      word: "Aldus",
      selected: false,
    },
    {
      word: "PageMaker",
      selected: false,
    },
    {
      word: "including",
      selected: false,
    },
    {
      word: "versions",
      selected: false,
    },
    {
      word: "of",
      selected: false,
    },
    {
      word: "Lorem",
      selected: true,
      color: "#ff5d73",
    },
    {
      word: "Ipsum.",
      selected: false,
    },
  ];

  let missingWords = getMissingWords();

  function getMissingWords() {
    let missingWords = [];
    let missingWordsGrouped = Map();
    for (let i = 0; i < $parsedText.length; i++) {
      if ($parsedText[i].selected) {
        missingWords.push($parsedText[i]);
      }
    }
    return missingWords;
  }
</script>

<div class="row">
  <div class="col-lg-9 mt-2">
    <div class="row top-border">
      <span rows="8" class="form-control">
        {#each $parsedText as word}
          {#if word.selected}
            <span class="word word-selected">{word.word}</span><span class="word">{" "}</span>
          {:else}
            <span class="word" style="color: #000">
              {word.word}
            </span>
          {/if}
        {/each}
      </span>
    </div>
    {#if missingWords.length > 0}
      <div class="row bottom-border">
        {#each missingWords as word}
          {#if word.selected}
            <div class="col-2">
              <span class="word" style="color: #000">
                {word.word}
              </span>
            </div>
          {/if}
        {/each}
      </div>
    {/if}
  </div>

  <div class="col-lg-3">
    <div class="row">
      <div class="col">
        <span class="title">Finalize</span>
      </div>
    </div>

    <div class="row">
      <div class="row">
        <div class="col" />
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

  .word-selected {
    color: #00000000;
    border-bottom: solid 2px #000;
  }

  .top-border {
    background-color: #e7dfc6;
    border-top: solid 3px #000;
    border-bottom: solid 0px #000;
    border-left: solid 0px;
    border-right: solid 0px;
  }

  .bottom-border {
    background-color: #e7dfc6;
    border-bottom: solid 3px #000;
    border-top: solid 0px #000;
    border-left: solid 0px;
    border-right: solid 0px;
  }
  span {
    display: inline-block;
    background-color: #e7dfc6;
    border: 0px;
  }
</style>
