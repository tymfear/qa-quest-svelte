<script>
  import { Router, Route, Link } from "svelte-routing";
  import KittyApp from "./quests/kitty/Kitty.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import MainApp from "./mainApp/MainApp.svelte";
</script>

<style>
  @media (min-width: 768px) {
    .container {
      margin: 0 auto;
      padding: 16px;
      width: 736px;
      flex: 1;
      border-left: solid;
      border-right: solid;
      height: calc(100vh - 7rem);
      min-height: 500px;
    }
  }
</style>

<Header/>
<main class="container">
  <Router>
    <Route path="kitty" component="{KittyApp}"/>
    <Route path="/" component="{MainApp}"/>
  </Router>
</main>
<Footer/>
