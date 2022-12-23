import React from 'react'
import { Navber } from '../../partials'
import { Footer } from '../../partials'

import { Footer1 } from '../../partials'
function Policyinfo() {
  return (
    <div className='h-screen w-full'>
    <Navber/>
    
    <div className="container mx-auto my-20 px-32">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-4">Policy Information</h1>
      <p className="text-gray-600 mb-8">
      Welcome to our website! We are committed to providing our customers with a positive and enjoyable shopping experience. To ensure that your experience is as seamless as possible, we have put together the following policies to provide information about our products, services, and terms of use.
      </p>
      <div className='flex flex-row space-x-6' >
        
        
        <div className='basis-1/2'>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Information</h2>
      <p className="text-gray-600 mb-4">
        We strive to provide accurate and up-to-date information about the products we offer for sale on our website. However, we cannot guarantee that all information, including product descriptions, images, and pricing, is always complete and error-free. If you notice any errors or discrepancies, please contact us so that we can make the necessary corrections.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Ordering and Payment</h2>
      <p className="text-gray-600 mb-4">
        We accept a variety of payment methods, including credit and debit cards, PayPal, and bank transfers. Your payment will be processed securely through our payment gateway, and we do not store any of your payment information on our servers.
      </p>
      <p className="text-gray-600 mb-4">
        You can place an order on our website by adding items to your shopping cart and proceeding to checkout. Once you have placed your order, you will receive an email confirmation with details of your purchase. Please review this confirmation carefully to ensure that all information is correct. If you notice any errors, please contact us immediately.
      </p>
      <p className="text-gray-600 mb-4">
        Prices for our products are shown in the local currency, and all transactions are processed in that currency. Prices are subject to change without notice. We reserve the right to cancel any order that is placed at an incorrect price.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Shipping and Delivery</h2>
      <p className="text-gray-600 mb-4">
        We offer various shipping options for our customers, including standard, expedited, and international shipping. The shipping method that you choose will determine the delivery time and cost of your order. Please note that delivery times are estimates and are not guaranteed. We are not responsible for any delays caused by shipping carriers or customs.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Us:</h2>
      <p className="text-gray-600 mb-4">
        
If you have any questions, concerns, or feedback about our products, services, or policies, please don't hesitate to contact us. You can reach us through our website's contact form, by email, or by phone. We will do our best to respond to your inquiries in a timely manner.

      </p>
      </div>
      



      <div className='basis-1/2'>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Returns and Refunds:</h2>
      <p className="text-gray-600 mb-4">
      If you are not satisfied with your purchase, you may be eligible for a return or refund. To request a return or refund, please contact us within 14 days of receiving your order. We will review your request and provide further instructions on how to proceed.
      </p>
      <p className="text-gray-600 mb-4">
Please note that all returns and exchanges are subject to our return policy, which may vary depending on the type of product and the reason for the return. In general, we accept returns for defective or damaged products, as well as products that do not match their description or are not as described.
If your return is approved, we will process your refund within 14 days of receiving the returned product. 
</p>
<p className="text-gray-600 mb-4">
The refund will be credited to the original payment method used to make the purchase.
If you received a defective or damaged product, we will cover the cost of shipping for the return. If the return is for any other reason, the customer is responsible for the shipping costs.

      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Privacy and Security:</h2>
      <p className="text-gray-600 mb-4">
      We respect your privacy and take steps to protect your personal information. We will not sell or share your personal information with third parties without your consent, except as required by law.
      </p>
      <p className="text-gray-600 mb-4">
      We use secure servers and encryption to protect your personal information when you place an order or access your account information. However, we cannot guarantee the security of your information transmitted over the internet, and any transmission is at your own risk.      </p>
     

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Terms of Use:</h2>
      <p className="text-gray-600 mb-4">
      By using our website, you agree to be bound by these terms of use. We reserve the right to change these terms at any time, and it is your responsibility to review them periodically. If you do not agree with these terms, you should not use our website.

      </p>

      <p className="text-gray-600 mb-4">
      You are responsible for complying with all applicable laws and regulations when using our website. You may not use our website for any illegal or unauthorized purpose.
      </p>

      <p className="text-gray-600 mb-4">
      We reserve the right to terminate your access to our website at any time, without notice, for any reason.
      </p>
      
      </div>





       </div>
      
      
    </div>


    
    <Footer1/>
    <Footer/>

    </div>
  )
}

export default Policyinfo