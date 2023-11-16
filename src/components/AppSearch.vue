<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <div class="search">
    <div class="container">
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
        <div class="card-search">Search</div>
      </div>
      <div class="categories"></div>
      <div class="results"></div>
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
    width: 1451px;
    padding-top: 17px;
  }
  .search-bar {
    border: 1px solid orange;
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
        color: rgb(105, 105, 105);
      }
    }
    .card-search {
      border: 1px solid $grey-color;
      padding: 25px 30px;
      border-radius: 5px;
      color: $white-color;
      background-color: $black-color;
      cursor: pointer;
    }
  }
}
</style>
