import React from 'react'
import  heroImg from "../assets/Component 1.svg"
import { Link } from 'react-router-dom'
const  Hero= () => {
  return (
    <>
        <div className="hero">
          <div className="align-items-center d-flex justify-content-center">
            <main className="container row gap-5 w-100 lh-lg">
              {/* hero content */}
              <section className='col-lg-6 d-flex flex-column justify-content-center gap-2 ps-0 me-4 align-items-start'>
              <h2 className='lh-base d-flex flex-column'>Manage Your Task on <span className="hero-span">TaskDuty</span> </h2>

              <p className="hero-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta dolore excepturi quas porro sit voluptates perferendis rerum, deserunt, inventore sapiente at repudiandae ea officia, possimus ipsam est. Ab explicabo exercitationem eligendi iure impedit nisi consequuntur </p>
              <Link to='/alltask' className='btn btn-lg rounded-1 hero-btn'>Go To My Tasks</Link>
              </section>


              {/* hero pic */}
              <section className='col-lg-5 mt-4 '>
<img src={heroImg} alt="" className='hero-img'/>
              </section>
            </main>
          </div>
        </div>
    </>
  )
}

export default Hero