<script>
import AppHero from './AppHero.vue';
import AppSearch from './AppSearch.vue';
import AppHowTo from './AppHowTo.vue';
import AppTestimonials from './AppTestimonials.vue';
import AppRecent from './AppRecent.vue';

export default {
  data() {
    return {};
  },
  components: { AppHero, AppSearch, AppHowTo, AppTestimonials, AppRecent },
};
</script>

<template>
  <AppHero />
  <AppSearch />
  <AppHowTo />
  <AppTestimonials />
  <AppRecent />
</template>

<style lang="scss" scoped></style>
