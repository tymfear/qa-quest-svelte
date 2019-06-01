<script>
  import { showAdminArea } from "./stores/store";
</script>

<a href="#" on:click={() => showAdminArea.update(show => !show)}>
Show {$showAdminArea ?  'Member' : 'Admin'} Area
</a>
