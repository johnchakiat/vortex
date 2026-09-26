import {
    ArrowUpRight,
    Building2,
    Zap,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-black text-white">
            {/* Engineering grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="vortex-container relative">
                <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.7fr_0.95fr_1.25fr] lg:gap-10">

                    {/* =====================================================
              BRAND
          ===================================================== */}

                    <div className="max-w-md">
                        <a
                            href="/"
                            className="group inline-block"
                            aria-label="DeltaCare home"
                        >
                            <div className="relative">
                                <img
                                    src="/deltacare-logo.png"
                                    alt="DeltaCare"
                                    className="h-auto w-[245px] object-contain"
                                />

                                <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-[#ffbd00] transition-all duration-500 group-hover:w-[88%]" />
                            </div>
                        </a>

                        <div className="mt-8 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#ffbd00]" />

                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffbd00]">
                                Electrical Maintenance
                            </span>
                        </div>

                        <p className="mt-5 max-w-sm text-[14px] leading-7 text-white/40">
                            DeltaCare provides specialist electrical maintenance and
                            technical support, with a strong focus on busbar and busduct
                            systems, reliability and safe operation.
                        </p>
                    </div>

                    {/* =====================================================
              QUICK LINKS
          ===================================================== */}

                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-5 w-[2px] bg-[#ffbd00]" />

                            <h3 className="font-serif text-lg font-bold text-white">
                                Quick Links
                            </h3>
                        </div>

                        <nav className="flex flex-col gap-4">
                            {[
                                ["Home", "/"],
                                ["About Us", "/about-us"],
                                ["Projects", "/projects"],
                                ["Our Services", "/services"],
                                ["Contact", "/contact"],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="group flex w-fit items-center gap-2 text-[14px] text-white/40 transition-colors duration-300 hover:text-white"
                                >
                                    <span className="h-px w-0 bg-[#0878df] transition-all duration-300 group-hover:w-4" />

                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* =====================================================
              SERVICES
          ===================================================== */}

                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-5 w-[2px] bg-[#ffbd00]" />

                            <h3 className="font-serif text-lg font-bold text-white">
                                Services
                            </h3>
                        </div>

                        <nav className="flex flex-col gap-4">
                            {[
                                [
                                    "Busduct / Busbar Maintenance",
                                    "/services/busduct-busbar-maintenance",
                                ],
                                [
                                    "Switchgear Maintenance",
                                    "/services/switchgear-maintenance",
                                ],
                                [
                                    "HVAC Maintenance",
                                    "/services/hvac-maintenance",
                                ],
                                [
                                    "Transformer Maintenance",
                                    "/services/transformer-maintenance",
                                ],
                                [
                                    "Aircraft Warning Lights",
                                    "/services/aircraft-warning-lights",
                                ],
                                [
                                    "Testing & Commissioning",
                                    "/services/testing-commissioning",
                                ],
                            ].map(([service, href]) => (
                                <a
                                    key={service}
                                    href={href}
                                    className="group flex w-fit items-start gap-2 text-[14px] leading-5 text-white/40 transition-colors duration-300 hover:text-white"
                                >
                                    <span className="mt-2 h-px w-0 shrink-0 bg-[#0878df] transition-all duration-300 group-hover:w-4" />

                                    {service}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* =====================================================
              CONTACT
          ===================================================== */}

                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-5 w-[2px] bg-[#ffbd00]" />

                            <h3 className="font-serif text-lg font-bold text-white">
                                Get In Touch
                            </h3>
                        </div>

                        <div className="space-y-3">

                            {/* Phone */}
                            <a
                                href="tel:+971504242468"
                                className="group flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#0878df]/50 hover:bg-[#0878df]/[0.08]"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0878df] text-white transition-all duration-300 group-hover:bg-[#ffbd00] group-hover:text-black">
                                    <Zap size={17} />
                                </div>

                                <div className="min-w-0">
                                    <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#ffbd00]">
                                        Phone
                                    </span>

                                    <span className="mt-1 block text-[14px] text-white/70">
                                        050 424 2468
                                    </span>
                                </div>
                            </a>

                            {/* Office */}
                            <div className="group flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#0878df]/50 hover:bg-[#0878df]/[0.08]">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0878df] text-white transition-all duration-300 group-hover:bg-[#ffbd00] group-hover:text-black">
                                    <Building2 size={17} />
                                </div>

                                <div className="min-w-0">
                                    <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#ffbd00]">
                                        Office
                                    </span>

                                    <span className="mt-1 block text-[13px] leading-5 text-white/70">
                                        Jamal Al Muhairi Building,
                                        <br />
                                        Office 101, Al Garhoud, Dubai
                                    </span>
                                </div>
                            </div>

                            {/* Email */}
                            <a
                                href="mailto:info@deltacare.com"
                                className="group flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#0878df]/50 hover:bg-[#0878df]/[0.08]"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0878df] text-white transition-all duration-300 group-hover:bg-[#ffbd00] group-hover:text-black">
                                    <span className="text-sm font-bold">@</span>
                                </div>

                                <div className="min-w-0">
                                    <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#ffbd00]">
                                        Email
                                    </span>

                                    <span className="mt-1 block break-all text-[13px] text-white/70">
                                        info@deltacare.com
                                    </span>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="h-px w-full bg-white/10" />

                <div className="flex flex-col justify-between gap-5 py-6 sm:flex-row sm:items-center">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30">
                        © 2026 DeltaCare. All Rights Reserved
                    </p>

                    <div className="flex items-center gap-5">
                        <a
                            href="#"
                            className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 transition-colors hover:text-white"
                        >
                            Privacy
                        </a>

                        <span className="h-3 w-px bg-white/10" />

                        <a
                            href="#"
                            className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 transition-colors hover:text-white"
                        >
                            Terms
                        </a>

                        <span className="h-3 w-px bg-white/10" />

                        <a
                            href="/contact"
                            className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 transition-colors hover:text-white"
                        >
                            Contact

                            <ArrowUpRight
                                size={12}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}