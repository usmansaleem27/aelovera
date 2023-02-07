import React from 'react';
import { BsArrowRight } from "react-icons/bs";
 
const HomeScreen = () => {
  return (
    <div>
      <div className='container-fluid g-0'>
        <div className='bg_home'>
            <div className='row g-0'>
                <div className='col-lg-6 col-md-6 col-12'>
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                    <div className='home_height'>
                    <div className='padding_right d-flex align-items-center h-100 justify-content-center'>
                        <div className='ps-2 pe-2 pe-lg-5'>
                            <div>

                            </div>
                            <div>
                                <h1 className='main_heading text-white '>This wonder plant moisturizes skin, relieves irritation, and even acts as a natural lube</h1>
                            </div>
                            <div>
                                <p className='text-white fs-5 pe-lg-5 pt-3'>There's a reason you always turn to aloe vera gel to soothe a painful sunburn: The plant is known for its ability to reduce inflammation.</p>
                            </div>
                            <div>
                                <a href='https://google.com' className='view_click text-white fs-4'>View <span className='ps-2'> <BsArrowRight /> </span></a>
                            </div>
                        </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
