"use client";

import Link from "next/link";
import { useState } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    ClipboardCheck,
    Fan,
    Lightbulb,
    ShieldCheck,
    Thermometer,
    Zap,
    CheckCircle2,
} from "lucide-react";



const services = [
    {
        number: "01",
        short: "BUSDUCT",
        title: "Busduct / Busbar Maintenance",
        href: "/services/busduct-busbar-maintenance",
        icon: Zap,
        image:
            "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1800&q=90",
        description:
            "Inspection, maintenance, repair, testing and modification of busbar trunking systems, including tap-offs, joints and associated components.",
    },
    {
        number: "02",
        short: "SWITCHGEAR",
        title: "Switchgear Maintenance",
        href: "/services/switchgear-maintenance",
        icon: ShieldCheck,
        image:
            "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1800&q=90",
        description:
            "Maintenance and testing of switchgear panels including ACB, VFD, MCCB, capacitor banks and related electrical equipment.",
    },
    {
        number: "03",
        short: "HVAC",
        title: "HVAC Maintenance",
        href: "/services/hvac-maintenance",
        icon: Fan,
        image:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=90",
        description:
            "Preventive, corrective and emergency HVAC maintenance focused on system performance, efficiency and dependable operation.",
    },
    {
        number: "04",
        short: "TRANSFORMER",
        title: "Transformer Maintenance",
        href: "/services/transformer-maintenance",
        icon: Thermometer,
        image:
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=90",
        description:
            "Transformer inspection, testing, diagnostics and maintenance services designed to support long-term reliability.",
    },
    {
        number: "05",
        short: "WARNING LIGHTS",
        title: "Aircraft Warning Lights",
        href: "/services/aircraft-warning-lights",
        icon: Lightbulb,
        image:
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1800&q=90",
        description:
            "Installation, inspection, maintenance and replacement of aircraft warning and obstruction lighting systems for tall structures.",
    },
    {
        number: "06",
        short: "TESTING",
        title: "Testing & Commissioning",
        href: "/services/testing-commissioning",
        icon: ClipboardCheck,
        image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=90",
        description:
            "Electrical testing and commissioning for busducts, panels, switchgear, transformers and associated electrical systems.",
    },
];

export default function ServicesPage() {
    const [activeService, setActiveService] = useState(0);

    const active = services[activeService];
    const ActiveIcon = active.icon;

    return (
        <main className="min-h-screen overflow-x-hidden bg-white text-[#172033]">


            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative overflow-hidden bg-[#07111f] text-white">
                {/* Engineering grid */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
            `,
                        backgroundSize: "72px 72px",
                    }}
                />

                {/* Blue glow */}
                <div className="pointer-events-none absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-[#0878df]/10 blur-[140px]" />

                <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pb-28 sm:pt-28 lg:px-10 lg:pb-32 lg:pt-32">
                    <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                        <div>
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-14 bg-[#ffbd00]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffbd00]">
                                    DeltaCare / Services
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[96px]">
                                Technical
                                <br />
                                <span className="text-[#0878df]">services.</span>
                            </h1>

                            <p className="mt-9 max-w-2xl border-l-2 border-[#ffbd00] pl-6 text-base leading-8 text-white/55 sm:text-lg">
                                Specialist maintenance and technical services supporting
                                electrical systems, equipment and critical infrastructure.
                            </p>
                        </div>

                        {/* Service counter */}
                        <div className="lg:justify-self-end">
                            <div className="border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm sm:p-8">
                                <div className="flex items-center justify-between gap-10">
                                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                                        Service disciplines
                                    </span>

                                    <span className="h-2 w-2 rounded-full bg-[#ffbd00] shadow-[0_0_15px_rgba(255,189,0,0.8)]" />
                                </div>

                                <div className="mt-7 flex items-end gap-3">
                                    <span className="text-7xl font-black leading-none text-white">
                                        06
                                    </span>

                                    <span className="pb-1 font-mono text-xs uppercase tracking-wider text-white/35">
                                        disciplines
                                    </span>
                                </div>

                                <div className="mt-7 h-px bg-white/10" />

                                <p className="mt-5 text-sm leading-7 text-white/45">
                                    Focused technical support across electrical maintenance,
                                    HVAC, lighting and testing requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-[#0878df]/50" />
            </section>

            {/* =========================================================
          INTRO
      ========================================================= */}
            <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
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

                <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#0878df]">
                                    What We Do
                                </span>
                            </div>

                            <h2 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#172033] sm:text-6xl">
                                Maintenance
                                <br />
                                beyond the
                                <br />
                                <span className="text-[#0878df]">checklist.</span>
                            </h2>
                        </div>

                        <div className="flex items-end">
                            <div className="max-w-2xl">
                                <p className="text-lg leading-8 text-[#667085] sm:text-xl">
                                    DeltaCare provides specialist maintenance and technical
                                    support with a strong focus on electrical infrastructure,
                                    reliability and safe operation.
                                </p>

                                <div className="mt-10 grid grid-cols-2 border-y border-[#172033]/10 sm:grid-cols-3">
                                    <div className="border-r border-[#172033]/10 py-6 pr-6">
                                        <p className="text-3xl font-black text-[#0878df]">
                                            01
                                        </p>

                                        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#667085]">
                                            Inspect
                                        </p>
                                    </div>

                                    <div className="border-r border-[#172033]/10 px-6 py-6">
                                        <p className="text-3xl font-black text-[#0878df]">
                                            02
                                        </p>

                                        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#667085]">
                                            Maintain
                                        </p>
                                    </div>

                                    <div className="py-6 pl-6">
                                        <p className="text-3xl font-black text-[#0878df]">
                                            03
                                        </p>

                                        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#667085]">
                                            Support
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          SERVICE SELECTOR
      ========================================================= */}
            <section className="bg-[#f3f6f9] py-20 sm:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#0878df]">
                                    Service Directory
                                </span>
                            </div>

                            <h2 className="text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                                Choose a discipline.
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-[#667085]">
                            Explore the specialist services provided by DeltaCare and view
                            the dedicated technical scope for each discipline.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                        {/* LEFT LIST */}
                        <div className="border border-[#d8e1eb] bg-white">
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <button
                                        key={service.number}
                                        type="button"
                                        onMouseEnter={() => setActiveService(index)}
                                        onFocus={() => setActiveService(index)}
                                        onClick={() => setActiveService(index)}
                                        className={`group relative flex w-full items-center gap-5 border-b border-[#d8e1eb] p-5 text-left transition-all duration-300 last:border-b-0 sm:p-6 ${activeService === index
                                            ? "bg-[#07111f] text-white"
                                            : "bg-white hover:bg-[#f7f9fb]"
                                            }`}
                                    >
                                        <span
                                            className={`font-mono text-xs font-bold ${activeService === index
                                                ? "text-[#ffbd00]"
                                                : "text-[#98a2b3]"
                                                }`}
                                        >
                                            {service.number}
                                        </span>

                                        <div
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center border transition ${activeService === index
                                                ? "border-[#0878df] bg-[#0878df] text-white"
                                                : "border-[#d8e1eb] text-[#0878df]"
                                                }`}
                                        >
                                            <Icon size={18} strokeWidth={1.7} />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p
                                                className={`font-bold leading-tight ${activeService === index
                                                    ? "text-white"
                                                    : "text-[#172033]"
                                                    }`}
                                            >
                                                {service.title}
                                            </p>

                                            <p
                                                className={`mt-1 font-mono text-[9px] uppercase tracking-[0.16em] ${activeService === index
                                                    ? "text-white/35"
                                                    : "text-[#98a2b3]"
                                                    }`}
                                            >
                                                {service.short}
                                            </p>
                                        </div>

                                        <Chevron
                                            active={activeService === index}
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        {/* RIGHT PREVIEW */}
                        <div className="relative min-h-[600px] overflow-hidden bg-[#07111f]">
                            <img
                                key={active.image}
                                src={active.image}
                                alt={active.title}
                                className="absolute inset-0 h-full w-full object-cover transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/45 to-[#07111f]/10" />

                            <div className="absolute inset-0 bg-[#0878df]/10" />

                            {/* Technical corner markers */}
                            <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-white/40" />
                            <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-white/40" />
                            <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-white/40" />
                            <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-white/40" />

                            <div className="absolute left-7 top-7 flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-[#ffbd00]" />

                                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                                    Active discipline
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-12">
                                <div className="flex items-end justify-between gap-6">
                                    <div>
                                        <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#ffbd00]">
                                            SERVICE {active.number}
                                        </p>

                                        <h3 className="mt-4 max-w-2xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">
                                            {active.title}
                                        </h3>

                                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                                            {active.description}
                                        </p>

                                        <Link
                                            href={active.href}
                                            className="group mt-8 inline-flex items-center gap-3 bg-[#ffbd00] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#07111f] transition hover:bg-white"
                                        >
                                            Explore service

                                            <ArrowUpRight
                                                size={16}
                                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                            />
                                        </Link>
                                    </div>

                                    <span className="hidden font-black leading-none text-white/[0.08] sm:block sm:text-[120px]">
                                        {active.number}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          SERVICE FLOW
      ========================================================= */}
            <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#0878df]">
                                    Our Approach
                                </span>
                            </div>

                            <h2 className="text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl">
                                One technical
                                <br />
                                approach.
                                <br />
                                <span className="text-[#0878df]">Multiple systems.</span>
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-8 text-[#667085]">
                                Different equipment requires different technical attention,
                                but the service experience stays focused on inspection,
                                maintenance, testing and reliable support.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Connecting line */}
                            <div className="absolute left-[31px] top-10 hidden h-[calc(100%-80px)] w-px bg-[#d8e1eb] sm:block" />

                            <div className="space-y-5">
                                {[
                                    {
                                        number: "01",
                                        title: "Inspect",
                                        description:
                                            "Understand the condition of the equipment and identify areas requiring attention.",
                                    },
                                    {
                                        number: "02",
                                        title: "Maintain",
                                        description:
                                            "Carry out planned maintenance and practical corrective work where required.",
                                    },
                                    {
                                        number: "03",
                                        title: "Test",
                                        description:
                                            "Support electrical testing, diagnostics and system verification.",
                                    },
                                    {
                                        number: "04",
                                        title: "Support",
                                        description:
                                            "Provide technical assistance for ongoing maintenance and operational requirements.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.number}
                                        className="group relative flex gap-6 border border-[#dce5ef] bg-[#f7f9fb] p-6 transition duration-300 hover:border-[#0878df] hover:bg-white sm:p-7"
                                    >
                                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center bg-[#07111f] font-mono text-xs font-bold text-[#ffbd00] transition group-hover:bg-[#0878df]">
                                            {item.number}
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-black text-[#172033]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-[#667085]">
                                                {item.description}
                                            </p>
                                        </div>

                                        <ArrowRight
                                            size={17}
                                            className="ml-auto mt-1 hidden text-[#0878df] transition-transform duration-300 group-hover:translate-x-1 sm:block"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          DARK TECHNICAL SECTION
      ========================================================= */}
            <section className="relative overflow-hidden bg-[#07111f] py-24 text-white sm:py-28 lg:py-32">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.1]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
                        backgroundSize: "80px 80px",
                    }}
                />

                <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0878df]/10 blur-[130px]" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-end">
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffbd00]">
                                    Technical Coverage
                                </span>
                            </div>

                            <h2 className="max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                                Built around
                                <br />
                                <span className="text-[#0878df]">reliability.</span>
                            </h2>
                        </div>

                        <p className="max-w-xl text-base leading-8 text-white/50 sm:text-lg">
                            DeltaCare&apos;s services are structured around the maintenance
                            and technical support requirements of electrical systems,
                            equipment and critical infrastructure.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Inspection",
                            "Preventive Maintenance",
                            "Repair",
                            "Testing",
                            "Technical Support",
                            "System Reliability",
                        ].map((item, index) => (
                            <div
                                key={item}
                                className="group relative bg-[#0b1929] p-7 transition duration-500 hover:bg-[#10243a]"
                            >
                                <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-[#0878df] transition-transform duration-500 group-hover:scale-x-100" />

                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs font-bold tracking-[0.18em] text-white/25">
                                        0{index + 1}
                                    </span>

                                    <CheckCircle2
                                        size={18}
                                        className="text-[#0878df] transition group-hover:text-[#ffbd00]"
                                    />
                                </div>

                                <h3 className="mt-12 text-xl font-black text-white">
                                    {item}
                                </h3>

                                <div className="mt-5 h-px w-8 bg-[#ffbd00] transition-all duration-500 group-hover:w-16" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          CTA
      ========================================================= */}
            <section className="relative overflow-hidden bg-[#ffbd00]">
                <div className="absolute right-0 top-0 h-full w-[35%] bg-[#07111f]/[0.05]" />

                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
                    <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                        <div>
                            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#07111f]/55">
                                DeltaCare / Technical Services
                            </p>

                            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1] tracking-[-0.045em] text-[#07111f] sm:text-5xl lg:text-6xl">
                                Need maintenance or technical support?
                            </h2>
                        </div>

                        <Link
                            href="/contact"
                            className="group inline-flex shrink-0 items-center gap-3 bg-[#07111f] px-7 py-5 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#07111f]"
                        >
                            Contact DeltaCare

                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

function Chevron({ active }: { active: boolean }) {
    return (
        <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center border transition ${active
                ? "border-white/20 text-white"
                : "border-[#d8e1eb] text-[#98a2b3] group-hover:border-[#0878df] group-hover:text-[#0878df]"
                }`}
        >
            <ArrowRight size={14} />
        </div>
    );
}