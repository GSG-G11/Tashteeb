# Tashteeb :hammer_and_wrench: 

## Problem :

Before I started learning code and before I joined the GSG code academy I used to work as construction worker. So I was usually dealing with clients who want to build thier homes, while also dealing with engineers so I knew about their problems and what they are struggling with, and I can say that the most common problems the client faces is that they doesn't know where to start from and they are confused where to get construction tools and materials, and can't find an engineer who's fit for the job, on the other hand one of the engineers problems was that they can't find jobs. and from here the idea came to us so we decided to start working on it

## solution :

 We created a platform where users will have an easier way of finding all materials they need while also being able to find engineers who are going to help them get the job done, providing a simple method of hiring them and communicating with them. In addition to creating an environment for engineers looking for employment and helping those looking to build their dream home come true.
 
 
 ## User Stories
  As a User I will be able to :
  * Signup / Login to the website as a user.
  * Go to store page and browse the products.
  * Search for a spcific product.
  * Filter products by category and price.
  * Add products to my cart.
  * View a list of engineers.
  * Choose an engineer and hire them.
  * Get in contact with the engineer.
  * Review the engineer after reciving the service.
  * See all hiring orders that I sent.
  
  
  As an Engineer I will be able to : 
  * Signup / Login to the website as an Engineer.
  * Go to store page and browse the products.
  * Search for a spcific product.
  * Filter products by category and price.
  * Add products to my cart.
  * Recive hiring orders form users.
  * Either Accept or Decline the order.
  
  As an Admin I will be able to : 
   * View the Dashboard.
   * Get a list of all products.
   * Add, Delete, and Edit Products.
   * View all hiring orders.
   * Delete hiring oreders.
   * View a list or all orders.
   * View the stasetics of the website.


## User Journey :
As a user

 - When I  first land on the website I will see the landing page and the services that the website provides without being logged in, I also can view the products page and the engineers page, If I go to the products page I will be able to see all aproducts and search and filter prodcuts and add products to my cart, If I go to the engineers page and view an engineer's profile I will see inforamtion about them like thier bio, hourly rate,  a contact link, and option to hire them.
 
As an engineer

- After I recive hiring orders form users, I will recive a message on my phone with details about the order and who sent it. And I can either accept or decline the order

As an admin

- when I fitst open the website, I will go to the dashboad page and see of the website's information, I'll schoose from a menu to view, products, orders,hiring orders, and statetics.

## Built with
- Typescript
- Express.js
- Sequalize
- React.js
- Ant Design
- Twilio
- Passport.js
- Cloudinary
- Socket.io

## DataBase Schema 

![](https://i.imgur.com/S9QjeSi.png)

## Installation
here are the steps to install the project localy
 ```
 $ git clone https://github.com/GSG-G11/Tashteeb
 $ cd Tashteeb
 $ npm i
 $ cd client
 $ npm i
 ```
 
 in your pgcli or psql terminal
 
 ```sql
 create database tashteeb;
 ```
 
 migrate (build) the database
 
 ```
$ npm run build-db
 ```
 
 start the servers
 
 ```
$ npm run dev
$ cd client && npm start 
```
 
 environment variables
 ```
 # database urls
 DEV_DB=postgres://postgres:<password>@localhost:5432/tashteeb
 TEST_DB=postgres://postgres:<password>@localhost:5432/tashteeb_test
 
 # secret for passport and jwt
 JWT_SECRET=your_secret
 
 # cloudinary keys
 CLOUDINARY_CLOUD_NAME=
 CLOUDINARY_API_KEY=
 CLOUDINARY_API_SECRET=

 # twilio keys
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_NUMBER=
 ```

## Our Amazing Mentor: 

[Abdallah Abu Amra](https://github.com/aaamra)

## Tashteeb Team:
 - [Mohammed Helles](https://github.com/mo7amedehab97)
 - [Nabil AbuShaban](https://github.com/nabilramy)
 - [Braa Ferwana](https://github.com/braaAwni)
 - [Ibrahim Alhelou](https://github.com/KAHMOOSHA)






