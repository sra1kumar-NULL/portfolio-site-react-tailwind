import { projectsData } from "../data";

const techIcons: Record<string, string> = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "tailwind-css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "nextjs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  expressjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  svelte: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-0">
      <h2 className="text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-10">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, idx) => (
          <a
            key={project.id}
            href={project.repo_link}
            target="_blank"
            rel="noreferrer"
            className="group block p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-yellow-600/40 hover:bg-zinc-900/60 transition-all duration-300"
            style={{
              animation: `fade-in-up 0.6s ease-out ${idx * 80}ms both`,
            }}
          >
            <h3 className="text-base font-semibold text-zinc-200 group-hover:text-yellow-300 transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech_used.map((tech) => (
                <span key={tech} className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800/60 text-xs text-zinc-400">
                  {techIcons[tech] && <img src={techIcons[tech]} alt="" className="w-3 h-3" />}
                  {tech === "tailwind-css" ? "Tailwind" : tech === "expressjs" ? "Express" : tech === "nextjs" ? "Next.js" : tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
