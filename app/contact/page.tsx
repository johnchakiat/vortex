"use client";

import {
    ArrowUpRight,
    Clock3,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-[#172033]">
            {/* =========================================================
                EXISTING NAVBAR
                Do not modify Navbar.tsx
            ========================================================= */}


            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative overflow-hidden bg-[#07111f]">
                {/* Grid */}
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

                {/* Glow */}
                <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0878df]/10 blur-[130px]" />

                <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#ffbd00]/[0.045] blur-[130px]" />

                {/* Side lines */}
                <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.05]" />

                <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.05]" />

                <div className="vortex-container relative z-10 py-24 sm:py-32 lg:py-36">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-14 bg-[#ffbd00]" />

                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffbd00]">
                            Contact Us
                        </span>
                    </div>

                    <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[0.92] tracking-[-0.055em] text-white sm:text-7xl lg:text-[88px]">
                        Let&apos;s build
                        <br />
                        <span className="text-[#0878df]">
                            something together.
                        </span>
                    </h1>

                    <div className="mt-10 flex max-w-3xl items-start gap-5">
                        <span className="mt-2 h-12 w-[2px] shrink-0 bg-[#ffbd00]" />

                        <p className="text-base leading-8 text-white/55 sm:text-lg">
                            Have a project in mind or need engineering
                            consultancy support? Get in touch with Vortex
                            Enveco Consultancy LLC.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0878df]/40" />
            </section>

            {/* =========================================================
                CONTACT INFORMATION + FORM
            ========================================================= */}
            <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-36">
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
                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                        {/* =================================================
                            LEFT
                        ================================================= */}
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-12 bg-[#0878df]" />

                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0878df]">
                                    Get In Touch
                                </span>
                            </div>

                            <h2 className="mt-7 text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                                We&apos;re ready
                                <br />
                                <span className="text-[#0878df]">
                                    to hear from you.
                                </span>
                            </h2>

                            <p className="mt-8 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
                                Whether you are starting a new development,
                                planning a refurbishment or looking for
                                specialist engineering support, our team is
                                available to discuss your requirements.
                            </p>

                            {/* CONTACT DETAILS */}
                            <div className="mt-12 space-y-7">
                                {/* OFFICE */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef6ff] text-[#0878df]">
                                        <MapPin
                                            size={19}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#98a2b3]">
                                            Our Office
                                        </p>

                                        <p className="mt-1 text-base font-semibold text-[#172033]">
                                            Al Garhoud, Dubai
                                        </p>
                                    </div>
                                </div>

                                {/* PHONE */}
                                <a
                                    href="tel:0504242468"
                                    className="group flex items-start gap-4"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef6ff] text-[#0878df] transition group-hover:bg-[#0878df] group-hover:text-white">
                                        <Phone
                                            size={19}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#98a2b3]">
                                            Call Us
                                        </p>

                                        <p className="mt-1 text-base font-semibold text-[#172033] transition group-hover:text-[#0878df]">
                                            050 424 2468
                                        </p>
                                    </div>
                                </a>

                                {/* EMAIL */}
                                <a
                                    href="mailto:info@vortexenveco.com"
                                    className="group flex items-start gap-4"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef6ff] text-[#0878df] transition group-hover:bg-[#0878df] group-hover:text-white">
                                        <Mail
                                            size={19}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#98a2b3]">
                                            Email Us
                                        </p>

                                        <p className="mt-1 text-base font-semibold text-[#172033] transition group-hover:text-[#0878df]">
                                            info@vortexenveco.com
                                        </p>
                                    </div>
                                </a>

                                {/* HOURS */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff8df] text-[#d99f00]">
                                        <Clock3
                                            size={19}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#98a2b3]">
                                            Opening Hours
                                        </p>

                                        <p className="mt-1 text-base font-semibold text-[#172033]">
                                            Mon – Sat · 9:00am – 5:00pm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =================================================
                            RIGHT — CONTACT FORM
                        ================================================= */}
                        <div className="relative">
                            <div className="border border-[#e4eaf1] bg-white p-7 shadow-[0_25px_80px_rgba(7,17,31,0.07)] sm:p-10">
                                <div className="mb-8">
                                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0878df]">
                                        Project Enquiry
                                    </p>

                                    <h3 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#172033]">
                                        Tell us about your project.
                                    </h3>
                                </div>

                                <form
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                    }}
                                    className="space-y-6"
                                >
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        {/* NAME */}
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#667085]"
                                            >
                                                Name
                                            </label>

                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Your name"
                                                className="h-12 w-full border border-[#dce5ef] bg-[#f8fafc] px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#0878df] focus:bg-white"
                                            />
                                        </div>

                                        {/* EMAIL */}
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#667085]"
                                            >
                                                Email
                                            </label>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                className="h-12 w-full border border-[#dce5ef] bg-[#f8fafc] px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#0878df] focus:bg-white"
                                            />
                                        </div>
                                    </div>

                                    {/* PHONE */}
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#667085]"
                                        >
                                            Phone
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Your phone number"
                                            className="h-12 w-full border border-[#dce5ef] bg-[#f8fafc] px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#0878df] focus:bg-white"
                                        />
                                    </div>

                                    {/* SUBJECT */}
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#667085]"
                                        >
                                            Subject
                                        </label>

                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="Project enquiry"
                                            className="h-12 w-full border border-[#dce5ef] bg-[#f8fafc] px-4 text-sm text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#0878df] focus:bg-white"
                                        />
                                    </div>

                                    {/* MESSAGE */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#667085]"
                                        >
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            placeholder="Tell us about your project..."
                                            className="w-full resize-none border border-[#dce5ef] bg-[#f8fafc] px-4 py-4 text-sm leading-7 text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#0878df] focus:bg-white"
                                        />
                                    </div>

                                    {/* BUTTON */}
                                    <button
                                        type="submit"
                                        className="group inline-flex min-h-12 items-center gap-3 bg-[#ffbd00] px-7 text-[11px] font-black uppercase tracking-[0.15em] text-[#172033] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0878df] hover:text-white"
                                    >
                                        Send Enquiry

                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={2.5}
                                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                BOTTOM CTA
            ========================================================= */}
            <section className="relative overflow-hidden bg-[#07111f] py-20 sm:py-24">
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
                        backgroundSize: "70px 70px",
                    }}
                />

                <div className="vortex-container relative">
                    <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                        <div>
                            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                Vortex Enveco Consultancy LLC
                            </p>

                            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                                Engineering solutions built around your
                                project.
                            </h2>
                        </div>

                        <a
                            href="mailto:info@vortexenveco.com"
                            className="group inline-flex min-h-12 shrink-0 items-center gap-3 border border-white/20 px-6 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#ffbd00] hover:bg-[#ffbd00] hover:text-[#172033]"
                        >
                            Email Us

                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}