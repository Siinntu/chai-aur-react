import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [Color, setColor] = useState("olive");

  return (
    
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: Color}}
      >
       <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-5 ">
       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

        <button 
        onClick={()=>setColor("red")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "red"}}
        >Red</button>
        <button 
         onClick={()=>setColor("green")}//onclick always want function.
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "green"}}
        >green</button>
        <button 
         onClick={()=>setColor("blue")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "blue"}}
        >blue</button>
        <button 
         onClick={()=>setColor("purple")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "purple"}}
        >purple</button>
        <button 
         onClick={()=>setColor("yellow")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "yellow"}}
        >yellow</button>
        <button 
         onClick={()=>setColor("Maroon")}
        className='outline-none px-4 py-2 rounded-full  text-white shadow-lg '
         style={{backgroundColor: "Maroon"}}
        >Maroon</button>
        <button 
         onClick={()=>setColor("Teal")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "Teal"}}
        >Teal</button>
        <button 
         onClick={()=>setColor("indigo")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "indigo"}}
        >indigo</button>
         <button 
         onClick={()=>setColor("black")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "black"}}
        >black</button>
         <button 
         onClick={()=>setColor("white")}
        className='outline-none px-4 py-2 rounded-full text-black shadow-lg '
         style={{backgroundColor: "white"}}
        >white</button>
         <button 
         onClick={()=>setColor("brown")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "brown"}}
        >brown</button>
         <button 
         onClick={()=>setColor("gold")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "gold"}}
        >golden</button>
         <button 
         onClick={()=>setColor("silver")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "silver"}}
        >silver</button>
         <button 
         onClick={()=>setColor("grey")}
        className='outline-none px-4 py-2 rounded-full text-white shadow-lg '
         style={{backgroundColor: "grey"}}
        >grey</button>
        </div>
       </div>

      
      </div>
    
  )
}

export default App
