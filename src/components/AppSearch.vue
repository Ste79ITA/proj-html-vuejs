<script>
import AppSearchCardSearchbar from './AppSearchCardSearchbar.vue';
import AppSearchCardCategories from './AppSearchCardCategories.vue';
import AppSearchCardResults from './AppSearchCardResults.vue';

export default {
  data() {
    return {};
  },
  components: {
    AppSearchCardSearchbar,
    AppSearchCardCategories,
    AppSearchCardResults,
  },
};
</script>

<template>
  <div class="search">
    <div class="container">
      <AppSearchCardSearchbar />
      <AppSearchCardCategories />
      <AppSearchCardResults />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;

.search {
  background-color: $white-color;
  height: 1270px;
  width: 100%;

  .container {
    width: 1450px;
    padding-top: 17px;
  }
}
</style>
