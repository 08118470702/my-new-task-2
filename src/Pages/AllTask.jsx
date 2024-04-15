import React from 'react'
import { Link } from 'react-router-dom'
import  addImg from '../assets/dropdown.png'
import trash from "../assets/trash-bin-outline.svg"
import create from "../assets/create-outline.svg"

const AllTask = () => {
  return (
    <>
    <div>
      {/* top header */}
      <main className="container">
        <div className="task-header headers d-flex justify-content-between py-4 align-items-center">
          <h1>My Tasks</h1>
<Link to='/newtask' className='d-flex align-items-center add-new-item gap-3'>+ Add New Task</Link>

        </div>


      {/* tasks boxes one*/}

      {/* first part*/}
      <div className="task-content-box border rounded p-2 mb-5">
        <div className="task-option d-flex justify-content-between">
          {/* urgent/important */}
          <div className="urgent align-self-center">
            <h5>Urgent</h5>            
          </div>

            {/* edit/delete */}
        <div className="edit-delete-container d-flex gap-2 align-items-center">
          <Link to='/edittask' className='btn btn-md rounded-1 d-flex gap-2 align-items-center edit-btn'> <img src={create} alt=""className='delete-edit-img' /> Edit</Link>
          <button className="btn btn-md delete-btn gap-2 d-flex align-items-center"><img src={trash} alt="" className='delete-edit-img'/>Delete</button>
        </div>
        </div>
        <hr />

        {/* second part */}
        <div>
          <h2>FinTech Website Update</h2>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
        </div>
      </div>
      

      
      {/* tasks boxes two*/}

      {/* first part*/}
      <div className="task-content-box border rounded p-2 mb-5">
        <div className="task-option d-flex justify-content-between">
          {/* urgent/important */}
          <div className="important align-self-center">
            <h5>Important</h5>            
          </div>

            {/* edit/delete */}
        <div className="edit-delete-container d-flex gap-2 align-items-center">
          <Link to='/edittask' className='btn btn-md rounded-1 d-flex gap-2 align-items-center edit-btn'> <img src={create} alt=""className='delete-edit-img' /> Edit</Link>
          <button className="btn btn-md delete-btn gap-2 d-flex align-items-center"><img src={trash} alt="" className='delete-edit-img'/>Delete</button>
        </div>
        </div>
        <hr />

        {/* second part */}
        <div>
          <h2>Agro Website Update</h2>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
        </div>
      </div>



      {/* tasks boxes third*/}

      {/* first part*/}
      <div className="task-content-box border rounded p-2 mb-5">
        <div className="task-option d-flex justify-content-between">
          {/* urgent/important */}
          <div className="urgent align-self-center">
            <h5>Urgent</h5>            
          </div>

            {/* edit/delete */}
        <div className="edit-delete-container d-flex gap-2 align-items-center">
          <Link to='/edittask' className='btn btn-md rounded-1 d-flex gap-2 align-items-center edit-btn'> <img src={create} alt=""className='delete-edit-img' /> Edit</Link>
          <button className="btn btn-md delete-btn gap-2 d-flex align-items-center"><img src={trash} alt="" className='delete-edit-img'/>Delete</button>
        </div>
        </div>
        <hr />

        {/* second part */}
        <div>
          <h2>FinTech Website Update</h2>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
        </div>
      </div>



        {/* tasks boxes fourth*/}

      {/* first part*/}
      <div className="task-content-box border rounded p-2 mb-5">
        <div className="task-option d-flex justify-content-between">
          {/* urgent/important */}
          <div className="important align-self-center">
            <h5>Important</h5>            
          </div>

            {/* edit/delete */}
        <div className="edit-delete-container d-flex gap-2 align-items-center">
          <Link to='/edittask' className='btn btn-md rounded-1 d-flex gap-2 align-items-center edit-btn'> <img src={create} alt=""className='delete-edit-img' /> Edit</Link>
          <button className="btn btn-md delete-btn gap-2 d-flex align-items-center"><img src={trash} alt="" className='delete-edit-img'/>Delete</button>
        </div>
        </div>
        <hr />

        {/* second part */}
        <div>
          <h2>Agro Website Update</h2>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
        </div>
      </div>
      <div className="text-center pb-3"><a href="" className="new-task-link">
        Back To Top</a></div>

      </main>

    </div>
    
    </>
  )
}

export default AllTask