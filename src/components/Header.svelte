<script>
  import { navigate } from "svelte-routing";
  import CreditsModal from "./modals/CreditsModal.svelte";
  import { headerStore } from "./stores/store";

  let showModal = false;
</script>

<style>
  header {
    background-color: black;
    color: orange;
    padding: 0 1rem;
    display: flex;
    align-content: space-between;
  }

  .quest-name {
    flex-grow: 1;
    text-align: center;
    font-size: 1.5rem;
    line-height: 0;
  }

  .logo,
  .credits {
    width: 20%;
    cursor: pointer;
  }

  .credits {
    text-align: right;
  }
</style>

<header>
  <p class="logo" on:click={() => navigate('/')}>QA Quest</p>
  <p class="quest-name">{$headerStore.questName}</p>
  <div class="credits">
      {#if $headerStore.showAuthorInfo}
        <p on:click={() => (showModal = true)}>Credits</p>
      {/if}
  </div>
</header>
{#if showModal}
  <CreditsModal on:closeModal={() => (showModal = false)} />
{/if}
