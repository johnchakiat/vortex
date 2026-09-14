"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUpDown,
  Building2,
  Droplets,
  Flame,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Phone,
  RadioTower,
  Ruler,
  Target,
  Wind,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";

/* =========================================================
   HERO
========================================================= */

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Engineering Consultancy",
    title: "Engineering the built environment.",
    description:
      "Integrated engineering consultancy across Vertical Transport, MEP and BIM — supporting projects from concept design through construction supervision.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Performance / Precision",
    title: "Designed for performance. Built for the future.",
    description:
      "Technical expertise and coordinated engineering solutions designed to improve project performance at every stage.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "End-to-End Delivery",
    title: "From concept to construction.",
    description:
      "A coordinated engineering approach connecting design intent, BIM coordination and construction requirements.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85",
    eyebrow: "Technical Excellence",
    title: "Precision behind every project.",
    description:
      "Engineering solutions built around technical accuracy, collaboration and practical project delivery.",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Vertical Transport",
    icon: ArrowUpDown,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80",
    description:
      "Vertical transportation engineering and consultancy supporting efficient, safe and coordinated movement within buildings.",
  },
  {
    number: "02",
    title: "Electrical Systems",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
    description:
      "Electrical engineering solutions coordinated with architectural, mechanical and building requirements.",
  },
  {
    number: "03",
    title: "HVAC Systems",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    description:
      "HVAC engineering focused on practical system coordination, performance and building comfort.",
  },
  {
    number: "04",
    title: "Public Health Engineering",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=80",
    description:
      "Public health engineering solutions supporting water, drainage and coordinated building services.",
  },
  {
    number: "05",
    title: "Fire Protection",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1400&q=80",
    description:
      "Fire protection engineering integrated into the wider building design and coordination process.",
  },
  {
    number: "06",
    title: "ELV Systems",
    icon: RadioTower,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    description:
      "Extra-low-voltage systems coordinated with the building's technology, communication and operational requirements.",
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    name: "David Richardson",
    role: "Engineering Manager",
    text: "Vortex Enveco Consultancy LLC demonstrated outstanding professionalism and technical capability throughout our project. Their Vertical Transport consultancy and BIM engineering solutions were extremely valuable in optimizing building performance. The team communicated effectively and provided clear technical guidance during the entire construction phase.",
  },
  {
    name: "Sarah Thompson",
    role: "Construction Manager",
    text: "Working with VEC LLC has been a great experience. Their engineering team delivered reliable back-office support from India, helping us maintain high-quality standards and meet strict project timelines. Their deep understanding of MEP and BIM coordination significantly improved project efficiency and reduced potential design conflicts.",
  },
  {
    name: "Michael Carter",
    role: "Project Director",
    text: "Vortex Enveco Consultancy LLC provided exceptional engineering consultancy for our commercial development project. Their expertise in Vertical Transport, MEP, and BIM engineering helped us streamline the design and coordination process. The team’s technical knowledge and attention to detail ensured that every stage of the project—from concept design to construction supervision—was executed efficiently and professionally.",
  },
  {
    name: "James Walker",
    role: "Technical Director",
    text: "Vortex Enveco Consultancy LLC has been a reliable engineering partner for our projects. Their strong expertise in Vertical Transport, MEP, and BIM engineering solutions helped us achieve better coordination and technical accuracy throughout the design and construction stages. The team’s proactive approach, clear communication, and commitment to quality make them a trusted consultancy for complex engineering developments.",
  },
  {
    name: "Emily Rodriguez",
    role: "Development Manager",
    text: "We were impressed by the dedication and expertise of VEC LLC. Their comprehensive engineering services and strong coordination between design and construction teams helped ensure smooth project execution. Their experience in handling complex engineering challenges makes them a reliable consultancy partner for large-scale developments.",
  },
];

const testimonialImages = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
];

/* =========================================================
   PARTNERS
========================================================= */

const partners = [
  {
    name: "Hoods of Norway",
    image: "/partners/hoods-of-norway.png",
  },
  {
    name: "Pixel Craft Collective",
    image: "/partners/pixel-craft-collective.png",
  },
  {
    name: "To The Victor",
    image: "/partners/to-the-victor.png",
  },
  {
    name: "Chicago Shoemaker",
    image: "/partners/chicago-shoemaker.png",
  },
  {
    name: "Black and Smith",
    image: "/partners/black-and-smith.png",
  },
  {
    name: "Copenhagen Clothing",
    image: "/partners/copenhagen-clothing.png",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePartner, setActivePartner] = useState(0);

  const testimonialTrackRef = useRef<HTMLDivElement>(null);

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

  /* =========================================================
     TESTIMONIAL CONTROLS
  ========================================================= */

  const goToTestimonial = (index: number) => {
    setActiveTestimonial(index);

    const track = testimonialTrackRef.current;

    if (!track) return;

    const card = track.children[index] as HTMLElement | undefined;

    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const nextTestimonial = () => {
    const next =
      activeTestimonial === testimonials.length - 1
        ? 0
        : activeTestimonial + 1;

    goToTestimonial(next);
  };

  const previousTestimonial = () => {
    const previous =
      activeTestimonial === 0
        ? testimonials.length - 1
        : activeTestimonial - 1;

    goToTestimonial(previous);
  };

  /* =========================================================
     PARTNER CONTROLS
  ========================================================= */

  const nextPartner = () => {
    setActivePartner((current) => (current + 1) % partners.length);
  };

  const previousPartner = () => {
    setActivePartner(
      (current) => (current - 1 + partners.length) % partners.length
    );
  };

  /*
    Five logos are displayed at once.
    The active index determines where the carousel starts.
  */

  const visiblePartners = Array.from({ length: 5 }, (_, offset) => {
    return partners[(activePartner + offset) % partners.length];
  });

  return (
    <main className="min-h-screen bg-white text-[#172033]">
      <Navbar />

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
                  Discover Vortex

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
                <span className="text-[#0878df]">Vortex Enveco.</span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-2xl text-lg leading-8 text-[#667085] sm:text-xl">
                Vortex Enveco Consultancy LLC is an engineering consultancy
                specializing in Vertical Transport, MEP and BIM engineering
                solutions, with a back office in India supporting projects from
                concept design through construction supervision.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[520px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85"
                alt="Modern architectural development"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
                <div>
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                    Engineering / BIM
                  </div>

                  <div className="text-2xl font-bold sm:text-3xl">
                    Integrated expertise.
                  </div>
                </div>

                <div className="hidden border border-white/30 p-3 sm:block">
                  <Building2 size={25} />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-[#dfe7f0] bg-[#f5f8fc] p-8 sm:p-10">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="vortex-label">Our approach</span>

                  <span className="font-mono text-xs text-[#98a2b3]">
                    VEC / 01
                  </span>
                </div>

                <h3 className="max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] text-[#172033] sm:text-4xl">
                  Engineering decisions that work beyond the drawing.
                </h3>

                <p className="mt-6 text-base leading-8 text-[#667085]">
                  We bring multiple engineering disciplines together through
                  coordinated design, BIM capability and practical project
                  delivery.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-px bg-[#dfe7f0]">
                {[
                  ["01", "Integrated"],
                  ["02", "LOD 500"],
                  ["03", "Global"],
                  ["04", "End-to-End"],
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
                title: "Concept",
                icon: Target,
              },
              {
                number: "02",
                title: "Design",
                icon: Ruler,
              },
              {
                number: "03",
                title: "Construction",
                icon: Building2,
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
                Engineering
                <br />
                <span className="text-[#0878df]">every layer.</span>
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#667085] lg:ml-auto">
              A coordinated suite of engineering disciplines designed to
              support complex building projects from concept through
              construction.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const large = index === 0 || index === 3;

              return (
                <article
                  key={service.title}
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
                        Explore discipline

                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}

      <section
        id="testimonials"
        className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="vortex-container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#0878df]" />

              <span className="vortex-label">Client Testimonials</span>

              <span className="h-px w-10 bg-[#0878df]" />
            </div>

            <h2 className="font-serif text-4xl font-bold tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
              Trusted by Our Clients
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#667085] sm:text-lg">
              Real feedback from professionals who have partnered with us.
              Our engineering expertise and commitment to excellence ensure
              every project is delivered with precision and reliability.
            </p>
          </div>

          <div className="relative mt-14">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={previousTestimonial}
              className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#cfd7e2] bg-white text-[#0878df] shadow-sm transition-all duration-300 hover:border-[#0878df] hover:bg-[#0878df] hover:text-white lg:flex"
            >
              <ArrowRight className="rotate-180" size={22} />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#cfd7e2] bg-white text-[#0878df] shadow-sm transition-all duration-300 hover:border-[#0878df] hover:bg-[#0878df] hover:text-white"
            >
              <ArrowRight size={22} />
            </button>

            <div
              ref={testimonialTrackRef}
              className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-4 lg:gap-12 lg:px-16"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeTestimonial;

                return (
                  <article
                    key={testimonial.name}
                    onClick={() => goToTestimonial(index)}
                    className={`min-w-[82%] cursor-pointer snap-center text-center transition-all duration-500 sm:min-w-[60%] lg:min-w-[calc((100%-6rem)/3)] lg:flex-1 ${isActive
                      ? "scale-100 opacity-100"
                      : "scale-[0.96] opacity-60 hover:opacity-90"
                      }`}
                  >
                    <div
                      className={`mx-auto flex h-[128px] w-[128px] items-center justify-center overflow-hidden rounded-full bg-[#eef3f8] transition-all duration-500 ${isActive
                        ? "border-[5px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-2 ring-[#0878df]/30"
                        : "border-[5px] border-white shadow-[0_5px_18px_rgba(0,0,0,0.08)] ring-1 ring-[#dce4ec]"
                        }`}
                    >
                      <img
                        src={testimonialImages[index]}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <h3
                      className={`mt-7 font-serif font-bold transition-colors duration-300 ${isActive
                        ? "text-2xl text-[#30343b]"
                        : "text-xl text-[#555b63]"
                        }`}
                    >
                      {testimonial.name}
                    </h3>

                    <div
                      className={`mx-auto mt-3 h-[2px] transition-all duration-300 ${isActive
                        ? "w-10 bg-[#ffbd00]"
                        : "w-7 bg-[#d8dee5]"
                        }`}
                    />

                    <p
                      className={`mx-auto mt-6 max-w-sm text-[15px] leading-7 transition-colors duration-300 sm:text-base ${isActive ? "text-[#4f5660]" : "text-[#7a818a]"
                        }`}
                    >
                      “
                      {testimonial.text.length > 190
                        ? `${testimonial.text.substring(0, 190)}...`
                        : testimonial.text}
                      ”
                    </p>

                    <div
                      className={`mt-7 text-sm transition-colors duration-300 ${isActive
                        ? "font-medium text-[#667085]"
                        : "text-[#8b929b]"
                        }`}
                    >
                      {testimonial.role}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 flex justify-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={previousTestimonial}
                className="flex h-11 w-11 items-center justify-center border border-[#d4dce5] text-[#0878df] transition hover:bg-[#0878df] hover:text-white"
              >
                <ArrowRight className="rotate-180" size={19} />
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                className="flex h-11 w-11 items-center justify-center border border-[#d4dce5] text-[#0878df] transition hover:bg-[#0878df] hover:text-white"
              >
                <ArrowRight size={19} />
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show ${testimonial.name}'s testimonial`}
                  onClick={() => goToTestimonial(index)}
                  className={`rounded-full transition-all duration-300 ${index === activeTestimonial
                    ? "h-2.5 w-7 bg-[#0878df]"
                    : "h-2.5 w-2.5 bg-[#d0d5da] hover:bg-[#0878df]/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR PARTNERS
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f1f1f1] py-16 sm:py-20">
        <div className="vortex-container">
          {/* Heading */}

          <div className="mx-auto max-w-7xl text-center">
            <span className="inline-flex rounded-full bg-[#ffbd00] px-5 py-2 font-serif text-[16px] font-bold text-black">
              Our Partners
            </span>

            <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.025em] text-black sm:text-5xl lg:text-[52px]">
              Working With Industry Leaders
            </h2>

            <p className="mx-auto mt-4 max-w-6xl text-[16px] leading-7 tracking-[0.02em] text-[#667085]">
              We are proud to work alongside reputable partners who support
              our mission of delivering innovative Vertical Transport, MEP,
              and BIM engineering solutions.
            </p>
          </div>

          {/* Carousel */}

          <div className="relative mt-8">
            {/* Arrows */}

            <div className="mb-5 flex justify-end gap-2">
              <button
                type="button"
                aria-label="Previous partners"
                onClick={previousPartner}
                className="flex h-10 w-10 items-center justify-center border border-[#bfc4c9] bg-[#f1f1f1] text-[#9aa3ab] transition-all duration-300 hover:border-[#0878df] hover:bg-white hover:text-[#0878df]"
              >
                <span className="relative -top-[1px] text-[31px] leading-none">
                  ‹
                </span>
              </button>

              <button
                type="button"
                aria-label="Next partners"
                onClick={nextPartner}
                className="flex h-10 w-10 items-center justify-center border border-[#bfc4c9] bg-[#f1f1f1] text-[#9aa3ab] transition-all duration-300 hover:border-[#0878df] hover:bg-white hover:text-[#0878df]"
              >
                <span className="relative -top-[1px] text-[31px] leading-none">
                  ›
                </span>
              </button>
            </div>

            {/* Logo Cards */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {visiblePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group flex h-[158px] items-center justify-center overflow-hidden border border-[#d9d9d9] bg-[#f7f7f7] px-8 transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-[105px] max-w-[205px] object-contain opacity-90 transition-all duration-300 group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>

            {/* Pagination */}

            <div className="mt-5 flex justify-center gap-2.5">
              {partners.map((partner, index) => (
                <button
                  key={partner.name}
                  type="button"
                  aria-label={`Show partner ${index + 1}`}
                  onClick={() => setActivePartner(index)}
                  className={`h-[14px] w-[14px] rounded-full transition-all duration-300 ${index === activePartner
                    ? "bg-[#16a085]"
                    : "bg-[#d8d8d8] hover:bg-[#bfc4c9]"
                    }`}
                />
              ))}
            </div>
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
        {/* Technical grid */}
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

        {/* Soft engineering glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0878df]/10 blur-[120px]" />

        <div className="vortex-container relative">
          {/* Heading */}
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-[#ffbd00]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                  Why Partner With Us
                </span>
              </div>

              <h2 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Engineering expertise
                <br />
                <span className="text-[#0878df]">that delivers.</span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                We combine multidisciplinary engineering expertise, advanced BIM
                capabilities and international project experience to deliver
                coordinated solutions from concept through construction.
              </p>
            </div>
          </div>

          {/* Capability cards */}
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Integrated Expertise",
                description:
                  "Vertical Transport, MEP and BIM expertise brought together under one coordinated engineering approach.",
                accent: "blue",
              },
              {
                number: "02",
                title: "BIM up to LOD 500",
                description:
                  "Advanced BIM capabilities supporting detailed coordination, documentation and construction-ready models.",
                accent: "gold",
              },
              {
                number: "03",
                title: "Multi-Sector Portfolio",
                description:
                  "Experience across diverse building sectors and complex engineering requirements.",
                accent: "blue",
              },
              {
                number: "04",
                title: "Global Delivery",
                description:
                  "A delivery model designed to support projects across locations while maintaining quality and coordination.",
                accent: "gold",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative min-h-[290px] overflow-hidden bg-[#0b1929] p-7 transition-all duration-500 hover:bg-[#10243a] sm:p-8"
              >
                {/* Top accent */}
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
                    VEC / ENGINEERING
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="absolute bottom-7 right-7 text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/70"
                />
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                  Built for complex projects
                </span>

                <p className="mt-2 text-[15px] text-white/45">
                  One coordinated approach across disciplines, teams and project
                  stages.
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex w-fit items-center gap-3 border border-[#0878df] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#0878df]"
              >
                Discuss Your Project

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
        {/* Continuing technical grid */}
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

        {/* Ambient blue glow */}
        <div className="pointer-events-none absolute -left-48 top-1/3 h-[550px] w-[550px] rounded-full bg-[#0878df]/10 blur-[140px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0878df]/10 blur-[120px]" />

        <div className="vortex-container relative">
          {/* Section heading */}
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#ffbd00]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                Start a Conversation
              </span>
            </div>

            <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s build something
              <br />
              <span className="text-[#0878df]">exceptional.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Tell us about your project and our engineering team will get back to
              you to discuss how Vortex Enveco Consultancy can support your
              requirements.
            </p>
          </div>

          {/* Contact layout */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            {/* Contact information */}
            <div>
              <div className="border-t border-white/10">
                {/* Office */}
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

                {/* Phone */}
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

                {/* Email */}
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

              {/* Engineering statement */}
              <div className="mt-9 border border-white/10 bg-[#0b1929] p-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0878df]">
                  VEC / ENGINEERING
                </span>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  Vertical Transport · MEP · BIM
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="border border-white/10 bg-[#0b1929] p-6 sm:p-8 lg:p-10">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffbd00]">
                    Project Enquiry
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Tell us about your project
                  </h3>
                </div>

                <span className="hidden font-mono text-[10px] tracking-[0.16em] text-white/25 sm:block">
                  VEC / 01
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
                    placeholder="Tell us about your project, requirements or engineering needs..."
                    className="w-full resize-none border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#0878df] focus:ring-1 focus:ring-[#0878df]/30"
                  />
                </div>

                <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                  <p className="max-w-sm text-xs leading-6 text-white/30">
                    We&apos;ll use the information provided only to respond to your
                    enquiry.
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

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="relative overflow-hidden bg-black text-white">
        {/* subtle engineering grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="vortex-container relative">
          <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.7fr_0.95fr_1.25fr] lg:gap-10">

            {/* About */}
            <div className="max-w-md">
              <a
                href="/"
                className="group inline-block"
                aria-label="Vortex Enveco home"
              >
                <div className="relative">
                  <img
                    src="/vortex-logo.png"
                    alt="Vortex Enveco Consultancy LLC"
                    className="h-auto w-[245px] object-contain"
                  />

                  <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-[#ffbd00] transition-all duration-500 group-hover:w-[88%]" />
                </div>
              </a>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[#ffbd00]" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                  Engineering Consultancy
                </span>
              </div>

              <p className="mt-5 max-w-sm text-[14px] leading-7 text-white/40">
                VEC LLC is an engineering consultancy specialising in Vertical
                Transport, MEP and BIM engineering solutions. With extensive
                experience, we provide comprehensive engineering services from
                concept design to construction supervision.
              </p>

              <div className="mt-7 flex items-center gap-2">
                {[
                  ["Facebook", "f"],
                  ["X", "X"],
                  ["YouTube", "YT"],
                  ["Instagram", "IG"],
                ].map(([label, short]) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-9 min-w-9 items-center justify-center border border-white/10 px-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/40 transition-all duration-300 hover:border-[#0878df] hover:bg-[#0878df] hover:text-white"
                  >
                    {short}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-5 w-[2px] bg-[#ffbd00]" />

                <h3 className="font-serif text-lg font-bold text-white">
                  Quick Links
                </h3>
              </div>

              <nav className="flex flex-col gap-4">
                {[
                  ["Home", "/"],
                  ["About Us", "#about"],
                  ["Our Blog", "#blog"],
                  ["Our Services", "#services"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex w-fit items-center gap-2 text-[14px] text-white/40 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#0878df] transition-all duration-300 group-hover:w-4" />
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-5 w-[2px] bg-[#ffbd00]" />

                <h3 className="font-serif text-lg font-bold text-white">
                  Services
                </h3>
              </div>

              <nav className="flex flex-col gap-4">
                {[
                  "Vertical Transport",
                  "Electrical Systems",
                  "HVAC Systems",
                  "Public Health Eng",
                  "Fire Protection",
                  "ELV Systems",
                ].map((service) => (
                  <a
                    key={service}
                    href="#services"
                    className="group flex w-fit items-center gap-2 text-[14px] text-white/40 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#0878df] transition-all duration-300 group-hover:w-4" />
                    {service}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-5 w-[2px] bg-[#ffbd00]" />

                <h3 className="font-serif text-lg font-bold text-white">
                  Get In Touch
                </h3>
              </div>

              <div className="space-y-3">

                {/* Phone */}
                <a
                  href="tel:+971504242468"
                  className="group flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#0878df]/50 hover:bg-[#0878df]/[0.08]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0878df] text-white transition-all duration-300 group-hover:bg-[#ffbd00] group-hover:text-black">
                    <Phone size={17} />
                  </div>

                  <div className="min-w-0">
                    <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#ffbd00]">
                      Phone
                    </span>

                    <span className="mt-1 block text-[14px] text-white/70">
                      050 424 2468
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="group flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#0878df]/50 hover:bg-[#0878df]/[0.08]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0878df] text-white transition-all duration-300 group-hover:bg-[#ffbd00] group-hover:text-black">
                    <MapPin size={17} />
                  </div>

                  <div className="min-w-0">
                    <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#ffbd00]">
                      Office
                    </span>

                    <span className="mt-1 block text-[13px] leading-5 text-white/70">
                      Jamal Al Muhairi Building,
                      <br />
                      Office 101, Al Garhoud, Dubai
                    </span>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:info@vortexenveco.com"
                  className="group flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#0878df]/50 hover:bg-[#0878df]/[0.08]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0878df] text-white transition-all duration-300 group-hover:bg-[#ffbd00] group-hover:text-black">
                    <Mail size={17} />
                  </div>

                  <div className="min-w-0">
                    <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#ffbd00]">
                      Email
                    </span>

                    <span className="mt-1 block break-all text-[13px] text-white/70">
                      info@vortexenveco.com
                    </span>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="h-px w-full bg-white/10" />

          {/* Copyright */}
          <div className="flex flex-col justify-between gap-5 py-6 sm:flex-row sm:items-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30">
              © 2026 Vortexenveco. All Rights Reserved
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 transition-colors hover:text-white"
              >
                Privacy
              </a>

              <span className="h-3 w-px bg-white/10" />

              <a
                href="#"
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 transition-colors hover:text-white"
              >
                Terms
              </a>

              <span className="h-3 w-px bg-white/10" />

              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#0878df]">
                VEC / DUBAI
              </span>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/971504242468"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Vortex Enveco on WhatsApp"
          className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.3)]"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 fill-current"
            aria-hidden="true"
          >
            <path d="M19.11 17.21c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.87-2.11-.23-.55-.46-.48-.64-.49h-.54c-.19 0-.5.07-.76.35-.26.28-1 1-.1 2.43.9 1.43 1.72 2.48 3.04 3.1 1.31.63 1.31.42 1.55.39.24-.02.77-.31.88-.61.11-.3.11-.55.08-.61-.03-.05-.1-.08-.21-.14z" />

            <path d="M16 3a13 13 0 0 0-11.25 19.5L3 29l6.66-1.7A13 13 0 1 0 16 3zm0 23.7c-2.1 0-4.15-.56-5.95-1.62l-.43-.25-3.95 1.01 1.05-3.84-.28-.45A10.7 10.7 0 1 1 16 26.7z" />
          </svg>
        </a>
      </footer>
    </main>
  );
}