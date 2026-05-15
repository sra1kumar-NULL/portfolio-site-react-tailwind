import { testimonial } from "../data";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-0">
      <h2 className="text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-10">
        Testimonials
      </h2>
      <div className="max-w-xl p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
        <svg className="w-6 h-6 text-yellow-700 mb-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/>
        </svg>
        <p className="text-sm text-zinc-400 leading-relaxed italic">
          "{testimonial.quote}"
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-yellow-600/20 border border-yellow-500/30 flex items-center justify-center text-xs font-semibold text-yellow-300">
            {testimonial.author.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-200">{testimonial.author}</p>
            <p className="text-xs text-zinc-500">{testimonial.role} · {testimonial.relation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
