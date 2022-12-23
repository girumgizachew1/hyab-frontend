import React from 'react'
import { Navber } from '../../partials'
import { Footer } from '../../partials'

import { Footer1 } from '../../partials'
function index() {
  return (
    <div className='h-screen w-full'>
    <Navber/>
    
    <div className="container mx-auto my-20 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 mb-8">
        We are an ecommerce company based in Ethiopia that specializes in gift delivery. We understand that it can be challenging to find the perfect gift for your loved ones, especially if you live far away. That's where we come in! We offer a wide selection of high-quality gifts and make it easy for you to have them delivered to your loved ones anywhere in Ethiopia. 
      </p>
      <p className="text-gray-600 mb-8">
        Our team is dedicated to providing excellent customer service and ensuring that your gift-giving experience is as smooth and stress-free as possible. We offer convenient payment options and fast, reliable delivery. Plus, we take pride in handpicking only the best products to include in our selection. We are confident that you will find something that your loved ones will truly appreciate.
      </p>
      <p className="text-gray-600 mb-8">
        Thank you for choosing us for your gift-giving needs. We look forward to helping you make your loved ones feel special and appreciated.
      </p>
    </div>


    
    <Footer1/>
    <Footer/>

    </div>
  )
}

export default index