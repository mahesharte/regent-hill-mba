import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mba.jpg";
import skylineImg from "@/assets/london-skyline.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import cohortImg from "@/assets/cohort.jpg";
import {
  MapPin,
  GraduationCap,
  Globe2,
  Briefcase,
  Sparkles,
  Calendar,
  PoundSterling,
  Clock,
  Users,
  ArrowRight,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MBA in London — Regent Hill London | 1-Year Global MBA" },
      {
        name: "description",
        content:
          "A 1-year transformational Global MBA in London. University of Greater Manchester degree. September 2026 intake open. £25,000 tuition. Stanford, WEF & RTX partnerships.",
      },
      { property: "og:title", content: "MBA in London — Regent Hill London" },
      {
        property: "og:description",
        content: "1-Year Transformational Global MBA Programme — London Campus. Apply for September 2026.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <WhyChoose />
      <Programme />
      <SocialProof />
      <LeadForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ───────────────────────── Header ───────────────────────── */
function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-white">
          <div className="h-10 w-10 rounded-sm border border-gold/70 flex items-center justify-center">
            <span className="font-display text-gold text-xl leading-none">R</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide">Regent Hill</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">London</div>
          </div>
        </a>
        <a
          href="#apply"
          className="inline-flex items-center gap-2 bg-gold text-navy-deep px-5 py-2.5 text-sm font-medium hover:bg-gold-soft transition-colors"
        >
          Apply Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-end overflow-hidden bg-navy-deep">
      <img
        src={heroImg}
        alt="International MBA students with the London skyline"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pb-24 pt-40 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.3em]">
              September 2026 Intake Open
            </span>
          </div>
          <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance">
            MBA in London
            <span className="block text-gold-soft italic font-light mt-2">Regent Hill London</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            A 1-Year Transformational Global MBA Programme — designed for the next generation of
            international business leaders.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-3xl">
            {[
              { label: "Awarding Body", value: "Univ. of Greater Manchester" },
              { label: "Campus", value: "London, UK" },
              { label: "Next Intake", value: "September 2026" },
              { label: "Network", value: "Global Industry" },
            ].map((item) => (
              <div key={item.label} className="bg-navy-deep/80 backdrop-blur-sm p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">
                  {item.label}
                </div>
                <div className="text-white text-sm font-medium leading-snug">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-gold text-navy-deep px-7 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gold-soft transition-colors"
            >
              Begin Your Application <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#programme"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-4 text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-colors"
            >
              Explore the Programme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Trust Bar ───────────────────────── */
function TrustBar() {
  const partners = [
    "University of Greater Manchester",
    "Stanford Online",
    "World Economic Forum",
    "RTX",
    "India Global Forum",
    "JA Worldwide",
  ];
  return (
    <section className="bg-ivory border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
          In Partnership With
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6">
          {partners.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center text-center text-navy text-sm font-display tracking-wide opacity-80 hover:opacity-100 transition-opacity"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Why Choose ───────────────────────── */
function WhyChoose() {
  const items = [
    {
      icon: MapPin,
      title: "London Business Hub",
      body: "Study at the heart of the world's leading financial capital, surrounded by Fortune 500 headquarters and unicorn startups.",
    },
    {
      icon: GraduationCap,
      title: "Stanford Partnership",
      body: "Access curated executive content and learning experiences in partnership with Stanford Online.",
    },
    {
      icon: Briefcase,
      title: "RTX Leadership Programme",
      body: "Industry-grade leadership immersion delivered with RTX, one of the world's largest aerospace and defence groups.",
    },
    {
      icon: Globe2,
      title: "World Economic Forum",
      body: "Engage with global thought leaders and policy frameworks shaping the future of business.",
    },
    {
      icon: Sparkles,
      title: "Entrepreneurial Cohort",
      body: "Join an international cohort of founders, operators and rising executives from 30+ countries.",
    },
  ];
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Why Regent Hill</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-navy text-balance">
            A premium MBA — engineered for global leadership.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group bg-background p-10 hover:bg-ivory transition-colors"
            >
              <div className="h-12 w-12 border border-gold/60 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-navy mb-3">{title}</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{body}</p>
            </div>
          ))}
          <div className="bg-navy-deep p-10 flex flex-col justify-between min-h-[260px]">
            <Quote className="h-6 w-6 text-gold" />
            <p className="font-display text-xl text-white italic leading-snug mt-6">
              "An MBA designed for those who refuse to wait their turn."
            </p>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-soft mt-6">
              — Programme Director
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Programme Overview ───────────────────────── */
function Programme() {
  const cards = [
    { icon: Clock, label: "Duration", value: "1 Year" },
    { icon: MapPin, label: "Location", value: "London, UK" },
    { icon: PoundSterling, label: "Tuition", value: "£25,000" },
    { icon: Calendar, label: "Intakes", value: "Sep / Jan / Apr" },
    { icon: Globe2, label: "Experience", value: "Global MBA" },
  ];
  return (
    <section id="programme" className="bg-ivory py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">
                Programme Overview
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-navy text-balance">
              One transformational year. A lifetime of advantage.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            The Regent Hill London MBA compresses the depth of a traditional programme into twelve
            intensive months — combining academic rigour, global immersion, and direct access to
            industry partners.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
          {cards.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-background p-8 text-center">
              <Icon className="h-6 w-6 text-gold mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                {label}
              </div>
              <div className="font-display text-2xl text-navy">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Social Proof ───────────────────────── */
function SocialProof() {
  const students = [
    {
      img: student1,
      name: "Ananya Sharma",
      role: "Strategy Consultant, McKinsey & Co.",
      quote:
        "Regent Hill gave me the global perspective and London network I needed to pivot into top-tier consulting.",
    },
    {
      img: student2,
      name: "David Okonkwo",
      role: "Founder, Lagos FinTech Ventures",
      quote:
        "The entrepreneurial cohort and WEF exposure shaped how I think about building across borders.",
    },
    {
      img: student3,
      name: "Mei Lin",
      role: "Product Lead, Revolut",
      quote:
        "The RTX leadership immersion was unlike anything I expected — a true accelerator for senior roles.",
    },
  ];
  const faculty = [
    {
      img: faculty1,
      name: "Prof. James Whitfield",
      role: "Chair, Global Strategy",
    },
    {
      img: faculty2,
      name: "Dr. Helena Voss",
      role: "Director, Leadership & Innovation",
    },
  ];
  const stats = [
    { v: "92%", l: "Career outcomes within 6 months" },
    { v: "£68k", l: "Average post-MBA salary" },
    { v: "30+", l: "Nationalities in each cohort" },
    { v: "150+", l: "Hiring partners worldwide" },
  ];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              The Regent Hill Community
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-navy text-balance">
            Stories, faculty and outcomes that define the cohort.
          </h2>
        </div>

        {/* Student stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {students.map((s) => (
            <article key={s.name} className="bg-ivory">
              <img
                src={s.img}
                alt={s.name}
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="p-7">
                <Quote className="h-5 w-5 text-gold mb-4" />
                <p className="font-display text-lg text-navy leading-snug italic">"{s.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-medium text-navy">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-navy-deep py-14 px-6 lg:px-12 mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-5xl text-gold mb-3">{s.v}</div>
                <div className="text-sm text-white/70 max-w-[180px] mx-auto">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty + cohort */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <img
              src={cohortImg}
              alt="International MBA cohort collaborating"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1600}
              height={1000}
            />
          </div>
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Users className="h-4 w-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Faculty</span>
            </div>
            <h3 className="font-display text-3xl text-navy mb-8">Taught by practitioners.</h3>
            <div className="space-y-6">
              {faculty.map((f) => (
                <div key={f.name} className="flex items-center gap-5">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="h-20 w-20 object-cover"
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                  <div>
                    <div className="font-display text-xl text-navy">{f.name}</div>
                    <div className="text-sm text-muted-foreground">{f.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Lead Form ───────────────────────── */
function LeadForm() {
  return (
    <section id="apply" className="bg-ivory py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Admissions</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-navy text-balance">
            Begin your journey to Regent Hill London.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Speak with our admissions team to discuss eligibility, scholarships, and how the Global
            MBA aligns with your ambitions.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="#form"
              className="flex items-center justify-between border-l-2 border-gold bg-background px-6 py-5 hover:bg-navy-deep hover:text-white group transition-colors"
            >
              <span className="font-display text-lg">Apply Now</span>
              <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#form"
              className="flex items-center justify-between border-l-2 border-gold bg-background px-6 py-5 hover:bg-navy-deep hover:text-white group transition-colors"
            >
              <span className="font-display text-lg">Request Prospectus</span>
              <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#form"
              className="flex items-center justify-between border-l-2 border-gold bg-background px-6 py-5 hover:bg-navy-deep hover:text-white group transition-colors"
            >
              <span className="font-display text-lg">Book Free Consultation</span>
              <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <form
          id="form"
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-7 bg-navy-deep p-10 lg:p-14 text-white"
        >
          <h3 className="font-display text-2xl mb-2">Admissions Enquiry</h3>
          <p className="text-white/60 text-sm mb-10">
            We respond within one working day. All conversations are confidential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Full Name" type="text" placeholder="Jane Doe" />
            <Field label="Email Address" type="email" placeholder="jane@email.com" />
            <Field label="Phone (with code)" type="tel" placeholder="+44 ..." />
            <Field label="Country of Residence" type="text" placeholder="United Kingdom" />
            <div className="md:col-span-2">
              <label className="block text-[11px] uppercase tracking-[0.25em] text-gold-soft mb-2">
                Preferred Intake
              </label>
              <select className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-gold">
                <option className="text-navy">September 2026</option>
                <option className="text-navy">January 2027</option>
                <option className="text-navy">April 2027</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-[11px] uppercase tracking-[0.25em] text-gold-soft mb-2">
                Tell us about your goals
              </label>
              <textarea
                rows={4}
                placeholder="Briefly share your background and aspirations…"
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 inline-flex items-center gap-2 bg-gold text-navy-deep px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gold-soft transition-colors"
          >
            Submit Enquiry <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.25em] text-gold-soft mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
      />
    </div>
  );
}

/* ───────────────────────── Final CTA ───────────────────────── */
function FinalCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <img
        src={skylineImg}
        alt="London skyline at night"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-navy-deep/75" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10 py-32 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Apply for September 2026</span>
          <div className="h-px w-12 bg-gold" />
        </div>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] text-balance">
          Your Global MBA Journey
          <span className="block text-gold-soft italic font-light mt-2">Starts in London.</span>
        </h2>
        <p className="mt-8 text-white/70 max-w-xl mx-auto">
          Limited seats. Rolling admissions. Speak with the Regent Hill admissions team today.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-gold text-navy-deep px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gold-soft transition-colors"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-colors"
          >
            Request Prospectus
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 text-white mb-4">
            <div className="h-10 w-10 rounded-sm border border-gold/70 flex items-center justify-center">
              <span className="font-display text-gold text-xl leading-none">R</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide">Regent Hill</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">London</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            A premium international business school delivering the 1-Year Global MBA in
            partnership with the University of Greater Manchester.
          </p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-gold mb-4">Campus</div>
          <p className="text-sm leading-relaxed">
            Regent Hill London Campus
            <br />
            Central London, United Kingdom
          </p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-gold mb-4">Admissions</div>
          <p className="text-sm leading-relaxed">
            admissions@regenthill.london
            <br />
            +44 (0)20 0000 0000
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Regent Hill London. All rights reserved.</div>
          <div className="font-display italic text-gold-soft">Crafted for global leaders.</div>
        </div>
      </div>
    </footer>
  );
}
