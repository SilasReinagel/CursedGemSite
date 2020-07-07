<script>
  export let company;

  import Container from '../Elements/Container.svelte';
  import { pages } from '../pages';
</script>

<section>
  <Container>
    <div class="mobile-three-column-layout">
      <div class="column">
        <h2>Contact</h2>
        <h4>{company.name}</h4>
        <a href="mailto:{company.email}">{company.email}</a>
        <hr/>
        <div class="logo-box">
          <img src={company.logo} alt="{company.name} Logo" />
        </div>
      </div>
      <div class="column vertical">
        <h2>Social & Web</h2>
        <div class="social-links">
          {#if company.social.soundcloud}
          <a href={company.social.soundcloud}><img class="soundcloud" src="/social/soundcloud-multi-color.svg" alt="Soundcloud Icon"/></a>
          {/if}
          {#if company.social.facebook}
          <a href={company.social.facebook}><img class="facebook" src="/social/facebook-multi-color.svg" alt="Facebook Icon"/></a>
          {/if}
          {#if company.social.twitter}
          <a href={company.social.twitter}><img class="twitter" src="/social/twitter-multi-color.svg" alt="Twitter Icon"/></a>
          {/if}
          {#if company.social.twitch}
          <a href={company.social.twitch}><img class="twitch" src="/social/twitch-multi-color.png" alt="Twitch Icon"/></a>
          {/if}
        </div>
        <hr/>
      </div>
      <div class="column vertical">

        <h2>Navigation</h2>
        {#each pages as page}
          <a class="navlink" href={page.href}>{page.name}</a>
        {/each}
        <hr/>
      </div>
    </div>
  </Container>
</section>

<style>
  a {
    font-size: 1em;    
  }

  .facebook {
    max-width: 48px;
  }

  .social-links a {
    margin-right: 12px;
  }
  .social-links:last-child {
    margin-right: 0;
  }

  a img {
    max-width: 48px;
  }
  
  .navlink {
    font-size: 1em;
    transition-duration: 0.4s;
    margin: 6px 6px;
  }

  .navlink:hover {
    margin-left: 16px;
  }

  h2 {
    text-transform: uppercase;
  }

  * > hr {
    width: 100%;
    border: 0;
    height: 1px;
    background: var(--primary-color-light);
    margin: 1.6em 0;
  }

  .logo-box {
    height: 150px;
    width: 150px;
  }

  section {
    background-color: var(--alternate-background-color);
    border-top: 2px var(--secondary-color) solid;
  }

  .mobile-three-column-layout {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .column {
    max-width: 320px;
    width: 320px;
    margin: 1.5em;
  }

  .vertical {
    display: flex;
    flex-direction: column;
  }

  .center {
    align-items: center;
  }
</style>