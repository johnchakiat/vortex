"use client";

import { useEffect, useRef, useState } from "react";
import {
    ArrowDown,
    ArrowUpRight,
    Award,
    Building2,
    Compass,
    Eye,
    Lightbulb,
    Target,
    Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";

/* =========================================================
   TYPES
========================================================= */

type TimelineItem = {
    year: string;
    date: string;
    text: string;
};

/* =========================================================
   TIMELINE DATA
========================================================= */

const timeline: TimelineItem[] = [
    {
        year: "2004",
        date: "January 2004",
        text: "Gets launched as online martketplace merchant.",
    },
    {
        year: "2006",
        date: "May 2006",
        text: "Attracts first investor, Herba Beauty Care, and receives $10 million investment",
    },
    {
        year: "2008",
        date: "December 2008",
        text: "Gets $45 million more as Bison Coporation Partners jumps on the investment bandwagon",
    },
    {
        year: "2012",
        date: "February 2012",
        text: "Gets launched as online martketplace merchant.",
    },
    {
        year: "2015",
        date: "September 2015",
        text: "Gets launched as online martketplace merchant.",
    },
    {
        year: "2017",
        date: "July 2017",
        text: "Gets launched as online martketplace merchant.",
    },
];

/* =========================================================
   LEADERS
========================================================= */

const leaders = [
    {
        name: "Leadership Team",
        role: "Engineering & Project Delivery",
    },
    {
        name: "Leadership Team",
        role: "Engineering Consultancy",
    },
    {
        name: "Leadership Team",
        role: "Technical Management",
    },
    {
        name: "Leadership Team",
        role: "Project Coordination",
    },
];

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
                rootMargin: "0px 0px -80px 0px",
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
            className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
                } ${className}`}
        >
            {children}
        </div>
    );
}

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
   ABOUT US PAGE
========================================================= */

export default function AboutUsPage() {
    /* =======================================================
       TIMELINE ONLY
    ======================================================= */

    const timelineRef = useRef<HTMLElement>(null);

    const timelineProgress =
        useSceneProgress(timelineRef);

    const timelinePosition =
        timelineProgress * (timeline.length - 1);

    const activeTimelineIndex = Math.min(
        timeline.length - 1,
        Math.round(timelinePosition)
    );

    return (
        <main className="min-h-screen bg-[#f8fafc] text-[#172033]">

            {/* =======================================================
                NAVBAR
            ======================================================= */}

            <Navbar />

            {/* =======================================================
                ABOUT HERO
            ======================================================= */}

            <section className="relative flex min-h-[calc(100vh-250px)] items-center overflow-hidden bg-[#07111f]">

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.055]"
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

                <div className="pointer-events-none absolute left-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#0878df]/10 blur-[120px]" />

                <div className="pointer-events-none absolute bottom-[-120px] right-[8%] h-[500px] w-[500px] rounded-full bg-[#ffbd00]/5 blur-[130px]" />

                <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.06]" />

                <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.06]" />

                <div className="vortex-container relative z-10 py-24 sm:py-32 lg:py-40">

                    <div className="flex items-center gap-4">

                        <span className="h-px w-14 bg-[#ffbd00]" />

                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffbd00]">
                            About Vortex
                        </span>

                    </div>

                    <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[0.94] tracking-[-0.055em] text-white sm:text-7xl lg:text-[92px]">

                        Engineering

                        <br />

                        <span className="text-[#0878df]">
                            with purpose.
                        </span>

                    </h1>

                    <div className="mt-10 flex max-w-3xl items-start gap-5">

                        <span className="mt-2 h-12 w-[2px] shrink-0 bg-[#ffbd00]" />

                        <p className="text-base leading-8 text-white/55 sm:text-lg">
                            Discover Vortex Enveco Consultancy LLC — an engineering
                            consultancy specialising in Vertical Transport, MEP and BIM
                            engineering solutions.
                        </p>

                    </div>

                    <div className="mt-16 flex items-center gap-4 text-white/35">

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                            <ArrowDown size={16} />
                        </span>

                        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                            Scroll to explore
                        </span>

                    </div>

                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0878df]/40" />

            </section>

            {/* =======================================================
                INTRO / WHO WE ARE
            ======================================================= */}

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

                    <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28">

                        <div>

                            <div className="flex items-center gap-4">

                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0878df]">
                                    Who We Are
                                </span>

                            </div>

                            <h2 className="mt-7 text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-[#172033] sm:text-6xl lg:text-7xl">

                                Greetings from

                                <br />

                                <span className="text-[#0878df]">
                                    Vortex Enveco.
                                </span>

                            </h2>

                        </div>

                        <div className="flex items-end">

                            <p className="max-w-2xl text-lg leading-8 text-[#667085] sm:text-xl">
                                VEC LLC is an engineering consultancy specialising in
                                Vertical Transport, MEP and BIM engineering solutions. With
                                extensive experience, we provide comprehensive engineering
                                services through our back office in India, supporting
                                projects from concept design to construction supervision.
                            </p>

                        </div>

                    </div>

                    <div className="mt-20 grid gap-6 lg:grid-cols-2">

                        <div className="group relative min-h-[460px] overflow-hidden bg-[#07111f]">

                            <img
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85"
                                alt="Engineering and architecture"
                                className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-[1200ms] group-hover:scale-105 group-hover:opacity-70"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/45 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">

                                <div className="flex items-center gap-3">

                                    <Building2
                                        size={18}
                                        className="text-[#ffbd00]"
                                    />

                                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                        Engineering Consultancy
                                    </span>

                                </div>

                                <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white">

                                    From concept

                                    <br />

                                    to construction.

                                </h3>

                            </div>

                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">

                            <div className="border border-[#e4eaf1] bg-[#f8fafc] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#0878df]/40">

                                <Target
                                    className="text-[#0878df]"
                                    size={25}
                                />

                                <h3 className="mt-8 text-xl font-bold text-[#172033]">
                                    Our Mission
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#667085]">
                                    Our mission is to deliver high-quality engineering solutions
                                    through technical excellence, practical design, and coordinated
                                    project delivery. We aim to support our clients from concept
                                    design through construction with reliable Vertical Transport,
                                    MEP and BIM engineering services.
                                </p>

                            </div>

                            <div className="border border-[#e4eaf1] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:border-[#ffbd00]/50">

                                <Compass
                                    className="text-[#ffbd00]"
                                    size={25}
                                />

                                <h3 className="mt-8 text-xl font-bold text-[#172033]">
                                    Our Approach
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#667085]">
                                    Practical engineering, coordinated disciplines and
                                    technical accuracy throughout every stage of a project.
                                </p>

                            </div>

                            <div className="border border-[#e4eaf1] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:border-[#0878df]/40">

                                <Eye
                                    className="text-[#0878df]"
                                    size={25}
                                />

                                <h3 className="mt-8 text-xl font-bold text-[#172033]">
                                    Our Vision
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#667085]">
                                    Creating coordinated engineering solutions that support
                                    better-performing buildings and successful project
                                    delivery.
                                </p>

                            </div>

                            <div className="border border-[#e4eaf1] bg-[#07111f] p-8 transition duration-500 hover:-translate-y-2">

                                <Lightbulb
                                    className="text-[#ffbd00]"
                                    size={25}
                                />

                                <h3 className="mt-8 text-xl font-bold text-white">
                                    Our Expertise
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    Vertical Transport, MEP and BIM engineering solutions
                                    supported by a dedicated back-office team in India.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =======================================================
                TIMELINE
                FIXED OVERLAP VERSION
            ======================================================= */}

            <section
                ref={timelineRef}
                className="relative h-[650vh] bg-[#07111f]"
            >

                <div className="sticky top-0 z-10 h-screen overflow-hidden">

                    {/* =================================================
                        BACKGROUND GRID
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

                    {/* ARCHITECTURAL LINES */}

                    <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.045]" />

                    <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.045]" />

                    {/* =================================================
                        TOP HEADER
                    ================================================= */}

                    <div className="absolute left-0 right-0 top-9 z-30">

                        <div className="vortex-container flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                    Our Journey
                                </span>

                            </div>

                            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-white/30">

                                {String(
                                    activeTimelineIndex + 1
                                ).padStart(2, "0")}

                                {" / "}

                                {String(
                                    timeline.length
                                ).padStart(2, "0")}

                            </span>

                        </div>

                    </div>

                    {/* =================================================
                        INTRO TITLE

                        IMPORTANT:
                        The intro is now completely separated from
                        the timeline cards vertically.
                    ================================================= */}

                    <div
                        className="absolute left-0 right-0 top-[14%] z-10"
                        style={{
                            opacity: lerp(
                                1,
                                0,
                                smoothstep(
                                    clamp(
                                        (timelineProgress - 0.06) * 7
                                    )
                                )
                            ),

                            transform: `
                                translate3d(
                                    0,
                                    ${lerp(
                                0,
                                -70,
                                smoothstep(
                                    clamp(
                                        (timelineProgress - 0.06) * 6
                                    )
                                )
                            )}px,
                                    0
                                )
                            `,
                        }}
                    >

                        <div className="vortex-container">

                            <h2 className="max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.055em] text-white sm:text-7xl lg:text-[82px]">

                                Discover

                                <br />

                                <span className="text-[#0878df]">
                                    VORTEX ENVECO LLC.
                                </span>

                            </h2>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
                                Explore the milestones and moments that
                                define the company&apos;s journey.
                            </p>

                        </div>

                    </div>

                    {/* =================================================
                        CENTRAL TIMELINE LINE
                    ================================================= */}

                    <div className="absolute left-1/2 top-[36%] hidden h-[43%] -translate-x-1/2 lg:block">

                        {/* BASE LINE */}

                        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

                        {/* ACTIVE LINE */}

                        <div
                            className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-[#0878df]"
                            style={{
                                height: `${timelineProgress * 100}%`,
                            }}
                        />

                        {/* DOTS */}

                        {timeline.map((item, index) => {

                            const point =
                                index /
                                (timeline.length - 1);

                            const distance =
                                Math.abs(
                                    timelinePosition - index
                                );

                            const active =
                                distance < 0.45;

                            return (
                                <div
                                    key={item.year}
                                    className="absolute left-1/2 -translate-x-1/2"
                                    style={{
                                        top: `${point * 100}%`,
                                    }}
                                >

                                    <div
                                        className={`h-4 w-4 rounded-full border-2 ${active
                                            ? "border-[#07111f] bg-[#0878df] shadow-[0_0_0_7px_rgba(8,120,223,0.12),0_0_30px_rgba(8,120,223,0.45)]"
                                            : "border-[#07111f] bg-white/20"
                                            }`}
                                    />

                                </div>
                            );
                        })}

                    </div>

                    {/* =================================================
                        TIMELINE CARDS

                        IMPORTANT FIXES:
                        - Cards start lower.
                        - Cards travel farther horizontally.
                        - Neighboring cards are more separated.
                        - Vertical movement is reduced.
                    ================================================= */}

                    <div className="absolute inset-x-0 top-[39%]">

                        <div className="vortex-container">

                            <div className="relative h-[400px]">

                                {timeline.map(
                                    (item, index) => {

                                        const distance =
                                            index -
                                            timelinePosition;

                                        const absoluteDistance =
                                            Math.abs(distance);

                                        /*
                                         * Only the current milestone
                                         * and its immediate neighbors
                                         * participate in the transition.
                                         */

                                        const visibility =
                                            clamp(
                                                1 -
                                                absoluteDistance /
                                                0.95
                                            );

                                        const easedVisibility =
                                            smoothstep(
                                                visibility
                                            );

                                        /*
                                         * Much larger horizontal
                                         * separation prevents cards
                                         * from sitting on top of each
                                         * other.
                                         */

                                        const x =
                                            distance * 760;

                                        /*
                                         * Keep cards almost level.
                                         * This prevents the giant year
                                         * from colliding with another
                                         * card vertically.
                                         */

                                        const y =
                                            distance * 25;

                                        /*
                                         * Current card = 1
                                         * Neighbor = smaller
                                         */

                                        const scale =
                                            lerp(
                                                0.88,
                                                1,
                                                easedVisibility
                                            );

                                        const opacity =
                                            easedVisibility;

                                        return (
                                            <div
                                                key={item.year}
                                                className="pointer-events-none absolute inset-0"
                                                style={{
                                                    opacity,

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

                                                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">

                                                    {/* =================================================
                                                        YEAR
                                                    ================================================= */}

                                                    <div className="pr-6 lg:pr-0 lg:text-right">

                                                        <div className="font-mono text-[80px] font-bold leading-none tracking-[-0.08em] text-white sm:text-[110px] lg:text-[145px]">

                                                            {item.year}

                                                        </div>

                                                        <div className="mt-5 flex items-center gap-3 lg:justify-end">

                                                            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">

                                                                Milestone{" "}

                                                                {String(
                                                                    index + 1
                                                                ).padStart(
                                                                    2,
                                                                    "0"
                                                                )}

                                                            </span>

                                                            <span className="h-px w-12 bg-[#ffbd00]" />

                                                        </div>

                                                    </div>

                                                    {/* =================================================
                                                        CARD
                                                    ================================================= */}

                                                    <div className="pl-0">

                                                        <div className="relative max-w-lg border border-white/10 bg-[#0c1828]/95 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-9">

                                                            <div className="absolute left-0 top-0 h-[2px] w-20 bg-[#ffbd00]" />

                                                            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#0878df]">

                                                                Vortex timeline

                                                            </span>

                                                            <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">

                                                                {item.date}

                                                            </h3>

                                                            <p className="mt-5 max-w-lg text-sm leading-7 text-white/50 sm:text-base">

                                                                {item.text}

                                                            </p>

                                                            <div className="mt-8 flex items-center gap-3">

                                                                <span className="h-px w-10 bg-[#0878df]" />

                                                                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">

                                                                    VORTEX ENVECO LLC

                                                                </span>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        );
                                    }
                                )}

                            </div>

                        </div>

                    </div>

                    {/* =================================================
                        YEAR BAR
                    ================================================= */}

                    <div className="absolute bottom-[8%] left-0 right-0 z-20">

                        <div className="vortex-container">

                            <div className="grid grid-cols-6 border-t border-white/10">

                                {timeline.map(
                                    (item, index) => {

                                        const point =
                                            index /
                                            (timeline.length - 1);

                                        const distance =
                                            Math.abs(
                                                timelinePosition -
                                                index
                                            );

                                        const active =
                                            distance < 0.5;

                                        return (
                                            <div
                                                key={item.year}
                                                className="relative py-4"
                                            >

                                                <div
                                                    className={`absolute left-0 right-0 top-[-1px] h-[2px] ${active
                                                        ? "bg-[#ffbd00]"
                                                        : "bg-transparent"
                                                        }`}
                                                />

                                                <span
                                                    className={`font-mono text-xs font-bold ${active
                                                        ? "text-[#ffbd00]"
                                                        : "text-white/20"
                                                        }`}
                                                >
                                                    {item.year}
                                                </span>

                                                <div
                                                    className="absolute bottom-0 left-0 h-[1px] bg-[#0878df]"
                                                    style={{
                                                        width: `${timelineProgress >=
                                                            point
                                                            ? 100
                                                            : 0
                                                            }%`,
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
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/20"
                        style={{
                            opacity:
                                timelineProgress > 0.9
                                    ? 0
                                    : 1,
                        }}
                    >
                        Continue scrolling
                    </div>

                </div>

            </section>

            {/* =======================================================
                LEADERS
            ======================================================= */}

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

                    <div className="flex items-center gap-4">

                        <span className="h-px w-12 bg-[#0878df]" />

                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0878df]">
                            Leadership
                        </span>

                    </div>

                    <div className="mt-7 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

                        <h2 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-[#172033] sm:text-7xl">

                            Meet our

                            <br />

                            <span className="text-[#0878df]">
                                leaders.
                            </span>

                        </h2>

                        <p className="max-w-md text-base leading-7 text-[#667085]">
                            Experienced leadership supporting the company&apos;s engineering
                            capabilities and project delivery.
                        </p>

                    </div>

                    <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {leaders.map(
                            (leader, index) => (
                                <div
                                    key={`${leader.name}-${index}`}
                                    className="group overflow-hidden border border-[#e4eaf1] bg-white transition-all duration-700 hover:-translate-y-3 hover:border-[#0878df]/40 hover:shadow-[0_25px_60px_rgba(7,17,31,0.08)]"
                                >

                                    <div className="relative aspect-[0.9] overflow-hidden bg-[#e9eef3]">

                                        <img
                                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85"
                                            alt={leader.name}
                                            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-transparent to-transparent opacity-70" />

                                        <span className="absolute left-5 top-5 font-mono text-[10px] font-bold tracking-[0.15em] text-white/60">
                                            0{index + 1}
                                        </span>

                                    </div>

                                    <div className="p-6">

                                        <h3 className="text-lg font-bold text-[#172033]">
                                            {leader.name}
                                        </h3>

                                        <p className="mt-2 font-mono text-[9px] font-bold uppercase tracking-[0.17em] text-[#0878df]">
                                            {leader.role}
                                        </p>

                                    </div>

                                </div>
                            )
                        )}

                    </div>

                    <div className="mt-10 flex justify-end">

                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 border border-[#172033] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#172033] transition hover:bg-[#172033] hover:text-white"
                        >

                            Become Member in Team

                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />

                        </a>

                    </div>

                </div>

            </section>

            {/* =======================================================
    AWARDS
======================================================= */}

            <section className="relative overflow-hidden bg-[#07111f] py-28 sm:py-36 lg:py-44">

                {/* BACKGROUND GRID */}
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

                {/* ARCHITECTURAL SIDE LINES */}
                <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.045]" />
                <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.045]" />

                <div className="vortex-container relative">

                    {/* =================================================
            HEADER
        ================================================= */}

                    <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

                        <div>

                            <div className="flex items-center gap-4">

                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                    Recognition
                                </span>

                            </div>

                            <h2 className="mt-7 text-5xl font-bold leading-[0.92] tracking-[-0.055em] text-white sm:text-7xl lg:text-[82px]">

                                Awards &

                                <br />

                                <span className="text-[#0878df]">
                                    Recognition.
                                </span>

                            </h2>

                        </div>

                        <div className="pb-2">

                            <p className="max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                                Industry recognition reflects the relationships,
                                standards and professional work delivered across
                                our projects.
                            </p>

                        </div>

                    </div>

                    {/* =================================================
            COMPANY LOGOS
        ================================================= */}

                    <div className="mt-20">

                        <div className="grid grid-cols-2 border-y border-white/10 sm:grid-cols-3 lg:grid-cols-5">

                            {/* LINUM CONSULT */}
                            <div className="group relative flex h-[170px] items-center justify-center border-b border-white/10 px-8 transition-all duration-500 hover:bg-white/[0.025] sm:border-r lg:border-b-0">

                                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#0878df] transition-all duration-500 group-hover:w-full" />

                                <img
                                    src="/awards/linum-consult.png"
                                    alt="Linum Consult"
                                    className="max-h-[70px] max-w-[170px] w-auto object-contain opacity-45 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                                />

                            </div>

                            {/* SURVATION */}
                            <div className="group relative flex h-[170px] items-center justify-center border-b border-white/10 px-8 transition-all duration-500 hover:bg-white/[0.025] lg:border-b-0 lg:border-r">

                                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#ffbd00] transition-all duration-500 group-hover:w-full" />

                                <img
                                    src="/awards/survation.png"
                                    alt="Survation"
                                    className="max-h-[70px] max-w-[170px] w-auto object-contain opacity-45 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                                />

                            </div>

                            {/* CONESTOGA */}
                            <div className="group relative flex h-[170px] items-center justify-center border-b border-white/10 px-8 transition-all duration-500 sm:border-r lg:border-b-0">

                                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#0878df] transition-all duration-500 group-hover:w-full" />

                                <img
                                    src="/awards/conestoga.png"
                                    alt="Conestoga"
                                    className="max-h-[70px] max-w-[170px] w-auto object-contain opacity-45 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                                />

                            </div>

                            {/* G4S */}
                            <div className="group relative flex h-[170px] items-center justify-center border-b border-white/10 px-8 transition-all duration-500 lg:border-b-0 lg:border-r">

                                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#ffbd00] transition-all duration-500 group-hover:w-full" />

                                <img
                                    src="/awards/g4s.png"
                                    alt="G4S"
                                    className="max-h-[70px] max-w-[170px] w-auto object-contain opacity-45 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                                />

                            </div>

                            {/* ISR */}
                            <div className="group relative flex h-[170px] items-center justify-center border-b border-white/10 px-8 transition-all duration-500 sm:col-span-2 lg:col-span-1 lg:border-b-0">

                                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#0878df] transition-all duration-500 group-hover:w-full" />

                                <img
                                    src="/awards/isr.png"
                                    alt="ISR"
                                    className="max-h-[70px] max-w-[170px] w-auto object-contain opacity-45 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                                />

                            </div>

                        </div>

                    </div>

                    {/* =================================================
            LOWER LABEL
        ================================================= */}

                    <div className="mt-10 flex items-center gap-4">

                        <span className="h-px w-12 bg-[#0878df]" />

                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-white/25">
                            Professional recognition
                        </span>

                    </div>

                </div>

            </section>

            {/* =======================================================
                FINAL CTA
            ======================================================= */}

            <section className="relative overflow-hidden bg-white py-28 sm:py-36">

                <div className="vortex-container">

                    <Reveal>

                        <div className="relative overflow-hidden bg-[#0878df] px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">

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
                                        Work with us
                                    </span>

                                </div>

                                <h2 className="mt-7 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl">

                                    Let&apos;s build what

                                    <br />

                                    comes next.

                                </h2>

                                <p className="mt-7 max-w-xl text-base leading-7 text-white/70">
                                    Vortex Enveco Consultancy LLC provides engineering solutions
                                    across Vertical Transport, MEP and BIM.
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

                            <div className="pointer-events-none absolute -bottom-28 -right-16 opacity-10">

                                <Users
                                    size={330}
                                    strokeWidth={0.6}
                                />

                            </div>

                        </div>

                    </Reveal>

                </div>

            </section>

        </main>
    );
}