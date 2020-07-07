<script>
  import TwoColumnLayout from '../Elements/TwoColumnLayout.svelte';

  import project from '../static-content';

  const leftImgs = project.screenshots.filter((_,i) => i&1);
  const rightImgs = project.screenshots.filter((_,i) => i % 2 === 0);
</script>

<section class="screenshots darken">
  <TwoColumnLayout>
    <div slot='first'>
      {#each leftImgs as image} 
        <div class='screenshot'><img  src={image} alt='Screenshot' lazy='true'/></div>
      {/each}
    </div>
    <div slot='second'>
      {#each rightImgs as image} 
        <div class='screenshot'><img  src={image} alt='Screenshot' lazy='true'/></div>
      {/each}
    </div>
  </TwoColumnLayout>
</section>

<style>
  .screenshot {
    max-width: 42vw;
    margin: 2em 0em;
  }

  .darken {
    width: 100%;
    background-image: linear-gradient(rgba(23, 17, 26, 0.9), rgba(23, 17, 26, 0.9)); 
  }
</style>
