<script>
  import Container from '../Elements/Container.svelte';
  import PlyrMp4Video from '../Elements/PlyrMp4Video.svelte';

</script>

<div class="darken-gradient">
  <Container>
      <div class="center-vh py-4">
        <h1>Game Trailer</h1>
        <div class="main-video">
          <PlyrMp4Video src="/video/Trailer.mp4" srcType="video/mp4" title="Cursed Gem - Trailer"/>
        </div>
      </div>
  </Container>
</div>

<style>
  h1 {
    font-size: 2.4em;
  }

  .py-4 {
    padding: 4em 0;
  }

  .darken-gradient {
    background-image: linear-gradient(rgba(23, 17, 26, 0.01) 0%, rgba(23, 17, 26, 0.6) 33%, rgba(23, 17, 26, 0.9) 100%);
    width: 100%;
  }

  .main-video {
    width: 80%;
    position:relative;
  }

  .center-vh {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
  }
</style>
