import { blogPosts } from "../data";

export default function Writing() {
  return (
    <section id="writing" className="py-24 px-6 lg:px-0">
      <h2 className="text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-10">
        Writing
      </h2>
      <div className="space-y-3">
        {blogPosts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="group block p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 hover:border-yellow-600/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-medium text-yellow-400/80">{post.platform}</span>
              <span className="text-xs text-zinc-600">{post.year}</span>
            </div>
            <h3 className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">
              {post.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
