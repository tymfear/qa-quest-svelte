<script>
  import CreditsModal from "./modals/CreditsModal.svelte";

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
  }

  .credits {
    text-align: right;
    cursor: pointer;
  }
</style>

<header>
  <p class="logo">QA Quest</p>
  <p class="quest-name">Show me a Kitty</p>
  <p class="credits" on:click={() => (showModal = true)}>Credits</p>
</header>
{#if showModal}
  <CreditsModal on:closeCreditsModal={() => (showModal = false)} />
{/if}
