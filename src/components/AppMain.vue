<script>
import AppHero from './AppHero.vue';

export default {
  data() {
    return {};
  },
  components: { AppHero },
};
</script>

<template>
  <main class="container">
    <AppHero />
  </main>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 80px;
  max-width: 1920px;
  margin: 0 auto;
  z-index: 0;
}
</style>
