<script>
  import Container from '../Elements/Container.svelte';

  import { presskit } from '../static-content.js';
</script>

<section role="main">
  <Container>
  <div class="column mt4 px1 press">
    <h1 class="center">{presskit.name} Press Kit</h1>

    <div class="presskit-section facts">
      <hr>
      <h3>Fact Sheet</h3>
      <hr class="mb2">
      <p><b>Developer</b>: {presskit.developer}</p>
      <p><b>Location</b>: {presskit.location}</p>
      <p><b>Release Date</b>: {presskit.releaseDate}</p>
      <p><b>Platforms</b>: {presskit.platforms}</p>
      <p><b>Website</b>: <a href={presskit.website}>{presskit.website}</a></p>
      <p><b>Press Contact</b>: <a href="mailto:{presskit.contact}">{presskit.contact}</a></p>
      <p><b>Social</b>:
        {#if presskit.social.discord}
          <a href={presskit.social.discord}>Discord</a>
        {/if}
        {#if presskit.social.twitter}
          <a href={presskit.social.twitter}>Twitter</a>
        {/if}

      <div class="center logo-box">
        <img src="{presskit.logo}" alt="{presskit.name} Logo"/>
      </div>
    </div>
  ​
    <div class="presskit-section product">
      <hr>
      <h3>Project Description</h3>
      <hr>
      {#each presskit.descriptionParagraphs as paragraph}
  ​      <p>{paragraph}</p>
      {/each}
    </div>

    <div class="presskit-section features">
      <hr>
      <h3>Features</h3>
      <hr>
      {#each presskit.features as feature}
  ​     <p>● {feature}</p>
      {/each}
    </div>

    <!-- <div class="screenshots">
      <hr>
      <h3>Screenshots</h3>
      <hr>
      <div class="row">
        <div class="column half-width mr2">
          <a href="/images/screenshots/b-screenshot-3.jpg"><img src="/images/screenshots/b-screenshot-3.jpg" /></a>
        </div>
        <div class="column half-width">
          <a href="/images/screenshots/b-screenshot-8.jpg"><img src="/images/screenshots/b-screenshot-8.jpg" /></a>
        </div>
      </div>
    </div>     -->

    <div class="presskit-section credits">
      <hr>
      <h3>Credits</h3>
      <hr>

      {#each presskit.credits as credit}
        <p><b>{credit.name}</b>: {credit.role}</p>
      {/each}
    </div>

    <div class="presskit-section contact">
      <hr>
      <h3>Contact</h3>
      <hr>

      <p><b>Inquiries</b>: <a href="mailto:{presskit.contact}">{presskit.contact}</a></p>
      <p><b>Twitter</b>: <a href={presskit.social.twitter}>{presskit.social.twitter}</a></p>
      <p><b>Web</b>: <a href={presskit.website}>{presskit.website}</a>
    </div>
  </div>
  </Container>
</section>

<style>
  section, main {
    background-image: linear-gradient(rgba(23, 17, 26, 0.01) 0%, rgba(23, 17, 26, 0.9) 100%);
  }

  .logo-box {
    width: 36em;
    max-width: 80vw;
  }

  .center {
    margin-left: auto;
    margin-right: auto;
  }

  .features p {
    margin-top: -1em;
  }

  p {
    margin: 0.5em 0px;;
    line-height: 1.4em;
  }

  a {
    font-size: 1em;
  }

  .presskit-section {
    padding-bottom: 2em;
  }
</style>