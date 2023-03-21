import { Card } from '../components/Card'
import { Layout } from '../components/Layout'
export default function App() {
  return (
    <Layout>
      <section className="bg-black w-full flex flex-col items-center mt-1 rounded-full p-1 mx-1" >
        <main className="text-white text-center mt-1 sticky bottom-0"> # Project Description</main>
        <section className='w-full max-h-72  mt-1 overflow-y-scroll bg-white'>
        </section>
      </section>
    </Layout>
  )
}