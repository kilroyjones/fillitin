<script>
  /**
   * Add Component
   *
   * This component is where the user will initially type or copy in the text they'd
   * like to cloze. It uses a contenteditable container with a listener that overrides
   * the paste functionality, thus preventing the pasting of formatted text.
   *
   * Features to add:
   *  - Add existing texts based on difficulty and word count
   *
   */
  import { onMount } from "svelte";
  import AddSettings from "./AddSettings.svelte";

  export let updateText;
  let text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  onMount(() => {
    /**
     * onMount loads after the component is loaded to the DOM
     *
     * Here we attach a listened which captures any pasting done to the contenteditable
     * and converts it to plaintext. The reason for this to make pasting in content copied
     * from non-plain text sources easier.
     *
     */
    var ce = document.querySelector("[contenteditable]");
    ce.focus();
    ce.addEventListener("paste", function (e) {
      e.preventDefault();
      var text = e.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
    });
    updateText(text); // Remove upon production
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

  <div class="col-lg-3 d-flex flex-column">
    <AddSettings />
  </div>
</div>

<style>
  span.form-control[contenteditable] {
    background-color: #e7dfc6;
    border-top: solid 3px #000;
    border-bottom: solid 3px #000;
    border-left: solid 0px;
    border-right: solid 0px;
    display: inline-block;
    font-family: "Anonymous Pro", monospace;
    font-size: 20px;
    font-weight: 600;
    height: auto;
    margin: auto;
    min-height: 80px;
    white-space: pre-wrap;
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
