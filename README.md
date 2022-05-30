<div align="center"> 
    <h2>
        Tashteeb <img src="https://i.imgur.com/mNnlkHF.png" style="width: 50px" />
    </h2>   
</div>

 <div align="center">
  <a href="https://github.com/GSG-G11/Tashteeb/contributors"><img alt="GitHub contributers" src="https://img.shields.io/github/contributors/GSG-G11/Tashteeb?color=%2300ADEE&style=for-the-badge"></a>
  <a href="https://github.com/GSG-G11/Tashteeb/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/GSG-G11/Tashteeb?color=red&style=for-the-badge"></a>
  <a href="https://github.com/GSG-G11/Tashteeb/network/members"><img alt="GitHub forks" src="https://img.shields.io/github/forks/GSG-G11/Tashteeb?color=%2344cc11&style=for-the-badge"></a>
  <a href="https://github.com/GSG-G11/Tashteeb/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/GSG-G11/Tashteeb?color=yellow&style=for-the-badge"></a>
</div> 

<br>
   <details> 
      <summary>Table of Contents</summary>

<ol>
        <li>
          <a href="#Problem">Problem</a>
        </li>
        <li>
          <a href="#Solution">Solution</a>
        </li>
        <li>
          <a href="#User-Stories">User Stories</a>
          <ul>
            <li><a href="#As-a-User-I-will-be-able-to">As User</a></li>
            <li><a href="#As-an-Engineer-I-will-be-able-to">As Engineer</a></li>
            <li><a href="#As-an-Admin-I-will-be-able-to">As Admin</a></li>
          </ul>
        </li>
        <li>
          <a href="#User-Journey">User Journey</a>
          <ul>
            <li><a href="#As-a-User">User</a></li>
            <li><a href="#As-an-Engineer">Engineer</a></li>
            <li><a href="#As-an-Admin">Admin</a></li>
          </ul>
        </li>
        <li>
          <a href="#Built-with">Built with</a>
        </li>
        <li>
          <a href="#Live-Link">Live Link</a>
        </li>
        <li>
          <a href="#DataBase-Schema">DataBase Schema </a>
        </li>
        <li>
          <a href="#Installation">Installation</a>
        </li>
        <li>
          <a href="#Our-Amazing-Mentor">Our Amazing Mentor</a>
        </li>
        <li>
          <a href="#Tashteeb-Team">Tashteeb Team</a>
        </li>
      </ol>
</details>
<br>

## Problem

We noticed a problem in the construction business where people don't have any idea where to get materials they need while also being confused on who to hire when trying to build their projects. On the other hand engineers struggle to find jobs and clients who might need their services.

## Solution

 We created a platform where users will have an easier way of finding all materials they need while also being able to find engineers who are going to help them get the job done, providing a simple method of hiring them and communicating with them. In addition to creating an environment for engineers looking for employment and helping those looking to build their dream home come true.
 
 
 ## User Stories
  #### As a User I will be able to
  * Signup / Login to the website as a user.
  * Go to the store page and browse the products.
  * Search for a specific product.
  * Filter products by category and price.
  * Add products to my cart.
  * View a list of engineers.
  * Choose an engineer and hire them.
  * Get in contact with the engineer.
  * Review the engineer after receiving the service.
  * See all hiring orders that I sent.
  
  
  #### As an Engineer I will be able to
  * Signup / Login to the website as an Engineer.
  * Go to the store page and browse the products.
  * Search for a specific product.
  * Filter products by category and price.
  * Add products to my cart.
  * Receive hiring orders form users.
  * Either Accept or Decline the order.
  
 #### As an Admin I will be able to 
   * View the Dashboard.
   * Get a list of all products.
   * Add, Delete, and Edit Products.
   * View all hiring orders.
   * Delete hiring orders.
   * View a list of all orders.
   * View the statistics of the website.


## User Journey
#### As a User

 - When I  first land on the website I will see the landing page and the services that the website provides without being logged in, I also can view the products page and the engineers page, If I go to the products page I will be able to see all products and search and filter products and add products to my cart,In my cart page I will see all the item that I have added, and I can increase the quantity of whatever product I want, and I will see a summary section where I can see the total price of my cart, and tax. When I try to check out the item I need to be logged In to complete the process If I go to the engineers page and view an engineer's page I will see information about them like their bio, hourly rate, a contact link, the previous reviews, and an option to hire them.
 
#### As an Engineer

- I can view the products page as well as add products to my cart and be able to checkout those items After I have logged in. And after I have logged in I will get an extra option on the navbar where I can view all the orders I have been sent by users, When I receive a hiring order I will get a message on my phone with some details about the order and who sent it.In my hiring orders page I will see orders organized in seperate cards for each order with more details about the order. And I get the option of accepting and getting in contact with the user or declining the offer.

#### As an Admin

- when I first open the website, I will see an option to view the dashboard, In the dashboard page in the products table I will see all of the products of the page with their information like name, price, and category and be able to add new products with custom name, description, price, image, and category. while also being able to delete and update existing products. In the orders table I will be able to see all the orders by users with details about the order id, the user who sent the order, the total price of the order, and the date of order. and when I click the eye icon I will see a pop up with more information about the order like the names of products of the order, each product's price, quantity, and a subtotal for each product. In the statistics menu I will see the numbers of the products portrayed as charts. And in the hiring orders table I will see information about each hiring order service, price, the engineer for hiring, the client who hired them, the status of the order, and a reply and actions regarding the hiring order.



## Built with
- Typescript
- Express.js
- Sequelize
- React.js
- Ant Design
- Twilio
- Passport.js
- Cloudinary
- Socket.io


## Live Link
https://tash6eeb.herokuapp.com/

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
 
 ## Acknowledgments
  ### Some recoreces that helped and inspired us during the          proccess of development.
 - [React Docs](https://reactjs.org/)
 - [Theme Forest](https://themeforest.net/)
 - [npm](https://www.npmjs.com/package/sequelize-querystring)
 - [Stack Overflow](https://stackoverflow.com/)
 - [Twilio](https://www.twilio.com/)
 - [Remix Icons](https://remixicon.com/)
 - [Cloudinary](https://cloudinary.com/)
 - [Sequelize](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
 - [Passport Docs](https://www.passportjs.org/)
 - [Websocket Api](https://socket.io/)
 


## Our Amazing Mentor

#### [Abdallah Abu Amra](https://github.com/aaamra)


## Tashteeb Team
 - [Mohammed Helles](https://github.com/mo7amedehab97)
 - [Nabil AbuShaban](https://github.com/nabilramy)
 - [Braa Ferwana](https://github.com/braaAwni)
 - [Ibrahim Alhelou](https://github.com/KAHMOOSHA)
