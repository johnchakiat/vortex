"use client";

import { useState } from "react";
import { ArrowRight, Quote } from "lucide-react";

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

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const testimonial = testimonials[active];

    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
        >
            {/* Technical background */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(8,120,223,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(8,120,223,0.035) 1px, transparent 1px)
            `,
                        backgroundSize: "64px 64px",
                    }}
                />
            </div>

            {/* Decorative lines */}
            <div className="pointer-events-none absolute left-0 top-24 h-px w-24 bg-[#0878df]" />
            <div className="pointer-events-none absolute right-0 bottom-24 h-px w-32 bg-[#ffbd00]" />

            <div className="vortex-container relative">
                {/* Section heading */}
                <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#0878df]" />
                            <span className="vortex-label">
                                Client Testimonials
                            </span>
                        </div>

                        <h2 className="max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#172033] sm:text-5xl lg:text-6xl">
                            Trusted by
                            <br />
                            <span className="text-[#0878df]">our clients.</span>
                        </h2>
                    </div>

                    <div className="max-w-xl lg:ml-auto">
                        <p className="text-base leading-8 text-[#667085] sm:text-lg">
                            Real feedback from professionals who have partnered with
                            Vortex Enveco Consultancy LLC across engineering, design and
                            construction projects.
                        </p>
                    </div>
                </div>

                {/* Main testimonial */}
                <div className="relative overflow-hidden border border-[#dfe7f0] bg-[#f7faff]">
                    {/* Top technical bar */}
                    <div className="flex items-center justify-between border-b border-[#dfe7f0] px-6 py-4 sm:px-8 lg:px-10">
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 bg-[#0878df]" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#667085]">
                                Client perspective
                            </span>
                        </div>

                        <span className="font-mono text-xs font-semibold text-[#98a2b3]">
                            {String(active + 1).padStart(2, "0")} /{" "}
                            {String(testimonials.length).padStart(2, "0")}
                        </span>
                    </div>

                    <div className="grid min-h-[440px] lg:grid-cols-[0.7fr_1.3fr]">
                        {/* Quote visual */}
                        <div className="relative hidden overflow-hidden border-r border-[#dfe7f0] bg-[#eef6ff] lg:block">
                            <div className="absolute inset-0 opacity-50">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: `
                      linear-gradient(rgba(8,120,223,0.07) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(8,120,223,0.07) 1px, transparent 1px)
                    `,
                                        backgroundSize: "42px 42px",
                                    }}
                                />
                            </div>

                            <div className="absolute left-10 top-10">
                                <Quote
                                    size={64}
                                    strokeWidth={1.2}
                                    className="text-[#0878df]"
                                />
                            </div>

                            <div className="absolute bottom-10 left-10">
                                <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0878df]">
                                    VEC / {String(active + 1).padStart(2, "0")}
                                </div>

                                <div className="h-px w-20 bg-[#ffbd00]" />
                            </div>

                            {/* Architectural frame */}
                            <div className="absolute right-10 top-10 h-32 w-32 border-r border-t border-[#0878df]/20" />
                            <div className="absolute bottom-10 right-10 h-32 w-32 border-b border-r border-[#0878df]/20" />
                        </div>

                        {/* Testimonial content */}
                        <div
                            key={active}
                            className="flex flex-col justify-between p-8 sm:p-10 lg:p-14"
                        >
                            <div>
                                <div className="mb-8 lg:hidden">
                                    <Quote
                                        size={48}
                                        strokeWidth={1.2}
                                        className="text-[#0878df]"
                                    />
                                </div>

                                <p className="max-w-4xl text-2xl font-medium leading-[1.55] tracking-[-0.02em] text-[#172033] sm:text-3xl lg:text-[2.1rem]">
                                    “{testimonial.text}”
                                </p>
                            </div>

                            <div className="mt-12 flex flex-col justify-between gap-6 border-t border-[#dfe7f0] pt-7 sm:flex-row sm:items-end">
                                <div>
                                    <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0878df]">
                                        {testimonial.role}
                                    </div>

                                    <div className="text-xl font-bold text-[#172033] sm:text-2xl">
                                        {testimonial.name}
                                    </div>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center border border-[#d4dde8] text-[#0878df]">
                                    <ArrowRight size={19} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client selector */}
                <div className="mt-8 grid border border-[#dfe7f0] bg-white sm:grid-cols-5">
                    {testimonials.map((item, index) => {
                        const isActive = index === active;

                        return (
                            <button
                                key={item.name}
                                type="button"
                                onClick={() => setActive(index)}
                                className={`group relative border-b border-[#dfe7f0] p-5 text-left transition-all duration-300 sm:border-b-0 sm:border-r last:border-r-0 ${isActive
                                        ? "bg-[#0878df] text-white"
                                        : "bg-white text-[#172033] hover:bg-[#f5f8fc]"
                                    }`}
                            >
                                <div
                                    className={`mb-3 font-mono text-xs font-bold ${isActive ? "text-white/70" : "text-[#98a2b3]"
                                        }`}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div
                                    className={`text-sm font-bold uppercase tracking-[0.08em] ${isActive ? "text-white" : "text-[#172033]"
                                        }`}
                                >
                                    {item.name}
                                </div>

                                <div
                                    className={`mt-1 text-xs ${isActive ? "text-white/70" : "text-[#98a2b3]"
                                        }`}
                                >
                                    {item.role}
                                </div>

                                {/* Active indicator */}
                                <span
                                    className={`absolute bottom-0 left-0 h-1 bg-[#ffbd00] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}