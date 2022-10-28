import React from 'react'
import { homeState, homeReducer } from "./HomeContext";
import { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from './Slider'
import SingleProduct from "./SingleProduct";

import SpecialProduct from "./specialproducts";
import comingsoon from'../../../assets/comingsoon.png'

import CategoriesList from "./CategoryList";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
        <div >
            <Slider />
      </div>
      <section className="border-b p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        <CategoriesList />
      </section>
        <div></div>

      <div className="newproducts">
            out special products
            <div className='border-b p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2' >
              <SpecialProduct/>
            </div>
      </div>
      <div className='flex flex-row' >
        <div className='banner basis-1/4'>
            <div>
            <img className='w-full ml-16 py-10 px-10' src={comingsoon}  alt="img"></img>
            </div>
        </div>
      {/* Product Section */}
      
      <div>
       <h1 className='ml-20 py-4 text-4xl text-black font-semibold' >Explore our Popular products</h1>
      <section className="basis-3/4 w-full space-x-4 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mb-10  ">
        <SingleProduct />
      </section>
      </div>
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
  


