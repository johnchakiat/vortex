"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Gauge,
    ShieldCheck,
    TestTube2,
    Wrench,
    Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const heroImage =
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=90";

const testingImage =
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1800&q=90";

const electricalImage =
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=90";

const serviceImages = [
    {
        image: heroImage,
        label: "Testing & Commissioning",
        title: "Verify before operation.",
    },
    {
        image: testingImage,
        label: "Electrical Testing",
        title: "Technical Verification",
    },
    {
        image: electricalImage,
        label: "Electrical Systems",
        title: "Performance & Reliability",
    },
];

const capabilities = [
    "Electrical Testing",
    "Electrical Commissioning",
    "Busduct Testing",
    "Panel Testing",
    "Switchgear Testing",
    "Transformer Testing",
    "System Verification",
    "Inspection Support",
    "Fault Identification",
    "Technical Diagnostics",
    "Performance Checks",
    "Commissioning Support",
];

const serviceAreas = [
    {
        number: "01",
        title: "Inspection",
        text: "Inspection and verification support for electrical equipment and systems before testing and commissioning activities.",
    },
    {
        number: "02",
        title: "Testing",
        text: "Electrical testing support for busducts, panels, switchgear, transformers and associated electrical systems.",
    },
    {
        number: "03",
        title: "Commissioning",
        text: "Commissioning support to verify electrical systems and equipment are ready for their intended operation.",
    },
    {
        number: "04",
        title: "Verification",
        text: "Technical checks and diagnostics to help identify issues and support reliable system operation.",
    },
];

const testingServices = [
    "Busduct testing",
    "Electrical panel testing",
    "Switchgear testing",
    "Transformer testing",
    "Electrical system verification",
    "Commissioning support",
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
        title: "Aircraft Warning Lights",
        href: "/services/aircraft-warning-lights",
        number: "05",
    },
];

export default function TestingCommissioningPage() {
    return (
        <main className="min-h-screen bg-white text-[#0b1b31]">


            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative min-h-[82vh] overflow-hidden bg-[#061425]">
                <img
                    src={heroImage}
                    alt="Electrical engineering and testing environment"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#03101e]/75" />

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
                                Service 06
                            </span>
                        </div>

                        <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
                            Testing
                            <br />
                            <span className="text-[#0878df]">& Commissioning.</span>
                        </h1>

                        <div className="mt-8 max-w-2xl border-l-2 border-[#ffbd00] pl-6">
                            <p className="text-lg leading-8 text-white/75 sm:text-xl">
                                Electrical testing and commissioning for busducts, panels,
                                switchgear, transformers and associated electrical systems.
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
                                <TestTube2 size={17} />

                                <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                                    Electrical Verification
                                </span>
                            </div>

                            <p className="max-w-[205px] text-sm leading-6 text-white/70">
                                Testing and commissioning support across critical electrical
                                systems.
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
                                Verify the system
                                <br />
                                before it becomes
                                <br />
                                <span className="text-[#0878df]">
                                    part of the operation.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600">
                                DeltaCare provides electrical testing and commissioning
                                support across busducts, panels, switchgear, transformers and
                                associated electrical systems.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[
                                    ["01", "Inspect"],
                                    ["02", "Test"],
                                    ["03", "Verify"],
                                    ["04", "Commission"],
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
                                    src={testingImage}
                                    alt="Electrical testing equipment"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e]/90 via-transparent to-transparent" />

                                <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center border border-white/30 bg-[#071a2e]/60 backdrop-blur-sm">
                                    <Gauge
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
                                        Technical testing and commissioning support for electrical
                                        systems.
                                    </p>
                                </div>
                            </div>

                            <div className="absolute -bottom-7 -left-7 hidden w-52 bg-[#ffbd00] p-6 sm:block">
                                <ClipboardCheck
                                    size={28}
                                    className="text-[#071a2e]"
                                />

                                <p className="mt-5 text-3xl font-black text-[#071a2e]">
                                    TEST
                                </p>

                                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#071a2e]/70">
                                    Verify before operation
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
                                From inspection
                                <br />
                                to commissioning.
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-slate-500">
                            A structured approach to testing and verifying electrical
                            systems before operational handover.
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
          SYSTEMS COVERED
      ========================================================= */}
            <section className="relative overflow-hidden bg-white py-24 lg:py-32">
                <div className="absolute right-0 top-0 h-80 w-80 bg-[#0878df]/[0.035]" />

                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0878df]">
                                    Systems Covered
                                </span>
                            </div>

                            <h2 className="text-4xl font-black leading-tight tracking-[-0.035em] text-[#071a2e] sm:text-5xl">
                                Testing across
                                <br />
                                critical electrical
                                <br />
                                <span className="text-[#0878df]">
                                    infrastructure.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-base leading-8 text-slate-600">
                                Testing and commissioning support extends across the principal
                                electrical systems covered by DeltaCare's maintenance
                                services.
                            </p>

                            <div className="mt-10 inline-flex items-center gap-3 border border-slate-200 bg-[#f7f9fb] px-5 py-4">
                                <ShieldCheck
                                    size={21}
                                    className="text-[#0878df]"
                                />

                                <span className="text-xs font-bold uppercase tracking-wider text-[#334155]">
                                    Technical verification
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
          TESTING MATRIX
      ========================================================= */}
            <section className="bg-[#eef3f7] py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mb-14">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-12 bg-[#ffbd00]" />

                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0878df]">
                                Electrical Systems
                            </span>
                        </div>

                        <h2 className="text-4xl font-black tracking-[-0.035em] text-[#071a2e] sm:text-5xl">
                            One testing approach.
                            <br />
                            Multiple systems.
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                number: "01",
                                title: "Busducts",
                                text: "Testing support for busduct and busbar electrical distribution systems.",
                                icon: Zap,
                            },
                            {
                                number: "02",
                                title: "Panels",
                                text: "Testing and verification support for electrical panels and associated equipment.",
                                icon: Gauge,
                            },
                            {
                                number: "03",
                                title: "Switchgear",
                                text: "Testing support for switchgear and related electrical distribution equipment.",
                                icon: ShieldCheck,
                            },
                            {
                                number: "04",
                                title: "Transformers",
                                text: "Testing and commissioning support for transformer systems.",
                                icon: Wrench,
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.number}
                                    className="group relative min-h-[300px] overflow-hidden bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="absolute right-0 top-0 h-24 w-24 border-b border-l border-[#0878df]/10 transition group-hover:border-[#0878df]/40" />

                                    <span className="text-5xl font-black text-[#0878df]/10 transition group-hover:text-[#0878df]/20">
                                        {item.number}
                                    </span>

                                    <div className="absolute bottom-7 left-7 right-7">
                                        <Icon
                                            size={23}
                                            className="mb-5 text-[#0878df]"
                                        />

                                        <h3 className="text-xl font-black text-[#10243b]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-500">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
          DARK TESTING SECTION
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
                    <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div className="relative min-h-[530px] overflow-hidden">
                            <img
                                src={heroImage}
                                alt="Electrical engineering testing"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#04111f]/90 via-transparent to-[#04111f]/10" />

                            <div className="absolute left-7 top-7 border border-white/20 bg-[#04111f]/70 px-4 py-3 backdrop-blur-md">
                                <div className="flex items-center gap-2">
                                    <TestTube2
                                        size={16}
                                        className="text-[#ffbd00]"
                                    />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                                        Testing & Diagnostics
                                    </span>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-4xl font-black leading-tight text-white">
                                    Test the system.
                                    <br />
                                    Verify the result.
                                    <br />
                                    <span className="text-[#ffbd00]">
                                        Commission with confidence.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffbd00]">
                                    Testing & Commissioning
                                </span>
                            </div>

                            <h2 className="text-4xl font-black leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                                Technical verification
                                <br />
                                before operation.
                            </h2>

                            <p className="mt-7 max-w-xl text-base leading-8 text-white/55">
                                Testing and commissioning provide an important verification
                                stage for electrical systems, helping identify issues and
                                establish that equipment is ready for its intended operation.
                            </p>

                            <div className="mt-9 space-y-3">
                                {testingServices.map((item, index) => (
                                    <div
                                        key={item}
                                        className="group flex items-center justify-between border-b border-white/10 py-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-bold text-[#0878df]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="font-semibold text-white/80 transition group-hover:text-white">
                                                {item}
                                            </span>
                                        </div>

                                        <ChevronRight
                                            size={17}
                                            className="text-white/25 transition group-hover:translate-x-1 group-hover:text-[#ffbd00]"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-9 flex items-start gap-4 border-l-2 border-[#0878df] bg-white/[0.04] p-5">
                                <ClipboardCheck
                                    size={22}
                                    className="mt-0.5 shrink-0 text-[#0878df]"
                                />

                                <p className="text-sm leading-6 text-white/55">
                                    Testing and commissioning activities should follow the
                                    applicable equipment requirements, project procedures and
                                    appropriate electrical safety practices.
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
                                Explore the complete
                                <br />
                                service range.
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
                                Need electrical testing or commissioning support?
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