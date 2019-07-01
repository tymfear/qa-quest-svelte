<script>
  import MemberArea from "./MemberArea.svelte";
  import AdminArea from "./AdminArea.svelte";
  import Navigation from "./Navigation.svelte";
  import { showAdminArea, showKitty } from "./stores/store";
  import { headerStore } from "../../components/stores/store.js";
  import { onMount } from "svelte";

  onMount(() => {
    showKitty.update(() => Math.random() < 0.5);

    headerStore.update((store) => {
      return {
        ...store,
        showAuthorInfo: true,
        author: "Taras Voloshenko",
        profileLink: "https://www.linkedin.com/in/taras-voloshenko-12a42912",
        questName: "Show me a Kitty!"
      };
    });
  });
</script>

<svelte:head>
  <title>Show me the kitty</title>
</svelte:head>
<Navigation/>

{#if $showAdminArea}
  <AdminArea/>
{:else}
  <MemberArea/>
{/if}
