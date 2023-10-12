import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Shorts from './components/Shorts';
import Hook from './components/Hook';
import Conexpo from './components/Conexpo'; 
import {Users} from './components/Users';
import axios from 'axios';
import { createContext,setData} from 'react';
import { useState,useEffect } from 'react';
import Product from './components/Product';
import { Add } from './components/Adduser';
export const store=createContext();


function App() {

  let student=[{
    name:"surya",
    age:20
  },
  {  
    name:"Teja",
    age:19

  }

]
// const [data, setData]=useState(student)
  
  return (
    <>
    <BrowserRouter>
    {/* <store.Provider value={[data, setData]}> */}
    <div className='row'>
    <Sidebar/>
    <Product/>
    <Users/>
    <Add/>
   
    {/* <Conexpo/> */}
   
    {/* <Hook/>  */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Shorts" element={<Shorts/>}></Route>
      </Routes>
    </div>
    {/* </store.Provider> */}
    </BrowserRouter>
    
    </>
  );
}

export default App;
