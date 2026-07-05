import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-20 pb-24 lg:pt-32 lg:pb-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_50%)] opacity-[0.12]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-accent)_0%,_transparent_50%)] opacity-[0.1]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary mb-6 backdrop-blur-sm animate-fade-in uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Intelligent Content Operating Systems
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#EAFFFB] leading-tight animate-slide-up">
              Intelligent content systems, engineered for{" "}
              <span className="relative inline-block text-primary">
                scale
                <span className="absolute left-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-primary to-accent animate-underline-grow" />
              </span>
              .
            </h1>

            <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Structured prompt systems, content frameworks, and operations kits that turn scattered content work into a repeatable production system.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-bg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Systems
                <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl border border-primary/20 bg-white/[0.03] px-8 py-4 text-base font-semibold text-[#EAFFFB] hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">16</div>
                <div className="text-xs text-text-muted mt-1">Digital Systems</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-xs text-text-muted mt-1">Product Lines</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Instant</div>
                <div className="text-xs text-text-muted mt-1">Digital Delivery</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl blur-2xl animate-pulse-slow" />
              <div className="relative bg-navy/10 backdrop-blur-xl border border-primary/15 rounded-3xl p-8 shadow-2xl animate-float">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-navy-light border border-primary/30" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-primary/10 rounded-lg w-3/4" />
                  <div className="h-4 bg-primary/10 rounded-lg w-1/2" />
                  <div className="h-32 bg-gradient-to-br from-primary/15 to-accent/10 rounded-2xl border border-primary/20 relative overflow-hidden">
                    <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(0,229,204,0.6)]" />
                    <div className="absolute top-3 left-8 h-2 w-16 rounded bg-primary/30" />
                    <div className="absolute bottom-4 left-3 right-3 h-2 rounded bg-primary/20" />
                    <div className="absolute bottom-8 left-3 w-2/3 h-2 rounded bg-primary/20" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-white/[0.02] rounded-xl border border-primary/10" />
                    <div className="h-20 bg-white/[0.02] rounded-xl border border-primary/10" />
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-surface border border-primary/20 rounded-2xl shadow-xl shadow-primary/10 p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#EAFFFB]">System Deployed</p>
                    <p className="text-xs text-text-muted">Ready to use</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-surface border border-primary/20 rounded-2xl shadow-xl shadow-primary/10 p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#EAFFFB]">Structured</p>
                    <p className="text-xs text-text-muted">Repeatable process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
