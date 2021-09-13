<script>
  import { onMount } from "svelte";

  export let updateText;
  let text =
    "Lorem Ipsum \n is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  updateText(text);
  onMount(() => {
    var ce = document.querySelector("[contenteditable]");
    ce.focus();
    ce.addEventListener("paste", function (e) {
      e.preventDefault();
      var text = e.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
    });
  });
</script>

<div class="row">
  <div class="col-lg-9 mt-2">
    <span
      contenteditable
      rows="8"
      class="form-control"
      bind:textContent={text}
      on:keydown={() => updateText(text)}
    />
  </div>
  <div class="col-lg-3">
    <div class="row">
      <div class="col">
        <span class="title">Add your text</span>
      </div>
    </div>
    <div class="row">
      <div class="col">Directions here</div>
    </div>
  </div>
</div>

<style>
  .title {
    font-size: 36px;
    font-family: Anton, sans-serif;
    margin-left: 0px;
  }
  span {
    background-color: #e7dfc6;
    font-size: 20px;
    height: auto;
    min-height: 80px;
    font-family: "Anonymous Pro", monospace;
    font-size: 20px;
    font-weight: 600;
    margin: auto;
    white-space: pre-wrap;
  }
  span.form-control[contenteditable] {
    display: inline-block;
    background-color: #e7dfc6;
    border-top: solid 3px #000;
    border-bottom: solid 3px #000;
    border-left: solid 0px;
    border-right: solid 0px;
  }
  span.form-control[contenteditable]:empty::before {
    content: "Enter content here";
    display: inline-block;
    color: #555;
  }
  span:focus {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
</style>
