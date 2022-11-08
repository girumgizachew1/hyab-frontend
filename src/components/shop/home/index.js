import React from 'react'
import { homeState, homeReducer } from "./HomeContext";
import { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from './Slider'
import SingleProduct from "./SingleProduct";
import NewProduct from "./newproducts";

import SpecialProduct from "./specialproducts";
import comingsoon from'../../../assets/product1.gif'

import comingsoon2 from'../../../assets/comingsoon.png'

import CategoriesList from "./CategoryList";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
       
        <section className="mt-16 border-b p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          <CategoriesList />
        </section>

        <div className="newproducts">
         <h2 className='text-red-500 text-lg p-2' >Our special Offers</h2>   
            <div className='border-b p-2 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-2' >
              <SpecialProduct/>
            </div>
        </div>


        <div className='flex lg:flex-row w-screen flex-col' >
            <div className='banner basis-1/4'>
                <div>
                <img className='w-full py-1 lg:hidden' src={comingsoon}  alt="img"></img>
                
                <img className='w-full md:ml-16 py-10 px-10 hidden lg:block' src={comingsoon2}  alt="img"></img>
                </div>
            </div>
          {/* Product Section */}
      
            <div>
              <h1 className='ml-20 py-4 text-xl lg:text-4xl text-gray-800 font-semibold mx-auto' >Explore our Popular products</h1>
              <section className="basis-3/4 w-40vh h-fit mx-6 md:space-x-4 lg:px-20 grid my-2 md:my-0  gap-2 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mb-10">
                <SingleProduct />
              </section>
            </div>
      </div>
      
      <div  >
      </div>
    </Fragment>
  );
};


const Home = (props) => {
    const [data, dispatch] = useReducer(homeReducer, homeState);
    return (
      <Fragment>
        <HomeContext.Provider value={{ data, dispatch }}>
          <Layout children={<HomeComponent />} />
        </HomeContext.Provider>
      </Fragment>
    );
  };
  
  export default Home;
  


