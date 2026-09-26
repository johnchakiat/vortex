"use client";

import { useEffect, useRef, useState } from "react";
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    ClipboardCheck,
    Gauge,
    ShieldCheck,
    Wrench,
    Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";

{/* =======================================================
    ABOUT US HERO
======================================================= */}

<section className="relative flex min-h-[480px] items-center overflow-hidden bg-[#07111f]">

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

    <div className="pointer-events-none absolute left-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#0878df]/10 blur-[120px]" />

    <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.05]" />
    <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.05]" />

    <div className="vortex-container relative z-10">

        <div className="flex items-center gap-4">

            <span className="h-px w-12 bg-[#ffbd00]" />

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffbd00]">
                DeltaCare
            </span>

        </div>

        <h1 className="mt-8 text-6xl font-bold leading-none tracking-[-0.055em] text-white sm:text-7xl lg:text-[96px]">
            About{" "}
            <span className="text-[#0878df]">
                Us.
            </span>
        </h1>

    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0878df]/40" />

</section>

/* =========================================================
   HELPERS
========================================================= */

function clamp(value: number, min = 0, max = 1) {
    return Math.max(min, Math.min(max, value));
}

function smoothstep(value: number) {
    const x = clamp(value);
    return x * x * (3 - 2 * x);
}

function lerp(start: number, end: number, amount: number) {
    return start + (end - start) * clamp(amount);
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function Reveal({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -60px 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                transitionDelay: `${delay}ms`,
            }}
            className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
                } ${className}`}
        >
            {children}
        </div>
    );
}

/* =========================================================
   SCENE PROGRESS
========================================================= */

function useSceneProgress(
    ref: React.RefObject<HTMLElement | null>
) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            const element = ref.current;

            if (!element) return;

            const rect = element.getBoundingClientRect();

            const totalDistance =
                element.offsetHeight - window.innerHeight;

            if (totalDistance <= 0) {
                setProgress(0);
                return;
            }

            const raw = -rect.top / totalDistance;

            setProgress(clamp(raw));
        };

        const handleScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(update);
        };

        update();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", handleScroll);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [ref]);

    return progress;
}

/* =========================================================
   SLIDING CONTENT
========================================================= */

const aboutSlides = [
    {
        number: "01",
        eyebrow: "Who We Are",
        title: "Keeping critical electrical systems",
        highlight: "ready for operation.",
        text: "DeltaCare focuses on the maintenance, inspection and technical care of busbar and busduct electrical systems, helping keep critical power distribution infrastructure dependable.",
        icon: Zap,
    },
    {
        number: "02",
        eyebrow: "Our Approach",
        title: "Maintenance built around",
        highlight: "prevention.",
        text: "We approach maintenance with attention to system condition, potential issues and practical corrective action — helping identify problems before they become larger operational concerns.",
        icon: Wrench,
    },
    {
        number: "03",
        eyebrow: "Our Expertise",
        title: "Focused knowledge of",
        highlight: "busbar systems.",
        text: "Our work is centred around busbar and busduct infrastructure, with a practical focus on inspection, maintenance, testing and restoring systems to reliable working condition.",
        icon: Gauge,
    },
    {
        number: "04",
        eyebrow: "Our Commitment",
        title: "Reliable service for",
        highlight: "critical infrastructure.",
        text: "DeltaCare is built around careful technical work, clear communication and a commitment to helping electrical systems operate safely and reliably over their service life.",
        icon: ShieldCheck,
    },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const reasons = [
    {
        number: "01",
        icon: Wrench,
        title: "Busbar Maintenance",
        text: "Focused maintenance services for busbar and busduct electrical distribution systems.",
    },
    {
        number: "02",
        icon: ClipboardCheck,
        title: "Detailed Inspection",
        text: "Systematic inspection helps identify visible condition issues and areas that require attention.",
    },
    {
        number: "03",
        icon: ShieldCheck,
        title: "Safety Focus",
        text: "Maintenance work is approached with attention to electrical safety, system condition and dependable operation.",
    },
    {
        number: "04",
        icon: Gauge,
        title: "Practical Technical Work",
        text: "Solutions are centred on practical maintenance requirements rather than unnecessary complexity.",
    },
    {
        number: "05",
        icon: CheckCircle2,
        title: "Reliable Service",
        text: "A service-focused approach designed to support the continued operation of critical electrical infrastructure.",
    },
    {
        number: "06",
        icon: Zap,
        title: "Electrical System Focus",
        text: "A dedicated focus on power distribution infrastructure and the systems that keep facilities operating.",
    },
];

/* =========================================================
   ABOUT US PAGE
========================================================= */

export default function AboutUsPage() {
    const slidingSectionRef = useRef<HTMLElement>(null);

    const progress = useSceneProgress(slidingSectionRef);

    const slidePosition =
        progress * (aboutSlides.length - 1);

    const activeSlide = Math.min(
        aboutSlides.length - 1,
        Math.round(slidePosition)
    );

    return (
        <main className="min-h-screen bg-white text-[#172033]">

            {/* =====================================================
                NAVBAR
            ===================================================== */}



            {/* =====================================================
    ABOUT US HERO
===================================================== */}
            {/* =====================================================
    ABOUT US HERO
===================================================== */}

            <section className="relative min-h-[560px] overflow-hidden bg-[#07111f]">

                {/* HERO IMAGE */}

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/10871737/pexels-photo-10871737.jpeg?cs=srgb&dl=pexels-annaszakaria-10871737.jpg&fm=jpg')",
                    }}
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-[#07111f]/75" />

                {/* Stronger left-side gradient for text */}

                <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/70 to-[#07111f]/30" />

                {/* Technical grid */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
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

                {/* Blue glow */}

                <div className="pointer-events-none absolute left-[5%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#0878df]/15 blur-[130px]" />

                {/* Side architectural lines */}

                <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.08]" />

                <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.06]" />

                {/* CONTENT */}

                <div className="vortex-container relative z-10 flex min-h-[560px] items-center py-28 sm:py-32 lg:py-36">

                    <div className="max-w-4xl">

                        {/* Label */}

                        <div className="flex items-center gap-4">

                            <span className="h-px w-12 bg-[#ffbd00]" />

                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffbd00]">
                                DeltaCare
                            </span>

                        </div>

                        {/* Main title */}

                        <h1 className="mt-8 text-6xl font-bold leading-[0.88] tracking-[-0.055em] text-white sm:text-7xl lg:text-[100px]">

                            About

                            <br />

                            <span className="text-[#0878df]">
                                Us.
                            </span>

                        </h1>

                        {/* Supporting text */}

                        <div className="mt-10 flex max-w-2xl items-start gap-5">

                            <span className="mt-1 h-14 w-[2px] shrink-0 bg-[#ffbd00]" />

                            <p className="text-base leading-8 text-white/65 sm:text-lg">
                                Focused on keeping critical electrical
                                systems maintained, inspected and ready
                                for reliable operation.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Bottom accent */}

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0878df]/60" />

                {/* Small image credit */}

                <div className="absolute bottom-5 right-8 z-20 font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
                    Electrical maintenance
                </div>

            </section>
            {/* =====================================================
    SMALL ABOUT INTRO
===================================================== */}

            <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">

                {/* subtle technical grid */}

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

                    <Reveal>

                        <div className="max-w-5xl">

                            <div className="flex items-center gap-4">

                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#0878df]">
                                    About DeltaCare
                                </span>

                            </div>

                            <div className="mt-7 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                                <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.045em] text-[#172033] sm:text-5xl lg:text-6xl">

                                    Built around

                                    <br />

                                    <span className="text-[#0878df]">
                                        electrical reliability.
                                    </span>

                                </h1>

                                <div className="max-w-2xl">

                                    <p className="text-base leading-8 text-[#667085] sm:text-lg">
                                        DeltaCare provides specialised maintenance
                                        support for busbar and busduct electrical
                                        systems. Our work is focused on keeping
                                        critical power distribution infrastructure
                                        properly maintained, inspected and ready
                                        for dependable operation.
                                    </p>

                                    <p className="mt-5 text-base leading-8 text-[#667085]">
                                        From routine maintenance to identifying
                                        potential issues within an electrical
                                        distribution system, our approach is
                                        practical, technical and focused on
                                        long-term system reliability.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </Reveal>

                </div>

            </section>

            {/* =====================================================
                SLIDING ABOUT SECTION
            ===================================================== */}

            <section
                ref={slidingSectionRef}
                className="relative h-[480vh] bg-[#07111f]"
            >

                <div className="sticky top-0 h-screen overflow-hidden">

                    {/* =================================================
                        BACKGROUND
                    ================================================= */}

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

                    <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.045]" />

                    <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.045]" />

                    {/* =================================================
                        TOP LABEL
                    ================================================= */}

                    <div className="absolute left-0 right-0 top-8 z-30">

                        <div className="vortex-container flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffbd00]">
                                    DeltaCare
                                </span>

                            </div>

                            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-white/30">

                                {String(activeSlide + 1).padStart(2, "0")}

                                {" / "}

                                {String(aboutSlides.length).padStart(2, "0")}

                            </span>

                        </div>

                    </div>

                    {/* =================================================
                        SLIDING CONTENT
                    ================================================= */}

                    <div className="absolute inset-x-0 top-[18%] bottom-[15%]">

                        <div className="vortex-container relative h-full">

                            {aboutSlides.map((slide, index) => {

                                const distance =
                                    index - slidePosition;

                                const absoluteDistance =
                                    Math.abs(distance);

                                const visibility = clamp(
                                    1 -
                                    absoluteDistance /
                                    0.9
                                );

                                const easedVisibility =
                                    smoothstep(visibility);

                                const x =
                                    distance * 900;

                                const y =
                                    distance * 22;

                                const scale = lerp(
                                    0.88,
                                    1,
                                    easedVisibility
                                );

                                const Icon = slide.icon;

                                return (
                                    <div
                                        key={slide.number}
                                        className="pointer-events-none absolute inset-0"
                                        style={{
                                            opacity:
                                                easedVisibility,
                                            transform: `
                                                translate3d(
                                                    ${x}px,
                                                    ${y}px,
                                                    0
                                                )
                                                scale(${scale})
                                            `,
                                            willChange:
                                                "transform, opacity",
                                        }}
                                    >

                                        <div className="grid h-full items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

                                            {/* =================================================
                                                LEFT
                                            ================================================= */}

                                            <div className="lg:text-right">

                                                <div className="flex items-center gap-4 lg:justify-end">

                                                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0878df]">
                                                        {slide.eyebrow}
                                                    </span>

                                                    <span className="hidden h-px w-12 bg-[#0878df] lg:block" />

                                                </div>

                                                <div className="mt-8 font-mono text-[100px] font-bold leading-none tracking-[-0.08em] text-white/10 sm:text-[140px] lg:text-[180px]">

                                                    {slide.number}

                                                </div>

                                            </div>

                                            {/* =================================================
                                                RIGHT CARD
                                            ================================================= */}

                                            <div className="relative max-w-2xl border border-white/10 bg-[#0c1828]/95 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.4)] backdrop-blur-md sm:p-10 lg:p-12">

                                                <div className="absolute left-0 top-0 h-[2px] w-24 bg-[#ffbd00]" />

                                                <div className="flex h-12 w-12 items-center justify-center border border-[#0878df]/30 bg-[#0878df]/10">

                                                    <Icon
                                                        size={21}
                                                        className="text-[#0878df]"
                                                    />

                                                </div>

                                                <h2 className="mt-8 max-w-xl text-3xl font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">

                                                    {slide.title}

                                                    <br />

                                                    <span className="text-[#0878df]">
                                                        {slide.highlight}
                                                    </span>

                                                </h2>

                                                <p className="mt-7 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
                                                    {slide.text}
                                                </p>

                                                <div className="mt-10 flex items-center gap-4">

                                                    <span className="h-px w-12 bg-[#ffbd00]" />

                                                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                                                        Electrical maintenance
                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                    {/* =================================================
                        SLIDE INDICATORS
                    ================================================= */}

                    <div className="absolute bottom-[9%] left-0 right-0">

                        <div className="vortex-container">

                            <div className="grid grid-cols-4 border-t border-white/10">

                                {aboutSlides.map(
                                    (slide, index) => {

                                        const point =
                                            index /
                                            (aboutSlides.length - 1);

                                        const active =
                                            Math.abs(
                                                slidePosition -
                                                index
                                            ) < 0.5;

                                        return (
                                            <div
                                                key={slide.number}
                                                className="relative py-4"
                                            >

                                                <div
                                                    className={`absolute left-0 right-0 top-[-1px] h-[2px] ${active
                                                        ? "bg-[#ffbd00]"
                                                        : "bg-transparent"
                                                        }`}
                                                />

                                                <div className="flex items-center justify-between">

                                                    <span
                                                        className={`font-mono text-[10px] font-bold ${active
                                                            ? "text-[#ffbd00]"
                                                            : "text-white/20"
                                                            }`}
                                                    >
                                                        {slide.number}
                                                    </span>

                                                    <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-white/15 sm:block">
                                                        {slide.eyebrow}
                                                    </span>

                                                </div>

                                                <div
                                                    className="absolute bottom-0 left-0 h-px bg-[#0878df]"
                                                    style={{
                                                        width:
                                                            progress >=
                                                                point
                                                                ? "100%"
                                                                : "0%",
                                                    }}
                                                />

                                            </div>
                                        );
                                    }
                                )}

                            </div>

                        </div>

                    </div>

                    {/* =================================================
                        SCROLL PROMPT
                    ================================================= */}

                    <div
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/20 md:bottom-8"
                        style={{
                            opacity:
                                progress > 0.9
                                    ? 0
                                    : 1,
                        }}
                    >
                        Continue scrolling
                    </div>

                </div>

            </section>

            {/* =====================================================
                WHY CHOOSE US
            ===================================================== */}

            <section className="relative overflow-hidden bg-white py-28 sm:py-36 lg:py-44">

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

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <Reveal>

                        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24">

                            <div>

                                <div className="flex items-center gap-4">

                                    <span className="h-px w-12 bg-[#0878df]" />

                                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#0878df]">
                                        Why DeltaCare
                                    </span>

                                </div>

                                <h2 className="mt-7 text-5xl font-bold leading-[0.93] tracking-[-0.055em] text-[#172033] sm:text-6xl lg:text-[76px]">

                                    Why choose

                                    <br />

                                    <span className="text-[#0878df]">
                                        DeltaCare?
                                    </span>

                                </h2>

                            </div>

                            <p className="max-w-xl text-base leading-8 text-[#667085] sm:text-lg">

                                Electrical distribution systems are critical
                                to the operation of a facility. DeltaCare
                                brings a focused maintenance approach to
                                busbar and busduct systems, with attention
                                to reliability, safety and practical
                                technical requirements.

                            </p>

                        </div>

                    </Reveal>

                    {/* =================================================
                        REASONS GRID
                    ================================================= */}

                    <div className="mt-20 grid border-l border-t border-[#e3e8ef] sm:grid-cols-2 lg:grid-cols-3">

                        {reasons.map(
                            (reason, index) => {

                                const Icon = reason.icon;

                                return (
                                    <Reveal
                                        key={reason.number}
                                        delay={index * 70}
                                        className="h-full"
                                    >

                                        <div className="group relative h-full min-h-[270px] border-b border-r border-[#e3e8ef] bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-[#f8fafc] sm:p-9 lg:p-10">

                                            {/* top accent */}

                                            <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#0878df] transition-all duration-500 group-hover:w-full" />

                                            <div className="flex items-start justify-between">

                                                <div className="flex h-11 w-11 items-center justify-center border border-[#0878df]/20 bg-[#0878df]/5">

                                                    <Icon
                                                        size={20}
                                                        className="text-[#0878df]"
                                                    />

                                                </div>

                                                <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#b5bdc9]">
                                                    {reason.number}
                                                </span>

                                            </div>

                                            <h3 className="mt-10 text-xl font-bold tracking-[-0.02em] text-[#172033]">
                                                {reason.title}
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-[#667085]">
                                                {reason.text}
                                            </p>

                                        </div>

                                    </Reveal>
                                );
                            }
                        )}

                    </div>

                </div>

            </section>

            {/* =====================================================
                SIMPLE CTA
            ===================================================== */}

            <section className="relative overflow-hidden bg-[#07111f] py-24 sm:py-32">

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

                    <Reveal>

                        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">

                            <div>

                                <div className="flex items-center gap-4">

                                    <span className="h-px w-12 bg-[#ffbd00]" />

                                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                        DeltaCare
                                    </span>

                                </div>

                                <h2 className="mt-7 max-w-3xl text-4xl font-bold leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl">

                                    Keep your electrical
                                    <br />

                                    systems
                                    <span className="text-[#0878df]">
                                        {" "}ready.
                                    </span>

                                </h2>

                                <p className="mt-7 max-w-xl text-base leading-7 text-white/45">
                                    Talk to DeltaCare about busbar,
                                    busduct and electrical maintenance
                                    requirements.
                                </p>

                            </div>

                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-4 border border-white/15 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.17em] text-white transition-all duration-300 hover:border-[#ffbd00] hover:bg-[#ffbd00] hover:text-[#172033]"
                            >

                                Contact DeltaCare

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />

                            </a>

                        </div>

                    </Reveal>

                </div>

            </section>

        </main>
    );
}