<script>
	import Hero from '../Sections/Hero.svelte';
	import MainVideo from '../Sections/MainVideo.svelte';
	import Description from '../Sections/Description.svelte';
	import Screenshots from '../Sections/Screenshots.svelte';
	import CallToAction from '../Sections/CallToAction.svelte';
	import GameOverview from '../Sections/GameOverview.svelte';
</script>

<Hero/>

<section class="video darken-gradient mt2">
	<MainVideo/>
</section>

<section class="description darken">
	<Description/>
</section>

<section class="game-overview darken pt4">
	<GameOverview/>
</section>

<section class="call-to-action darken-break py8">
	<CallToAction/>
</section>

<style>
  .darken-gradient {
    background-image: linear-gradient(rgba(23, 17, 26, 0.01) 0%, rgba(23, 17, 26, 0.6) 33%, rgba(23, 17, 26, 0.9) 100%);
    width: 100%;
  }
</style>