import { Card } from './Card'
import { projectsData } from '../data'
export interface homeProps{
  currentView:string
  setCurrentView:any
}
export const Home = ({ currentView, setCurrentView }:homeProps) => {
  return (
    <section className='w-full flex flex-col justify-center items-center h-full'>
      {projectsData.map((project) => {
        if (currentView == project.title) {
          return <Card key={project.id} title={project.title} name={project.name} techUsed={project.tech_used} repoLink={project.repo_link} />
        }
      })}
    </section>
  )
}