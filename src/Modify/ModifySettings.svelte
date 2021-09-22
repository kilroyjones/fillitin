<script>
  import { step } from "../stores.js";
  import ModifySettingsAutoCloze from "./ModifySettingsAutoCloze.svelte";
  import ModifySettingsSelectSimilar from "./ModifySettingsSelectSimilar.svelte";
  import ModifySettingsPunctuation from "./ModifySettingsPunctuation.svelte";

  export let toggleIncludePunctuation;
  export let runAutoCloze;
</script>

<ModifySettingsAutoCloze {runAutoCloze} />
<ModifySettingsSelectSimilar />
<ModifySettingsPunctuation {toggleIncludePunctuation} />

<div class="row h-100 mt-4">
  <div class="col d-flex mt-2 justify-content-center">
    <button class="btn" on:click={() => ($step = $step - 1)}> &lt;Add </button>
  </div>
  <div class="col d-flex justify-content-center">
    <button class="btn mt-2" on:click={() => ($step = $step + 1)}>Finalize&gt; </button>
  </div>
</div>

<style>
  button {
    background-color: #ff5d73;
    font-weight: 700;
    color: #fff;
    width: 100%;
  }

  button:hover {
    color: #eee;
  }
</style>
