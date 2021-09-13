<script>
  import CreateCloze from "./CreateCloze.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<div class="container-fluid">
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col-md-1" />
      <div class="col-md-10"><CreateCloze /></div>
      <div class="col-md-1" />
    </div>
  </div>
</div>

<style>
  .container-fluid {
    height: 100%;
    padding: 0px;
    margin: 0px;
  }

  .container {
    padding-top: 5%;
  }
</style>
