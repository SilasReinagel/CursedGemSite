<script>
  import company from '../static-content.js';
</script>

 <div class="center-vh hero">
  <div class="logo-box">
    <img src={company.logo} alt="Cursed Gem Logo"/>
  </div>
</div>

<style>
  .hero {
    min-height: 92vh;
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--primary-color);
    padding: 2em;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: none;
    border-radius: 2em;
  }

  .logo-box {
    margin: 2em;
    width: 800px;
  }

  h1 {
    font-size: 2.6em;
  }

  p {
    color: var(--primary-color);
    font-size: 1.2em;
  }
</style>
