<script>
  import { step } from "../stores.js";
  import ModifySettingsAutoCloze from "./ModifySettingsAutoCloze.svelte";
  import ModifySettingsSelectSimilar from "./ModifySettingsSelectSimilar.svelte";
  import ModifySettingsPunctuation from "./ModifySettingsPunctuation.svelte";
  import ModifySettingsClear from "./ModifySettingsClear.svelte";
</script>

<ModifySettingsAutoCloze />
<ModifySettingsSelectSimilar />
<ModifySettingsPunctuation />
<ModifySettingsClear />

<div class="row h-100 mt-4">
  <div class="col d-flex justify-content-start align-items-start">
    <button class="btn" on:click={() => ($step = $step - 1)}> &lt Add </button>
  </div>
  <div class="col d-flex justify-content-end align-items-end">
    <button class="btn" on:click={() => ($step = $step + 1)}>Modify &gt </button>
  </div>
</div>

<style>
  button {
    background-color: #ff5d73;
    font-weight: 700;
    color: #fff;
  }

  button:hover {
    color: #eee;
  }
</style>
