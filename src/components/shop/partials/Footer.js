import React, { Fragment } from "react";
import moment from "moment";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = (props) => {
  return (
    <Fragment>
      <div className="bg-red-500" >
      <footer class="text-center lg:text-left bg-gray-50 text-gray-800">
  <div class="flex justify-center items-center lg:justify-between p-6  border-t">
    <div class="mr-12 hidden lg:block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div class="flex justify-center">
      <a href="#!" class="mr-6 text-blue-700">
        <FacebookIcon/>
      </a>
      
      <a href="#!" class="mr-6 text-red-500">
        <InstagramIcon/>
      </a>
      <a href="#!" class="mr-6 text-cyan-500">
        <TwitterIcon/>
      </a>
      <a href="#!" class="mr-6 text-red-500">
        <YouTubeIcon/>
      </a>
      <a href="#!" class="text-blue-500">
        <TelegramIcon/>
      </a>
    </div>
  </div>
  <div class="mx-2 md:mx-6 py-3 md:py-10  text-center text-sm  text-left">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div class="">
        <h6 class="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          ">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
            class="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
            </path>
          </svg>
          hyab gifts and marketplace
        </h6>
        <p>
          Hyab gift and marketplace is a online webstore where you can order gift for your loved ones and buy product for your self.
        </p>
      </div>
      <div class="text-gray-700">
        <h6 class="uppercase underline font-semibold md:mb-4 flex justify-center md:justify-start">
          Products
        </h6>
        <ul class="text-gray-700 text-left" aria-labelledby="dropdownDefault">
            <li class="">
              <a href="#" class="block py-1 px-4 hover:text-red-400 ">New Year</a>
            </li>
            <li>
             <a href="#" class="block py-1 px-4 hover:text-red-400 ">Anversary</a>
            </li>
            <li>
              <a href="#" class="block py-1 px-4 hover:text-red-400 ">Wedding gift</a>
            </li>
            <li>
              <a href="#" class="block py-1 px-4 hover:text-red-400 ">Birthday cake</a>
            </li>
        </ul>
      </div>
      <div class=" text-gray-700">
        <h6 class="py-1 uppercase underline font-semibold md:mb-4 flex justify-center md:justify-start text-gray-700">
        Information
        </h6>
        
        <ul class=" text-gray-700 text-left" aria-labelledby="dropdownDefault">
            <li class="">
              <a href="#" class="block py-1 px-4 hover:text-red-400 ">Policy Information</a>
            </li>
            <li>
             <a href="#" class="block py-1 px-4 hover:text-red-400 ">Terms and Conditions</a>
            </li>
            <li>
              <a href="#" class="block py-1 px-4 hover:text-red-400 ">Return and Shipping Policy</a>
            </li>
            <li>
              <a href="#" class="block py-1 px-4 hover:text-red-400 ">Cancellation and Refund Policy</a>
            </li>
        </ul>
        
      </div>
      
      <div class="">
        <h6 class="text-left py-1 uppercase underline font-semibold md:mb-4 flex justify-center md:justify-start">
          Contact
        </h6>
        <p class="flex items-center justify-center md:justify-start mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
            class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor"
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
            </path>
          </svg>
          AddisAbeba, Ethiopia
        </p>
        <p class="flex items-center justify-center md:justify-start mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
            class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
            </path>
          </svg>
          hyabmarket@gmail.com
        </p>
        <p class="flex items-center justify-center md:justify-start mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
            class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
            </path>
          </svg>
          + 01 234 567 88
        </p>
        <p class="flex items-center justify-center md:justify-start">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
            class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
            </path>
          </svg>
          + 01 234 567 89
        </p>
      </div>
      
    </div>
  </div>
  <div class="text-center p-6 bg-red-500">
    <span>© 2022 Copyright:</span>
    <a class="text-white font-semibold">Powerd by RaeyeTech</a>
  </div>
</footer>
            </div>
    </Fragment>
  );
};

export default Footer;
