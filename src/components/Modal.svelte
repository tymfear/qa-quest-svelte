<script>
  import { createEventDispatcher } from "svelte";
  import { creditsInfo } from "./stores/store.js";

  const dispatch = createEventDispatcher();
</script>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.2em;
    background: white;
    z-index: 1;
  }

  button {
    display: block;
  }
</style>

<div class="modal-background" on:click={() => dispatch('close')} />

<div class="modal">
  <h2>Quest Author</h2>
  <p>{$creditsInfo.author}</p>
  <a href={$creditsInfo.profileLink}>Profile</a>
  <hr />
  <button on:click={() => dispatch('close')}>close modal</button>
</div>
