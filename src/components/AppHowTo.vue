<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <div class="how-to">
    <div class="image">
      <img src="/4-how-to/car-about-1.png" alt="" />
      <div class="experience">
        <div>24</div>
        <p>Years of Experience</p>
      </div>
      <div class="expert">
        <div>240</div>
        <p>Special Expert Team</p>
      </div>
    </div>
    <div class="text-card">
      <h1 class="main-title">Want to buy or sell a vehicle?</h1>
      <p class="card-text-body">
        You can put your vehicles for sale by registering on our website.Whether
        you are a dealer or sell personally. Sell your vehicle in the most
        profitable way. With this system, which has millions of members. You
        will be able to buy and sell vehicles quickly.
      </p>
      <img class="divider" src="/4-how-to/divider.jpg" alt="" />
      <div class="model">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'car']" />
        </div>
        <div>
          <h3>Model Vehicle</h3>
          <p>
            We are sure that you will find vehicles of suitable models on our
            website.
          </p>
        </div>
      </div>
      <div class="hand">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'car']" />
        </div>
        <div>
          <h3>2nd Hand Vehicles</h3>
          <p>
            You can put your used vehicles for sale by adding them to our
            website.
          </p>
        </div>
      </div>
      <div class="get-to-know">Get to know us &rarr;</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;

.how-to {
  background-color: $white-color;
  @include flex;
  align-items: start;

  .image {
    width: 690px;
    height: 690px;
    margin-left: 356px;
    margin-bottom: 117px;
    background-image: url('/4-how-to/circle-auto-car-1.png');
    transform: rotate(30deg);
    position: relative;

    img {
      margin-top: 65px;
      transform: rotate(-30deg);
    }
    .experience,
    .expert {
      color: $white-color;
      background-color: $black-color;
      border-radius: 50%;
      width: 185px;
      aspect-ratio: 1;
      @include centered-flex;
      flex-direction: column;
      transform: rotate(-30deg);
      div {
        font-size: 50px;
        padding-bottom: 10px;
      }
      p {
        font-size: 21px;
        text-align: center;
      }
    }
    .experience {
      position: absolute;
      top: 250px;
    }
    .expert {
      position: absolute;
      right: 0px;
      bottom: 130px;
    }
  }

  .text-card {
    width: 448px;
    margin-left: 68px;
    margin-top: 63px;
    @include flex;
    flex-direction: column;
    align-items: start;

    .main-title {
      font-size: 31px;
      padding-bottom: 10px;
    }
    .card-text-body {
      font-weight: 100;
      line-height: 1.5em;
      font-size: 17px;
      padding-bottom: 10px;
    }
    .divider {
      width: 140px;
      color: $grey-color;
      opacity: 50%;
      padding-bottom: 20px;
    }

    .model,
    .hand {
      @include flex;
      .icon {
        @include centered-flex;
        font-size: 50px;
        margin-right: 15px;
        margin-left: 10px;
      }
      h3 {
        font-size: 23px;
        margin-bottom: 10px;
      }
      p {
        font-weight: 100;
        line-height: 1.5em;
      }
    }
    .get-to-know {
      color: $white-color;
      background-color: $black-color;
      padding: 25px 50px;
      margin-top: auto;
      cursor: pointer;
    }
    .model {
      padding-bottom: 30px;
    }
    .hand {
      padding-bottom: 20px;
    }
  }
}
</style>
