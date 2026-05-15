import { experience } from "../data";

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-0">
      <h2 className="text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-10">
        Experience
      </h2>
      <div className="space-y-0">
        {experience.map((exp, idx) => (
          <div key={exp.id} className="relative pl-8 pb-10 last:pb-0">
            {idx < experience.length - 1 && (
              <div className="absolute left-[11px] top-2 bottom-0 w-px bg-gradient-to-b from-yellow-500/40 to-transparent" />
            )}
            <div className="absolute left-0 top-2 w-[23px] h-[23px] rounded-full border-2 border-yellow-500/30 bg-zinc-950 flex items-center justify-center">
              <div className="w-[9px] h-[9px] rounded-full bg-yellow-500" />
            </div>

            <div className="text-xs text-zinc-500 mb-1 font-mono">
              {exp.period}
            </div>
            <h3 className="text-base font-semibold text-zinc-200">
              {exp.role}{" "}
              <span className="text-zinc-500 font-normal">@ {exp.company}</span>
            </h3>
            <p className="text-xs text-zinc-600 mb-2">{exp.location}</p>
            <ul className="space-y-1 mb-3">
              {exp.points.map((point, i) => (
                <li key={i} className="text-sm text-zinc-400 flex gap-2">
                  <span className="text-yellow-600 mt-1.5">-</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-md bg-yellow-950/40 border border-yellow-900/30 text-xs text-yellow-300">
                  {tag === "react-native" ? "React Native" : tag === "tailwind-css" ? "Tailwind CSS" : tag === "nextjs" ? "Next.js" : tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
