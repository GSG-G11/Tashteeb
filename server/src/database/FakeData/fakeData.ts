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
    username: 'Joe Phillips',
    password: '$2a$10$Mw6FBwi51Lzx50w7hWaaBOxu9XpehgIy0VwWzgl3LvxZCvUqyOSma',
    image: 'https://i.imgur.com/fLeh1Zc.jpg',
    role: ENGINEER,
    bio: 'Award-winning engineering scholar. Highly motiaveted. Modren design fan. Unapologetic concreate aficionado. Coffee enthusiast. Pop culture beleiver. Passionate web geek.',
    hourPrice: 100,
    phone: '+970567780031',
  },
  {
    email: 'enghelles@hsadelles.com',
    username: 'Alex mobsiane',
    password: '123456',
    image: 'https://i.ibb.co/SX6XLKG/Meso-interior-featured-image-occupation-engineer-v2-600x429.webp',
    role: ENGINEER,
    bio: 'Extreme thinker. Alcohol enthusiast. Explorer. Wannabe problem solver. Zombie fanatic. Analyst. Coffee fan. Hardcore pop culture fanatic. Social media lover',
    hourPrice: 100,
    phone: '+20100100100',
  },
  {
    email: 'enghelles@hfdsfelles.com',
    username: 'Tony Stark',
    password: '123456',
    image: 'https://i.ibb.co/Yd7x6GQ/thisisengineering-raeng-df7erzy97sg-unsplash.jpg',
    role: ENGINEER,
    bio: 'Troublemaker. Incurable travel nerd. Social media fanatic. Proud student. Alcohol geek. Zombie buff. Coffee specialist.',
    hourPrice: 100,
    phone: '+20100100100',
  },
  {
    email: 'enghelles@hfdelles.com',
    username: 'Mike B. Moore',
    password: '123456',
    image: 'https://i.ibb.co/ZGnBSLT/thisisengineering-raeng-RFVw0j-My-M4-unsplash.jpg',
    role: ENGINEER,
    bio: 'Mike B moore a 25-year-old civil Engineering student who enjoys camping, watching YouTube videos and donating blood. He is energetic and brave, but can also be very lazy and a bit untidy.',
    hourPrice: 100,
    phone: '+20100100100',
  },
  {
    email: 'enghefdflles@helles.com',
    username: 'Graham Phillip Gobble',
    password: '123456',
    image: 'https://i.ibb.co/YNshnRx/thisisengineering-raeng-CUA-IGp-XXo-unsplash.jpg',
    role: ENGINEER,
    bio: 'a 20-year-old Engineering studies student who enjoys reading, learning new languages and golf. He is generous and bright, but can also be very sadistic and a bit sadistic. He is British. He is currently at college. studying business studies. He is obsessed with zombies.',
    hourPrice: 100,
    phone: '+20100100100',
  },
  {
    email: 'engibrahime@helles.com',
    username: 'Lynn P. Guevara',
    password: '123456',
    image: 'https://i.ibb.co/gyHdjmN/33447-hd.jpg',
    role: ENGINEER,
    bio: '',
    hourPrice: 150,
    phone: '+20100100100',
  },
  {
    email: 'engahmed@helles.com',
    username: 'Zoe Catherine Jones',
    password: '123456',
    image: 'https://i.ibb.co/Nrkq6xF/thisisengineering-raeng-q1-z-GTPk1-Co-unsplash.jpg',
    role: ENGINEER,
    bio: ' a 27-year-old government politician who enjoys walking, vandalising bus stops and reading. She is considerate and creative, but can also be very sadistic and a bit sadistic.',
    hourPrice: 200,
    phone: '+20100100100',
  },
  {
    email: 'engmohammed@helles.com',
    username: 'Carla Gemma DeVito',
    password: '123456',
    image: 'https://i.ibb.co/vHS74fL/thisisengineering-raeng-cd-SKg-Xv2-Vz4-unsplash.jpg',
    role: ENGINEER,
    bio: ' 32-year-old engineer at chain restaurant who enjoys podcasting, walking and photography. She is creative and inspiring, but can also be very dull and a bit sadistic.',
    hourPrice: 200,
    phone: '+20100100100',
  },
  {
    email: 'engnabil@helles.com',
    username: 'Matthew Rob Kowalski ',
    password: '123456',
    image: 'https://i.ibb.co/f27Nr8R/thisisengineering-raeng-FXgbqr-t7uw-unsplash.jpg',
    role: ENGINEER,
    bio: 'a 40-year-old tradesperson who enjoys watching sport, football and walking. He is creative and inspiring, but can also be very dull and a bit sadistic.He is an Irish Christian. He has a post-graduate degree.',
    hourPrice: 250,
    phone: '+20100100100',
  },
];

const fakeProducts = [
  {
    name: 'Bon Tool 82-405 24" Redwood Float W/Wood Handle',
    description:
      'The largest selection of tools manufactured to the highest quality standards Package Dimensions: 12.7 H x 57.404 L x 4.318 W (centimetres) Package Weight: 0.453 kilograms Country of Origin : China',
    price: 18.5,
    categoryId: 4,
    image: 'https://i.ibb.co/3TVhJ4G/710-O63v-Wa1-L-AC-SX466.jpg',
  },
  {
    name: 'Safety Work Gloves',
    description:
      'Vgo 1-Pair  Mechanics Gloves, Impact Gloves, Anti-Vibration Gloves, Rigger Gloves, Heavy Duty (Size L, Orange, SL8849IP)',
    price: 24.88,
    categoryId: 3,
    image: 'https://i.ibb.co/jwdXhXy/71-Tyg-i8-Wr-L-SX522.jpg',
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
    name: 'Rubber Work Boot for Men',
    description:
      '【Reliable Protection】Our TideWe steel toe offers standard protection , which withstand large forces from falling or rolling objects. A steel shank is added between the insole and outsole of the boot to provide arch support and foot protection. The reinforced rubber shell also offers extra protection on the toe and heel of the boot. \n【Waterproof & Anti-Slip】Made with 100% waterproof rubber and neoprene material, TideWes work boots keep your feet dry while working or hiking. Rubber Soles with deep tread are perfect for any workplace terrain. ',
    price: 45.99,
    categoryId: 1,
    image: 'https://i.ibb.co/DbQypdY/81w5dw-Laxl-S-AC-SX679.jpg',
  },
  {
    name: 'Tape Measure',
    description:
      'EASE OF USE: Self-locking blade of the retractable tape measure stays extended \n QUICK & EASY MEASUREMENTS: Fractions printed on the blade \n ADDED GRIP: Rubber overmold for added grip',
    price: 5.0,
    categoryId: 4,
    image: 'https://i.ibb.co/crJv33C/istockphoto-174798452-170667a.jpg',
  },
  {
    name: 'Portable Electric Cement Mixer',
    description:
      'Easy-to-clean polypropylene drum \n 2 cu. ft. drum capacity \n 0.88 cu. ft. mixing capacity \n Holds up to 108 lbs. of premix \n 250 Watt, 1/3 HP 120V electric motor operates at 1,720 RPM',
    price: 105.55,
    categoryId: 3,
    image: 'https://i.ibb.co/682sn8X/Reverse-Drum-Type-Concrete-Mixer.webp',
  },
  {
    name: 'Wheel Borrow',
    description:
      'SPECS - This Wheelbarrow is an All-Electric DC 24V 1/4 eHP 180W Working Load Capacity of 330 lbs (150kgs) at a Max 12° Upward Slope; Max and 4 cubic feet of Cubage to load/haul debris; All-Terrain 13" inch Pneumatic Wheels/Inflation Pressure 30/31PSI',
    price: 200.19,
    categoryId: 2,
    image: 'https://m.media-amazon.com/images/I/71GbV1z01kL._SX522_.jpg',
  },
  {
    name: 'Crow Bar',
    description:
      'Edward Tools Wonder Bar Utility Pry Bar - Nail puller/Chisel ends - Perfect tool for prying, scraping, lifting, pulling - Extra strength carbon steel - Leverage design - Rust proof finish (15 Inch)',
    price: 11.95,
    categoryId: 1,
    image:
      'https://m.media-amazon.com/images/I/51qlHPiLIbL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    name: 'Hammer 8oZ',
    description:
      'Mr. Pen- Hammer, 8oz, Small Hammer, Camping Hammer, Claw Hammer, Stubby Hammer, Tack Hammer, Hammers Tools, Small Hammer for Women, Nail Hammer, Magnetic Hammer, Handy Hammer, Teal Hammer, Kids Hammer',
    price: 6,
    categoryId: 4,
    image: 'https://m.media-amazon.com/images/I/81ohhAsFtbL._AC_SX466_.jpg',
  },
  {
    name: 'Fiberglass Drilling Hammer',
    description:
      'FORGED STEEL HEAD – Maximum strength and durability for a lifetime of hard work \n BALANCE AND TEMPER – The most durable, longest lasting striking tools available \n HEAVY HITTING HAMMER – Perfectly balanced to deliver powerful blows with an easy swing \n FIBERGLASS HANDLE – Lightweight, durable handle offers a comfortable controlled swing with a ribbed grip to prevent slips \n VERSATILITY ON THE JOB – Use with chisels, punches, star drills, hardened nails & more',
    price: 50,
    categoryId: 3,
    image:
      'https://m.media-amazon.com/images/I/71g4u0BQZ+L._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    name: 'Chisel',
    description:
      'SUPERIOR BLADE: Woodwork chisel features high-impact, full tang blade for use with steel-headed hammer; Blade of woodworking chisel, hardened to 55 HRC, can be resharpened TOUGH HANDLE: Carpenters chisel handle is impact-and-heat resistant for lasting durability; Bi-material contoured handle provides a non-slip grip; Long handle design adds leverage and safer striking',
    price: 9.99,
    categoryId: 2,
    image:
      'https://m.media-amazon.com/images/I/71iSXJ6lQuS._AC_UL480_FMwebp_QL65_.jpg',
  },
  {
    name: 'Safety Glasses',
    description:
      'One-Piece Polycarbonate Lens Fits Over Most Prescription Glasses Lightweight Design, With Adjustable Length Temples For A Customized Fit Flexible Temple Tips Minimize Pinching Behind The Head Meets Ansi Z87.1 Plus And Csa Z94.3 Impact Standards',
    price: 7.88,
    categoryId: 1,
    image:
      'https://m.media-amazon.com/images/I/71rKu2b1dEL._AC_UL480_FMwebp_QL65_.jpg',
  },
  {
    name: 'Polisher machine',
    description: '187.99',
    price: 187.99,
    categoryId: 4,
    image:
      'https://m.media-amazon.com/images/I/31NEnOa+jEL._AC_UL480_FMwebp_QL65_.jpg',
  },
  {
    name: 'Hand Saw',
    description:
      'FAST & CLEAN CUTS: The hand saw has an exclusive tooth geometry for a fast clean cut DURABILITY: Induction hardened teeth for a long lasting sharpness COMFORT: Ergonomically designed bi-material handle for comfort and control SQUARE & MITER: Handle offers a square & miter feature with 45-degree and 90-degree angles',
    price: 54,
    categoryId: 3,
    image: 'https://m.media-amazon.com/images/I/61RTOFtYLAL._AC_SX466_.jpg',
  },
  {
    name: 'Telescoping Ladder',
    description:
      ' Premium Materials : Yvan‘s telescoping Extension Ladder is crafted from premium aluminum alloy.The surface of aluminium is oxidized, which can prolong the life of folding ladder.And its plastic parts is reinforced with nylon fibre to improves load capacity, stability, aging resistance and extends service life.Our telescopic ladders have a maximum load of 330lb/150kg.',
    price: 150,
    categoryId: 2,
    image: 'https://m.media-amazon.com/images/I/61YvMAJzJyL._AC_SX466_.jpg',
  },
  {
    name: 'Putty Knife, 4Pcs Spackle Knife Set',
    description:
    'Sturdy Design: The blade and handle in our drywall knife are processed in one piece, which is very sturdy. Stainless steel blade has superior load-bearing performance for a long time to use, \n Comfortable Grip: The handle part is a perfect combination of soft rubber and plastic, and using an ergonomic design. Our putty scraper tool makes full use of the elasticity of rubber to make you hold comfortably',
    price: 9.99,
    categoryId: 1,
    image: 'https://m.media-amazon.com/images/I/61qBVm7Rf1L._AC_UL480_FMwebp_QL65_.jpg',
  },
  {
    name: 'Brush set',
    description:
      'Works on most any surface \n Great for base-coating \n Wash while wet with soap and water \n Product is reusable',
    price: 3.02,
    categoryId: 4,
    image: 'https://m.media-amazon.com/images/I/71ijnvDvMEL._AC_SY879_.jpg',
  },
  {
    name: 'Roll Brush',
    description:
      'Wooster brush with 9 inch sherlock roller frame \n Quick release spring prevents roller slippage yet allows easy one rap removal \n Smooth rolling internal bearings eliminate shank wear and gray streaks \nDurable green fiberglass reinforced nylon cage and endcaps \n Chrome plated 5/16 inch shank with a 90 degree angle \n Full size polypropylene grip with reinforced threads, compatible with Wooster Sherlock GT no twist poles',
    price: 14.5,
    categoryId: 4,
    image: 'https://m.media-amazon.com/images/I/71gEbBzcsqL._AC_SX466_.jpg',
  },
  {
    name: 'Paint Bucket',
    description:
      'One gallon capacity \n Lid available \n Reinforced lip \n Durable construction \n Plastic white pail',
    price: 10,
    categoryId: 3,
    image: 'https://m.media-amazon.com/images/I/71jd4-bLPfL._AC_UL480_FMwebp_QL65_.jpg',
  },
  {
    name: 'Shovel',
    description:
      'KOLEIYA Shovel, Shovels for Digging ,Garden Round Shovel,Overall Length 41 Inches ,Digging Shovel ,Gardening Shovel ,D Handle Shovel ,Snow Round Shovel for Car ,Matel+Wooden',
    price: 19.9,
    categoryId: 2,
    image: 'https://m.media-amazon.com/images/I/81OBOfUWZ-L._AC_UL480_FMwebp_QL65_.jpg',
  },
  {
    name: 'DEWALT TSTAK Tool Box',
    description:
      'Extra large volume for large tools storage \n Bi-material handle on top of each unit for easy & comfortable lifting \n Top Organizer - Fixed dividers for organization of drills & bit \n  Heavy-duty rust resistant metal latches \n All units can be stacked underneath this unit using durable side latches',
    price: 200,
    categoryId: 1,
    image: 'https://m.media-amazon.com/images/I/61mU-S0oBfL._AC_SX466_.jpg',
  },
  {
    name: '4 Pieces Precision Marking T Rule',
    description:
      'Package Includes: precision marking T rule precision woodworking tools set contains 2 pieces of silver precision marking T rules, 1 piece of black mechanical pencil and 1 piece of mechanical pencil refill \n Practical Design: precision rulers have micro fine marking holes slot, which can locate your pointed pencil or scribe with good precision, the T rules work well to draw lines exactly where you want them to be, which are very suitable for woodworking',
    price: 37.99,
    categoryId: 4,
    image: 'https://m.media-amazon.com/images/I/812n0OSOtvL._SX522_.jpg',
  },
];

const fakeCategories = [
  {
    id: 1,
    name: 'Tools',
    image: '',
  },
  {
    id: 2,
    name: 'Saftey Gear',
    image: '',
  },
  {
    id: 3,
    name: 'Extras',
    image: '',
  },
  {
    id: 4,
    name: 'Paint',
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
  fakeUsers,
  fakeProducts,
  fakeCategories,
  fakeOrders,
  fakeProductOrder,
};
