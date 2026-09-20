"use client";

import { ArrowUpRight, CalendarDays, ChevronRight } from "lucide-react";
import Link from "next/link";

import Navbar from "@/components/Navbar";

type BlogPost = {
    title: string;
    date: string;
    author: string;
    category: string;
    excerpt: string;
    image: string;
    href: string;
};

const blogPosts: BlogPost[] = [
    {
        title: "The Importance of MEP Engineering in Modern Building Design",
        date: "December 17, 2017",
        author: "vortexenvecous",
        category: "Review Product",
        excerpt:
            "Modern buildings require more than attractive architecture. Efficient, reliable and sustainable engineering systems are essential to building performance, occupant comfort, energy efficiency and long-term value.",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
        href: "/blog/the-importance-of-mep-engineering-in-modern-building-design",
    },
    {
        title: "Why Building Information Modeling (BIM) Is Transforming Construction",
        date: "December 17, 2017",
        author: "vortexenvecous",
        category: "Tips & Tricks",
        excerpt:
            "Building Information Modeling is changing the way projects are designed, coordinated and delivered, helping teams improve communication and reduce conflicts throughout construction.",
        image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
        href: "/blog/why-building-information-modeling-bim-is-transforming-construction",
    },
    {
        title:
            "Why Professional Engineering Consultancy Is Essential for Successful Construction Projects",
        date: "December 17, 2017",
        author: "vortexenvecous",
        category: "News",
        excerpt:
            "Professional engineering consultancy brings technical expertise, coordination and project support together to help construction projects move from concept through delivery.",
        image:
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85",
        href: "/blog/why-professional-engineering-consultancy-is-essential-for-successful-construction-projects",
    },
];

const categories = [
    "All",
    "Review Product",
    "Videos",
    "News",
    "Promotions",
    "Tips & Tricks",
    "Others",
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc] text-[#172033]">
            <Navbar />

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#07111f] text-white">

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

                <div className="pointer-events-none absolute -left-40 top-[-180px] h-[600px] w-[600px] rounded-full bg-[#0878df]/10 blur-[140px]" />

                <div className="pointer-events-none absolute -right-40 bottom-[-250px] h-[650px] w-[650px] rounded-full bg-[#ffbd00]/[0.045] blur-[150px]" />

                {/* SIDE LINES */}

                <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.045]" />

                <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.045]" />

                <div className="vortex-container relative z-10 py-24 sm:py-32 lg:py-36">

                    {/* LABEL */}

                    <div className="flex items-center gap-4">

                        <span className="h-px w-14 bg-[#ffbd00]" />

                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffbd00]">
                            Our Blog
                        </span>

                    </div>

                    {/* TITLE */}

                    <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">

                        Insights
                        <br />

                        <span className="text-[#0878df]">
                            &amp; Updates.
                        </span>

                    </h1>

                    <div className="mt-10 flex max-w-2xl items-start gap-5">

                        <span className="mt-2 h-12 w-[2px] shrink-0 bg-[#ffbd00]" />

                        <p className="text-base leading-8 text-white/55 sm:text-lg">
                            Latest news, industry knowledge, and expert tips
                            from our team.
                        </p>

                    </div>

                    {/* META */}

                    <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">

                        <div className="flex items-center gap-3">

                            <span className="font-mono text-[10px] font-bold text-[#ffbd00]">
                                03
                            </span>

                            <span className="text-[11px] uppercase tracking-[0.16em] text-white/35">
                                Articles
                            </span>

                        </div>

                        <span className="h-4 w-px bg-white/10" />

                        <div className="flex items-center gap-3">

                            <span className="font-mono text-[10px] font-bold text-[#0878df]">
                                2017
                            </span>

                            <span className="text-[11px] uppercase tracking-[0.16em] text-white/35">
                                Published
                            </span>

                        </div>

                    </div>

                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0878df]/40" />

            </section>


            {/* =========================================================
                BLOG CONTENT
            ========================================================= */}

            <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">

                {/* GRID */}

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
                        CATEGORY BAR
                    ================================================= */}

                    <div className="flex flex-wrap items-center gap-2 border-b border-[#e4eaf1] pb-8">

                        {categories.map((category, index) => (
                            <button
                                key={category}
                                type="button"
                                className={`px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] transition ${index === 0
                                        ? "bg-[#0878df] text-white"
                                        : "border border-[#e4eaf1] bg-white text-[#667085] hover:border-[#0878df]/40 hover:text-[#0878df]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}

                    </div>


                    {/* =================================================
                        SECTION HEADER
                    ================================================= */}

                    <div className="mt-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                        <div>

                            <div className="flex items-center gap-4">

                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0878df]">
                                    Latest Articles
                                </span>

                            </div>

                            <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                                Knowledge for
                                <br />
                                <span className="text-[#0878df]">
                                    better projects.
                                </span>
                            </h2>

                        </div>

                        <p className="max-w-md text-sm leading-7 text-[#667085] sm:text-right">
                            Explore insights covering MEP engineering,
                            BIM, construction and professional engineering
                            consultancy.
                        </p>

                    </div>


                    {/* =================================================
                        FEATURED ARTICLE
                    ================================================= */}

                    <div className="mt-16">

                        <Link
                            href={blogPosts[0].href}
                            className="group grid overflow-hidden border border-[#e4eaf1] bg-white lg:grid-cols-[1.15fr_0.85fr]"
                        >

                            {/* IMAGE */}

                            <div className="relative min-h-[320px] overflow-hidden bg-[#07111f] lg:min-h-[470px]">

                                <img
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/70 via-[#07111f]/25 to-transparent" />

                                <div className="absolute left-7 top-7 flex items-center gap-3 sm:left-10 sm:top-10">

                                    <span className="bg-[#ffbd00] px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#172033]">
                                        Featured
                                    </span>

                                    <span className="border border-white/20 bg-[#07111f]/60 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                                        {blogPosts[0].category}
                                    </span>

                                </div>

                                <span className="absolute bottom-8 left-8 font-mono text-7xl font-bold tracking-[-0.08em] text-white/[0.12] sm:left-10 sm:text-8xl">
                                    01
                                </span>

                            </div>


                            {/* CONTENT */}

                            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">

                                <div>

                                    <div className="flex items-center gap-2 text-[#98a2b3]">

                                        <CalendarDays size={14} />

                                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em]">
                                            {blogPosts[0].date}
                                        </span>

                                    </div>

                                    <h3 className="mt-7 text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-[#172033] transition group-hover:text-[#0878df] sm:text-4xl lg:text-[42px]">
                                        {blogPosts[0].title}
                                    </h3>

                                    <p className="mt-7 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
                                        {blogPosts[0].excerpt}
                                    </p>

                                </div>

                                <div className="mt-10 border-t border-[#e4eaf1] pt-6">

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#98a2b3]">
                                                Written by
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#172033]">
                                                {blogPosts[0].author}
                                            </p>

                                        </div>

                                        <span className="flex h-11 w-11 items-center justify-center border border-[#dce5ef] text-[#0878df] transition duration-300 group-hover:border-[#0878df] group-hover:bg-[#0878df] group-hover:text-white">

                                            <ArrowUpRight
                                                size={18}
                                            />

                                        </span>

                                    </div>

                                </div>

                            </div>

                        </Link>

                    </div>


                    {/* =================================================
                        OTHER ARTICLES
                    ================================================= */}

                    <div className="mt-6 grid gap-6 lg:grid-cols-2">

                        {blogPosts.slice(1).map((post, index) => (

                            <Link
                                key={post.title}
                                href={post.href}
                                className="group overflow-hidden border border-[#e4eaf1] bg-white transition duration-500 hover:-translate-y-1 hover:border-[#0878df]/30 hover:shadow-[0_20px_60px_rgba(7,17,31,0.08)]"
                            >

                                {/* IMAGE */}

                                <div className="relative h-[280px] overflow-hidden bg-[#07111f]">

                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent" />

                                    <span className="absolute left-6 top-6 bg-white px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0878df]">
                                        {post.category}
                                    </span>

                                    <span className="absolute bottom-5 right-6 font-mono text-6xl font-bold tracking-[-0.08em] text-white/[0.14]">
                                        0{index + 2}
                                    </span>

                                </div>


                                {/* CONTENT */}

                                <div className="p-8 sm:p-9">

                                    <div className="flex items-center gap-2 text-[#98a2b3]">

                                        <CalendarDays size={14} />

                                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em]">
                                            {post.date}
                                        </span>

                                    </div>

                                    <h3 className="mt-5 text-2xl font-bold leading-[1.05] tracking-[-0.03em] text-[#172033] transition group-hover:text-[#0878df] sm:text-3xl">
                                        {post.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-[#667085]">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-8 flex items-center justify-between border-t border-[#e4eaf1] pt-6">

                                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#98a2b3]">
                                            vortexenvecous
                                        </span>

                                        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0878df]">

                                            Read Article

                                            <ChevronRight
                                                size={15}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />

                                        </span>

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#07111f] py-24 sm:py-28 lg:py-32">

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

                    <div className="flex flex-col justify-between gap-10 border border-white/10 bg-[#0b1727] p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16">

                        <div className="max-w-3xl">

                            <div className="flex items-center gap-4">

                                <span className="h-px w-12 bg-[#ffbd00]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                    Work With Us
                                </span>

                            </div>

                            <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                                Have a project
                                <br />
                                <span className="text-[#0878df]">
                                    in mind?
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-7 text-white/45">
                                Speak with the Vortex Enveco engineering team
                                about your next development.
                            </p>

                        </div>

                        <a
                            href="#contact"
                            className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#ffbd00] px-7 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#172033] transition duration-300 hover:-translate-y-1 hover:bg-white"
                        >
                            Let&apos;s Talk

                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />

                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}