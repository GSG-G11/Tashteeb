import { ENGINEER, ADMIN } from '../models/User';

const fakeUsers = [
  {
    email: 'admin@admin.com',
    username: 'admin',
    password: 'admin',
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
    email: 'enghelles@helles.com',
    username: 'enghelles',
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
  {
    email: 'engnabil1@helles.com',
    username: 'engnabil2',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/1t1.png',
    role: ENGINEER,
    hour_price: 250,
    phone: '+20100100100',
  },
  {
    email: 'engnabil2@helles.com',
    username: 'engnabil3',
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
      'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9789352782772_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
  },
  {
    name: 'Night (The Night Trilogy, #1)',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 50,
    categoryId: 3,
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575073611l/1617.jpg',
  },
  {
    name: 'To Kill a Mockingbird',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 19.9,
    categoryId: 2,
    image:
      'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780060935467_p0_v12%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
  },
  {
    name: 'The Great Gatsby',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 200,
    categoryId: 1,
    image:
      'https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_FMjpg_UX999_.jpg',
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
