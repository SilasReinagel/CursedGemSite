<script>
  export let title;
  export let url;
  export let description;
  export let image;
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
</svelte:head>
