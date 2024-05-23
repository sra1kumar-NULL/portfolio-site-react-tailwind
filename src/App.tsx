import { skills } from "../data";
import { SideBar } from "./components/SideBar";
import { Home } from "./components/Home";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter, FiGithub, FiMail } from "react-icons/fi";

export default function App() {
  const [currentView, setCurrentView] = useState<string>("Instagram Clone");
  const [currentSection, setCurrentSection] = useState<Array<string>>([]);

  return (
    <main className="bg-slate-950 flex flex-1 w-full min-h-[100vh]">
      <section className="w-full md:p-6 flex flex-col justify-between gap-4">
        <section className="flex md:flex-row flex-col md:items-start md:justify-between">
          <section
            className={`flex-1 flex flex-col max-h-[280px] overflow-y-scroll ${
              currentSection.includes("project_details")
                ? "visible opacity-100"
                : "invisible opacity-0"
            }
            animate-opacity duration-1000 delay-500
            `}
          >
            <Home currentView={currentView} setCurrentView={setCurrentView} />
          </section>
          <div className="h-full w-px bg-slate-700" />
          <section
            className={`flex-1 ${
              currentSection.includes("project_links")
                ? "visible opacity-100"
                : "invisible opacity-0"
            }
            animate-opacity duration-1000 delay-500`}
          >
            <SideBar
              currentView={currentView}
              setCurrentView={setCurrentView}
            />
          </section>
        </section>
        <div className="w-full h-px bg-slate-700" />
        <section className="flex flex-row items-center justify-center gap-4 my-6 flex-wrap">
          <button
            className="w-32 h-32 bg-slate-900 rounded-xl flex justify-center items-center cursor-pointer "
            onClick={() =>
              setCurrentSection((prev) => {
                if (prev.includes("project_details")) {
                  return prev.filter((item) => item != "project_details");
                }
                return [...currentSection, "project_details"];
              })
            }
          >
            <h5 className="text-white">Project Details</h5>
          </button>
          <button
            className="w-32 h-32 bg-slate-900 rounded-xl flex justify-center items-center cursor-pointer "
            onClick={() =>
              setCurrentSection((prev) => {
                if (prev.includes("project_links")) {
                  return prev.filter((item) => item != "project_links");
                }
                return [...currentSection, "project_links"];
              })
            }
          >
            <h5 className="text-white">Project Links</h5>
          </button>
          <button
            className="w-32 h-32 bg-slate-900 rounded-xl flex justify-center items-center cursor-pointer "
            onClick={() =>
              setCurrentSection((prev) => {
                if (prev.includes("about")) {
                  return prev.filter((item) => item != "about");
                }
                return [...currentSection, "about"];
              })
            }
          >
            <h5 className="text-white">About</h5>
          </button>
          <button
            className="w-32 h-32 bg-slate-900 rounded-xl flex justify-center items-center cursor-pointer "
            onClick={() => {
              setCurrentSection((prev) => {
                if (prev.includes("skills")) {
                  return prev.filter((item) => item != "skills");
                } else {
                  return [...currentSection, "skills"];
                }
              });
            }}
          >
            <h5 className="text-white">Skills</h5>
          </button>
        </section>
        <div className="w-full h-px bg-slate-700" />
        <div className="flex md:flex-row flex-col flex-1 gap-6">
          <div
            className={`${
              currentSection.includes("about")
                ? "visible opacity-100"
                : "invisible opacity-0"
            }
            animate-opacity duration-1000 delay-500 mx-auto`}
          >
            <section className="md:w-96 md:h-96 w-72 h-72 rounded-full flex justify-center items-center  bg-indigo-900 ">
              <section className="flex flex-col  items-center gap-6 mt-3">
                <h2 className="text-white font-mono itallic font-xs mx-auto md:max-w-80 max-w-60 text-center">
                  I'm a full Stack Developer working in a start up.Started as
                  flutter Developer,but later found my interest in React.Now
                  working as a MERN Stack Developer.
                </h2>
                <hr />
                <section className="mx-auto flex justify-center">
                  <a
                    className="w-8 h-6 cursor-pointer  mx-1"
                    target="_blank"
                    href="https://www.linkedin.com/in/sravan-kumar-a73498211/"
                  >
                    <FaLinkedin color="white" size={20} />
                  </a>
                  <a
                    className="w-8 h-6 cursor-pointer mx-1 "
                    target="_blank"
                    href="mailto:sravansandeep163@gmail.com?subject = Contact&body = Message"
                  >
                    <FiMail color="white" size={20} />
                  </a>
                  <a
                    className="w-8 h-6 cursor-pointer mx-1"
                    target="_blank"
                    href="https://twitter.com/sra1z"
                  >
                    <FiTwitter color="white" size={20} />
                  </a>
                  <a
                    className="w-8 h-6 cursor-pointer mx-1"
                    target="_blank"
                    href="https://github.com/sra1kumar-NULL"
                  >
                    <FiGithub color="white" size={20} />
                  </a>
                </section>
              </section>
            </section>
          </div>
          <div className="h-full w-px bg-slate-700" />
          <div
            className={` ${
              currentSection.includes("skills")
                ? "visible opacity-100"
                : "invisible opacity-0"
            }
            animate-opacity duration-1000 delay-500`}
          >
            <section className="flex flex-1 flex-col  py-4 gap-8">
              <section className="w-full rounded-lg  flex flex-row items-center   mx-auto gap-6">
                <div className="text-black rounded-full p-2 text-center  bg-white">
                  Frontend
                </div>
                <section className="flex flex-row items-center gap-2 flex-wrap">
                  {skills.front.map((skill, index) => (
                    <p
                      className={`text-white font-mono text-lg underline  ${
                        index % 2 === 0
                          ? "decoration-blue-500"
                          : "decoration-green-600"
                      }`}
                    >
                      {skill}
                    </p>
                  ))}
                </section>
              </section>
              <section className="w-full  rounded-lg  flex flex-row items-center   mx-auto gap-6">
                <div className="text-black  rounded-full p-2  text-center  bg-white">
                  Backend
                </div>
                <section className="flex flex-row items-center gap-2 flex-wrap">
                  {skills.back.map((skill, index) => (
                    <p
                      className={`text-white font-mono text-lg underline  ${
                        index % 2 === 0
                          ? "decoration-blue-500"
                          : "decoration-green-600"
                      }`}
                    >
                      {skill}
                    </p>
                  ))}
                </section>
              </section>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
