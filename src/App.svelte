<script>
  import KittyApp from "./quests/kitty/Kitty.svelte";
</script>

<style>
  @media (min-width: 768px) {
    .container {
      margin: 0 auto;
      padding: 16px;
      width: 736px;
      flex: 1;
    }
  }
</style>

<div class="container">
  <KittyApp />
</div>
