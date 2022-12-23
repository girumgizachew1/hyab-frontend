import React from "react";
import { homeState, homeReducer } from "./HomeContext";
import { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import SingleProduct from "./SingleProduct";
import NewProduct from "./newproducts";

import SpecialProduct from "./specialproducts";
import comingsoon from "../../../assets/product1.gif";

import hero from  "../../../assets/hero.png";

import comingsoon2 from "../../../assets/comingsoon.png";

import CategoriesList from "./CategoryList";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
     <div>
    	<img className="mt-14" src="/assets/hero.png" alt="progress bar"     />
      <img className="w-full bg-black"  src="/assets/footer-pttrn.svg" alt="african pattern" />
       
    </div> 
     <section className="mt-2 bg-gray-50  p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        <CategoriesList />
      </section>
      
     

      <div className="newproducts bg-gray-50">
      <img className="w-full" src="/assets/progress-bar.svg" alt="african pattern" />
        <h2 className="text-red-500 text-lg p-2">Our special Offers</h2>
        <div className=" p-2 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-2">
          <SpecialProduct />
        </div>
      </div>
    

     

        <div>
          <h1 className="ml-20 py-4 text-xl lg:text-3xl text-gray-700 font-semibold mx-auto">
            Explore our Popular products
          </h1>
          <section className="basis-3/4 w-40vh h-fit mx-6 md:space-x-4 lg:px-20 grid my-2 md:my-0  gap-2 md:gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  mb-10">
            <SingleProduct />
          </section>
        </div>
      
      <img className="w-full" src="/assets/progress-bar.svg" alt="african pattern" />


      <div></div>
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
