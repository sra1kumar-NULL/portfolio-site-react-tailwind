import { useState } from "react";
import { projectsData } from "../../data";
import { homeProps } from "./Home";
import { SideBarCard } from "./SideBarCard";

export const SideBar = ({ currentView, setCurrentView }: homeProps) => {
  return (
    <div className="w-full flex  flex-col gap-1 ">
      <section className=" w-full mt-1 flex flex-col items-center p-2  overflow-y-scroll rounded-lg max-h-96">
        <hr />
        <section className="flex  items-center gap-3 w-full py-1 px-2 mt-3 flex-wrap">
          {projectsData.map((project) => (
            <SideBarCard
              key={project.name}
              cardTitle={project.title}
              isSelected={currentView == project.title}
              currentView={currentView}
              setCurrentView={setCurrentView}
            />
          ))}
        </section>
      </section>
    </div>
  );
};
