<script>
export default {
  data() {
    return {};
  },
  components: {},
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
          <li><h1>My Account</h1></li>
          <li><span>-</span> My Account</li>
          <li><span>-</span> Checkout</li>
          <li><span>-</span> Cart</li>
          <li><span>-</span> Packages</li>
          <li><span>-</span> Add Car</li>
        </ul>
      </div>
      <div class="links">
        <ul>
          <li><h1>Quick Links</h1></li>
          <li><span>-</span> Home</li>
          <li><span>-</span> About Us</li>
          <li><span>-</span> Blog</li>
          <li><span>-</span> Contact</li>
          <li><span>-</span> Refund & Returns</li>
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
      gap: 20px;

      li {
        font-size: 17px;
        color: $grey-color;
        span {
          font-weight: bold;
          font-size: 20px;
          color: $white-color;
        }
      }

      h1 {
        font-size: 26px;
        color: $white-color;
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
    .form-mail,
    .form-subscribe {
      border-radius: 5px;
      line-height: 3em;
      width: 100%;
      padding-left: 20px;
      border: 1px solid white;
      color: $grey-color;
    }
    .form-subscribe {
      background-color: $white-color;
      text-align: center;
      margin-top: 5px;
      cursor: pointer;
      line-height: 2.6em;
    }

    .copyright {
      margin-top: 110px;
      margin-right: -40px;
      align-self: self-end;
    }
  }
}
</style>
4
