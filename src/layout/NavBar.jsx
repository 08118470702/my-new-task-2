// import React, { Component } from 'react'
// import '../style/Navbar.css'
// import navlogo from "../assets/navlogo.png"
// import ellipse from "../assets/Ellipse 1.png"
// import component from "../assets/Component-1.png"
// import { Link } from 'react-router-dom';
// const NavBar = () => {
//   return (

//     <>


//       <main className='container'>
//         <div className='nav-container text-success border border-success '>
//           <img src={navlogo} alt="navlogo" />

//           <Link className='text-dark' to="/NewTask"><h2>NewTask</h2> </Link>
//           <h3 className='text-dark'>All Task</h3>
//           <img src={ellipse} alt="ellipse" />
//           <hr />
//         </div>


//         <section className='hero-container '>

//           <div class="mb-4 row p-3 justify-content-between d-flex  flex-row-reverse align-items-center shadow-lg">
//             <div class="col-lg-6 ">
//               <img src={component} alt="" />
//             </div>
//             <div class="col-lg-5">
//               <h1 class="text-primary">
//                 Manage your Tasks on
//               </h1>
//               <h2> <span className='text-danger'>TaskDuty</span></h2>
//               <p>

//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget.
//                 Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
//               <button className='btn btn-danger text-white'>Go to My Tasks</button>
//             </div>
//           </div>
//         </section>


//       </main>
//     </>
//   )
// }

// export default NavBar


import React from "react";
import image from "../assets/Ellipse 1.png";
import imgs from "../assets/navlogo.png";
import component from "../assets/Component-1.png"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav-wrapper border-bottom ">
        <Navbar expand="lg" className="container mt-4">
          <Container fluid>
            <h2>
              {" "}
              <Link to="/" className="text-decoration-none text-dark">
                {" "}
                <img src={imgs} alt="na-logo" /> {" "}
              </Link>{" "}


            </h2>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>

              <div className="d-flex align-items-center gap-5">
                <Link to="/NewTask" className="text-decoration-none text-dark">
                  <h4> New Task </h4>
                </Link>
                <Link to="/AllTask" className="text-decoration-none text-dark">
                  <h4> All Task </h4>
                </Link>
                <div>
                  <Link to="/">
                    <img src={image} alt="" />
                  </Link>
                </div>
              </div>




              <Link className="text-decoration-none text-dark d-none d-lg-block"></Link>
              <>
                <section className="d-flex gap-5 align-items-center">
                  <Link className="text-decoration-none text-dark d-none d-lg-block"></Link>
                </section>
              </>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      
    </>
  );
};

export default NavBar;

