import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import necro from './assets/Necromancer_Free/Necromancer_1.png';
import necro2 from './assets/Necromancer_Free/Necromancer_2.png';
import NecrCoin from './assets/pngegg.png';
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import { Outlet, Link } from "react-router-dom";





function App() {
  function KoinClick()
  { 
    setBalance(balance+1);
  console.log("Click Activated")
  const SendKlick = async () => {
      const responce = await axios.get("http://localhost:3000/KoinClick");
      console.log(responce.data);
    };
  
      SendKlick();
  
  }

  const [count, setCount] = useState(0)
  const [balance, setBalance] = useState(0);
  const fetchApi = async () => {
    const responce = await axios.get("http://localhost:3000/api");
    console.log(responce.data.fruits);
  };
  
  useEffect(()=>{
    fetchApi();
  });

  return (
    <>
    <div className='bg-lime-500 flex  justify-end w-96'>
      <div className='p-5'>
        <Link className='text-lime-400' to={`registration`}>
          <button className='bg-lime-600'>
            Регистрация
          </button>
        </Link>
      </div>
      <div className='p-5'>
        <Link className='text-lime-400' to={`login`}>
          <button  className='bg-lime-600'>Вход</button>
        </Link>
      </div>
    </div>
    <div className=" bg-lime-800 rounded-md  w-96">
      <div className="bg-lime-800">

        <div className=' text-left'>
          <p>Balance: </p>
          <p>Balance: {balance} </p>
          <p>PerClick: </p>
          <p>Lvl: 6</p>
          <p>PerHour: 1$</p>
        </div>
        <div className=''>
          <button onClick={KoinClick} className='w-full border-none rounded-full flex  justify-center bg-lime-800'>
            <img className="w-36  "src={NecrCoin} alt="NecrCoin" />
          </button>
        </div>
        <div>
          
        </div>
      </div>




      <div className="rounded-md grid grid-cols-2 gap-4 p-2">
        <div className='shadow-xl shadow-lime-600 border-4  bg-lime-700 rounded-md border-lime-600'>
          <p>Огонь</p>
          <button className="flex justify-center p-0">
            <img className='' src={necro}/>
          </button>
          <div className='text-left pl-2'>
            <p>Цена: 100$</p>
          </div>
        </div> 
        <div className='shadow-xl  shadow-lime-600 bg-lime-700 border-4 rounded-md border-lime-600'>
          <p>Огонь</p>
          <button className="flex justify-center p-0">
            {/* Блюр типа карточка не открыта */}
            <img className='blur-sm' src={necro}/>
          </button>
          <div className='text-left pl-2'>
            <p>Цена: 300$</p>
          </div>
        </div> 
        
        
        
       
        
        

      </div>
    </div>
       
    </>
  )
}

export default App
