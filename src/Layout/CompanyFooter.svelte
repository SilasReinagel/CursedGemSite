<script>
  export let company;

  import Container from '../Elements/Container.svelte';
  import { pages } from '../pages';
</script>

<section class="darken">
  <Container>
    <div class="row">
      <div class="credits column center-v">
        <a href={company.social.twitter}>AikonCWD</a>
        <a href="https://soundcloud.com/horrorpen">HorrorPen</a>
      </div>
      <div class="logo-box center-vh">
        <div class="logo">
          <img src={company.publisherLogo} alt="Vega Games Logo" loading="lazy"/>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="row my-1">
        <b><a href="./index.html?page=presskit">Presskit</a> / <a href="./index.html?page=contentcreators">Let's Players</a> / <a href={company.devLog}>DevLog</a></b>
      </div>
      <a href={company.social.twitter}>@AikonCWD</a>
      <a href={`mailto:${company.email}`}>{company.email}</a>
    </div>

  </Container>
</section>

<style>
  .my-1 {
    margin-bottom: 1em !important;
    margin-top: 1em !important;
  }

  section {
    padding-bottom: 4em;
  }

  .logo-box {
    height: 277px;
  }

  .logo {
    margin-left: 2vw;
    margin-bottom: 3em;
    width: 240px;
    max-width: 40vw;
  }

  .row {
    display: flex;
    margin: 0 auto;
  }

  .credits {
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    height: 277px;
  }

  .credits a {
    text-align: right !important;
  }

  .column {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  a {
    font-size: 1.2em;
    font-weight: 600;
    margin: 0 0.3em 1em 0.3em;
    text-align: center;
    font-family: 'Pixel', 'Times New Roman', Times, serif;
    letter-spacing: 0.05em;
  }

  a img {
    max-width: 48px;
  }

  h2 {
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    a {
      font-size: 1em;
    }
  }
</style>