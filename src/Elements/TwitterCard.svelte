<script>
  export let username;
  export let title;
  export let description;
  export let url;
  export let image;
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@{username}" />
	<meta name="twitter:site" content="@{username}" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description}/>
	<meta name="twitter:url" content={url} />
	<meta name="twitter:image" content="{image}" />
</svelte:head>
