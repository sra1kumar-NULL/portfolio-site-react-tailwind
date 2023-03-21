import { Card } from '../components/Card'
import { Layout } from '../components/Layout'
import { skills } from '../data'
export default function App() {
  return (
    <Layout>
      <section className="bg-black w-full flex flex-col items-center mt-1 rounded-full p-1 " >
        <main className="text-white text-center mt-1 sticky bottom-0"> # My Skills</main>
      </section>
      <section className='w-full max-h-80  mt-1  bg-white flex gap-2'>
        <section className='containter w-1/3 bg-black mx-2 rounded-lg p-2 flex flex-col items-center overflow-y-scroll'>
          <main className='text-black bg-white p-2 rounded-full mb-2  w-4/12 text-center sticky top-0'>Frontend</main>
          <hr/>
          <section className='flex flex-col items-center gap-2'>
          {
            skills.front.map((skill)=>(
              <p className='text-white font-mono'>{skill}</p>
            ))
          }
          </section>
        </section>
        <section className='containter w-1/3 bg-black mx-2 rounded-lg p-2 flex flex-col items-center overflow-y-scroll'>
          <main className='text-black bg-white p-2 rounded-full mb-2  w-4/12 text-center sticky top-0'>Backend</main>
           <hr/>
          <section className='flex flex-col items-center gap-2'>
          {
            skills.back.map((skill)=>(
              <p className='text-white font-mono'>{skill}</p>
            ))
          }
          </section>
        </section>
        <section className='containter w-1/3 bg-black mx-2 rounded-lg p-2 flex flex-col items-center overflow-y-scroll'>
          <main className='text-black bg-white p-2 rounded-full mb-2  w-4/12 text-center sticky top-0'>Other</main>
          <hr/>
          <section className='flex flex-col items-center gap-2'>
          {
            skills.other.map((skill)=>(
              <p className='text-white font-mono'>{skill}</p>
            ))
          }
          </section>
        </section>
      </section>

    </Layout>
  )
}