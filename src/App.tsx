import { skills } from "../data";
import { SideBar } from "./components/SideBar";
import { Home } from "./components/Home";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter, FiGithub, FiMail } from "react-icons/fi";

export default function App() {
  const [currentView, setCurrentView] = React.useState<string>("");
  const [currentSection, setCurrentSection] = React.useState<Array<string>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [githubData, setGithubData] = React.useState<
    {
      id: Number;
      title: String;
      name: String;
      tech_used: String[];
      repo_link: String;
    }[]
  >([]);
  const [profilePicture, setProfilePicture] = React.useState<string>("");
  const fetchGitData = async () => {
    const data = await fetch(
      "https://api.github.com/users/sra1kumar-NULL/repos",
      {
        headers: {
          authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    return data;
  };

  React.useEffect(() => {
    fetchGitData()
      .then((response) => {
        try {
          response
            .json()
            .then((data) => {
              data.map(async (item: any, index: number) => {
                if (profilePicture !== item?.owner?.avatar_url) {
                  setProfilePicture(item?.owner?.avatar_url);
                }
                const dataPacket = {
                  id: item?.id ?? index,
                  name: item?.name ?? "",
                  tech_used: [],
                  repo_link: item?.html_url,
                };
                const languages = await fetch(item?.languages_url, {
                  headers: {
                    authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                  },
                })
                  .then((response) =>
                    response
                      .json()
                      .then((data) => Object.keys(data))
                      .catch((error) => {
                        console.log(error);
                      })
                  )
                  .catch((err) => {
                    console.log(err);
                  });
                const repoItem = {
                  ...dataPacket,
                  tech_used: languages,
                };
                setGithubData((prev: any) => {
                  if (
                    prev.filter((iterator: any) => iterator.id === repoItem.id)
                      ?.length
                  ) {
                    return prev;
                  }
                  return [...prev, repoItem];
                });
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error, "response");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <main className="w-full h-[100vh] flex flex-1 justify-center items-center">
        <div className="w-10 h-10 bg-slate-700 animate-bounce rounded-full" />
      </main>
    );
  }
  console.log(profilePicture);

  return (
    <main className="bg-slate-950 flex flex-1 w-full min-h-[100vh]">
      <section className="w-full md:p-6 flex flex-col justify-between gap-4">
        <section className="flex md:flex-row flex-col md:items-start md:justify-between">
          <section
            className={`flex-1 flex flex-col ${
              currentSection.includes("project_details")
                ? "visible opacity-100"
                : "invisible opacity-0"
            }
            animate-opacity duration-1000 delay-500
            `}
          >
            <Home currentView={currentView} projectsData={githubData} />
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
              projectsData={githubData}
              setCurrentView={setCurrentView}
            />
          </section>
        </section>
        <div className="w-full h-px bg-slate-700" />
        <section
          className={`flex flex-row items-center justify-center gap-2 my-6 flex-wrap `}
        >
          {[
            {
              key: "project_details",
              value: "Project Details",
            },
            {
              key: "project_links",
              value: "Project Links",
            },
            {
              key: "about",
              value: "About",
            },
            {
              key: "skills",
              value: "Skills",
            },
          ].map((item) => (
            <div
              key={item.key}
              className={`w-[136px] h-[136px] bg-slate-800  flex justify-center items-center  ${
                currentSection.includes(item.key)
                  ? "rotate-45 "
                  : "animate-pulse rotate-0 rounded-3xl"
              }
            transition-all duration-1000
            `}
            >
              <button
                className={`w-32 h-32 bg-slate-700  flex justify-center items-center cursor-pointer ${
                  currentSection.includes(item.key)
                    ? "-rotate-45 "
                    : "animate-pulse rotate-0 rounded-3xl"
                }
            transition-all duration-1000`}
                onClick={() =>
                  setCurrentSection((prev) => {
                    if (prev.includes(item.key)) {
                      return prev.filter((iterator) => iterator !== item.key);
                    }
                    return [...currentSection, item.key];
                  })
                }
              >
                <h5 className="text-white">{item.value}</h5>
              </button>
            </div>
          ))}
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
                <h2 className="text-white font-bold font-xs mx-auto md:max-w-80 max-w-60 text-center">
                  Sravan Kumar Velangi
                </h2>
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
            <section className="flex flex-1 flex-col items-center  py-4 gap-8">
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
              {profilePicture?.length && (
                <img
                  src={profilePicture}
                  alt="profile picture"
                  className="rounded-full w-40 h-40 border-indigo-600 border-4"
                />
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
