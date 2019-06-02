<script>
  import Loader from "./Loader.svelte";

  let kittyUrl = getKittyUrl();
  async function getKittyUrl() {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=1&size=full`,
      {
        headers: {
          "x-api-key": "4ba6ad98-b2e1-4e4d-976c-6888d3dcf759"
        }
      }
    );

    return (await res.json())[0].url;
  }
</script>

<style>
  .kittyContainer {
    display: flex;
    justify-content: center;
  }

  .kittyContainer img {
    max-width: 300px;
    max-height: 300px;
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader p {
    font-size: 2rem;
  }
</style>

<div class="kittyContainer">
  {#await kittyUrl}
    <div class="loader">
      <Loader />
      <p>Loading your kitty</p>
    </div>
  {:then src}
    <img {src} alt="Kitty Gif" />
  {:catch}
    <p>Failed to load kitty image</p>
  {/await}
</div>
