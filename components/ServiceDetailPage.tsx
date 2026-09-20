"use client";

import Navbar from "@/components/Navbar";


export type ServiceData = {
    title: string;
    description: string;
    coreServices: string[];
    technicalScope: string[];
    projectTypes: string[];
    images: string[];
};

type ServiceDetailPageProps = {
    service: ServiceData;
};

export default function ServiceDetailPage({
    service,
}: ServiceDetailPageProps) {
    return (
        <div className="min-h-screen bg-white text-[#172033]">
            <Navbar />

            {/* =========================================================
                PAGE HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#07111f]">
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />

                <div className="relative mx-auto max-w-[1180px] px-6 py-20 lg:px-8 lg:py-24">
                    <div className="max-w-4xl">
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-px w-14 bg-[#ffbd00]" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ffbd00]">
                                Engineering Discipline
                            </span>
                        </div>

                        <h1 className="text-5xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                            {service.title}
                            <span className="text-[#0878df]">.</span>
                        </h1>

                        <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CONTENT
            ========================================================= */}

            <main className="mx-auto max-w-[1180px] px-6 py-16 lg:px-8 lg:py-20">

                {/* =====================================================
                    CORE SERVICES
                ===================================================== */}

                <section className="grid gap-10 lg:grid-cols-2 lg:items-start">

                    <div>
                        <SectionLabel number="01" label="Core Services" />

                        <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-[#172033] sm:text-4xl">
                            Core Services
                        </h2>

                        <div className="mt-7 space-y-2">
                            {service.coreServices.map((item) => (
                                <InfoItem key={item} text={item} />
                            ))}
                        </div>
                    </div>

                    <ServiceImage
                        src={service.images[0]}
                        alt={`${service.title} engineering`}
                    />

                </section>


                {/* =====================================================
                    TECHNICAL SCOPE
                ===================================================== */}

                <section className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">

                    <ServiceImage
                        src={service.images[1]}
                        alt={`${service.title} technical engineering`}
                        className="lg:order-1"
                    />

                    <div className="lg:order-2">
                        <SectionLabel number="02" label="Technical Scope" />

                        <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-[#172033] sm:text-4xl">
                            Technical Scope
                        </h2>

                        <div className="mt-7 space-y-2">
                            {service.technicalScope.map((item) => (
                                <InfoItem key={item} text={item} />
                            ))}
                        </div>
                    </div>

                </section>


                {/* =====================================================
                    PROJECT TYPES
                ===================================================== */}

                <section className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">

                    <div>
                        <SectionLabel number="03" label="Applications" />

                        <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-[#172033] sm:text-4xl">
                            Project Types
                        </h2>

                        <div className="mt-7 space-y-2">
                            {service.projectTypes.map((item) => (
                                <InfoItem key={item} text={item} />
                            ))}
                        </div>
                    </div>

                    <ServiceImage
                        src={service.images[2]}
                        alt={`${service.title} project`}
                    />

                </section>


                {/* =====================================================
                    CTA
                ===================================================== */}

                <section className="mt-20 overflow-hidden rounded-2xl bg-[#07111f]">

                    <div className="relative px-7 py-12 sm:px-10 lg:px-14 lg:py-14">

                        <div
                            className="absolute inset-0 opacity-[0.06]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                                backgroundSize: "60px 60px",
                            }}
                        />

                        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffbd00]">
                                    Vortex Enveco Consultancy LLC
                                </p>

                                <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                                    Engineering solutions built around your project.
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                                    Our engineering team provides coordinated,
                                    practical and project-focused solutions for
                                    complex developments.
                                </p>
                            </div>

                            <a
                                href="#contact"
                                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#ffbd00] px-6 text-sm font-black text-[#172033] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0878df] hover:text-white"
                            >
                                Let&apos;s Talk
                                <span className="text-lg">↗</span>
                            </a>

                        </div>
                    </div>

                </section>

            </main>


        </div>
    );
}


/* =============================================================
   SECTION LABEL
============================================================= */

function SectionLabel({
    number,
    label,
}: {
    number: string;
    label: string;
}) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0878df]">
                {number}
            </span>

            <span className="h-px w-10 bg-[#ffbd00]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#667085]">
                {label}
            </span>
        </div>
    );
}


/* =============================================================
   INFORMATION ITEM
============================================================= */

function InfoItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3 rounded-md border border-[#e7edf4] bg-[#f4f7fb] px-4 py-3.5">
            <span className="mt-0.5 shrink-0 text-sm font-black text-[#0878df]">
                →
            </span>

            <span className="text-sm leading-6 text-[#667085]">
                {text}
            </span>
        </div>
    );
}


/* =============================================================
   SERVICE IMAGE
============================================================= */

function ServiceImage({
    src,
    alt,
    className = "",
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    return (
        <div
            className={`overflow-hidden rounded-xl ${className}`}
        >
            <img
                src={src}
                alt={alt}
                className="h-[330px] w-full object-cover"
            />
        </div>
    );
}