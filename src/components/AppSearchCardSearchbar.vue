<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <div class="search-bar">
    <div class="card">
      <input type="text" placeholder="Keywords" />
    </div>
    <div class="card">
      <input type="text" placeholder="Location" />
    </div>
    <div class="card">
      <select name="" id="">
        <option value="All Categories">All Categories</option>
      </select>
    </div>
    <div class="card">
      <select name="" id="">
        <option value="Brand">Brand</option>
      </select>
    </div>
    <div class="card">
      <select name="" id="">
        <option value="Fuel Type">Fuel Type</option>
      </select>
    </div>
    <div class="card">
      <select name="" id="">
        <option value="Transmission">Transmission</option>
      </select>
    </div>
    <div class="card">
      <select name="" id="">
        <option value="Status">Status</option>
      </select>
    </div>
    <div class="card-button">Search</div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;
.search-bar {
  width: 100%;
  @include flex;
  align-items: center;
  gap: 24px;
  padding: 30px 24px;

  .card {
    input,
    select,
    .card-search {
      text-align: center;
      padding: 25px 0;
      border: 1px solid $grey-color;
      border-radius: 5px;
      width: 160px;
      color: $darkGrey-color;
    }
  }
  .card-button {
    border: 1px solid $grey-color;
    padding: 25px 30px;
    border-radius: 5px;
    color: $white-color;
    background-color: $black-color;
    cursor: pointer;
  }
}
</style>
