<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <div class="how-to">
    <div class="image">
      <img src="/4-how-to/car-about-1.png" alt="" />
    </div>
    <div class="text-card">CARD</div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;

.how-to {
  background-color: $white-color;
  @include flex;
  align-items: start;

  .image {
    width: 690px;
    height: 690px;
    border: 1px solid greenyellow;
    margin-left: 356px;
    margin-bottom: 117px;
    background-image: url('/4-how-to/circle-auto-car-1.png');
    transform: rotate(30deg);

    img {
      margin-top: 65px;
      transform: rotate(-30deg);
    }
  }

  .text-card {
    width: 448px;
    height: 529px;
    border: 1px solid orange;
    margin-left: 68px;
    margin-top: 63px;
  }
}
</style>
