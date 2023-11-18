<script>
import { store } from '../store.js';

export default {
  data() {
    return { store };
  },
  components: {},
  computed: {
    cards: function () {
      return store.testimonials;
    },
  },
};
</script>

<template>
  <div class="testimonials">
    <div class="title">
      <div class="icon">
        <font-awesome-icon class="thumb-icon" :icon="['far', 'thumbs-up']" />
      </div>
      <div class="stars">
        <font-awesome-icon :icon="['far', 'star']" />
        <font-awesome-icon :icon="['far', 'star']" />
        <font-awesome-icon :icon="['far', 'star']" />
      </div>
      <div class="title-content">
        <h1>What Are Our Customers Saying ?</h1>
        <p>Opinions from our happy customers.</p>
      </div>
    </div>
    <div class="articles">
      <div class="card" v-for="(card, i) in cards">
        <p class="card-text">{{ card.body }}</p>
        <img class="portrait" :src="card.portrait" alt="" />
        <p class="name">{{ card.name }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;

@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;700&family=Open+Sans:wght@300;400;700&family=Space+Grotesk:wght@700&display=swap');

.testimonials {
  @include flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/5-testimonials/bg-autocar.jpg');

  .title {
    @include flex;
    flex-direction: column;
    align-items: center;
    width: 502px;
    color: $white-color;

    .icon {
      @include centered-flex;
      margin-top: 85px;
      .thumb-icon {
        color: $white-color;
        font-size: 50px;
      }
    }
    .stars {
      font-size: 20px;
      margin-bottom: 40px;
    }
    .title-content {
      text-align: center;
      h1 {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 29px;
      }
      p {
        padding-bottom: 44px;
        font-weight: 100;
      }
    }
  }
  .articles {
    @include flex;
    gap: 30px;
    width: 1419px;
    position: relative;

    .card {
      @include flex;
      flex-direction: column;
      align-items: center;
      background-color: $white-color;
      width: calc((100% - 90px) / 4);
      box-shadow: 0px 0px 20px 10px $shadow-color;
      border-radius: 4px;
      padding: 53px 46px;
      padding-bottom: 39px;
      position: relative;
      margin-bottom: 133px;

      p {
        font-size: 15px;
        line-height: 2em;
        font-weight: 100;
        text-align: center;
      }

      img {
        margin-bottom: 52px;
      }
      .portrait {
        width: 100px;
      }
      .card-text {
        margin-bottom: 34px;
        z-index: 2;
      }
      &::before {
        position: absolute;
        display: block;
        content: '"';
        font-size: 200px;
        font-family: 'Space Grotesk', sans-serif;
        color: $quotes-color;
        transform: rotate(15deg) translate(-60%);
        top: 60px;
        left: 50%;
        z-index: 1;
        opacity: 60%;
      }
    }
    &::before {
      position: absolute;
      display: block;
      content: ' . ';
      background-color: $black-color;
      line-height: 7px;
      width: 115px;
      z-index: 2;
      border-radius: 10px;
      left: 44%;
      bottom: 75px;
    }
    &::after {
      position: absolute;
      display: block;
      content: ' . ';
      background-color: $grey-color;
      color: $grey-color;
      line-height: 7px;
      width: 55px;
      z-index: 2;
      border-radius: 10px;
      left: 53%;
      bottom: 75px;
    }
  }
}
</style>
