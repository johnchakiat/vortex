"use client";

import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Building2,
    ChevronRight,
    MapPin,
    Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const projects = [
    {
        number: "01",
        category: "Busduct / Busbar Maintenance",
        title: "Busduct Inspection & Maintenance",
        location: "Dubai, UAE",
        year: "2026",
        image:
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=90",
        description:
            "Inspection, maintenance and technical support for an electrical busduct distribution system.",
        featured: true,
    },
    {
        number: "02",
        category: "Switchgear Maintenance",
        title: "Switchgear Maintenance Programme",
        location: "Abu Dhabi, UAE",
        year: "2026",
        image:
            "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=90",
        description:
            "Planned maintenance and technical inspection of electrical switchgear systems.",
        featured: false,
    },
    {
        number: "03",
        category: "Transformer Maintenance",
        title: "Transformer Inspection & Maintenance",
        location: "Dubai, UAE",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=90",
        description:
            "Inspection and maintenance support for transformer and electrical power distribution equipment.",
        featured: false,
    },
    {
        number: "04",
        category: "Testing & Commissioning",
        title: "Electrical Testing & Commissioning",
        location: "Sharjah, UAE",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=90",
        description:
            "Electrical testing and commissioning support across critical electrical systems.",
        featured: false,
    },
    {
        number: "05",
        category: "Aircraft Warning Lights",
        title: "Aircraft Warning Lighting",
        location: "Dubai, UAE",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1600&q=90",
        description:
            "Installation and maintenance support for aircraft warning and obstruction lighting.",
        featured: false,
    },
    {
        number: "06",
        category: "HVAC Maintenance",
        title: "HVAC Maintenance Programme",
        location: "Abu Dhabi, UAE",
        year: "2024",
        image:
            "https://images.unsplash.com/photo-1631545806609-8c5f5f9b7a4a?auto=format&fit=crop&w=1600&q=90",
        description:
            "Preventive maintenance, inspection and technical support for HVAC systems.",
        featured: false,
    },
];

const categories = [
    "All Projects",
    "Busduct / Busbar",
    "Switchgear",
    "Transformer",
    "Testing & Commissioning",
    "HVAC",
    "Aircraft Warning Lights",
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white text-[#071a2e]">


            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative min-h-[78vh] overflow-hidden bg-[#04111f]">
                <img
                    src={projects[0].image}
                    alt="DeltaCare engineering project prototype"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#03101e]/70" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#03101e] via-[#03101e]/75 to-transparent" />

                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
                        backgroundSize: "70px 70px",
                    }}
                />

                <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 pb-20 pt-32 lg:px-10">
                    <div className="max-w-5xl">
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-14 bg-[#ffbd00]" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffbd00]">
                                DeltaCare Projects
                            </span>
                        </div>

                        <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.055em] text-white sm:text-7xl lg:text-9xl">
                            Engineering
                            <br />
                            <span className="text-[#0878df]">in the field.</span>
                        </h1>

                        <div className="mt-9 max-w-2xl border-l-2 border-[#ffbd00] pl-6">
                            <p className="text-lg leading-8 text-white/70 sm:text-xl">
                                A look at the type of electrical engineering, maintenance,
                                testing and technical projects delivered by DeltaCare.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-3 bg-[#ffbd00] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#071a2e] transition hover:bg-white"
                            >
                                Explore projects
                                <ArrowRight size={18} />
                            </a>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white hover:text-[#071a2e]"
                            >
                                Start a project
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-8 hidden lg:block">
                        <div className="border border-white/20 bg-[#061425]/70 p-5 backdrop-blur-md">
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffbd00]">
                                Portfolio
                            </p>

                            <p className="mt-2 text-3xl font-black text-white">
                                06
                            </p>

                            <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                                Prototype projects
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          INTRO
      ========================================================= */}
            <section className="relative overflow-hidden bg-white py-24 lg:py-32">
                <div className="absolute right-0 top-0 h-72 w-72 bg-[#0878df]/[0.035]" />

                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0878df]">
                                    Our Work
                                </span>
                            </div>

                            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#071a2e] sm:text-5xl">
                                From technical
                                <br />
                                support to
                                <br />
                                <span className="text-[#0878df]">field execution.</span>
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-xl leading-9 text-slate-600">
                                This projects section is designed to become DeltaCare&apos;s
                                visual portfolio — showcasing completed work, project scope,
                                locations and the engineering services delivered.
                            </p>

                            <div className="mt-8 grid gap-px bg-slate-200 sm:grid-cols-3">
                                <div className="bg-white p-6">
                                    <Zap
                                        size={22}
                                        className="text-[#0878df]"
                                    />

                                    <p className="mt-5 text-2xl font-black text-[#071a2e]">
                                        Electrical
                                    </p>

                                    <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                                        Engineering
                                    </p>
                                </div>

                                <div className="bg-white p-6">
                                    <Building2
                                        size={22}
                                        className="text-[#0878df]"
                                    />

                                    <p className="mt-5 text-2xl font-black text-[#071a2e]">
                                        Technical
                                    </p>

                                    <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                                        Services
                                    </p>
                                </div>

                                <div className="bg-white p-6">
                                    <span className="text-2xl font-black text-[#0878df]">
                                        01—06
                                    </span>

                                    <p className="mt-5 text-2xl font-black text-[#071a2e]">
                                        Projects
                                    </p>

                                    <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                                        Prototype
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          PROJECT FILTER
      ========================================================= */}
            <section
                id="projects"
                className="border-y border-slate-200 bg-[#f5f8fb] py-10"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`shrink-0 border px-5 py-3 text-xs font-bold uppercase tracking-wider transition ${index === 0
                                    ? "border-[#071a2e] bg-[#071a2e] text-white"
                                    : "border-slate-200 bg-white text-slate-500 hover:border-[#0878df] hover:text-[#0878df]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          FEATURED PROJECT
      ========================================================= */}
            <section className="bg-white py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mb-12 flex items-end justify-between">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0878df]">
                                    Featured Project
                                </span>
                            </div>

                            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#071a2e] sm:text-5xl">
                                Project 01
                            </h2>
                        </div>

                        <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-slate-400 sm:block">
                            Prototype case study
                        </span>
                    </div>

                    <div className="grid overflow-hidden bg-[#071a2e] lg:grid-cols-[1.35fr_0.65fr]">
                        <div className="group relative min-h-[560px] overflow-hidden">
                            <img
                                src={projects[0].image}
                                alt={projects[0].title}
                                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#03101e] via-[#03101e]/20 to-transparent" />

                            <div className="absolute left-8 top-8 border border-white/20 bg-[#071a2e]/70 px-4 py-3 backdrop-blur-md">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                    Prototype image
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffbd00]">
                                    {projects[0].category}
                                </p>

                                <h3 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
                                    {projects[0].title}
                                </h3>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between p-8 lg:p-10">
                            <div>
                                <span className="text-6xl font-black text-white/[0.07]">
                                    {projects[0].number}
                                </span>

                                <p className="mt-7 text-base leading-8 text-white/55">
                                    {projects[0].description}
                                </p>

                                <div className="mt-8 space-y-5 border-y border-white/10 py-7">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-wider text-white/35">
                                            Location
                                        </span>

                                        <span className="flex items-center gap-2 text-sm font-semibold text-white/75">
                                            <MapPin size={15} className="text-[#0878df]" />
                                            {projects[0].location}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-wider text-white/35">
                                            Year
                                        </span>

                                        <span className="text-sm font-semibold text-white/75">
                                            {projects[0].year}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-10 flex items-center justify-between border border-white/15 px-5 py-4 text-left transition hover:border-[#ffbd00] hover:bg-[#ffbd00] hover:text-[#071a2e]">
                                <span className="text-xs font-bold uppercase tracking-wider">
                                    View project
                                </span>

                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          PROJECT GRID
      ========================================================= */}
            <section className="bg-[#f1f5f8] py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0878df]">
                                    Project Portfolio
                                </span>
                            </div>

                            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#071a2e] sm:text-5xl">
                                Technical work.
                                <br />
                                Clearly presented.
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-slate-500">
                            These are prototype entries showing how completed DeltaCare
                            projects could be presented once real project information is
                            available.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.slice(1).map((project) => (
                            <article
                                key={project.number}
                                className="group overflow-hidden bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative h-[330px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e]/80 via-transparent to-transparent" />

                                    <div className="absolute left-6 top-6 flex items-center gap-2 border border-white/20 bg-[#071a2e]/60 px-3 py-2 backdrop-blur-md">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                            Prototype
                                        </span>
                                    </div>

                                    <span className="absolute bottom-6 right-6 text-5xl font-black text-white/20">
                                        {project.number}
                                    </span>

                                    <div className="absolute bottom-6 left-6">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-7">
                                    <div className="flex items-start justify-between gap-6">
                                        <h3 className="max-w-md text-2xl font-black leading-tight text-[#10243b] transition group-hover:text-[#0878df]">
                                            {project.title}
                                        </h3>

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-slate-200 transition group-hover:border-[#0878df] group-hover:bg-[#0878df]">
                                            <ArrowUpRight
                                                size={17}
                                                className="text-slate-500 transition group-hover:text-white"
                                            />
                                        </div>
                                    </div>

                                    <p className="mt-4 text-sm leading-7 text-slate-500">
                                        {project.description}
                                    </p>

                                    <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                            <MapPin
                                                size={14}
                                                className="text-[#0878df]"
                                            />

                                            {project.location}
                                        </div>

                                        <span className="text-xs font-bold text-slate-400">
                                            {project.year}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          HOW THE REAL PROJECTS WILL LOOK
      ========================================================= */}
            <section className="relative overflow-hidden bg-[#071a2e] py-24 lg:py-28">
                <div className="absolute right-0 top-0 h-full w-[35%] bg-[#0878df]/[0.06]" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffbd00]">
                                    Future Portfolio
                                </span>
                            </div>

                            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                                Your actual projects
                                <br />
                                will go here.
                            </h2>

                            <p className="mt-7 max-w-xl text-base leading-8 text-white/50">
                                When DeltaCare provides its project photographs and details,
                                this prototype can become a complete case-study portfolio
                                without changing the underlying design.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-9 inline-flex items-center gap-3 bg-[#ffbd00] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#071a2e] transition hover:bg-white"
                            >
                                Discuss a project
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                {
                                    number: "01",
                                    title: "Project Photos",
                                    text: "Real site photography and completed work.",
                                },
                                {
                                    number: "02",
                                    title: "Project Scope",
                                    text: "What DeltaCare delivered on site.",
                                },
                                {
                                    number: "03",
                                    title: "Project Details",
                                    text: "Location, year and service category.",
                                },
                                {
                                    number: "04",
                                    title: "Case Studies",
                                    text: "A deeper look at selected projects.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.number}
                                    className="border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#0878df]/50 hover:bg-white/[0.06]"
                                >
                                    <span className="text-xs font-bold text-[#0878df]">
                                        {item.number}
                                    </span>

                                    <h3 className="mt-8 text-xl font-black text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-white/40">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          CTA
      ========================================================= */}
            <section className="relative overflow-hidden bg-[#ffbd00]">
                <div className="absolute right-0 top-0 h-full w-[40%] bg-[#071a2e]/[0.06]" />

                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#071a2e]/60">
                                DeltaCare Engineering
                            </p>

                            <h2 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[#071a2e] sm:text-5xl lg:text-6xl">
                                Have a project that needs technical expertise?
                            </h2>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex h-fit items-center justify-center gap-3 bg-[#071a2e] px-7 py-5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#071a2e]"
                        >
                            Contact DeltaCare
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}