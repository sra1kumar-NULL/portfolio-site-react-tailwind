import { useState } from 'react'
import { projectsData } from '../data'
import { SideBarCard } from './SideBarCard'

export const SideBar = ({ currentView, setCurrentView }) => {
  return (
    <div className='w-full flex  flex-col gap-1'>
      <section className="bg-black w-full rounded-md mt-1 flex flex-col items-center p-2  overflow-y-scroll rounded-lg max-h-96">
        <section className='w-5/6 rounded-full border-white border-1'><p className="text-center text-white">Projects</p></section>
        <hr />
        <section className="flex  items-center gap-3 w-full py-1 px-2 mt-3 flex-wrap">
          {projectsData.map(project => (
            <SideBarCard key={project.name} cardTitle={project.title} isSelected={currentView == project.title} currentView={currentView} setCurrentView={setCurrentView} />
          ))}
        </section>
      </section>
    </div>
  )
}