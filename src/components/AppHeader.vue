<script>
import { store } from '../store.js';
export default {
  data() {
    return { store };
  },
  components: {},
  computed: {
    nav: function () {
      return store.headerNav;
    },
  },
};
</script>

<template>
  <div class="header">
    <img class="logo" src="/1-header/logo-autocar.png" alt="" />
    <nav>
      <ul class="nav">
        <li v-for="(item, i) in nav" :key="i">{{ nav[i] }}</li>
      </ul>
    </nav>
    <div class="account">
      <img src="/1-header/padlock.png" alt="" />
      <p>My Account</p>
    </div>
    <div class="add-car">
      <img src="/1-header/add.png" alt="" />
      <p>Add Car</p>
    </div>
    <div class="menu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
    <div class="call">
      <img src="/1-header/headphones.png" alt="" />
      <p>+1 (234) 567 89 10</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;

.header {
  @include centered-flex;
  position: fixed;
  width: 100vw;
  padding: 5px 0px;
  cursor: pointer;
  border-bottom: 2px solid $grey-color;
  background-color: $white-color;
  z-index: 10;

  .logo {
    width: 195px;
    margin-right: 45px;
  }
  .nav {
    @include flex;
    gap: 18px;
    font-size: 16px;
    margin-right: 12px;
  }

  .account,
  .add-car,
  .call {
    @include centered-flex;
    background-color: $black-color;
    color: $white-color;
    padding: 14px;
    border-radius: 5px;
    font-weight: bold;

    img {
      width: 42px;
      -webkit-filter: invert(100%);
      filter: invert(100%);
      margin-right: 2px;
    }
  }
  .account {
    margin-right: 6px;
  }
  .call {
    img {
      margin-right: 10px;
    }
  }
  .menu {
    font-size: 40px;
    padding: 0 27px;
  }
}
</style>
