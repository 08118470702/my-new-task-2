// import React from 'react'
// import navlogo from "../assets/navlogo.png"
// import ellipse from "../assets/Ellipse 1.png"
// import component from "../assets/Component-1.png"
// import trash from "../assets/trash-bin-outline.svg"
// import create from "../assets/create-outline.svg"
// import '../style/newtask.css'


// const NewTask = () => {
//   return (
//     <>
//     <main className='container' >
//   <div className='upper'>
// <img src={navlogo} alt="navlogo"  />
// <h3 className='text-dark'>NewTask</h3>
// <img src={ellipse} alt="ellipse" />
// <hr />
// </div>
// <div className=' mt-5 middle nav-container text-success border border-success'>


//   <h1>My Tasks</h1>

//   <h5> + Add new task</h5>
// </div>
// <div className='newtask'>
// <div className='border border-success'>

// <h4 className='text-danger'>Urgent</h4>
// <button className='btn btn-danger'>Edit</button>
// <button className='btn btn-danger'>Delete</button>

// <hr />
// <h2>FinTech Website Update</h2>

// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. 
//   Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
//   </div>
// </div>
// <div className=' mt-5 middle nav-container text-success border border-success'>


//   <h1>My Tasks</h1>

//   <h5> + Add new task</h5>
// </div>
// <div className='newtask'>
// <div className='border border-success'>

// <h4 className='text-danger'>Urgent</h4>
// <button className='btn btn-danger'>Edit</button>
// <button className='btn btn-danger'>Delete</button>

// <hr />
// <h2>Agro Website Update </h2>

// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. 
//   Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
//   </div>
// </div>
// <div className=' mt-5 middle nav-container text-success border border-success'>


//   <h1>My Tasks</h1>

//   <h5> + Add new task</h5>
// </div>
// <div className='newtask'>
// <div className='border border-success'>

// <h4 className='text-danger'>Urgent</h4>
// <button className='btn btn-danger'>Edit</button>
// <button className='btn btn-danger'>Delete</button>

// <hr />
// <h2>FinTech Website Update</h2>

// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. 
//   Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
//   </div>
// </div>
// <div className=' mt-5 middle nav-container text-success border border-success'>


//   <h1>My Tasks</h1>

//   <h5> + Add new task</h5>
// </div>
// <div className='newtask'>
// <div className='border border-success'>

// <h4 className='text-danger'>Urgent</h4>

// <button className='btn btn-danger'> <img src={create} alt="create"  />  Edit</button>
// <button className='btn btn-danger'> <img src={trash} alt="create"  /> Delete</button>

// <hr />
// <h2>Agro Website Update </h2>

// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. 
//   Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
//   </div>
// </div>

// <p className='text-center'>Back to top</p>
// </main>
// </>
//   )
// }

// export default NewTask

import React from 'react'
import { Link } from 'react-router-dom'
import backImg  from "../assets/backarrow.png"
import dropImg from "../assets/dropdown.png"
const NewTask = () => {
  return (
    <>
    <div>
      <main className="container">
        {/* header part */}
        <h2 className="">
          <Link to='/alltask' className='d-flex my-5 headers new-task-header text-decoration-none ms-1 gap-3 align-items-center'>
            <img src={backImg} alt="" />
            New Task
          </Link>
        </h2>

        {/* task title input */}
        <div className="new-task-container"><input type="text" placeholder='E.g Project Defense, Assignment ...' className="p-3 rounded-1 w-100" /><label htmlFor="" className="task-title">Task Title</label></div>

        {/* task description input */}
        <div className='new-task-container mt-5 '>
          
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            className=' p-3 rounded-1 w-100'
            placeholder='Briefly describe your task...'
          ></textarea>
          <label htmlFor='' className='task-title'>
            Description
          </label>
        </div>

        {/* task title input */}
        <div className='new-task-container mt-5 '>
          <input type='text' className=' Tags-input p-3 rounded-1 w-100' />
          <div className='tags-btn'>
            <button className='btn urgent-important-btn ms-3 rounded-1'>
              Urgent
            </button>
            <button className='btn  urgent-important-btn ms-3 rounded-1 '>
              Important
            </button>
          </div>
          <img src={dropImg} alt='drop' className='drop-img' />

          <label htmlFor='' className='task-title'>
            Tags
          </label>
        </div>

        {/* done btn */}
        <button className='btn btn-lg mt-5 w-100 done-task-btn rounded-1'>
          Done
        </button>

        {/* back to top link */}
        <div className='text-center mt-5 pb-3 '>
          <a href='' target='blank' className='new-task-link '>
            Back To Top
          </a>
        </div>
      </main>
    </div>
    </>
  )
}

export default NewTask