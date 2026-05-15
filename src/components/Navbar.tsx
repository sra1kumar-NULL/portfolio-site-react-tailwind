import { socialLinks } from "../data";
import { useScrollSpy } from "../hooks/useScrollSpy";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const activeId = useScrollSpy();

  return (
    <>
      <nav className="hidden lg:flex flex-col fixed top-0 right-0 h-screen w-64 px-8 py-10 z-50 bg-zinc-950/70 backdrop-blur-xl border-l border-zinc-800/40">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-yellow-500/40 ring-offset-2 ring-offset-zinc-950 animate-glow-pulse">
              <img
                src="/avatar.jpg"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-base font-bold text-zinc-100">
            Sravan Kumar{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Velangi
            </span>
          </h3>
          <p className="text-xs text-zinc-500 mt-0.5">Frontend Engineer @ Razorpay</p>
        </div>

        <div className="wings-divider my-6" />

        <ul className="flex flex-col gap-1.5">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-yellow-400 bg-yellow-500/10 border-l-2 border-yellow-500"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/30 border-l-2 border-transparent"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto pt-6 border-t border-zinc-800/40">
          <div className="flex justify-center gap-4">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-yellow-400 transition-colors" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-yellow-400 transition-colors" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-yellow-400 transition-colors" title="Twitter/X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={socialLinks.devto} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-yellow-400 transition-colors" title="Dev.to">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.826 10.083a.564.564 0 00.118-.019.718.718 0 00.375-.288.826.826 0 00.137-.507.808.808 0 00-.137-.493.718.718 0 00-.375-.288.686.686 0 00-.118-.019H6.53v1.614zm-2.3 3.66a.87.87 0 01.026-.051.47.47 0 01.075-.09.682.682 0 01.387-.176h.038a.857.857 0 01.542.253.923.923 0 01.246.657.968.968 0 01-.143.554.713.713 0 01-.383.285.907.907 0 01-.176.03h-.04a.827.827 0 01-.373-.126.754.754 0 01-.257-.334.984.984 0 01-.072-.438 1.07 1.07 0 01.107-.465zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-9.054-3.72h-2.267v5.535a1.573 1.573 0 01-.177.666.9.9 0 01-.405.366 1.103 1.103 0 01-.524.127.824.824 0 01-.472-.133.926.926 0 01-.313-.384 1.355 1.355 0 01-.113-.571V8.28H8.388V12.2a3.38 3.38 0 00.175 1.11 2.143 2.143 0 00.522.83 2.326 2.326 0 00.918.517 3.817 3.817 0 001.36.14 3.023 3.023 0 001.026-.192 2.072 2.072 0 00.78-.55 2.468 2.468 0 00.499-.899 3.823 3.823 0 00.175-1.24v-3.56zm3.05 2.414c.304-.346.456-.778.456-1.296 0-.373-.088-.694-.264-.964a1.821 1.821 0 00-.711-.607 2.136 2.136 0 00-.987-.216h-2.618v7.345h1.404v-2.86h.884l1.082 2.86h1.56l-1.23-2.86a1.7 1.7 0 00.424-.402z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-800/40 px-4 py-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs py-2 px-3 rounded-lg transition-all ${
                  isActive ? "text-yellow-400 bg-yellow-500/10" : "text-zinc-500"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
