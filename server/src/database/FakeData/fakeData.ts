import { ENGINEER, ADMIN, USER } from '../models/User';

const fakeUsers = [
  {
    email: 'admin@admin.com',
    username: 'admin',
    password: '$2a$10$Mw6FBwi51Lzx50w7hWaaBOxu9XpehgIy0VwWzgl3LvxZCvUqyOSma',
    image: 'http://themesflat.com/html/nah/images/member/3t1.png',
    role: ADMIN,
    phone: '+20100100100',
  },
  {
    email: 'nabil@gmail.com',
    username: 'nabil',
    password: '$2a$10$Mw6FBwi51Lzx50w7hWaaBOxu9XpehgIy0VwWzgl3LvxZCvUqyOSma',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: USER,
    phone: '+970592565688',
  },
  {
    email: 'mohamed@helles.com',
    username: 'Mary Jones',
    password: '$2a$10$Mw6FBwi51Lzx50w7hWaaBOxu9XpehgIy0VwWzgl3LvxZCvUqyOSma',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    bio: 'Mary Jones is an Administrative Assistant with eight years of experience working alongside the executive team of a Fortune 500 company',
    hour_price: 100,
    phone: '+970567780031',
  },
  {
    email: 'enghelles@hsadelles.com',
    username: 'Alex Drysdale',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    bio: 'My name is Alex Drysdale and I am a Junior Web Developer for Oswald Technologies. I am an accomplished coder and programmer',
    hour_price: 100,
    phone: '+20100100100',
  },
  {
    email: 'enghelles@hfdsfelles.com',
    username: 'Walter Hickey',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    bio: 'Walter Hickey isareporter for Business Insider covering politics,Interests also include statistics,research and data mining.He recentlygraduated from The College of William and Mary withadegree inApplied Mathematics.',
    hour_price: 100,
    phone: '+20100100100',
  },
  {
    email: 'enghelles@hfdelles.com',
    username: 'Christopher Looney',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    bio: 'Christopher Looney isasuperintendent intern forShawmut Design and Construction.He is on site inBillerica working on the Billerica Memorial High Schoolworking with John Hartshom,Lead Superintendent.',
    hour_price: 100,
    phone: '+20100100100',
  },
  {
    email: 'enghefdflles@helles.com',
    username: 'Adam Popescu',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    bio: 'Adam Popescu isaLos Angeles-based reporter who has covered technology.social media,green business,eco-travel,politics,arts culture,and sports forpublications including ReadWrite,LA Weekly,Marketplace Radio,SLAM,LA',
    hour_price: 100,
    phone: '+20100100100',
  },
  {
    email: 'engibrahime@helles.com',
    username: 'Mr. Jean Pla',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/1t1.png',
    role: ENGINEER,
    bio: 'Mr. Jean Pla,CNES,FranceGraduated from ENAC(Ecole Nationale de l Aviation Civile)in Toulouse in 1986.CNES employee since 1990.Frequency manager since 2001.',
    hour_price: 150,
    phone: '+20100100100',
  },
  {
    email: 'engahmed@helles.com',
    username: 'Hema el-sayed',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/1t1.png',
    role: ENGINEER,
    bio: 'Steve Hartley cofounded Fering Communications,Inc. in 2011. He servesas the Managing Partner,managing day-to-day operations,working withexisting clients and winning new accounts.Steve has previously held',
    hour_price: 200,
    phone: '+20100100100',
  },
  {
    email: 'engmohammed@helles.com',
    username: 'Ahmed el-sayed',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/2t1.png',
    role: ENGINEER,
    bio: 'Talented Site Engineer with the capability to successfully implement project cost procedures and monitor quality construction.Skilled at reading blueprints and communicating duties to workers.Proficient in the methods,principles,and applications of engineering,design,building and construction.',
    hour_price: 200,
    phone: '+20100100100',
  },
  {
    email: 'engnabil@helles.com',
    username: 'Jon Doe',
    password: '123456',
    image: 'http://themesflat.com/html/nah/images/member/1t1.png',
    role: ENGINEER,
    bio: 'Mechanical Engineer with 4+ years of experience designing and maintaining tools,industrial processing ystems,andequipment.At my current company,Increased production by 14%by minimizing bottlenecks,and increased industrial output by4%through the planning and execution of technical drawings and blueprints Seeking to leverage my expertise to join Tack Inc. asaLead Mechanical Engineer.',
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
    image: 'http://themesflat.com/html/nah/images/shop/f2.png',
  },
  {
    name: 'Night (The Night Trilogy, #1)',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 50,
    categoryId: 3,
    image: 'http://themesflat.com/html/nah/images/shop/f3.png',
  },
  {
    name: 'To Kill a Mockingbird',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 19.9,
    categoryId: 2,
    image: 'http://themesflat.com/html/nah/images/shop/f3.png',
  },
  {
    name: 'The Great Gatsby',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 200,
    categoryId: 1,
    image:
      'http://themesflat.com/html/nah/images/shop/f2.png',
  }, {
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
  }, {
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
  }, {
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
  }, {
    name: 'The Diary of a Young Girl',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 14.5,
    categoryId: 4,
    image:
      'http://themesflat.com/html/nah/images/shop/f2.png',
  }, {
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
  }, {
    name: 'The Diary of a Young Girl',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 14.5,
    categoryId: 4,
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

const fakeOrders = [
  {

    userId: 1,
    totalPrice: 90,
    createdAt: '2022-04-24T06:52:31.733Z',
  },
  {

    userId: 2,
    totalPrice: 12,
    createdAt: '2022-03-24T06:52:31.733Z',
  },
  {

    userId: 3,
    totalPrice: 423,
    createdAt: '2022-02-24T06:52:31.733Z',
  },
  {
    userId: 4,
    totalPrice: 100,
    createdAt: '2022-01-24T06:52:31.733Z',
  },
  {
    userId: 5,
    totalPrice: 1020,
    createdAt: '2022-05-24T06:52:31.733Z',
  },
  {
    userId: 5,
    totalPrice: 1020,
    createdAt: '2022-06-24T06:52:31.733Z',
  },
  {
    userId: 5,
    totalPrice: 1020,
    createdAt: '2022-07-24T06:52:31.733Z',
  },
  {
    userId: 5,
    totalPrice: 1020,
    createdAt: '2022-08-24T06:52:31.733Z',
  },
  {
    userId: 5,
    totalPrice: 1020,
    createdAt: '2022-09-24T06:52:31.733Z',
  },
  {
    userId: 5,
    totalPrice: 1020,
    createdAt: '2022-10-24T06:52:31.733Z',
  },
  {
    userId: 5,
    totalPrice: 1020,
    createdAt: '2022-11-24T06:52:31.733Z',
  },
  {
    userId: 5,
    totalPrice: 1020,
    createdAt: '2022-12-24T06:52:31.733Z',
  },
  {
    userId: 5,
    totalPrice: 1020,
    createdAt: '2022-04-24T06:52:31.733Z',
  },
];
const fakeProductOrder = [
  {
    orderId: 1,
    productId: 1,
    quantity: 20,
    subtotalPrice: 100,
  },
  {
    orderId: 1,
    productId: 4,
    quantity: 20,
    subtotalPrice: 100,
  },
  {
    orderId: 1,
    productId: 3,
    quantity: 20,
    subtotalPrice: 100,
  },
  {
    orderId: 3,
    productId: 2,
    quantity: 20,
    subtotalPrice: 100,
  },
  {
    orderId: 2,
    productId: 3,
    quantity: 20,
    subtotalPrice: 100,
  },
  {
    orderId: 4,
    productId: 3,
    quantity: 1,
    subtotalPrice: 60,
  },
];

export {
  fakeUsers, fakeProducts, fakeCategories, fakeOrders, fakeProductOrder,
};
