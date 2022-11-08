import React from 'react'
import { Navber } from '../../partials'
import { Footer } from '../../partials'

import { Footer1 } from '../../partials'
function index() {
  return (
    <div className='h-screen w-full'>
    <Navber/>
    <div className='h-screen w-full'>Aboutus</div>
    <Footer1/>
    <Footer/>

    </div>
  )
}

export default index