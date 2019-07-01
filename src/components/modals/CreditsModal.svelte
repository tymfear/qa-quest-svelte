<script>
  import { headerStore } from "../stores/store.js";
  import Modal from "../ModalCommon.svelte";
  import LinkedinLink from "../icons/LinkedinLink.svelte";
</script>

<style>
  #linkedinLink {
    height: 3rem;
    width: 3rem;
  }

  .authorInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1, h3, h4 {
    margin: 0;
  }
</style>

<Modal on:closeModal>
  <h3 slot="header">Credits</h3>
  <h4>Quest Author</h4>
  <div class="authorInfo">
    <h1 id="authorName">{$headerStore.author}</h1>
    <div id="linkedinLink">
      <LinkedinLink link={$headerStore.profileLink} />
    </div>
  </div>
</Modal>
