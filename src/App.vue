<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {
      message: 'ciao',
    };
  },
  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use './style/_general.scss' as *;
@use './style/_mixins.scss' as *;
</style>
