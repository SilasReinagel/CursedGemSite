<script>
  import { onDestroy } from 'svelte';
  import { pages } from '../pages.js';

  const page = '/' + (new URLSearchParams(window.location.search).get('page') || '');
  const matchingRoutes = pages.filter(r => r.path.toLocaleLowerCase() === (page).toLocaleLowerCase());
  // TODO: Handle Not Found Page
  const component = matchingRoutes[0].component;
</script>

<style>
</style>

<div class="main-container">
  <svelte:component this={component} />
</div>
