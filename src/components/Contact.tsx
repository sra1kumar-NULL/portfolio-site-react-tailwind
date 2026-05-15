import { socialLinks } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-0 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at 70% 50%, rgba(251,191,36,0.03) 0%, transparent 50%)",
      }} />
      <div className="relative">
        <h2 className="text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-10">
          Contact
        </h2>
        <div className="max-w-lg">
          <p className="text-zinc-400 mb-6 leading-relaxed">
            Whether you have a project in mind, want to talk about anime, 
            open source, or just want to say hi — I'm always down for a conversation.
          </p>
          <a
            href={`mailto:${socialLinks.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800/60 border border-zinc-700/60 text-zinc-200 text-sm font-medium hover:bg-yellow-600/20 hover:border-yellow-500/50 hover:text-yellow-300 transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            sravansandeep163@gmail.com
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Sravan Kumar Velangi.
          </p>
          <p className="text-xs text-zinc-700">
            Built with React & Tailwind CSS  ⚔️
          </p>
        </div>
      </div>
    </section>
  );
}
