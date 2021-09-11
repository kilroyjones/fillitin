<script>
  import CreateCloze from "./CreateCloze.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<div class="container-fluid">
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col-lg-2" />
      <div class="col-lg-8"><CreateCloze /></div>
      <div class="col-lg-2" />
    </div>
  </div>
</div>

<style>
  .container-fluid {
    background-color: #e7dfc6;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }

  .container {
    padding-top: 5%;
  }
</style>
