<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <div class="hero">
    <div class="left-controller">
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </div>
    <div class="right-controller">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </div>
    <div class="hero-text">
      <h1>Buy And Sell Your Car At Its Value</h1>
      <h6>Find the right price and dealer.</h6>
      <p>Learno More &rarr;</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;
.hero {
  position: relative;
  color: $white-color;
  height: 830px;
  background-image: url('/2-hero/slider-autocar-1.jpg');
  background-position: 0 60%;
  border-bottom: 10px solid black;
  border-top: 10px solid black;

  .hero-text {
    position: absolute;
    top: 36%;
    left: 10%;

    h1 {
      font-size: 60px;
      max-width: 600px;
      margin-bottom: 30px;
    }
    h6 {
      font-size: 20px;
      margin-bottom: 50px;
    }
    p {
      font-size: 18px;
      font-weight: bold;
      margin-left: 50px;
      cursor: pointer;
    }
  }
}

.left-controller,
.right-controller {
  position: absolute;
  top: 50%;
  cursor: pointer;
}
.left-controller {
  left: 3%;
}
.right-controller {
  right: 3%;
}
</style>
