<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const dispatchClose = () => dispatch("closeCommonModal");
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

  footer {
    text-align: right;
    border-top: #e2dada solid 1px;
    padding-top: 1rem;
  }
  footer a {
    text-decoration: none;
    color: orange;
    border: solid orange 0.5px;
    padding: 5px;
  }

  footer a:hover {
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  }
  #header {
    text-align: center;
    border-bottom: #e2dada solid 1px;
  }
</style>

<div class="modal-background" on:click={dispatchClose} />

<div class="modal">
  <header id="header">
    <slot name="header" />
  </header>

  <slot />
  <footer>
    <a href="#" on:click={dispatchClose}>close</a>
  </footer>
</div>
