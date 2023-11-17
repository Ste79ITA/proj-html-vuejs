<script>
import AppHero from './AppHero.vue';
import AppSearch from './AppSearch.vue';
import AppRecent from './AppRecent.vue';

export default {
  data() {
    return {};
  },
  components: { AppHero, AppSearch, AppRecent },
};
</script>

<template>
  <AppHero />
  <AppSearch />
  <AppRecent />
</template>

<style lang="scss" scoped></style>
