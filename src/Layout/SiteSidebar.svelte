<script>
  export let open = false;

  import HamburgerIcon from '../Elements/HamburgerIcon.svelte';

  import company from '../static-content';
  import { pages } from '../pages.js';
</script>

<aside class="border-r-2 shadow-lg" class:open>
  <nav class="navbar">
    <div class="align-right">
      <a href="." class="home"><h1>{company.name}</h1></a>
      <HamburgerIcon bind:open/>
    </div>
    {#each pages as page}
      <a class="navlink" href={page.href}>{page.name}</a>
    {/each}
  </nav>
</aside>

<style>
  h1 {
    margin: 10px;
  }

  .align-right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 0 16px;
    width: 100%;
    height: 90px;
    border-bottom: 2px var(--secondary-color) solid;
    margin-bottom: 1em;
  }

	aside {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
		left: -110%;
    transition: left 0.3s ease-in-out;
    background-color: var(--primary-background-color);
    z-index: 99;
  }

  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

	.open {
		left: 0
  }

  .home {
    display: flex;
    justify-content: center;
  }

  .navlink {
    color: var(--primary-color);
    margin: 0.5em;
    line-height: 22px;
    font-size: 1.6em;
    font-weight: 700;
    font-family: Oswald,sans-serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: all 350ms;
    text-align: center;
    padding: 6px;
  }

  .navlink:hover,
  .navlink:active {
    border-top: 2px solid var(--primary-color); 
    border-bottom: 2px solid var(--primary-color); 
    color: var(--primary-color-hover);
  }
</style>
