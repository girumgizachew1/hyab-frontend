import React, { Fragment, useEffect, useState } from 'react'

export default function Navber() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(false)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]); 

  return (
    <Fragment>
       <div className={`fixed w-full h-20 z-30 md:bg-opacity-75 transition duration-300 display ease-in-out opacity-100  ${!top && 'opacity-0 backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3">
    
      Navberrr
      
      </div>
      </div>
      </div></Fragment>
    
  )
}
