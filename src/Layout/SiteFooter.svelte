<script>
  export let company;

  import SingleColorSocialLinks from '../Elements/SingleColorSocialLinks.svelte';

  const year = new Date().getFullYear();
</script>

<footer>
  <p>© {year} {company.name}</p>

  <SingleColorSocialLinks/>

  <p class="small-text">Website by: <a href="http://www.silasreinagel.com" class="small-text">Silas Reinagel</a></p>
</footer>

<style>
  footer {
    padding: 12px 18px;
    height: 5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background-color: #000;
  }

  a {
    font-size: 1em;
  }

</style>
