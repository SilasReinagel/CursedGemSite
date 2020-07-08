<script>
  import Container from '../Elements/Container.svelte';
  import DividerWithText from '../Elements/DividerWithText.svelte';

  import { gameDetails } from '../static-content.js';
</script>

<section>
  <Container>
    <div class="game-description decor-font">{gameDetails.shortDescription}</div>
    <div class="features center">
      <DividerWithText text="Features"/>
      {#each gameDetails.features as feature}
  ​     <h3>● {feature}</h3>
      {/each}
    </div>
  </Container>
</section>

<style>
  .game-description {
    margin: 2em auto;
    max-width: 80vw;
    width: 32em;
    font-size: 1.8em;
    text-align: center;
  }

  .features {
    max-width: 76vw;
    width: 40em;
  }

  h3 {
    font-size: 1em;
    margin: 0 0;
  }
</style>
