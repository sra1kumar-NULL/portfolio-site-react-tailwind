import { interests } from "../data";

export default function Interests() {
  return (
    <section className="py-24 px-6 lg:px-0">
      <h2 className="text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-10">
        Beyond Code
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {interests.map((item) => {
          const Wrapper = item.url ? "a" : "div";
          return (
            <Wrapper
              key={item.name}
              {...(item.url ? { href: item.url, target: "_blank", rel: "noreferrer" } : {})}
              className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-yellow-600/30 transition-all duration-300 block"
            >
              <span className="text-2xl">{item.emoji}</span>
              <h3 className="mt-2 text-sm font-semibold text-zinc-200">{item.name}</h3>
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              {item.url && (
                <p className="mt-1.5 text-xs text-zinc-600">letterboxd.com/sra1kumar33</p>
              )}
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
