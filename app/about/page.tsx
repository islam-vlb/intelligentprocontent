import { COPY } from "@/lib/copy";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-heading text-3xl font-bold text-[#EAFFFB] sm:text-4xl mb-8">About IntelliPro</h1>
      {COPY.about.map((p, i) => (
        <p key={i} className="text-text-secondary leading-relaxed mb-6 text-base">{p}</p>
      ))}
      <div className="rounded-2xl border border-primary/10 bg-surface-alt p-8 mt-10">
        <h2 className="font-heading text-xl font-semibold text-[#EAFFFB] mb-3">Our Mission</h2>
        <p className="text-sm text-text-secondary leading-relaxed">Most content teams are not short on ideas — they are short on structure. Good prompts, reliable frameworks, and repeatable workflows are what separate a team that ships consistently from one that stalls after the first campaign. IntelliPro exists to give teams the operating systems they need to produce at scale.</p>
      </div>
    </div>
  );
}
