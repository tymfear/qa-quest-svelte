<script>
  import { showAdminArea } from "./stores/store";
</script>

<style>
  nav {
    text-align: right;
  }
  a {
    text-decoration: none;
    color: orange;
    border: solid orange 0.5px;
    padding: 5px;
  }

  a:hover {
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  }
</style>

<nav>
  <a href="#admin" on:click={() => showAdminArea.update(show => !show)}>
    Show {$showAdminArea ? 'Member' : 'Admin'} Area
  </a>
</nav>
