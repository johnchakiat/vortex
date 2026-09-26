"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  Fan,
  Flame,
  Lightbulb,
  RadioTower,
  ShieldCheck,
  Thermometer,
  Zap,
} from "lucide-react";



/* =========================================================
   HERO
========================================================= */

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Busbar & Electrical Maintenance",
    title: "Keeping power systems running.",
    description:
      "Specialist busbar and electrical maintenance solutions designed to improve reliability, reduce downtime and keep critical systems operating safely.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Electrical Reliability",
    title: "Power distribution you can depend on.",
    description:
      "From inspection and testing to repair and refurbishment, DeltaCare helps maintain the performance of essential electrical infrastructure.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Inspection / Testing / Repair",
    title: "Detect problems before they become failures.",
    description:
      "Our maintenance approach combines technical inspection, testing and practical fault rectification to protect electrical systems and business continuity.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Complete Electrical Support",
    title: "Built around reliability.",
    description:
      "Supporting busbar, switchgear, transformers, HVAC and testing requirements with focused technical service and responsive maintenance support.",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Busduct / Busbar Maintenance",
    icon: Zap,
    image:
      "https://www.apsensing.com/uploads/media/1440x640/02/652-Key_visual_Bus-Duct-Systems_LowRes.jpg?v=1-7",
    description:
      "Inspection, maintenance, repair, testing and modification of busbar trunking systems, including tap-offs, joints and associated components.",
  },
  {
    number: "02",
    title: "Switchgear Maintenance",
    icon: ShieldCheck,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhB06En14oJkxbZfB7PyZylz3c9ejBQcPMhqGQaO5-L7-MHZ9nbdvHH2o&s=10",
    description:
      "Maintenance and testing of switchgear panels including ACB, VFD, MCCB, capacitor banks and related electrical equipment.",
  },
  {
    number: "03",
    title: "HVAC Maintenance",
    icon: Fan,
    image:
      "https://caddcentre.com/blog/wp-content/uploads/2018/08/HVAC-2.jpg",
    description:
      "Preventive, corrective and emergency HVAC maintenance focused on system performance, efficiency and dependable operation.",
  },
  {
    number: "04",
    title: "Transformer Maintenance",
    icon: Thermometer,
    image:
      "https://vietnamtransformer.com/wp-content/uploads/2025/11/Essential-Maintenance-Tips-for-Transformers_1762943354_P1cCYXKR.jpg",
    description:
      "Transformer inspection, testing, oil processing, diagnostics and maintenance services designed to support long-term reliability.",
  },
  {
    number: "05",
    title: "Aircraft Warning Lights",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85",
    description:
      "Installation, inspection, maintenance and replacement of aircraft warning and obstruction lighting systems for tall structures.",
  },
  {
    number: "06",
    title: "Testing & Commissioning",
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
    description:
      "Electrical testing and commissioning for busducts, panels, switchgear, transformers and associated electrical systems.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  /* =========================================================
     HERO AUTO PLAY
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#07111f] text-[#172033]">


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-y-[10px] border-[#07111f]">
        <div className="relative h-[72vh] min-h-[650px] w-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/90 via-[#07111f]/55 to-[#07111f]/20" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/75 via-transparent to-[#07111f]/20" />

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: "70px 70px",
                }}
              />
            </div>
          ))}

          <div className="vortex-container relative flex h-full items-center">
            <div className="max-w-4xl pt-16 text-white sm:pt-20 lg:pt-24">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-14 bg-[#ffbd00]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffbd00]">
                  {heroSlides[activeSlide].eyebrow}
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                {heroSlides[activeSlide].title}
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                {heroSlides[activeSlide].description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="group inline-flex items-center gap-3 bg-[#0878df] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#0759a5]"
                >
                  Explore services

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#about"
                  className="group inline-flex items-center gap-3 border border-white/40 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#172033]"
                >
                  Discover DeltaCare

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0">
            <div className="vortex-container flex items-end justify-between gap-6">
              <div className="flex items-center gap-3">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-1 transition-all duration-500 ${index === activeSlide
                      ? "w-12 bg-[#ffbd00]"
                      : "w-6 bg-white/40 hover:bg-white/70"
                      }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-white/70">
                  {String(activeSlide + 1).padStart(2, "0")} /{" "}
                  {String(heroSlides.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={previousSlide}
                  className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:bg-white hover:text-[#172033]"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:bg-white hover:text-[#172033]"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}

      <section
        id="about"
        className="relative overflow-hidden bg-white pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(8,120,223,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(8,120,223,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="vortex-container relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#0878df]" />

                <span className="vortex-label">Who We Are</span>
              </div>

              <h2 className="max-w-2xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-[#172033] sm:text-6xl lg:text-7xl">
                Greetings from
                <br />
                <span className="text-[#0878df]">DeltaCare.</span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-2xl text-lg leading-8 text-[#667085] sm:text-xl">
                DeltaCare provides specialist maintenance and technical support
                for electrical infrastructure, with a strong focus on busbar
                and busduct systems. Our approach is built around safety,
                reliability, system performance and reducing unnecessary
                downtime.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[520px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=85"
                alt="Electrical maintenance and engineering"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
                <div>
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                    Electrical Maintenance
                  </div>

                  <div className="text-2xl font-bold sm:text-3xl">
                    Reliability starts with prevention.
                  </div>
                </div>

                <div className="hidden border border-white/30 p-3 sm:block">
                  <Zap size={25} />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-[#dfe7f0] bg-[#f5f8fc] p-8 sm:p-10">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="vortex-label">Our Approach</span>

                  <span className="font-mono text-xs text-[#98a2b3]">
                    DTC / 01
                  </span>
                </div>

                <h3 className="max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] text-[#172033] sm:text-4xl">
                  Maintenance that works beyond the checklist.
                </h3>

                <p className="mt-6 text-base leading-8 text-[#667085]">
                  We focus on identifying potential issues, maintaining
                  electrical equipment correctly and restoring systems quickly
                  when faults occur.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-px bg-[#dfe7f0]">
                {[
                  ["01", "Inspect"],
                  ["02", "Maintain"],
                  ["03", "Test"],
                  ["04", "Restore"],
                ].map(([number, label]) => (
                  <div key={number} className="bg-[#f5f8fc] p-5">
                    <div className="font-mono text-xs text-[#0878df]">
                      {number}
                    </div>

                    <div className="mt-3 text-sm font-bold uppercase tracking-[0.1em] text-[#172033]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid border border-[#dfe7f0] bg-white sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Inspection",
                icon: ClipboardCheck,
              },
              {
                number: "02",
                title: "Maintenance",
                icon: ShieldCheck,
              },
              {
                number: "03",
                title: "Testing",
                icon: Zap,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group border-b border-[#dfe7f0] p-6 transition hover:bg-[#f5f8fc] sm:border-b-0 sm:border-r last:border-r-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#98a2b3]">
                      {item.number}
                    </span>

                    <Icon
                      size={19}
                      className="text-[#0878df] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="mt-8 text-xl font-bold text-[#172033]">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
    OUR SOLUTIONS
========================================================= */}

      <section
        id="solutions"
        className="relative overflow-hidden bg-[#07111f] py-20 text-white sm:py-24 lg:py-32"
      >
        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
      `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#0878df]/10 blur-[140px]" />

        <div className="vortex-container relative">

          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#ffbd00]" />

                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                  Our Solutions
                </span>
              </div>

              <h2 className="max-w-4xl text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Power systems
                <br />
                <span className="text-[#0878df]">need protection.</span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-white/55 sm:text-lg">
                Every building depends on electrical infrastructure working
                continuously. DeltaCare provides maintenance solutions designed
                around reliability, safety and long-term performance.
              </p>
            </div>
          </div>

          {/* Solution list */}
          <div className="mt-16 border-t border-white/10">

            {[
              {
                number: "01",
                title: "Industrial",
                subtitle: "Critical power infrastructure",
                description:
                  "Maintenance and technical support for industrial facilities where electrical reliability and continuity are essential.",
                tags: ["Busbar", "Switchgear", "Transformers"],
              },
              {
                number: "02",
                title: "Commercial",
                subtitle: "Power for occupied buildings",
                description:
                  "Specialist electrical maintenance for offices, towers, retail developments and commercial facilities.",
                tags: ["Inspection", "Testing", "Maintenance"],
              },
              {
                number: "03",
                title: "Residential",
                subtitle: "Reliable building infrastructure",
                description:
                  "Electrical maintenance and support for residential and mixed-use developments, helping keep essential systems operating safely.",
                tags: ["Busduct", "Diagnostics", "Repair"],
              },
            ].map((solution) => (
              <div
                key={solution.number}
                className="group relative border-b border-white/10 py-9 transition-all duration-500 hover:bg-white/[0.025] sm:py-11 lg:py-12"
              >
                <div className="grid gap-7 lg:grid-cols-[90px_1fr_1.1fr_auto] lg:items-center lg:gap-10">

                  {/* Number */}
                  <div className="font-mono text-sm font-bold tracking-[0.15em] text-white/25 transition-colors duration-300 group-hover:text-[#ffbd00]">
                    {solution.number}
                  </div>

                  {/* Main title */}
                  <div>
                    <div className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0878df]">
                      {solution.subtitle}
                    </div>

                    <h3 className="text-4xl font-bold tracking-[-0.04em] text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
                      {solution.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                      {solution.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white/35"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 text-white/25 transition-all duration-500 group-hover:border-[#0878df] group-hover:bg-[#0878df] group-hover:text-white">
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0878df] transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-1">
                <span className="h-2 w-2 rounded-full bg-[#0878df]" />
                <span className="h-2 w-2 rounded-full bg-[#ffbd00]" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
              </div>

              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                Maintenance · Testing · Reliability
              </span>
            </div>

            <a
              href="/services"
              className="group flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#0878df]"
            >
              Explore our services

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section
        id="services"
        className="relative overflow-hidden bg-[#f5f8fc] pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-36"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(8,120,223,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(8,120,223,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="vortex-container relative">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-[#0878df]" />

                <span className="vortex-label">Our Services</span>
              </div>

              <h2 className="max-w-2xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-[#172033] sm:text-6xl lg:text-7xl">
                Electrical
                <br />
                <span className="text-[#0878df]">maintenance.</span>
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#667085] lg:ml-auto">
              Specialist maintenance and technical services supporting
              electrical systems, equipment and critical infrastructure.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const large = index === 0 || index === 3;

              return (
                <a
                  key={service.title}
                  href="/services"
                  className={`group relative overflow-hidden border border-[#dce5ef] bg-white ${large ? "lg:col-span-7" : "lg:col-span-5"
                    }`}
                >
                  <div
                    className={`relative ${large ? "h-[430px]" : "h-[390px]"
                      } overflow-hidden`}
                  >
                    <img
                      src={service.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-[#07111f]/25 to-transparent" />

                    <div className="absolute inset-0 bg-[#0878df]/0 transition duration-500 group-hover:bg-[#0878df]/15" />

                    <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center border border-white/40 bg-white/10 text-white backdrop-blur-sm">
                      <Icon size={19} />
                    </div>

                    <div className="absolute right-6 top-6 font-mono text-xs font-bold text-white/70">
                      {service.number}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                      <h3 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                        {service.title}
                      </h3>

                      <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-32 group-hover:opacity-100">
                        <p className="max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#ffbd00]">
                        Explore service

                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY PARTNER WITH US
      ========================================================= */}

      <section
        id="why-partner"
        className="relative overflow-hidden bg-[#07111f] py-20 text-white sm:py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0878df]/10 blur-[120px]" />

        <div className="vortex-container relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-[#ffbd00]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                  Why Partner With Us
                </span>
              </div>

              <h2 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Maintenance expertise
                <br />
                <span className="text-[#0878df]">that protects.</span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                DeltaCare focuses on practical maintenance, inspection and
                technical support designed to keep electrical infrastructure
                safe, dependable and operational.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Busbar Specialists",
                description:
                  "Focused technical expertise across busduct and busbar systems, from inspection and maintenance to repair and modification.",
                accent: "blue",
              },
              {
                number: "02",
                title: "Preventive Maintenance",
                description:
                  "Regular inspection and maintenance designed to identify potential problems before they become costly failures.",
                accent: "gold",
              },
              {
                number: "03",
                title: "Testing & Diagnostics",
                description:
                  "Technical testing and diagnostic services supporting electrical system performance, safety and reliability.",
                accent: "blue",
              },
              {
                number: "04",
                title: "Reduced Downtime",
                description:
                  "Practical fault finding, repair and maintenance support focused on helping systems return to reliable operation.",
                accent: "gold",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative min-h-[290px] overflow-hidden bg-[#0b1929] p-7 transition-all duration-500 hover:bg-[#10243a] sm:p-8"
              >
                <div
                  className={`absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${item.accent === "gold"
                    ? "bg-[#ffbd00]"
                    : "bg-[#0878df]"
                    }`}
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-white/35">
                    {item.number}
                  </span>

                  <span
                    className={`h-2 w-2 rounded-full transition-all duration-500 group-hover:scale-150 ${item.accent === "gold"
                      ? "bg-[#ffbd00]"
                      : "bg-[#0878df]"
                      }`}
                  />
                </div>

                <h3 className="mt-12 max-w-xs font-serif text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#0878df]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-sm text-[15px] leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/65">
                  {item.description}
                </p>

                <div className="absolute bottom-7 left-7 flex items-center gap-3 sm:left-8">
                  <div
                    className={`h-px w-8 transition-all duration-500 group-hover:w-14 ${item.accent === "gold"
                      ? "bg-[#ffbd00]"
                      : "bg-[#0878df]"
                      }`}
                  />

                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    DTC / ELECTRICAL
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="absolute bottom-7 right-7 text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/70"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                  Built around reliability
                </span>

                <p className="mt-2 text-[15px] text-white/45">
                  Practical electrical maintenance for critical systems,
                  equipment and infrastructure.
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex w-fit items-center gap-3 border border-[#0878df] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#0878df]"
              >
                Discuss Your Requirements

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#07111f] py-20 text-white sm:py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="pointer-events-none absolute -left-48 top-1/3 h-[550px] w-[550px] rounded-full bg-[#0878df]/10 blur-[140px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0878df]/10 blur-[120px]" />

        <div className="vortex-container relative">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#ffbd00]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                Start a Conversation
              </span>
            </div>

            <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s keep your systems
              <br />
              <span className="text-[#0878df]">running reliably.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Tell us about your electrical maintenance requirements and our
              team can discuss the support your project needs.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <div className="border-t border-white/10">
                <div className="group border-b border-white/10 py-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbd00]">
                        Office
                      </span>

                      <p className="mt-3 text-base font-medium text-white">
                        Jamal Al Muhairi Building
                      </p>

                      <p className="mt-1 text-sm text-white/45">
                        Office 101, Al Garhoud, Dubai
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center border border-white/10 text-[#0878df] transition-all duration-300 group-hover:border-[#0878df] group-hover:bg-[#0878df] group-hover:text-white">
                      <Building2 size={16} />
                    </div>
                  </div>
                </div>

                <div className="group border-b border-white/10 py-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbd00]">
                        Phone
                      </span>

                      <a
                        href="tel:+971504242468"
                        className="mt-3 block text-base font-medium text-white transition-colors duration-300 group-hover:text-[#0878df]"
                      >
                        050 424 2468
                      </a>

                      <p className="mt-1 text-sm text-white/45">
                        Mon – Sat · 9:00am – 5:00pm
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center border border-white/10 text-[#0878df] transition-all duration-300 group-hover:border-[#0878df] group-hover:bg-[#0878df] group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                <div className="group border-b border-white/10 py-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbd00]">
                        Email
                      </span>

                      <a
                        href="mailto:info@vortexenveco.com"
                        className="mt-3 block text-base font-medium text-white transition-colors duration-300 group-hover:text-[#0878df]"
                      >
                        info@vortexenveco.com
                      </a>

                      <p className="mt-1 text-sm text-white/45">
                        Send us your project requirements
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center border border-white/10 text-[#0878df] transition-all duration-300 group-hover:border-[#0878df] group-hover:bg-[#0878df] group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-9 border border-white/10 bg-[#0b1929] p-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0878df]">
                  DTC / ELECTRICAL
                </span>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  Busbar · Switchgear · Transformers · Testing
                </p>
              </div>
            </div>

            <div className="border border-white/10 bg-[#0b1929] p-6 sm:p-8 lg:p-10">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbd00]">
                    Project Enquiry
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Tell us about your requirements
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.16em] text-white/25 sm:block">
                  DTC / 01
                </span>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/45"
                    >
                      Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      className="w-full border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#0878df] focus:ring-1 focus:ring-[#0878df]/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/45"
                    >
                      Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#0878df] focus:ring-1 focus:ring-[#0878df]/30"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/45"
                  >
                    Company
                  </label>

                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Company name"
                    className="w-full border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#0878df] focus:ring-1 focus:ring-[#0878df]/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/45"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="contact-message"
                    rows={6}
                    placeholder="Tell us about your busbar, electrical maintenance or testing requirements..."
                    className="w-full resize-none border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#0878df] focus:ring-1 focus:ring-[#0878df]/30"
                  />
                </div>

                <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                  <p className="max-w-sm text-xs leading-6 text-white/30">
                    We&apos;ll use the information provided only to respond to
                    your enquiry.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-[#0878df] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#2f9cff] hover:shadow-[0_12px_35px_rgba(8,120,223,0.25)]"
                  >
                    Send Enquiry

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}