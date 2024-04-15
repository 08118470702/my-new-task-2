import React from 'react'
import component from "../assets/Component-1.png"
const Home = () => {
  return (
    <section className='container '>

        <div class="mb-4 row p-3 justify-content-between d-flex  flex-row-reverse align-items-center shadow-lg">
          <div class="col-lg-6 ">
            <img src={component} alt="" />
          </div>
          <div class="col-lg-5">
            <h1 class="text-dark">
              Manage your Tasks on
            </h1>

            <h2> 
              <span type="string"
              color="primary"
              class="text"
              style={{ color: 'purple' }}  >TaskDuty</span>
              </h2>


            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget.
              Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>

            <button
              type="button"
              color="primary"
              class="btn btn-success btn-lg"
              style={{ backgroundColor: 'purple' }}
            >Go to My Tasks</button>

            {/* <button className='btn btn-danger text-white'>Go to My Tasks</button> */}
          </div>
        </div>
      </section>

  )
}

export default Home