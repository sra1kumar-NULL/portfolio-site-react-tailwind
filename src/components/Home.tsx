import { Card } from './Card'
export interface homeProps{
  currentView:string
  projectsData:any
}
export const Home = ({ currentView, projectsData }:homeProps) => {
  return (
    <section className="w-full flex flex-col justify-start items-center  min-h-80 max-h-80 overflow-y-scroll">
      {projectsData.map((project: any) => {
        if (currentView == project.name) {
          return (
            <Card
              key={project.id}
              title={project.name}
              name={project.name}
              techUsed={project.tech_used}
              repoLink={project.repo_link}
            />
          );
        }
      })}
    </section>
  );
}