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
  search: {
    searchCategories: [
      {
        img: '/3-search/category/1-cabrio.jpg',
        model: 'Cabrio',
        listing: '3',
      },
      {
        img: '/3-search/category/2-coupe.jpg',
        model: 'Coupe',
        listing: '0',
      },
      {
        img: '/3-search/category/3-hatchback.jpg',
        model: 'Hatchback',
        listing: '2',
      },
      {
        img: '/3-search/category/4-pickup.jpg',
        model: 'Pick Up',
        listing: '0',
      },
      {
        img: '/3-search/category/5-sedan.jpg',
        model: 'Sedan',
        listing: '3',
      },
      {
        img: '/3-search/category/6-suv.jpg',
        model: 'SUV',
        listing: '4',
      },
    ],
    searchResults: [
      {
        img: '/3-search/results/car-1.jpg',
        model: 'BMW M9',
        category: 'Cabrio',
        price: '34.000€',
        brand: 'BMW',
        fuel: 'Electric',
      },
      {
        img: '/3-search/results/car-2.jpg',
        model: 'BMW M8',
        category: 'Cabrio',
        price: '34.000€',
        brand: 'BMW',
        fuel: 'Diesel',
      },
      {
        img: '/3-search/results/car-3.jpg',
        model: 'BMW M4',
        category: 'Cabrio',
        price: '34.000€',
        brand: 'BMW',
        fuel: 'Gasoline',
      },
      {
        img: '/3-search/results/car-4.jpg',
        model: 'Seat Ibiza',
        category: 'Hatchback',
        price: '27.000€',
        brand: 'Seat',
        fuel: 'Electric',
      },
      {
        img: '/3-search/results/car-5.jpg',
        model: 'Seat Arone',
        category: 'SUV',
        price: '68.000€',
        brand: 'Seat',
        fuel: 'Gasoline',
      },
      {
        img: '/3-search/results/car-6.jpg',
        model: 'Volkswagen Taigo',
        category: 'SUV',
        price: '52.000€',
        brand: 'Volkswagen',
        fuel: 'Electric',
      },
      {
        img: '/3-search/results/car-7.jpg',
        model: 'Volkswagen T-Cross',
        category: 'SUV',
        price: '47.000€',
        brand: 'Volkswagen',
        fuel: 'Diesel',
      },
      {
        img: '/3-search/results/car-8.jpg',
        model: 'Volkswagen Passat',
        category: 'Sedan',
        price: '32.000€',
        brand: 'Volkswagen',
        fuel: 'Diesel',
      },
    ],
  },
  recent: [
    {
      img: '/6-recent/news-autocar-1.jpg',
      caption: '06.07.2022 - Auto Car',
      title: 'Why is BMW loved?',
      body: 'BMWs have a different line with their designs and almost [...]',
    },
    {
      img: '/6-recent/news-autocar-2.jpg',
      caption: '06.07.2022 - Auto Car',
      title: 'How solid is Audi?',
      body: 'According to Euro NCAP data with different test organizations, there [...]',
    },
    {
      img: '/6-recent/news-autocar-5.jpg',
      caption: '06.07.2022 - Auto Car',
      title: 'What brand is Skoda?',
      body: 'Skoda is one of the leading automotive manufacturer of the [...]',
    },
    {
      img: '/6-recent/news-autocar-6.jpg',
      caption: '06.07.2022 - Auto Car',
      title: 'Is the Auris diesel?',
      body: 'You will have a quieter vehicle that burns less than [...]',
    },
  ],
});
