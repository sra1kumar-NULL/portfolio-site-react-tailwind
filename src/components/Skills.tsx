import { skills } from "../data";

const skillIcons: Record<string, string> = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  svelte: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  "nextjs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "tailwind-css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  expressjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  storybook: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
  vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  webpack: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
};

function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700/40 text-xs text-zinc-300">
      {skillIcons[name] && (
        <img src={skillIcons[name]} alt="" className="w-3.5 h-3.5" />
      )}
      {name === "nextjs" ? "Next.js" : name === "tailwind-css" ? "Tailwind CSS" : name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-0">
      <h2 className="text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-10">
        Skills
      </h2>
      <div className="grid sm:grid-cols-3 gap-8">
        <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60">
          <h3 className="text-sm font-medium text-zinc-200 mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((s) => <SkillBadge key={s} name={s} />)}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60">
          <h3 className="text-sm font-medium text-zinc-200 mb-3">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((s) => <SkillBadge key={s} name={s} />)}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60">
          <h3 className="text-sm font-medium text-zinc-200 mb-3">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((s) => <SkillBadge key={s} name={s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
