<script>
  let sidebarOpen = false;

  import HamburgerIcon from '../Elements/HamburgerIcon.svelte';
  import SiteSidebar from './SiteSidebar.svelte';

  import company from '../static-content';
  import { pages } from '../pages.js';
</script>

<header class="bg-gradient">
  <a href="." class="home"><h1>{company.name}</h1></a>
  <SiteSidebar bind:open={sidebarOpen}/>
  <nav class="navbar tablet-hidden">
    {#each pages as page}
      <a class="navlink" href={page.href}>{page.name}</a>
    {/each}
  </nav>
  <HamburgerIcon bind:open={sidebarOpen}/>
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    box-sizing: content-box;
    border-bottom: 2px var(--secondary-color) solid;
    height: 90px;
    padding: 0 16px;
  }

  .home {
    display: flex;
    justify-content: center;
  }

  h1 {
    margin: 10px;
  }

  img {
    max-width: 64px;
    border-radius: 16px;
  }
 
  .navlink {
    color: var(--primary-color);
    padding: 6px;
    margin: 5px 15px;
    font-size: 1.1em;
    line-height: 22px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: all 350ms;
    text-align: center;
  }

  .navlink:hover,
  .navlink:active {
    border-top: 2px solid var(--primary-color); 
    border-bottom: 2px solid var(--primary-color); 
    color: var(--primary-color-hover);
  }

</style>
