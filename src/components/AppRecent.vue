<script>
import { store } from '../store.js';

export default {
  data() {
    return { store };
  },
  components: {},
  computed: {
    cards: function () {
      return store.recent;
    },
  },
};
</script>

<template>
  <div class="recent">
    <div class="title">
      <div class="icon">
        <font-awesome-icon class="thumb-icon" :icon="['far', 'thumbs-up']" />
      </div>
      <div class="title-content">
        <h1>Recent Articles</h1>
        <p>Useful information about car.</p>
      </div>
    </div>
    <div class="articles">
      <div class="card" v-for="(card, i) in cards">
        <figure>
          <img :src="card.img" alt="" />
          <figcaption>06.07.2022 - Auto Car</figcaption>
        </figure>
        <div class="card-content">
          <h2>{{ card.title }}</h2>
          <p>{{ card.body }}</p>
          <div class="more">More</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;
.recent {
  @include flex;
  flex-direction: column;
  align-items: center;
  background-color: $white-color;
  // height: 781px;

  .title {
    @include flex;
    flex-direction: column;
    align-items: center;
    width: 217px;

    .icon {
      @include centered-flex;
      background-color: $black-color;
      border-radius: 50%;
      aspect-ratio: 1;
      width: 100px;
      margin-top: 60px;
      .thumb-icon {
        color: $white-color;
        font-size: 50px;
      }
    }
    .title-content {
      text-align: center;
      h1 {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 29px;
      }
      p {
        padding-bottom: 19px;
      }
    }
  }
  .articles {
    @include flex;
    gap: 66px;
    width: 1385px;

    .card {
      @include flex;
      flex-direction: column;
      align-items: center;
      width: calc((100% - 198px) / 4);
      box-shadow: 0px 0px 20px 10px $shadow-color;
      border-radius: 4px;
      margin-bottom: 122px;

      img {
        padding: 26px;
      }
      figcaption {
        text-align: center;
        margin-top: -25px;
      }
      .card-content {
        @include centered-flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: start;
        gap: 20px;
        padding: 0 28px;
        margin-top: 10px;

        h2 {
          font-size: 22px;
        }

        .more {
          background-color: $black-color;
          color: $white-color;
          line-height: 59px;
          padding: 0 45px;
          margin-bottom: 20px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: auto;
        }
      }
    }
  }
}
</style>
