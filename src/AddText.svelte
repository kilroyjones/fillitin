<script>
  import { addedText } from "./stores.js";
  $addedText =
    "Lorem Ipsum \n is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
</script>

<div class="row">
  <div class="col">
    <span class="title">Add your text</span>
  </div>
</div>

<div class="row">
  <div class="col">
    <textarea rows="6" class="form-control" bind:value={$addedText} />
  </div>
</div>

<style>
  .title {
    font-size: 36px;
    font-family: Anton, sans-serif;
    margin-left: 10px;
  }
  textarea {
    border-radius: 16px;
    font-size: 18px;
  }
</style>
