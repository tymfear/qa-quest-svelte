<script>
  import KittyImage from "./KittyImage.svelte";

  let showKitty = false;
</script>

<style>
  h1 {
    margin: 0 auto;
    text-align: center;
  }
</style>

<h1>Show me the kitty</h1>
<hr />
<div>
  <input type="checkbox" id="kittyToggle" bind:checked={showKitty} />
  <label for="kittyToggle">{showKitty ? 'Hide' : 'Show me'} that Kitty</label>
  {#if showKitty}
    <KittyImage />
  {/if}
</div>
