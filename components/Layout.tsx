import { ReactElement, useContext } from "react"
import { projectsData } from '../data'
import { SideBarCard } from './SideBarCard'
import { SideBar } from './SideBar'
import { Home } from './Home'
import { useState } from 'react'
import { viewContext } from "../src/context"
export const Layout = ({ children }: any) => {
  const [currentView, setCurrentView] = useState<string>('Instagram Clone')
  return (<section className="mx-2">
    <section className='bg-black rounded-full w-auto h-10 mt-1 flex justify-center items-center '>
      <main className='text-white'>
        # The minimal portfolio design ever
      </main>
    </section>
    <section className="flex justify-between">
      <div className='w-1/5 flex flex-col items-center'>
        <section className="bg-black w-11/12 rounded-md mt-1 flex flex-col items-center p-2  h-80 rounded-lg ">
          <section className='w-5/6 rounded-full border-white border-1'><p className="text-center text-white p-2 border-2 border-green-500 rounded-full">About Me</p></section>
          <section className="flex flex-col items-center gap-3 w-full py-1 px-2 mt-3">
            <hr />
            <main className="text-white font-mono itallic font-xs">I'm a full Stack Developer working in a start up.Started as flutter Developer,but later found my interest in React.Now working as a MERN Stack Developer.</main>
          </section>
        </section>
      </div>
      <div className="w-4/5">
        <section className='w-full mt-1 mx-2 max-h-96 overflow-y-scroll flex flex-col'>
          <section className="px-2 border-black border-2 w-full text-center rounded-lg sticky top-0 z-10 bg-white py-1">
            Project Details
          </section>
          <hr />
          <Home currentView={currentView} setCurrentView={setCurrentView} />
        </section>
        <SideBar currentView={currentView} setCurrentView={setCurrentView} />
      </div>
    </section>
    {children}
  </section>)
}