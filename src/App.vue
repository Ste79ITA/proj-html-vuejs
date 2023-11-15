<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      message: 'ciao',
    };
  },
  components: { AppHeader },
};
</script>

<template>
  <AppHeader />
  {{ message }}
</template>

<style lang="scss">
@use './style/_general.scss' as *;
@use './style/_mixins.scss' as *;

.test {
  @include flex;
}
</style>
