import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {} from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faBars, faChevronLeft, faChevronRight);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
