<script>
  import OpenGraph from '../Elements/OpenGraph.svelte';
  import TwitterCard from '../Elements/TwitterCard.svelte';

  import project from '../static-content.js';
</script>

<OpenGraph title={project.name} image={project.siteImage} description={project.siteDescription} url={project.url}/>
<TwitterCard title={project.name} image={project.siteImage} description={project.siteDescription} url={project.url} username={project.social.twitterUsername}/>