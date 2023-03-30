import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider, Router } from 'react-router-dom';
import { useState, createContext } from "react";
import Startup from './Views/Startup';
import Login from './Views/Login';
import Game from './Views/Game';
import Navbar from './Components/Navbar';
import Hard from './Views/Hard';
import Easy from './Views/Easy';
import Normal from './Views/Normal';


function App() {
  const [name, setName] = useState("")
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Startup />}/>
        <Route path='/login' element={<Login name={name} setName={setName}/>}/>
        <Route path='/game' element={<Game name={name}/>}/>
        <Route path='/hard' element={<Hard name={name}/>}/>
        <Route path='/easy' element={<Easy name={name}/>}/>
        <Route path='/normal' element={<Normal name={name}/>}/>
      </Route>
    )
  )
  return (
    <div className="h-[100vh] bg-[#257edd]">
      <RouterProvider router={router}/>
    </div>
  );
}



export default App;
