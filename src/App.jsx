// import { useState } from 'react'
// import './App.css'
// import Hero from './Component/Hero'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import NavBar from './layout/NavBar'
// import Home from "./Pages/Home"
// import AllTask from "./Pages/AllTask"
// import NewTask from "./Pages/NewTask"

// function App() {


//   return (
//     <>
//     <BrowserRouter>
//     <NavBar/>
//     <Routes>
//     <Route path="/" element={<Home/>} />
//     {/* <Route path="/NewTask" element={<NewTask/>} /> */}
//     <Route path="/AllTask" element={<AllTask/>} />
//     <Route path="/Hero" element={<Hero/>} />
  
//   </Routes>
//   </BrowserRouter>

//   <NewTask/>
//     </>
//   )
// }

// export default App

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './layout/NavBar'
import Home from './Pages/Home'
import AllTask from './Pages/AllTask';
import NewTask from './Pages/NewTask';
import EditTask from './Pages/EditTask'
function App() {

  return (
    <>
   <BrowserRouter>
   <NavBar/>
<Routes>|
<Route path ='/' element={<Home/>}/>
{/* <Route path ='/Home' element={<Home/>}/> */}
<Route path ='/alltask' element={<AllTask/>}/>
<Route path ='/newtask' element={<NewTask/>}/>
<Route path ='/edittask' element={<EditTask/>}/>

</Routes>
   </BrowserRouter>
    </>
  )
}

export default App