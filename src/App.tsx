import { useState } from 'react'
import './App.css'
import Clock from './components/clock'
import Greeting from './components/greeting'

function App() {


  return (
    <>
    <div className="background">
    </div>
    <div className='foreground'>
      <div className="relative h-32">
        <div className='font-mono absolute mx-auto text-center left-0 right-0 top-10 text-xl text-shadow'>
          <Clock />
        </div>
      </div>
      <div className="text-center mt-10">
        <Greeting />
      </div>
      <div className='flex items-center justify-center absolute h-screen w-screen top-0 left-0 gap-20'>
        <div className='flex flex-col items-center justify-center h-1/2 bg-purple-1000 rounded-2xl w-1/3 shadow-xl'>
        </div>
        <div className='flex flex-col items-center justify-center h-1/2 bg-purple-1000 rounded-2xl w-1/3 shadow-xl'>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
