import { ReactNode, useState } from 'react'
import { FaGithub, FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa'
import { RiMovie2Line } from 'react-icons/ri'
import './App.css'
import Clock from './components/clock'
import Greeting from './components/greeting'
import Shortcut from './components/shortcut'

function App() {
  const twitter: ReactNode[] = ['https://twitter.com/', <FaTwitter />, 'Twitter'];
  const reddit: ReactNode[] = ['https://reddit.com/', <FaReddit />, 'Reddit'];
  const youtube: ReactNode[] = ['https://youtube.com/', <FaYoutube />, 'YouTube'];
  const github: ReactNode[] = ['https://github.com/', <FaGithub />, 'Github'];
  const pahe: ReactNode[] = ['https://pahe.li/', <RiMovie2Line />, 'Pahe'];


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
        <div className='flex h-1/2 bg-purple-1000 rounded-2xl w-1/3 shadow-xl'>
          <Shortcut link={twitter}/>
          <Shortcut link={reddit}/>
          <Shortcut link={youtube}/>
          <Shortcut link={github}/>
          <Shortcut link={pahe}/>
        </div>
        <div className='flex flex-col items-center justify-center h-1/2 bg-purple-1000 rounded-2xl w-1/3 shadow-xl'>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
