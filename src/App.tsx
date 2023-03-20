import { Card } from '../components/Card'
import { projectsData } from '../data'
export default function App() {
  return (
    <section>

      <section className='w-full flex flex-col justify-center items-center'>
        {projectsData.map((project) => (
          <Card key={project.id} title={project.title} name={project.name} techUsed={project.tech_used} />
        ))}
      </section>
    </section>
  )
}