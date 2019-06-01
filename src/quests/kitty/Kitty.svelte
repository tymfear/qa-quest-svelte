<script>
  import MemberArea from "./MemberArea.svelte";
  import AdminArea from "./AdminArea.svelte";
  import Navigation from "./Navigation.svelte";
  import { showAdminArea } from "./stores/store";
</script>

<style>
  h1 {
    margin: 0 auto;
    text-align: center;
  }
</style>

<svelte:head>
  <title>Show me the kitty</title>
</svelte:head>

<h1>Show me the kitty</h1>
<hr/>
<Navigation/>

{#if $showAdminArea}
  <AdminArea/>
{:else}
  <MemberArea/>
{/if}
