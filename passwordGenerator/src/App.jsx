import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {

const [length, setlength] = useState(8)
const [numberAllowed, setnumberAllowed] = useState(false)
const [charAllowed, setcharAllowed] = useState(false)
const [password, setpassword] = useState('')

const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed) str+="0123456789"
  if (charAllowed) str+="!@#$%^&*()[]{}+_`-"

  for (let i=1; i<= length; i++){
    let char = Math.floor( Math.random()*  str.length + 1)
    pass += str.charAt(char)
  }

  setpassword(pass)

  
},[length,numberAllowed,charAllowed,setpassword])


  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select()  //to select the password it just the give the feeling of select

    {/*passwordRef.current?.setSelectionRange(0,990) //to select within a range we are not using this function but just for knowledge we can use this function to select the object too */}

    window.navigator.clipboard.writeText(password)    //actually its does the main selection part of the password to the clipboard
  },[password])  

  const passwordRef = useRef(null) //use to select the password inside the box


  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setpassword])

  return (
    <>
    <nav className='bg-blue-700 flex justify-between py-3 text-white '>
      <div className='mx-6 cursor-pointer tracking-wider font-bold text-md'>Passworrd</div>
      <ul className='flex justify-center gap-x-8'>
        <li className='cursor-pointer hover:text-blue-200'>Home</li>
        <li className='cursor-pointer hover:text-blue-200'>About</li>
        <li className='cursor-pointer hover:text-blue-200'>Contact</li>
      </ul>
      <button className='mx-6 cursor-pointer bg-white text-blue-700 px-4 rounded-md hover:bg-black hover:text-white'>Sign In</button>
    </nav>
    
    {/* this is the main purpose of the project the password generator the above code for navbar is just for fun and to just for my expercience and enhacement*/}
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 py-6 bg-gray-700'>
     <h1 className='text-2xl  text-center text-blue-100 pt-3 mb-4'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden '>
      {/* the password section where we can see the password */}
      <input 
      type="text" 
      value={password} 
      className="outline-none w-full px-4"
       placeholder='Password' 
       readOnly 
       ref = {passwordRef}
       
       id="" />
      <button 
      onClick={copyPasswordToClip}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
     </div>
     <div className='flex text-sm gap-x-2 my-4'>
      <div className="flex items-center  gap-x-1">
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'

        onChange={(e) => {setlength(e.target.value)}}     //this function is used to use the slider in the length input
        
        />
        <label className='text-white'>length : {length}</label>
      </div>

      {/* this is the check box for the numbers allowed or not box*/}
      <div className="flex items-center  gap-x-1">
        <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          
        onChange={() => {setnumberAllowed((prev)=> !prev)}}     
        
        />
      <label className='text-white'>Numbers</label>
      </div>

      {/*this is the checkbox the numbers  */}
      <div className="flex items-center  gap-x-1">
        <input type="checkbox" 
          defaultChecked={charAllowed}
          id='numberInput'
          
        onChange={() => {setcharAllowed((prev)=> !prev)}}     
        
        />
      <label className='text-white'>Characters</label>
      </div>
     </div>

     </div>
    </>
  )
}

export default App
