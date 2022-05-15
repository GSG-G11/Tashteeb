import { ENGINEER, ADMIN } from '../models/User';

const fakeUsers = [
  {
    email: 'admin@admin.com',
    username: 'admin',
    password: '$2a$10$yxS08sgH3.nLAZdQbwglIe1Ph12aVRNlA/J2qv/x03aSq.Q1ebqy.',
    image: 'http://themesflat.com/html/nah/images/member/3t1.png',
    role: ADMIN,
  },
  {
    email: 'nabil@gmail.com',
    username: 'nabil',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
  },
  {
    email: 'enghefsdfdslles@helles.com',
    username: 'enghelfdsfdles',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    hour_price: 100,
    phone: '+20100100100',
  },
  {
    email: 'enghelles@hsadelles.com',
    username: 'enghfdsfdelles',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    hour_price: 100,
    phone: '+20100100100',
  },
  {
    email: 'enghelles@hfdsfelles.com',
    username: 'enghelledass',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    hour_price: 100,
    phone: '+20100100100',
  },
  {
    email: 'enghelles@hfdelles.com',
    username: 'enghellesfd',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    hour_price: 100,
    phone: '+20100100100',
  },
  {
    email: 'enghefdflles@helles.com',
    username: 'enghedsflles',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    hour_price: 100,
    phone: '+20100100100',
  },
  {
    email: 'engibrahime@helles.com',
    username: 'engibrahime',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/1t1.png',
    role: ENGINEER,
    hour_price: 150,
    phone: '+20100100100',
  },
  {
    email: 'engahmed@helles.com',
    username: 'engahmed',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/1t1.png',
    role: ENGINEER,
    hour_price: 200,
    phone: '+20100100100',
  },
  {
    email: 'engmohammed@helles.com',
    username: 'engmohammed',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    hour_price: 200,
    phone: '+20100100100',
  },
  {
    email: 'engnabil@helles.com',
    username: 'engnabil',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/1t1.png',
    role: ENGINEER,
    hour_price: 250,
    phone: '+20100100100',
  },
];

const fakeProducts = [
  {
    name: 'The Diary of a Young Girl',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 14.5,
    categoryId: 4,
    image:
      'http://themesflat.com/html/nah/images/shop/f2.png',
  },
  {
    name: 'Night (The Night Trilogy, #1)',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 50,
    categoryId: 3,
    image:
      'http://themesflat.com/html/nah/images/shop/f3.png',
  },
  {
    name: 'To Kill a Mockingbird',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 19.9,
    categoryId: 2,
    image:
      'http://themesflat.com/html/nah/images/shop/f3.png',
  },
  {
    name: 'The Great Gatsby',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 200,
    categoryId: 1,
    image:
      'http://themesflat.com/html/nah/images/shop/f2.png',
  },
];

const fakeCategories = [
  {
    id: 1,
    name: 'Teen & Young Adult',
    image: '',
  },
  {
    id: 2,
    name: 'Sicfi & Fantasy',
    image: '',
  },
  {
    id: 3,
    name: 'Romance',
    image: '',
  },
  {
    id: 4,
    name: 'History',
    image: '',
  },
];

export { fakeUsers, fakeProducts, fakeCategories };
