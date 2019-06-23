<script>
  import KittyImage from "./KittyImage.svelte";
  import KittyToggle from "./KittyToggle.svelte";
  import { showKitty } from "./stores/store";
</script>

<h2>Member Area</h2>
<div>
  <KittyToggle />
  {#if $showKitty}
    <KittyImage />
  {/if}
</div>
