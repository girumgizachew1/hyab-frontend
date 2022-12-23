import React, { useEffect, useState } from "react";
import { sendEmail } from "./Action";
import { useRef } from "react";

export default function ContactForm(params) {
  const refForm = useRef();
  return (
    <>
      {/* <div>
        <form ref={refForm} onSubmit={() => sendEmail(refForm)}>
          <input type="text" name="name" placeholder="Nmae" required />
          <input type="email" name="email" placeholder="Email" required />
          <input placeholder="Subject" name="subject" type="text" />
          <textarea placeholder="Message" name="message" required></textarea>

          <input type="submit" value="Send" />
        </form>
      </div> */}
      <div class=" container my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800">
          <div class="flex flex-wrap">
            <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <img src="assets/contact.png" alt="contacts"></img>
              
            </div>
            <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <h2 class="text-3xl font-bold mb-6">Contact us</h2>

              <form ref={refForm} onSubmit={(e) => sendEmail(e, refForm)}>
                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="name"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="email"
                    class="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                    name="email"
                    required
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="subject"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
                <div class="form-group mb-6">
                  <textarea
                    class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="message"
                    rows="3"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div class="form-group form-check text-center mb-6">
                  {/* <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck87"
                    checked
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="exampleCheck87"
                  >
                    Send me a copy of this message
                  </label> */}
                </div>
                <button
                  type="submit"
                  value="Send"
                  class="
                    w-full
                    px-6
                    py-2.5
                    bg-yellow-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-yellow-600 hover:shadow-lg
                    focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-yellow-700 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <div>
          <div className="container mx-auto px-10 mt-10">
      <p className="text-gray-600 mb-8">
      Thank you for visiting our website! We are always happy to hear from our customers, and we value your feedback and suggestions. If you have any questions or concerns, please don't hesitate to reach out to us. Whether you need help with an order, have a suggestion for how we can improve our products or services, or just want to say hello, we would love to hear from you.
           </p>
      
      <div className="mt-8 text-gray-600">
        Or, you can contact us through one of the following methods:
        <div className="mt-4">
          <span className="font-bold">Email:</span> info@hyabmarket.com
        </div>
        <div className="mt-4">
        <span className="font-bold">Phone:</span> 555-555-1212
      </div>
      <div className="mt-4">
        <span className="font-bold">Mail:</span> AddisAbaba Ethiopia /bole

      </div>
        </div>
        <p className="text-gray-600 py-2 mb-4">
        We will do our best to get back to you as soon as possible. We want to make sure that you have the best experience possible when shopping with us, and we are always here to help. Thank you for choosing us, and we hope to hear from you soon!


           </p>
      
          </div>
          
          </div>
        </section>
      </div>
    </>
  );
}
