export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 px-6 lg:px-0">
      <h2 className="text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-6">
        About
      </h2>
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-2 ring-yellow-500/40 ring-offset-2 ring-offset-zinc-950 flex-shrink-0 mx-auto sm:mx-0 lg:hidden">
          <picture>
            <source srcSet="/avatar.webp" type="image/webp" />
            <img
              src="/avatar.jpg"
              alt="Sravan Kumar Velangi"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="max-w-2xl space-y-4 text-zinc-400 leading-relaxed">
        <p>
          I'm a frontend engineer with a passion for building performant, accessible
          user interfaces. I currently work at <span className="text-zinc-200 font-medium">Razorpay</span>,
          India's leading fintech company, where I contribute to products that handle
          millions of transactions.
        </p>
        <p>
          Before Razorpay, I spent over 2.5 years at <span className="text-zinc-200 font-medium">GeekyAnts</span>,
          where I played a key role in building <span className="text-zinc-200 font-medium">gluestack-ui</span> —
          an open-source React Native component library. I grew from a trainee to a
          Software Engineer III, working across the stack with React, TypeScript,
          Node.js, and React Native.
        </p>
        <p>
          I'm a strong believer in <span className="text-zinc-200 font-medium">open source</span> and the{" "}
          <span className="text-zinc-200 font-medium">FOSS philosophy</span>. I daily drive{" "}
          <span className="text-zinc-200 font-medium">Linux</span>, contribute to open-source projects,
          and write about frontend architecture, micro-frontends, and cloud development.
        </p>
        <p>
          Outside of code, you'll find me on the badminton court 🏸, watching
          movies and anime ⚔️ (Berserk, Demon Slayer, AoT, Vinland Saga, Naruto, JJK),
          or writing technical blogs on Dev.to and Hashnode.
        </p>
      </div>
      </div>
    </section>
  );
}
