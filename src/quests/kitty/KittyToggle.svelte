<script>
  import { showKitty, showAdminArea } from "./stores/store";

  const handleChange = () => {
    showKitty.update(show => !show);
  };
</script>

<label for="kittyToggle">
  <input type="checkbox" id="kittyToggle" checked={$showKitty} on:click={handleChange}/>
    {#if $showAdminArea}
        {$showKitty ? "Hide" : "Show"} user's kitties
    {:else}
        {$showKitty ? "Hide" : "Show me"} that Kitty
    {/if}
</label>
