import React, { Fragment, useEffect, useContext, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { HomeContext } from "./index";
import heroo from'../../../assets/banner.png'

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);
  //const history = useNavigate();
  const [categories, setCategories] = useState(null);

  return (
    <Fragment>
      <div className="relative bg-gray-100 border-2 h-[56vh] bg-red">
          <img
            className="w-full h-full object-cover object-center opacity-100"
            src={heroo}
            alt="sliderImage"
          />            
            <div className="absolute inset-0 flex flex-col justify-center space-y-10 items-center md:items-start md:px-20">
        
             
            </div>
      </div>
    </Fragment>    
  );
};

export default Slider;
