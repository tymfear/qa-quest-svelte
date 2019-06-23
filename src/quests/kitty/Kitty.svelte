<script>
  import MemberArea from "./MemberArea.svelte";
  import AdminArea from "./AdminArea.svelte";
  import Navigation from "./Navigation.svelte";
  import { showAdminArea } from "./stores/store";
  import { creditsInfo } from "../../components/stores/store.js";
  import { onMount } from "svelte";

  onMount(() => {
    creditsInfo.update(() => {
      return {
        author: "Taras Voloshenko",
        profileLink: "https://www.linkedin.com/in/taras-voloshenko-12a42912"
      };
    });
  });
</script>

<svelte:head>
  <title>Show me the kitty</title>
</svelte:head>
<Navigation />

{#if $showAdminArea}
  <AdminArea />
{:else}
  <MemberArea />
{/if}
