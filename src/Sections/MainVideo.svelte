<script>
  import Container from '../Elements/Container.svelte';
</script>

<Container>
  <div class="center-vh py-4">
    <div class="main-video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/NiLP_9t0hVQ" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen 
        style="position:absolute;top:0;left:0;width:100%;height:100%;">
      </iframe>
    </div>
  </div>
</Container>

<style>
  .py-4 {
    padding: 4em 0;
  }
  
  .main-video {
    width: 80%;
    position:relative;
    padding-top:56.25%;
  }

  .center-vh {
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
  }
</style>
