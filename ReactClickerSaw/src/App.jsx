import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import necro from './assets/Necromancer_Free/Necromancer_1.png';
import necro2 from './assets/Necromancer_Free/Necromancer_2.png';
import NecrCoin from './assets/pngegg.png';
import viteLogo from '/vite.svg'

import './App.css'
import axios from "axios";
function App() {
  const [count, setCount] = useState(0)

  const fetchApi = async () => {
    const responce = await axios.get("http://localhost:3000/api");
    console.log(responce.data.fruits);
  };
  
  useEffect(()=>{
    fetchApi();
  });

  return (
    <>
    <div className=" bg-lime-800 rounded-md  w-96">
      <div className="bg-lime-800  grid grid-cols-2">
        <div>
          <img className="w-36"src={NecrCoin} alt="NecrCoin" />
        </div>
        <div className='text-left'>
          <p>Balance: </p>
          <p>Balance: </p>
          <p>PerClick: </p>
          <p>Lvl: 6</p>
          <p>PerHour: 1$</p>
        </div>
      </div>




      <div className="rounded-md grid grid-cols-2 gap-4 p-2">
        <div className='shadow-xl shadow-lime-600 border-4  bg-lime-700 rounded-md border-lime-600'>
          <p>Огонь</p>
          <div className="flex justify-center">
            <img className='' src={necro}/>
          </div>
        </div> 
        <div className='shadow-xl  shadow-lime-600 bg-lime-700 border-4 rounded-md border-lime-600'>
          <p>Огонь</p>
          <div className="flex justify-center">
            {/* Блюр типа карточка не открыта */}
            <img className='blur-sm' src={necro}/>
          </div>
          <div className='text-left pl-2'>
            <p>Цена: 300$</p>
          </div>
        </div> 
        
        
        
       
        
        

      </div>
    </div>
       
    </>
  )
}
let n=10;
export default App
