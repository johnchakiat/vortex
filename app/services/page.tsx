"use client";

import { useState } from "react";
import {
    ArrowUpRight,
    Building2,
    ChevronRight,
    Droplets,
    Flame,
    Layers3,
    RadioTower,
    Wind,
    Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";

/* =========================================================
   TYPES
========================================================= */

type Service = {
    number: string;
    title: string;
    shortTitle: string;
    description: string;
    icon: React.ElementType;
    image: string;
};

/* =========================================================
   SERVICES
========================================================= */

const services: Service[] = [
    {
        number: "01",
        title: "Vertical Transport",
        shortTitle: "Vertical Transport",
        description:
            "Lift studies, escalators, traffic analysis & advisory services in accordance with Dubai Building Code (DBC)",
        icon: Layers3,
        image:
            "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85",
    },
    {
        number: "02",
        title: "Electrical Systems",
        shortTitle: "Electrical Systems",
        description:
            "LV/MV power, lighting, UPS, genset & distribution design",
        icon: Zap,
        image:
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
    },
    {
        number: "03",
        title: "HVAC Systems",
        shortTitle: "HVAC Systems",
        description:
            "Heating, ventilation & air conditioning engineering",
        icon: Wind,
        image:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85",
    },
    {
        number: "04",
        title: "Public Health Engineering",
        shortTitle: "Public Health Eng.",
        description:
            "Plumbing, drainage & potable water system design.",
        icon: Droplets,
        image:
            "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=85",
    },
    {
        number: "05",
        title: "Fire Protection",
        shortTitle: "Fire Protection",
        description:
            "Life safety & fire suppression system engineering.",
        icon: Flame,
        image:
            "https://images.unsplash.com/photo-1785592276383-7541a6e2230f?auto=format&fit=crop&w=1400&q=85",
    },
    {
        number: "06",
        title: "ELV Systems",
        shortTitle: "ELV Systems",
        description:
            "Security, AV, data, CCTV, BMS & structured cabling.",
        icon: RadioTower,
        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
    },
];

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function ServicesPage() {
    const [activeService, setActiveService] = useState(0);

    const selectedService = services[activeService];
    const SelectedIcon = selectedService.icon;

    return (
        <main className="min-h-screen bg-[#07111f] text-white">

            {/* =====================================================
                NAVBAR
                IMPORTANT:
                Keep Navbar itself untouched.
                This wrapper guarantees it remains above the page.
            ===================================================== */}

            <div className="relative z-[100]">
                <Navbar />
            </div>

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative z-0 flex min-h-[calc(100vh-250px)] items-center overflow-hidden bg-[#07111f]">

                {/* GRID */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.045]"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(255,255,255,0.5) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(255,255,255,0.5) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "72px 72px",
                    }}
                />

                {/* GLOW */}

                <div className="pointer-events-none absolute left-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#0878df]/10 blur-[130px]" />

                <div className="pointer-events-none absolute bottom-[-180px] right-[4%] h-[550px] w-[550px] rounded-full bg-[#ffbd00]/[0.045] blur-[140px]" />

                {/* ARCHITECTURAL LINES */}

                <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.05]" />

                <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.05]" />

                <div className="vortex-container relative z-10 py-24 sm:py-32 lg:py-40">

                    {/* LABEL */}

                    <div className="flex items-center gap-4">
                        <span className="h-px w-14 bg-[#ffbd00]" />

                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffbd00]">
                            Our Services
                        </span>
                    </div>

                    {/* TITLE */}

                    <h1 className="mt-8 max-w-6xl text-5xl font-bold leading-[0.92] tracking-[-0.055em] text-white sm:text-7xl lg:text-[92px]">
                        High quality
                        <br />

                        <span className="text-[#0878df]">
                            construction solutions.
                        </span>
                    </h1>

                    {/* SUPPORTING TEXT */}

                    <div className="mt-10 flex max-w-3xl items-start gap-5">

                        <span className="mt-2 h-12 w-[2px] shrink-0 bg-[#ffbd00]" />

                        <p className="text-base leading-8 text-white/55 sm:text-lg">
                            Construction is a general term meaning the art and
                            science to form objects systems organizations.
                        </p>

                    </div>

                    {/* ENGINEERING DISCIPLINES */}

                    <div className="mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">

                        {services.map((service) => (
                            <div
                                key={service.number}
                                className="flex items-center gap-3"
                            >
                                <span className="font-mono text-[9px] font-bold text-[#ffbd00]">
                                    {service.number}
                                </span>

                                <span className="h-px w-5 bg-white/15" />

                                <span className="text-xs font-semibold text-white/45">
                                    {service.shortTitle}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>

                {/* BOTTOM LINE */}

                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0878df]/40" />

            </section>

            {/* =====================================================
                SERVICES INTRO
            ===================================================== */}

            <section className="relative overflow-hidden bg-white py-24 text-[#172033] sm:py-32 lg:py-40">

                <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(8,120,223,0.035) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(8,120,223,0.035) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "64px 64px",
                    }}
                />

                <div className="vortex-container relative">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

                        <div>

                            <div className="flex items-center gap-4">

                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0878df]">
                                    Engineering Disciplines
                                </span>

                            </div>

                            <h2 className="mt-7 text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">

                                One team.
                                <br />

                                <span className="text-[#0878df]">
                                    Multiple disciplines.
                                </span>

                            </h2>

                        </div>

                        <div className="flex items-end">

                            <p className="max-w-2xl text-lg leading-8 text-[#667085] sm:text-xl">
                                VEC LLC is an engineering consultancy specialising
                                in Vertical Transport, MEP and BIM engineering
                                solutions. With extensive experience, we provide
                                comprehensive engineering services through our back
                                office in India, supporting projects from concept
                                design to construction supervision.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                INTERACTIVE SERVICES
                No scroll-to-service behavior.
            ===================================================== */}

            <section className="relative overflow-hidden bg-[#07111f] py-24 sm:py-32 lg:py-40">

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(255,255,255,0.5) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(255,255,255,0.5) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "80px 80px",
                    }}
                />

                <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.045]" />

                <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.045]" />

                <div className="vortex-container relative">

                    {/* HEADER */}

                    <div className="flex items-end justify-between gap-8">

                        <div>

                            <div className="flex items-center gap-4">

                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                    What We Do
                                </span>

                            </div>

                            <h2 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">

                                Our
                                <br />

                                <span className="text-[#0878df]">
                                    services.
                                </span>

                            </h2>

                        </div>

                        <div className="hidden font-mono text-[10px] font-bold tracking-[0.2em] text-white/25 sm:block">
                            {String(activeService + 1).padStart(2, "0")}
                            {" / "}
                            {String(services.length).padStart(2, "0")}
                        </div>

                    </div>

                    {/* SERVICE AREA */}

                    <div className="mt-20 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">

                        {/* NAVIGATION */}

                        <div className="border border-white/10 bg-white/[0.025]">

                            {services.map((service, index) => {

                                const Icon = service.icon;
                                const active = index === activeService;

                                return (
                                    <button
                                        key={service.number}
                                        type="button"
                                        onClick={() => setActiveService(index)}
                                        className={`group flex w-full items-center justify-between border-b border-white/[0.07] px-6 py-6 text-left transition-all duration-300 last:border-0 sm:px-8 ${active
                                            ? "bg-white/[0.07]"
                                            : "hover:bg-white/[0.035]"
                                            }`}
                                    >

                                        <div className="flex items-center gap-5">

                                            <span
                                                className={`font-mono text-[10px] font-bold ${active
                                                    ? "text-[#ffbd00]"
                                                    : "text-white/20"
                                                    }`}
                                            >
                                                {service.number}
                                            </span>

                                            <div
                                                className={`flex h-9 w-9 items-center justify-center border transition ${active
                                                    ? "border-[#0878df]/50 bg-[#0878df]/10 text-[#0878df]"
                                                    : "border-white/10 text-white/30 group-hover:border-white/20 group-hover:text-white/60"
                                                    }`}
                                            >
                                                <Icon
                                                    size={17}
                                                    strokeWidth={1.7}
                                                />
                                            </div>

                                            <span
                                                className={`text-sm font-bold sm:text-base ${active
                                                    ? "text-white"
                                                    : "text-white/45 group-hover:text-white/75"
                                                    }`}
                                            >
                                                {service.title}
                                            </span>

                                        </div>

                                        <ChevronRight
                                            size={17}
                                            className={`transition-all duration-300 ${active
                                                ? "translate-x-0 text-[#ffbd00]"
                                                : "-translate-x-1 text-white/15 group-hover:translate-x-0 group-hover:text-white/40"
                                                }`}
                                        />

                                    </button>
                                );
                            })}

                        </div>

                        {/* SELECTED SERVICE */}

                        <div className="relative min-h-[520px] overflow-hidden border border-white/10 bg-[#0b1727]">

                            <img
                                src={selectedService.image}
                                alt={selectedService.title}
                                className="absolute inset-0 h-full w-full object-cover opacity-30"
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/85 to-[#07111f]/40" />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />

                            <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-8 sm:p-12 lg:p-14">

                                <div className="flex items-start justify-between">

                                    <div className="flex items-center gap-4">

                                        <span className="h-px w-10 bg-[#ffbd00]" />

                                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                            Engineering Discipline
                                        </span>

                                    </div>

                                    <span className="font-mono text-6xl font-bold tracking-[-0.08em] text-white/[0.08] sm:text-8xl">
                                        {selectedService.number}
                                    </span>

                                </div>

                                <div className="max-w-2xl">

                                    <div className="mb-6 flex h-14 w-14 items-center justify-center border border-[#0878df]/40 bg-[#0878df]/10 text-[#0878df]">

                                        <SelectedIcon
                                            size={27}
                                            strokeWidth={1.5}
                                        />

                                    </div>

                                    <h3 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                                        {selectedService.title}
                                    </h3>

                                    <p className="mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
                                        {selectedService.description}
                                    </p>

                                    <a
                                        href={`/services/${selectedService.title
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}`}
                                        className="group mt-9 inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#ffbd00] hover:bg-[#ffbd00] hover:text-[#172033]"
                                    >
                                        Explore Service

                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </a>

                                </div>

                                <div className="flex items-center justify-between border-t border-white/10 pt-6">

                                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                                        VORTEX ENVECO LLC
                                    </span>

                                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#0878df]">
                                        VEC ENGINEERING
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                SERVICE GRID
            ===================================================== */}

            <section className="relative overflow-hidden bg-white py-24 text-[#172033] sm:py-32 lg:py-40">

                <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(8,120,223,0.035) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(8,120,223,0.035) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "64px 64px",
                    }}
                />

                <div className="vortex-container relative">

                    <div>

                        <div className="flex items-center gap-4">

                            <span className="h-px w-12 bg-[#0878df]" />

                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0878df]">
                                Our Expertise
                            </span>

                        </div>

                        <h2 className="mt-7 text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">

                            Six disciplines.
                            <br />

                            <span className="text-[#0878df]">
                                One coordinated approach.
                            </span>

                        </h2>

                    </div>

                    {/* CARDS */}

                    <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {services.map((service, index) => {

                            const Icon = service.icon;

                            return (
                                <button
                                    key={service.number}
                                    type="button"
                                    onClick={() => setActiveService(index)}
                                    className="group relative min-h-[310px] overflow-hidden border border-[#e4eaf1] bg-white p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-[#0878df]/40 hover:shadow-[0_25px_70px_rgba(7,17,31,0.09)]"
                                >

                                    {/* NUMBER */}

                                    <span className="absolute right-6 top-5 font-mono text-6xl font-bold tracking-[-0.08em] text-[#172033]/[0.035] transition duration-500 group-hover:text-[#0878df]/[0.08]">
                                        {service.number}
                                    </span>

                                    {/* ICON */}

                                    <div className="relative flex h-12 w-12 items-center justify-center border border-[#dce5ef] bg-[#f8fafc] text-[#0878df] transition duration-500 group-hover:border-[#0878df]/30 group-hover:bg-[#0878df] group-hover:text-white">

                                        <Icon
                                            size={21}
                                            strokeWidth={1.6}
                                        />

                                    </div>

                                    {/* CONTENT */}

                                    <div className="relative mt-12">

                                        <h3 className="text-xl font-bold tracking-[-0.02em] text-[#172033]">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#667085]">
                                            {service.description}
                                        </p>

                                    </div>

                                    {/* BOTTOM */}

                                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ffbd00] transition-all duration-500 group-hover:w-full" />

                                    <div className="absolute bottom-6 right-7">

                                        <ArrowUpRight
                                            size={18}
                                            className="text-[#98a2b3] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0878df]"
                                        />

                                    </div>

                                </button>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="relative overflow-hidden bg-[#07111f] py-24 sm:py-32 lg:py-40">

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.045]"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(255,255,255,0.5) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(255,255,255,0.5) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "80px 80px",
                    }}
                />

                <div className="vortex-container relative">

                    <div className="relative overflow-hidden border border-white/10 bg-[#0878df] px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">

                        <div
                            className="pointer-events-none absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `
                                    linear-gradient(
                                        rgba(255,255,255,0.8) 1px,
                                        transparent 1px
                                    ),
                                    linear-gradient(
                                        90deg,
                                        rgba(255,255,255,0.8) 1px,
                                        transparent 1px
                                    )
                                `,
                                backgroundSize: "50px 50px",
                            }}
                        />

                        <div className="relative z-10 max-w-3xl">

                            <div className="flex items-center gap-4">

                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                    Start a Project
                                </span>

                            </div>

                            <h2 className="mt-7 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl">

                                Engineering solutions
                                <br />

                                built around your project.

                            </h2>

                            <p className="mt-7 max-w-xl text-base leading-7 text-white/70">
                                Vortex Enveco Consultancy LLC provides comprehensive
                                engineering services across Vertical Transport, MEP
                                and BIM engineering solutions.
                            </p>

                            <a
                                href="#contact"
                                className="group mt-9 inline-flex items-center gap-3 bg-[#ffbd00] px-7 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#172033] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                            >
                                Let&apos;s Talk

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />

                            </a>

                        </div>

                        <div className="pointer-events-none absolute -bottom-16 -right-10 opacity-[0.08]">

                            <Building2
                                size={320}
                                strokeWidth={0.6}
                            />

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}