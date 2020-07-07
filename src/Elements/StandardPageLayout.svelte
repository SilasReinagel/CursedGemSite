<script>
  export let title = "New Page";
  export let headerImg = "/images/banner.jpg";
  export let headerImgAlt = "Banner";

  import DividerWithText from '../Elements/DividerWithText.svelte';
  import PageHeaderImage from '../Elements/PageHeaderImage.svelte';
</script>

<section>
  <PageHeaderImage src={headerImg} alt={headerImgAlt}/>
  <div class="bg-color">
    <DividerWithText text={title} />
  </div>
  <slot/>
</section>

<style>
  section {
    background-color: var(--background-color);
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .bg-color {
    background-color: var(--alternate--background-color);
    padding: 1em;
  }
</style>
