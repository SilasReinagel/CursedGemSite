<script>
  export let src;
  export let alt;
</script>

<div>
  <img src={src} alt={alt} lazy="false"/>
</div>

<style>
  div {
    width: 100vw;
    height: auto;
    max-height: 20em;
    overflow: hidden;
    vertical-align: middle;
    background-color: var(--banner-color);
  }

  img {
    opacity: 0.5;
  }
</style>