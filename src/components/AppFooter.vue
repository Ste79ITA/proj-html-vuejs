<script>
import { store } from '../store.js';

export default {
  data() {
    return { store };
  },
  components: {},
  computed: {
    account: function () {
      return store.footerNav.account;
    },
    links: function () {
      return store.footerNav.links;
    },
  },
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="autocar">
        <img class="logo-footer" src="/7-footer/logo-footer.png" alt="" />
        <ul>
          <li>
            <span>
              <font-awesome-icon
                class="gps-icon icon"
                :icon="['fas', 'location-dot']"
              />
            </span>
            New Jersey, USA
          </li>
          <li>
            <span class="phone-icon icon">
              <font-awesome-icon :icon="['fas', 'phone-volume']" />
            </span>
            +1 (234) 567 89 10
          </li>
          <li>
            <span class="mail-icon icon"
              ><font-awesome-icon :icon="['fas', 'envelope']"
            /></span>
            example@example.com
          </li>
          <li class="social">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
            <font-awesome-icon :icon="['fab', 'instagram']" />
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </li>
        </ul>
      </div>
      <div class="newsletter">
        <ul>
          <li><h1>Join Our Newsletter</h1></li>
          <li>
            <p>Subscribe to be informed about our services and products.</p>
          </li>
          <li class="form">
            <input
              class="form-mail"
              type="text"
              placeholder="Your Email Address"
            />
            <div class="form-subscribe">Subscribe &rarr;</div>
          </li>

          <li class="copyright">&copy; 2022 Autocar - All Rights Reserved.</li>
        </ul>
      </div>
      <div class="account">
        <ul>
          <li v-for="(item, i) in account" :key="i">{{ account[i] }}</li>
        </ul>
      </div>
      <div class="links">
        <ul>
          <li v-for="(item, i) in links" :key="i">{{ links[i] }}</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../style/mixins' as *;
@use '../style/_variables.scss' as *;

.footer {
  @include flex;
  align-items: center;
  background-color: $black-color;
  max-width: 100%;
  border-top: 2px solid $grey-color;
  padding: 26px 0;

  .container {
    @include flex;
    margin-left: 230px;
    color: $white-color;
  }

  .autocar,
  .account,
  .links {
    @include flex;
    justify-content: center;
    width: 241px;
    padding-top: 39px;

    ul {
      @include flex;
      flex-direction: column;
      align-items: start;
      gap: 5px;

      li {
        font-size: 17px;
        color: $grey-color;
      }

      li:not(:first-child)::first-letter {
        color: $white-color;
        font-size: 30px;
        margin-right: 5px;
      }

      li:first-child {
        font-size: 26px;
        color: $white-color;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }

  .autocar {
    @include flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 20px;
    .logo-footer {
      height: 70px;
      margin-top: -15px;
      margin-bottom: 20px;
    }
    .social {
      display: flex;
      gap: 30px;
      font-size: 30px;
      margin-left: 30px;
    }
    ul {
      gap: 30px;

      li:first-child {
        color: $grey-color;
        font-size: 17px;
        font-weight: 100;
        margin-bottom: 0;
      }
    }
    .icon {
      color: $grey-color;
      margin-right: 5px;
    }
    .gps-icon {
      padding: 0 2px;
    }
  }

  .newsletter {
    width: 690px;
    padding: 39px 140px;
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 14px;
      margin-bottom: 10px;
      color: $grey-color;
    }
    .form-mail,
    .form-subscribe {
      border-radius: 5px;
      line-height: 70px;
      width: 453px;
      padding-left: 20px;
      border: 1px solid white;
      color: $grey-color;
    }
    .form-subscribe {
      background-color: $white-color;
      text-align: center;
      margin-top: 5px;
      cursor: pointer;
    }

    .copyright {
      margin-top: 160px;
      margin-right: -100px;
      align-self: self-end;
    }
  }
}
</style>
4
