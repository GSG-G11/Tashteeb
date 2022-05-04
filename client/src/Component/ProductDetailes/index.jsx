import React from 'react'
import {Link} from "react-router-dom"
import './style.css'

const ProductDetailes = () => {
  return (
 <>
 <div className='containerProduct'>
        <div className='wrapper'>
          <div className='image'>
            <img className='product-image' src='https://www.ounousa.com/wp-content/uploads/fly-images/141212/151103100501180-638x654.jpg' alt='images' />
          </div>

          <div className='data'>
            <div className='iconStart'>
              <span className='checked'>
                <i className='ri-star-fill'></i>
              </span>
              <span className='checked'>
                <i className='ri-star-fill'></i>
              </span>
              <span className='checked'>
                <i className='ri-star-fill'></i>
              </span>
              <span className='checked'>
                <i className='ri-star-fill'></i>
              </span>
              <span className='notCheck'>
                <i className='ri-star-line'></i>
              </span>
              <span className='num'>45</span>
            </div>
            <div className='content'>
              <h3 className='title'>product name</h3>
              <p className='text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              <h3 className='price'> $ 15,63</h3>
            </div>

            <div className='buttons'>
                <button className='Buy'>
                  BUY
                </button>
              <Link to='/home' className='browser '>
                Continue Browsing
              </Link>
            </div>
          </div>
        </div>
        </div>
 </>
)}
export default ProductDetailes
