<script>
  import company from '../static-content.js';
</script>

 <div class="hero-image">
  <div class="logo-box">
    <img src="/images/logo.jpg" alt="Cursed Gem Logo"/>
  </div>
</div>

<style>
  .hero-image {
    background-color: #101818;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("/images/background.png");

    min-height: 80vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    display: flex;
    align-content: center;
    justify-items: center;
    justify-content: center;
    align-items: center;
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
    left: 7.5%;
    right: 7.5%;
    top: 0%;
    bottom: 15%;
  }

  h1 {
    font-size: 2.6em;
  }

  p {
    color: var(--primary-color);
    font-size: 1.2em;
  }
</style>
