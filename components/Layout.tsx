import { SideBar } from './SideBar'
import { Home } from './Home'
import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi'
export const Layout = ({ children }: any) => {
  const [currentView, setCurrentView] = useState<string>('Instagram Clone')
  return (<section className="mx-2">
    <section className='bg-black rounded-full w-auto h-10 mt-1 flex justify-center items-center '>
      <main className='text-white'>
        # The minimal portfolio design ever
      </main>
    </section>
    <section className="md:flex  max-sm:flex-col justify-between ">
      <div className='md:w-1/5 w-11/12 mx-auto flex flex-col items-center max-h-96 overflow-y-scroll '>
        <section className="bg-black w-11/12 rounded-md mt-1 flex flex-col items-center p-2   rounded-lg ">
          <section className='w-5/6 rounded-full border-white border-1'><p className="text-center text-white p-2 border-2 border-green-500 rounded-full">About Me</p></section>
          <section className="flex flex-col items-center gap-3 w-full py-1 px-2 mt-3">
            <hr />
            <main className="text-white font-mono itallic font-xs">I'm a full Stack Developer working in a start up.Started as flutter Developer,but later found my interest in React.Now working as a MERN Stack Developer.
            </main>
            <hr />
            <main className="text-white text-center w-full border-2 border-blue-500 rounded-sm ">Connect</main>
            <section className="mx-auto w-11/12 flex justify-center container mt-1">
              <a className="w-8 h-6 cursor-pointer  mx-1" target='_blank' href='https://www.linkedin.com/in/sravan-kumar-a73498211/'>
                <FaLinkedin color='white' size={20} />
              </a>
              <a className="w-8 h-6 cursor-pointer mx-1 " target='_blank'href = "mailto:sravansandeep163@gmail.com?subject = Contact&body = Message">
                <FiMail color='white' size={20} />
              </a>
              <a className="w-8 h-6 cursor-pointer mx-1" target='_blank' href='https://twitter.com/sra1z'>
                <FiTwitter color='white' size={20} />
              </a>
              <a className="w-8 h-6 cursor-pointer mx-1" target='_blank' href='https://github.com/sra1kumar-NULL'>
                <FiGithub color='white' size={20} />
              </a>
            </section>
          </section>
        </section>
      </div>
      <div className="md:w-4/5 w-11/12 mx-auto">
        <section className="px-2 border-white border-2 w-full text-center rounded-lg sticky top-0 z-10  py-1 bg-black text-white my-1">
          Project Details
        </section>
        <section className='w-full mt-1 overflow-y-scroll flex flex-col max-h-96'>
          <Home currentView={currentView} setCurrentView={setCurrentView} />
        </section>
        <SideBar currentView={currentView} setCurrentView={setCurrentView} />
      </div>
    </section>
    {children}
  </section>)
}