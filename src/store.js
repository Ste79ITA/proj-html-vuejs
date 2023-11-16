import { reactive } from 'vue';

export const store = reactive({
  headerNav: [
    'Home',
    'About Us',
    'Vehicles',
    'Dealers',
    'Packages',
    'Blog',
    'Contact',
  ],
  footerNav: {
    account: [
      'My Account',
      '- My Account',
      '- Checkout',
      '- Cart',
      '- Packages',
      '- Add Car',
    ],

    links: [
      'Quick Links',
      '- Home',
      '- About Us',
      '- Blog',
      '- Contact',
      '- Refund & Returns',
    ],
  },
});
