<script>
  import { onMount } from "svelte";
  import { Router, links } from "svelte-routing";
  import { headerStore } from "../components/stores/store";

  onMount(() => {
    headerStore.update(store => {
      return {
        ...store,
        questName: "Choose you quest!",
        showAuthorInfo: false
      };
    });
  });
</script>
<style>
  #quest-navigator {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #navigator-links {
    width: 100%;
  }

  #navigator-links a {
    background-color: orange;
    display: block;
    text-align: center;
    text-decoration: none;
    color: white;
    padding: 1rem;
    font-size: 1rem;
  }

  #navigator-links a:hover {
    color: orange;
    background-color: white;
    border: orange 1px solid;
  }
</style>
<div id="quest-navigator">
  <h1>Choose your quest</h1>

  <div use:links id="navigator-links">
    <Router>
      <a href="/kitty">Show me a Kitty!</a>
    </Router>
  </div>
</div>
