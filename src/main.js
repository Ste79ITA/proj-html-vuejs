import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faCircleCheck,
  faDollarSign,
  faCar,
  faGasPump,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faFacebookF,
  faBars,
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faCircleCheck,
  faDollarSign,
  faCar,
  faGasPump,
  faHeart,
  faThumbsUp,
  faInstagram,
  faTwitter
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
