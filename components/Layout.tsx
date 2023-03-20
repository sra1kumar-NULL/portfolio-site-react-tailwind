import { ReactElement } from "react"
import { projectsData } from '../data'
import { SideBarCard } from './SideBarCard'
import { useState } from 'react'
export const Layout = ({ children }: { chidren: ReactElement }) => {
  const [currentView, setCurrentView] = useState<string>('')
  return (<section className="mx-2">
    <section className='bg-black rounded-full w-auto h-10 mt-1 flex justify-center items-center '>
      <main className='text-white'>
        # The minimal portfolio design ever
      </main>
    </section>
    <section className="flex justify-between"  >
      <div className='w-1/5 flex flex-col '>
        <section className="bg-black w-full rounded-md mt-1 flex flex-col items-center p-2  overflow-y-scroll rounded-lg max-h-96">
          <section className='w-5/6 rounded-full border-white border-1'><p className="text-center text-white">Projects</p></section>
          <section className="flex flex-col items-center gap-3 w-full py-1 px-2 mt-3">
            {projectsData.map(project => (
              <SideBarCard key={project.name} cardTitle={project.title} isSelected={currentView == project.title} currentView={currentView} setCurrentView={setCurrentView} />
            ))}
          </section>
        </section>
        <section className="bg-black w-full rounded-md mt-1 flex flex-col items-center p-2  overflow-y-scroll rounded-lg max-h-80">
          <section className='w-5/6 rounded-full border-white border-1'><p className="text-center text-white">About Me</p></section>
          <section className="flex flex-col items-center gap-3 w-full py-1 px-2 mt-3">

          </section>
        </section>
      </div>
      <div className="w-4/5">
        <section className='w-full mt-1 mx-2 max-h-96 overflow-y-scroll flex flex-col'>
          <section className="px-2 border-black border-2 w-full text-center rounded-lg sticky top-0 z-10 bg-white py-1">
            Project Details
          </section>
          <hr />
          {children}
        </section>
        <section className="bg-black w-full flex flex-col items-center mt-1 rounded-full p-1 mx-1" >
          <main className="text-white text-center mt-1 sticky bottom-0"> # Project Description</main>
          <section className='w-full max-h-72  mt-1 overflow-y-scroll bg-white'>
          </section>
        </section>
      </div>
    </section>
  </section>)
}