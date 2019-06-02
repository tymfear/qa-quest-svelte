<style>
  footer {
    background-color: black;
    color: orange;
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
  }
</style>

<script>
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  }
</script>
<footer>© {getDate()}</footer>
