<script>
import { store } from '../store.js';

export default {
  data() {
    return { store };
  },
  components: {},
  computed: {
    results: function () {
      return store.search.searchResults;
    },
  },
};
</script>

<template>
  <div class="results">
    <div class="card" v-for="(result, i) in results" :key="i">
      <img :src="result.img" alt="" />
      <div class="content">
        <div class="model">
          <p>{{ result.model }}</p>
          <font-awesome-icon :icon="['fas', 'circle-check']" />
        </div>
        <p class="category">{{ result.category }}</p>
        <div class="details">
          <font-awesome-icon :icon="['fas', 'dollar-sign']" />
          <p>{{ result.price }}</p>
          <font-awesome-icon :icon="['fas', 'car']" />
          <p>{{ result.brand }}</p>
          <font-awesome-icon :icon="['fas', 'gas-pump']" />
          <p>{{ result.fuel }}</p>
          <div class="favorite">
            <font-awesome-icon :icon="['fas', 'heart']" />
          </div>
        </div>
      </div>
    </div>
    <div class="show-all">Show All Cars &rarr;</div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;

.results {
  @include flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
  row-gap: 20px;

  .card {
    width: calc((100%) / 4);
    box-shadow: 0px 0px 4px 4px $shadow-color;
    border-radius: 4px;
    padding: 14px 21px;

    .content {
      @include flex;
      flex-direction: column;
      padding: 10px 0;
      gap: 20px;

      .model,
      .details {
        @include flex;
        gap: 8px;
      }
      .favorite {
        margin-left: auto;
        color: $grey-color;
        cursor: pointer;
      }
    }
  }
}

.show-all {
  color: $white-color;
  background-color: $black-color;
  border-radius: 5px;
  line-height: 67px;
  padding: 0 53px;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>
