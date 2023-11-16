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
        <div class="card-button">Search</div>
      </div>
      <div class="categories">
        <div class="card">
          <img src="/3-search/category/1-cabrio.jpg" alt="" />
          <p class="model">Cabrio</p>
          <p class="listing">3 Listing</p>
        </div>
        <div class="card">
          <img src="/3-search/category/2-coupe.jpg" alt="" />
          <p class="model">Coupe</p>
          <p class="listing">0 Listing</p>
        </div>
        <div class="card">
          <img src="/3-search/category/3-hatchback.jpg" alt="" />
          <p class="model">Hatchback</p>
          <p class="listing">2 Listing</p>
        </div>
        <div class="card">
          <img src="/3-search/category/4-pickup.jpg" alt="" />
          <p class="model">Pick Up</p>
          <p class="listing">0 Listing</p>
        </div>
        <div class="card">
          <img src="/3-search/category/5-sedan.jpg" alt="" />
          <p class="model">Sedan</p>
          <p class="listing">3 Listing</p>
        </div>
        <div class="card">
          <img src="/3-search/category/6-suv.jpg" alt="" />
          <p class="model">SUV</p>
          <p class="listing">4 Listing</p>
        </div>
      </div>
      <div class="results">TEST</div>
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
  .categories {
    @include flex;
    justify-content: center;

    .card {
      text-align: center;
      color: $darkGrey-color;
      box-shadow: 0px 0px 4px 4px rgba(170, 170, 170, 0.1);
      width: calc((100% / 6) - 4px);
      &:not(:first-child) {
        margin-left: 4px;
        border-radius: 2px;
      }

      img {
        width: 100%;
      }
      .model {
        margin-top: 10px;
        margin-bottom: 6px;
        font-size: 17px;
      }
      .listing {
        font-size: 11px;
        padding-bottom: 17px;
      }
    }
  }
  .results {
    border: 1px solid orange;
    height: 780px;
  }
}
</style>
