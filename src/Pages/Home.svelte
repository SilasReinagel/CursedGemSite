<script>
	import Hero from '../Sections/Hero.svelte';
	import MainVideo from '../Sections/MainVideo.svelte';
	import Description from '../Sections/Description.svelte';
	import Screenshots from '../Sections/Screenshots.svelte';
</script>

<Hero/>

<section class="video darken-gradient">
	<MainVideo/>
</section>

<section class="description darken">
	<Description/>
</section>

<section class="screenshots darken pt4">
	<Screenshots/>
</section>

<style>
  .darken-gradient {
    background-image: linear-gradient(rgba(23, 17, 26, 0.01) 0%, rgba(23, 17, 26, 0.6) 33%, rgba(23, 17, 26, 0.9) 100%);
    width: 100%;
  }
</style>