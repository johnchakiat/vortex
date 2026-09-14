"use client";

import { useState } from "react";
import {
    Clock3,
    MapPin,
    Phone,
    Mail,
    Menu,
    X,
    ChevronDown,
    ArrowUpRight,
} from "lucide-react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="relative z-50 w-full bg-white">
            {/* =========================================================
          TOP BRAND BAR
      ========================================================= */}
            <div className="bg-[#07111f] text-white">
                <div className="vortex-container flex min-h-11 items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#ffbd00]" />

                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/90">
                            Vortex Enveco Consultancy LLC
                        </span>

                        <span className="hidden h-4 w-px bg-white/20 sm:block" />

                        <span className="hidden text-[10px] uppercase tracking-[0.18em] text-white/50 sm:block">
                            Engineering Consultancy
                        </span>
                    </div>

                    <div className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 md:flex">
                        <a href="#" className="transition hover:text-[#ffbd00]">
                            Facebook
                        </a>

                        <a href="#" className="transition hover:text-[#ffbd00]">
                            X
                        </a>

                        <a href="#" className="transition hover:text-[#ffbd00]">
                            YouTube
                        </a>

                        <a href="#" className="transition hover:text-[#ffbd00]">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* =========================================================
          CONTACT / INFORMATION BAR
      ========================================================= */}
            <div className="hidden border-b border-[#e4eaf1] bg-[#f8fafc] lg:block">
                <div className="vortex-container flex min-h-[72px] items-center justify-between gap-8">
                    {/* Office */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef6ff] text-[#0878df]">
                            <MapPin size={17} strokeWidth={1.8} />
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#98a2b3]">
                                Our Office
                            </p>

                            <p className="mt-0.5 text-sm font-semibold text-[#172033]">
                                Al Garhoud, Dubai
                            </p>
                        </div>
                    </div>

                    <div className="h-9 w-px bg-[#d4dde8]" />

                    {/* Hours */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8df] text-[#d99f00]">
                            <Clock3 size={17} strokeWidth={1.8} />
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#98a2b3]">
                                Opening Hours
                            </p>

                            <p className="mt-0.5 text-sm font-semibold text-[#172033]">
                                Mon – Sat · 9:00am – 5:00pm
                            </p>
                        </div>
                    </div>

                    <div className="h-9 w-px bg-[#d4dde8]" />

                    {/* Phone */}
                    <a
                        href="tel:0504242468"
                        className="group flex items-center gap-3"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef6ff] text-[#0878df] transition group-hover:bg-[#0878df] group-hover:text-white">
                            <Phone size={17} strokeWidth={1.8} />
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#98a2b3]">
                                Call Us
                            </p>

                            <p className="mt-0.5 text-sm font-semibold text-[#172033]">
                                050 424 2468
                            </p>
                        </div>
                    </a>

                    <div className="h-9 w-px bg-[#d4dde8]" />

                    {/* Email */}
                    <a
                        href="mailto:info@vortexenveco.com"
                        className="group flex items-center gap-3"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef6ff] text-[#0878df] transition group-hover:bg-[#0878df] group-hover:text-white">
                            <Mail size={17} strokeWidth={1.8} />
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#98a2b3]">
                                Email Us
                            </p>

                            <p className="mt-0.5 text-sm font-semibold text-[#172033]">
                                info@vortexenveco.com
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            {/* =========================================================
          MAIN NAVIGATION
      ========================================================= */}
            <div className="border-b border-[#e4eaf1] bg-white">
                <div className="vortex-container flex min-h-[88px] items-center justify-between gap-8">
                    {/* =====================================================
              REAL VORTEX LOGO
          ===================================================== */}
                    <a
                        href="/"
                        className="group flex shrink-0 items-center"
                        aria-label="Vortex Enveco home"
                    >
                        <div className="relative overflow-visible">
                            <img
                                src="/vortex-logo.png"
                                alt="Vortex Enveco Consultancy LLC"
                                className="
                  h-auto
                  w-[245px]
                  origin-left
                  object-contain
                  transition-all
                  duration-500
                  ease-out
                  group-hover:-translate-y-1
                  group-hover:scale-[1.035]
                  group-hover:rotate-[-1deg]
                "
                            />

                            {/* subtle gold sweep */}
                            <span
                                className="
                  pointer-events-none
                  absolute
                  bottom-[-3px]
                  left-0
                  h-[2px]
                  w-0
                  bg-[#ffbd00]
                  transition-all
                  duration-500
                  ease-out
                  group-hover:w-[92%]
                "
                            />
                        </div>
                    </a>

                    {/* =====================================================
              DESKTOP NAV
          ===================================================== */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        <a
                            href="/"
                            className="relative px-4 py-3 text-sm font-bold text-[#0878df]"
                        >
                            Home

                            <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#ffbd00]" />
                        </a>

                        <a
                            href="#about"
                            className="group relative px-4 py-3 text-sm font-semibold text-[#172033] transition hover:text-[#0878df]"
                        >
                            About Us

                            <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 bg-[#ffbd00] transition-transform group-hover:scale-x-100" />
                        </a>

                        {/* SERVICES */}
                        <div
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button
                                type="button"
                                onClick={() => setServicesOpen((open) => !open)}
                                className="group flex items-center gap-1 px-4 py-3 text-sm font-semibold text-[#172033] transition hover:text-[#0878df]"
                                aria-expanded={servicesOpen}
                            >
                                Services

                                <ChevronDown
                                    size={15}
                                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* SERVICES DROPDOWN */}
                            <div
                                className={`absolute left-1/2 top-full w-[270px] -translate-x-1/2 pt-3 transition-all duration-200 ${servicesOpen
                                        ? "pointer-events-auto translate-y-0 opacity-100"
                                        : "pointer-events-none -translate-y-2 opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden rounded-lg border border-[#d4dde8] bg-white shadow-[0_20px_50px_rgba(23,32,51,0.14)]">
                                    <div className="border-b border-[#e4eaf1] bg-[#f8fafc] px-5 py-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0878df]">
                                            Engineering disciplines
                                        </p>
                                    </div>

                                    {[
                                        "Vertical Transport",
                                        "Electrical Systems",
                                        "HVAC Systems",
                                        "Public Health Engineering",
                                        "Fire Protection",
                                        "ELV Systems",
                                    ].map((service, index) => (
                                        <a
                                            key={service}
                                            href="#services"
                                            onClick={() => setServicesOpen(false)}
                                            className="group flex items-center justify-between border-b border-[#eef1f5] px-5 py-3.5 last:border-0 hover:bg-[#f5f8fc]"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] font-bold text-[#ffbd00]">
                                                    0{index + 1}
                                                </span>

                                                <span className="text-sm font-semibold text-[#172033] group-hover:text-[#0878df]">
                                                    {service}
                                                </span>
                                            </div>

                                            <ArrowUpRight
                                                size={14}
                                                className="text-[#98a2b3] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0878df]"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a
                            href="#blog"
                            className="group relative px-4 py-3 text-sm font-semibold text-[#172033] transition hover:text-[#0878df]"
                        >
                            Our Blog

                            <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 bg-[#ffbd00] transition-transform group-hover:scale-x-100" />
                        </a>

                        <a
                            href="#contact"
                            className="group relative px-4 py-3 text-sm font-semibold text-[#172033] transition hover:text-[#0878df]"
                        >
                            Contact

                            <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 bg-[#ffbd00] transition-transform group-hover:scale-x-100" />
                        </a>
                    </nav>

                    {/* CTA */}
                    <a
                        href="#contact"
                        className="hidden min-h-12 items-center gap-2 rounded-md bg-[#ffbd00] px-6 text-sm font-black text-[#172033] shadow-[0_8px_25px_rgba(255,189,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0878df] hover:text-white hover:shadow-[0_10px_30px_rgba(8,120,223,0.25)] lg:inline-flex"
                    >
                        Let&apos;s Talk

                        <ArrowUpRight size={17} strokeWidth={2.5} />
                    </a>

                    {/* MOBILE MENU */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen((open) => !open)}
                        className="flex h-11 w-11 items-center justify-center rounded-md border border-[#d4dde8] text-[#172033] transition hover:border-[#0878df] hover:text-[#0878df] lg:hidden"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* =======================================================
            MOBILE NAVIGATION
        ======================================================= */}
                <div
                    className={`overflow-hidden border-t border-[#e4eaf1] bg-white transition-all duration-300 lg:hidden ${mobileOpen
                            ? "max-h-[700px] opacity-100"
                            : "max-h-0 border-t-0 opacity-0"
                        }`}
                >
                    <nav className="vortex-container py-4">
                        <a
                            href="/"
                            onClick={() => setMobileOpen(false)}
                            className="block border-b border-[#eef1f5] py-4 text-sm font-bold text-[#0878df]"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            onClick={() => setMobileOpen(false)}
                            className="block border-b border-[#eef1f5] py-4 text-sm font-semibold text-[#172033]"
                        >
                            About Us
                        </a>

                        <div className="border-b border-[#eef1f5]">
                            <button
                                type="button"
                                onClick={() => setServicesOpen((open) => !open)}
                                className="flex w-full items-center justify-between py-4 text-sm font-semibold text-[#172033]"
                            >
                                Services

                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-[400px] pb-3" : "max-h-0"
                                    }`}
                            >
                                {[
                                    "Vertical Transport",
                                    "Electrical Systems",
                                    "HVAC Systems",
                                    "Public Health Engineering",
                                    "Fire Protection",
                                    "ELV Systems",
                                ].map((service) => (
                                    <a
                                        key={service}
                                        href="#services"
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-2 pl-4 text-sm text-[#667085] transition hover:text-[#0878df]"
                                    >
                                        {service}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a
                            href="#blog"
                            onClick={() => setMobileOpen(false)}
                            className="block border-b border-[#eef1f5] py-4 text-sm font-semibold text-[#172033]"
                        >
                            Our Blog
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="block border-b border-[#eef1f5] py-4 text-sm font-semibold text-[#172033]"
                        >
                            Contact
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ffbd00] px-6 text-sm font-black text-[#172033] transition hover:bg-[#0878df] hover:text-white"
                        >
                            Let&apos;s Talk
                            <ArrowUpRight size={17} />
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}