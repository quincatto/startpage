import { useState } from 'react'
import './App.css'
import Clock from './components/clock'

function App() {


  return (
    <div>
      <div className='font-mono absolute mx-auto text-center left-0 right-0 top-10 text-xl text-shadow'>
      <Clock />
      </div>
      <div className='flex items-center justify-center h-screen'>
        <div className='flex items-center justify-center h-1/2 bg-purple-1000 rounded-2xl w-1/2 shadow-xl'>
          <h1 className='text-shadow'>Hello World</h1>
        </div>
      </div>
    </div>
  )
}

export default App
