import { SideBarCard } from "./SideBarCard";
interface sideBarProps{
  currentView:string
  projectsData:any
  setCurrentView:any
}
export const SideBar = ({
  currentView,
  setCurrentView,
  projectsData,
}:sideBarProps) => {
  return (
    <div className="w-full flex  flex-col gap-1 ">
      <section className=" w-full mt-1 flex flex-col items-center   overflow-y-scroll rounded-lg min-h-80 max-h-80 px-2">
        <section className="flex  items-center gap-3 w-full  flex-wrap">
          {projectsData.map((project: any) => (
            <SideBarCard
              key={project.id}
              cardTitle={project.name}
              isSelected={currentView == project.name}
              currentView={currentView}
              setCurrentView={setCurrentView}
            />
          ))}
        </section>
      </section>
    </div>
  );
};
