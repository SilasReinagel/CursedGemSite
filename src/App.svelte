<script>
	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import { onDestroy } from 'svelte';
  import { pages } from './pages.js';

  const page = '/' + (new URLSearchParams(window.location.search).get('page') || '');
  const matchingRoutes = pages.filter(r => r.path.toLocaleLowerCase() === (page).toLocaleLowerCase());
	const component = matchingRoutes[0].component;
	const pageName = matchingRoutes[0].name;
</script>

<main>
	<DefaultLayout {pageName}>
		<div class="main-container">
  		<svelte:component this={component} />
		</div>
	</DefaultLayout>
</main>

<style>
main {
	width: 100%;
}
</style>
