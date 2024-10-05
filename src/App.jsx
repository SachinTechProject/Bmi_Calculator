import { useState } from 'react'

import './App.css'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [health, setHealth] = useState('')
  
   function bimClick(){
     
     if(height && weight){
      const heightMeater = height / 100;
      const calBmi = (weight / (heightMeater * heightMeater)).toFixed(2)
      setBmi(calBmi)
      if(calBmi<= 18.5){
          setHealth("Underweight")
      }else if(calBmi>18.5 && calBmi<=24.9){
        setHealth("Normal weight")
      }else if(calBmi>24.9 && calBmi<=29.9){
         setHealth("Overweight")
      }else if(calBmi>=30){
        setHealth("Obese: BMI 30 or greater")
      }
     }
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-white text-center">BMI Calculator</h1>
        <div className="mb-4">
          <input 
            type="number" 
            value={weight}
            onChange={(e)=>{setWeight(e.target.value)}}
            placeholder="Weight (kg)" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <input 
            type="number" 
            value={height}
            onChange={(e)=>{setHeight(e.target.value)}}
            placeholder="Height (cm)" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button 
         onClick={bimClick}
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600"
        >
          Calculate BMI
        </button>
        <div className="mt-6 text-center">
          {/* This is where the BMI result would be displayed */}
          <h2 className="text-lg font-semibold text-blue-500">Your BMI: {bmi}</h2>
        </div>
        <div className="mt-6 text-center">
          {/* This is where the BMI result would be displayed */}
          <h2 className="text-lg font-semibold text-gray-300"> Your BMI Health is   ({health})</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
