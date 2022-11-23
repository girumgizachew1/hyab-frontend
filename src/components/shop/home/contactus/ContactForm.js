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
      <div class="container my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800">
          <div class="flex flex-wrap">
            <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <h2 class="text-3xl font-bold mb-6">Contact us</h2>
              <p class="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, modi accusantium ipsum corporis quia asperiores
                dolorem nisi corrupti eveniet dolores ad maiores repellendus
                enim autem omnis fugiat perspiciatis? Ad, veritatis.
              </p>
              <p class="text-gray-500 mb-2">Addis abeba, 94126, Ethiopia</p>
              <p class="text-gray-500 mb-2">+ 251 9-- --- ---</p>
              <p class="text-gray-500 mb-2">hyabmarket@gmail.com</p>
            </div>
            <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
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
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
