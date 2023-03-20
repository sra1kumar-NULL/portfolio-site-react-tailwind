import { ReactElement } from "react"
import { projectsData } from '../data'
import { SideBarCard } from './SideBarCard'
export const Layout = ({ children }: { chidren: ReactElement }) => {
  return (<section className="mx-2">
    <section className='bg-black rounded-full w-auto h-10 mt-1 flex justify-center items-center'>
      <main className='text-white'>
        # The minimal portfolio design ever
      </main>
    </section>
    <section className="flex justify-between "  >
      <section className="bg-black w-1/5 rounded-md mt-1 flex flex-col items-center p-2 max-h-96overflow-y-scroll">
        <section className='w-5/6 rounded-full border-white border-1'><p className="text-center text-white">Project List</p></section>
        <section className="flex flex-col items-center gap-3 w-full p-1 mt-3">
          {projectsData.map(project => (
            <SideBarCard cardTitle={project.title} isSelected={false} />
          ))}
        </section>
      </section>
      <section className='w-4/5 mt-1 mx-2 max-h-96 overflow-y-scroll'>
        <section className="px-2 border-black border-2 w-full text-center rounded-lg sticky top-0 z-10 bg-white py-1">
          Project Details
        </section>
        <hr />
        {children}
      </section>
    </section>
    <section className="bg-black w-full flex flex-col items-center mt-1 rounded-full py-1" >
      <main className="text-white text-center mt-1"> # Project Explanation</main>
      <section className='w-full max-h-72  mt-1 overflow-y-scroll bg-white'>

      </section>
    </section>
  </section>)
}