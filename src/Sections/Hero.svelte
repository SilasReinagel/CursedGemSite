<script>
  import company from '../static-content.js';
</script>

 <div class="center-vh hero">
  <div class="logo-box">
    <picture>
      <source srcset={company.logoMobile} media="(max-width: 600px)">
      <img src={company.logo} alt="{company.name} Logo">
    </picture>
  </div>
</div>

<style>
  .hero {
    min-height: 92vh;
  }

  .logo-box {
    margin: 2em;
    width: 800px;
    min-height: 198px;
  }
</style>
