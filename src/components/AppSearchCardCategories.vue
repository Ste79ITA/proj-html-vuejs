<script>
import { store } from '../store.js';

export default {
  data() {
    return { store };
  },
  components: {},
  computed: {
    categories: function () {
      return store.search.searchCategories;
    },
  },
};
</script>

<template>
  <div class="categories">
    <div class="card" v-for="(category, i) in categories" :key="i">
      <img :src="category.img" alt="" />
      <p class="model">{{ category.model }}</p>
      <p class="listing">{{ category.listing }} Listing</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;

.categories {
  @include flex;
  justify-content: center;

  .card {
    text-align: center;
    color: $darkGrey-color;
    box-shadow: 0px 0px 4px 4px $shadow-color;
    width: calc(100% / 6);
    border-radius: 4px;
    cursor: pointer;

    img {
      width: 100%;
    }
    .model {
      margin-top: 10px;
      margin-bottom: 6px;
      font-size: 17px;
    }
    .listing {
      font-size: 11px;
      padding-bottom: 17px;
    }
  }
}
</style>
