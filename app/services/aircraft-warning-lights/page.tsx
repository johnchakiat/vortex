"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    ChevronRight,
    Lightbulb,
    ShieldCheck,
    TowerControl,
    Wrench,
    Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const heroImage =
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=90";

const towerImage =
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1800&q=90";

const lightingImage =
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=90";

const serviceImages = [
    {
        image: heroImage,
        label: "Obstruction Lighting",
        title: "Visible. Reliable. Maintained.",
    },
    {
        image: towerImage,
        label: "Tall Structures",
        title: "Lighting Infrastructure",
    },
    {
        image: lightingImage,
        label: "Field Support",
        title: "Inspection & Maintenance",
    },
];

const capabilities = [
    "Aircraft Warning Lights",
    "Obstruction Lighting",
    "Lighting Installation",
    "Lighting Inspection",
    "Lighting Maintenance",
    "Lighting Replacement",
];

const serviceAreas = [
    {
        number: "01",
        title: "Installation",
        text: "Installation support for aircraft warning and obstruction lighting systems used on tall structures.",
    },
    {
        number: "02",
        title: "Inspection",
        text: "Inspection of installed warning and obstruction lighting systems to identify maintenance requirements.",
    },
    {
        number: "03",
        title: "Maintenance",
        text: "Maintenance support for aircraft warning lighting and associated obstruction lighting systems.",
    },
    {
        number: "04",
        title: "Replacement",
        text: "Replacement support for lighting components and systems where maintenance requirements are identified.",
    },
];

const supportPoints = [
    "Aircraft warning lighting",
    "Obstruction lighting systems",
    "Tall structure lighting",
    "Lighting installation",
    "Lighting inspection",
    "Lighting maintenance",
    "Lighting replacement",
    "Technical support",
];

const otherServices = [
    {
        title: "Busduct / Busbar Maintenance",
        href: "/services/busduct-busbar-maintenance",
        number: "01",
    },
    {
        title: "Switchgear Maintenance",
        href: "/services/switchgear-maintenance",
        number: "02",
    },
    {
        title: "HVAC Maintenance",
        href: "/services/hvac-maintenance",
        number: "03",
    },
    {
        title: "Transformer Maintenance",
        href: "/services/transformer-maintenance",
        number: "04",
    },
    {
        title: "Testing & Commissioning",
        href: "/services/testing-commissioning",
        number: "06",
    },
];

export default function AircraftWarningLightsPage() {
    return (
        <main className="min-h-screen bg-white text-[#0b1b31]">


            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative min-h-[82vh] overflow-hidden bg-[#061425]">
                <img
                    src={heroImage}
                    alt="Tall buildings and urban infrastructure"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#03101e]/70" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#03101e] via-[#03101e]/75 to-transparent" />

                <div
                    className="absolute inset-0 opacity-[0.14]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
                        backgroundSize: "70px 70px",
                    }}
                />

                <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-6 pb-20 pt-32 lg:px-10">
                    <div className="max-w-5xl">
                        <Link
                            href="/services"
                            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/65 transition hover:text-white"
                        >
                            <ArrowLeft size={16} />
                            Our Services
                        </Link>

                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-14 bg-[#ffbd00]" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffbd00]">
                                Service 05
                            </span>
                        </div>

                        <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
                            Aircraft
                            <br />
                            <span className="text-[#0878df]">Warning Lights.</span>
                        </h1>

                        <div className="mt-8 max-w-2xl border-l-2 border-[#ffbd00] pl-6">
                            <p className="text-lg leading-8 text-white/75 sm:text-xl">
                                Installation, inspection, maintenance and replacement of
                                aircraft warning and obstruction lighting systems for tall
                                structures.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#overview"
                                className="inline-flex items-center gap-3 bg-[#ffbd00] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#07111f] transition hover:bg-white"
                            >
                                Explore service
                                <ArrowRight size={18} />
                            </a>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 border border-white/30 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white hover:text-[#07111f]"
                            >
                                Talk to DeltaCare
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-8 hidden lg:block">
                        <div className="border border-white/20 bg-[#061425]/75 p-5 backdrop-blur-md">
                            <div className="mb-3 flex items-center gap-2 text-[#ffbd00]">
                                <Lightbulb size={17} />

                                <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                                    Obstruction Lighting
                                </span>
                            </div>

                            <p className="max-w-[200px] text-sm leading-6 text-white/70">
                                Lighting support for tall structures and aircraft warning
                                requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          OVERVIEW
      ========================================================= */}
            <section
                id="overview"
                className="relative overflow-hidden bg-white py-24 lg:py-32"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0878df]">
                                    Overview
                                </span>
                            </div>

                            <h2 className="text-4xl font-black leading-tight tracking-[-0.035em] text-[#071a2e] sm:text-5xl">
                                Keeping tall structures
                                <br />
                                equipped with
                                <br />
                                <span className="text-[#0878df]">
                                    warning lighting.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600">
                                DeltaCare provides installation, inspection, maintenance and
                                replacement support for aircraft warning and obstruction
                                lighting systems used on tall structures.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[
                                    ["01", "Install"],
                                    ["02", "Inspect"],
                                    ["03", "Maintain"],
                                    ["04", "Replace"],
                                ].map(([num, label]) => (
                                    <div
                                        key={num}
                                        className="border-l-2 border-[#0878df] bg-[#f5f8fb] px-5 py-4"
                                    >
                                        <span className="text-xs font-bold text-[#0878df]">
                                            {num}
                                        </span>

                                        <p className="mt-1 font-bold text-[#10243b]">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -right-4 -top-4 h-28 w-28 border-r border-t border-[#0878df]/30" />

                            <div className="relative h-[520px] overflow-hidden">
                                <img
                                    src={towerImage}
                                    alt="Tall structure and city infrastructure"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e]/90 via-transparent to-transparent" />

                                <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center border border-white/30 bg-[#071a2e]/60 backdrop-blur-sm">
                                    <Lightbulb
                                        size={22}
                                        className="text-[#ffbd00]"
                                    />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="mb-3 flex items-center gap-2">
                                        <span className="h-2 w-2 bg-[#ffbd00]" />

                                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                                            DeltaCare Engineering
                                        </span>
                                    </div>

                                    <p className="max-w-lg text-2xl font-bold leading-tight text-white">
                                        Aircraft warning and obstruction lighting support for
                                        tall structures.
                                    </p>
                                </div>
                            </div>

                            <div className="absolute -bottom-7 -left-7 hidden w-56 bg-[#ffbd00] p-6 sm:block">
                                <TowerControl
                                    size={28}
                                    className="text-[#071a2e]"
                                />

                                <p className="mt-5 text-3xl font-black text-[#071a2e]">
                                    24/7
                                </p>

                                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#071a2e]/70">
                                    Visibility matters
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          SERVICE AREAS
      ========================================================= */}
            <section className="border-y border-slate-200 bg-[#f4f7fa] py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0878df]">
                                    Service Scope
                                </span>
                            </div>

                            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.035em] text-[#071a2e] sm:text-5xl">
                                From installation
                                <br />
                                through replacement.
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-slate-500">
                            DeltaCare's aircraft warning light service covers the core
                            lifecycle of warning and obstruction lighting systems.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {serviceAreas.map((item) => (
                            <div
                                key={item.number}
                                className="group relative min-h-[310px] overflow-hidden bg-[#071a2e] p-7 transition duration-300 hover:-translate-y-1"
                            >
                                <div className="absolute right-0 top-0 h-24 w-24 border-b border-l border-white/10" />

                                <span className="text-xs font-bold text-[#ffbd00]">
                                    {item.number}
                                </span>

                                <div className="absolute bottom-7 left-7 right-7">
                                    <div className="mb-5 h-px w-10 bg-[#0878df] transition-all duration-300 group-hover:w-20" />

                                    <h3 className="text-2xl font-black leading-tight text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-white/50">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          IMAGE STRIP
      ========================================================= */}
            <section className="bg-[#071a2e] py-5">
                <div className="grid gap-1 md:grid-cols-3">
                    {serviceImages.map((item) => (
                        <div
                            key={item.title}
                            className="group relative h-[330px] overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#030b14] via-[#030b14]/10 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-7">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffbd00]">
                                    {item.label}
                                </p>

                                <h3 className="mt-2 text-2xl font-black text-white">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================================================
          CAPABILITIES
      ========================================================= */}
            <section className="relative overflow-hidden bg-white py-24 lg:py-32">
                <div className="absolute right-0 top-0 h-80 w-80 bg-[#0878df]/[0.035]" />

                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0878df]">
                                    Capabilities
                                </span>
                            </div>

                            <h2 className="text-4xl font-black leading-tight tracking-[-0.035em] text-[#071a2e] sm:text-5xl">
                                Focused on
                                <br />
                                warning and
                                <br />
                                <span className="text-[#0878df]">
                                    obstruction lighting.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-base leading-8 text-slate-600">
                                The service is structured around the installation,
                                inspection, maintenance and replacement of aircraft warning
                                and obstruction lighting systems for tall structures.
                            </p>

                            <div className="mt-10 inline-flex items-center gap-3 border border-slate-200 bg-[#f7f9fb] px-5 py-4">
                                <ShieldCheck
                                    size={21}
                                    className="text-[#0878df]"
                                />

                                <span className="text-xs font-bold uppercase tracking-wider text-[#334155]">
                                    Structure lighting support
                                </span>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2">
                            {capabilities.map((item, index) => (
                                <div
                                    key={item}
                                    className="group flex min-h-[110px] items-center gap-5 border-b border-r border-slate-200 px-6 py-5 transition hover:bg-[#071a2e]"
                                >
                                    <span className="text-xs font-bold text-[#0878df] group-hover:text-[#ffbd00]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="flex items-center gap-3">
                                        <CheckCircle2
                                            size={18}
                                            className="text-[#0878df] transition group-hover:text-[#ffbd00]"
                                        />

                                        <span className="font-semibold text-[#1e334b] group-hover:text-white">
                                            {item}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          FEATURE SECTION
      ========================================================= */}
            <section className="bg-[#eef3f7] py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="relative h-[520px] overflow-hidden">
                            <img
                                src={lightingImage}
                                alt="City infrastructure and tall structures"
                                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e]/85 via-transparent to-transparent" />

                            <div className="absolute left-7 top-7 border border-white/20 bg-[#071a2e]/70 px-4 py-3 backdrop-blur-md">
                                <div className="flex items-center gap-2">
                                    <Lightbulb
                                        size={16}
                                        className="text-[#ffbd00]"
                                    />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                                        Warning Lighting
                                    </span>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="max-w-xl text-4xl font-black leading-tight text-white">
                                    Designed around
                                    <br />
                                    <span className="text-[#ffbd00]">
                                        visibility.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0878df]">
                                    Technical Support
                                </span>
                            </div>

                            <h2 className="text-4xl font-black leading-tight tracking-[-0.035em] text-[#071a2e] sm:text-5xl">
                                A clear service scope
                                <br />
                                for tall structures.
                            </h2>

                            <p className="mt-7 text-base leading-8 text-slate-600">
                                Whether a project requires new installation, inspection,
                                ongoing maintenance or replacement, DeltaCare provides support
                                around aircraft warning and obstruction lighting systems.
                            </p>

                            <div className="mt-9 space-y-3">
                                {supportPoints.map((item, index) => (
                                    <div
                                        key={item}
                                        className="group flex items-center justify-between border-b border-slate-200 py-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-bold text-[#0878df]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="font-semibold text-[#263b53]">
                                                {item}
                                            </span>
                                        </div>

                                        <ChevronRight
                                            size={17}
                                            className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0878df]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          DARK FEATURE
      ========================================================= */}
            <section className="relative overflow-hidden bg-[#04111f] py-24 lg:py-32">
                <div className="absolute inset-0 opacity-[0.08]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
              `,
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                        <div>
                            <div className="flex h-14 w-14 items-center justify-center bg-[#0878df] text-white">
                                <Wrench size={24} strokeWidth={1.5} />
                            </div>

                            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffbd00]">
                                Maintenance & Replacement
                            </p>

                            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                                Keep obstruction
                                <br />
                                lighting
                                <br />
                                <span className="text-[#0878df]">
                                    operational.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl text-base leading-8 text-white/50">
                                Maintenance and replacement support helps address lighting
                                system requirements identified during inspection or service
                                activities.
                            </p>

                            <div className="mt-9 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                                {[
                                    "Inspection",
                                    "Maintenance",
                                    "Replacement",
                                    "Technical Support",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-4 bg-[#071a2e] p-5"
                                    >
                                        <span className="h-1.5 w-1.5 bg-[#ffbd00]" />

                                        <span className="text-sm font-medium text-white/65">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative min-h-[520px] overflow-hidden">
                            <img
                                src={heroImage}
                                alt="Urban tall structures"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#04111f] via-[#04111f]/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#ffbd00]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                        DeltaCare
                                    </span>
                                </div>

                                <p className="max-w-xl text-3xl font-black leading-tight text-white">
                                    Lighting systems that remain visible when visibility
                                    matters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          OTHER SERVICES
      ========================================================= */}
            <section className="bg-white py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0878df]">
                                    DeltaCare Services
                                </span>
                            </div>

                            <h2 className="text-4xl font-black tracking-[-0.035em] text-[#071a2e] sm:text-5xl">
                                More engineering
                                <br />
                                maintenance services.
                            </h2>
                        </div>

                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0878df]"
                        >
                            View all services
                            <ArrowRight size={17} />
                        </Link>
                    </div>

                    <div className="divide-y border-y border-slate-200">
                        {otherServices.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group flex items-center justify-between gap-6 px-2 py-7 transition hover:bg-[#f5f8fb] sm:px-5"
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-xs font-bold text-[#0878df]">
                                        {service.number}
                                    </span>

                                    <h3 className="text-xl font-bold text-[#172d45] transition group-hover:text-[#0878df] sm:text-2xl">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 transition group-hover:border-[#0878df] group-hover:bg-[#0878df]">
                                    <ArrowUpRight
                                        size={19}
                                        className="text-slate-500 transition group-hover:text-white"
                                    />
                                </div>
                            </Link>
                        ))}
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
                                Need aircraft warning light installation, inspection or
                                maintenance?
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