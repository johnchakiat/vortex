"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const services = [
    {
        name: "Vertical Transport",
        href: "/services/vertical-transport",
    },
    {
        name: "Electrical Systems",
        href: "/services/electrical-systems",
    },
    {
        name: "HVAC Systems",
        href: "/services/hvac-systems",
    },
    {
        name: "Public Health Engineering",
        href: "/services/public-health-engineering",
    },
    {
        name: "Fire Protection",
        href: "/services/fire-protection",
    },
    {
        name: "ELV Systems",
        href: "/services/elv-systems",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const isHome = pathname === "/";
    const isAbout = pathname === "/about-us";
    const isServices =
        pathname === "/services" ||
        pathname.startsWith("/services/");

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

                        <a
                            href="#"
                            className="transition hover:text-[#ffbd00]"
                        >
                            Facebook
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-[#ffbd00]"
                        >
                            X
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-[#ffbd00]"
                        >
                            YouTube
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-[#ffbd00]"
                        >
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

                    {/* OFFICE */}

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


                    {/* HOURS */}

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


                    {/* PHONE */}

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


                    {/* EMAIL */}

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

                    {/* LOGO */}

                    <Link
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

                    </Link>


                    {/* =================================================
                        DESKTOP NAV
                    ================================================= */}

                    <nav className="hidden items-center gap-1 lg:flex">

                        {/* HOME */}

                        <Link
                            href="/"
                            className={`group relative px-4 py-3 text-sm font-semibold transition-colors ${isHome
                                ? "text-[#0878df]"
                                : "text-[#172033] hover:text-[#0878df]"
                                }`}
                        >
                            Home

                            <span
                                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#ffbd00] transition-transform duration-300 ${isHome
                                    ? "scale-x-100"
                                    : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                            />
                        </Link>


                        {/* ABOUT */}

                        <Link
                            href="/about-us"
                            className={`group relative px-4 py-3 text-sm font-semibold transition-colors ${isAbout
                                ? "text-[#0878df]"
                                : "text-[#172033] hover:text-[#0878df]"
                                }`}
                        >
                            About Us

                            <span
                                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#ffbd00] transition-transform duration-300 ${isAbout
                                    ? "scale-x-100"
                                    : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                            />
                        </Link>


                        {/* =================================================
                            SERVICES
                        ================================================= */}

                        <div
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >

                            <div className="flex items-center">

                                <Link
                                    href="/services"
                                    className={`group relative px-4 py-3 text-sm font-semibold transition-colors ${isServices
                                        ? "text-[#0878df]"
                                        : "text-[#172033] hover:text-[#0878df]"
                                        }`}
                                >

                                    Services

                                    <span
                                        className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#ffbd00] transition-transform duration-300 ${isServices
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    />

                                </Link>


                                <button
                                    type="button"
                                    onClick={() =>
                                        setServicesOpen((open) => !open)
                                    }
                                    className="flex h-[44px] w-7 items-center justify-center text-[#172033] transition hover:text-[#0878df]"
                                    aria-label="Toggle services menu"
                                    aria-expanded={servicesOpen}
                                >

                                    <ChevronDown
                                        size={15}
                                        className={`transition-transform duration-200 ${servicesOpen
                                            ? "rotate-180"
                                            : ""
                                            }`}
                                    />

                                </button>

                            </div>


                            {/* SERVICES DROPDOWN */}

                            <div
                                className={`absolute left-1/2 top-full z-50 w-[300px] -translate-x-1/2 pt-3 transition-all duration-200 ${servicesOpen
                                    ? "pointer-events-auto translate-y-0 opacity-100"
                                    : "pointer-events-none -translate-y-2 opacity-0"
                                    }`}
                            >

                                <div className="overflow-hidden rounded-lg border border-[#d4dde8] bg-white shadow-[0_20px_50px_rgba(23,32,51,0.14)]">

                                    {/* HEADER */}

                                    <Link
                                        href="/services"
                                        onClick={() =>
                                            setServicesOpen(false)
                                        }
                                        className="block border-b border-[#e4eaf1] bg-[#f8fafc] px-5 py-4 transition hover:bg-[#eef6ff]"
                                    >

                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0878df]">
                                            Our Services
                                        </p>

                                        <p className="mt-1 text-xs text-[#667085]">
                                            View all engineering services
                                        </p>

                                    </Link>


                                    {/* SERVICE LINKS */}

                                    {services.map((service, index) => (

                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            onClick={() =>
                                                setServicesOpen(false)
                                            }
                                            className={`group flex items-center justify-between border-b border-[#eef1f5] px-5 py-3.5 last:border-0 hover:bg-[#f5f8fc] ${pathname === service.href
                                                ? "bg-[#f5f8fc]"
                                                : ""
                                                }`}
                                        >

                                            <div className="flex items-center gap-3">

                                                <span className="text-[10px] font-bold text-[#ffbd00]">
                                                    0{index + 1}
                                                </span>

                                                <span
                                                    className={`text-sm font-semibold transition ${pathname === service.href
                                                        ? "text-[#0878df]"
                                                        : "text-[#172033] group-hover:text-[#0878df]"
                                                        }`}
                                                >
                                                    {service.name}
                                                </span>

                                            </div>

                                            <ArrowUpRight
                                                size={14}
                                                className="text-[#98a2b3] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0878df]"
                                            />

                                        </Link>

                                    ))}

                                </div>

                            </div>

                        </div>


                        {/* BLOG */}

                        <Link
                            href="/blog"
                            className={`group relative px-4 py-3 text-sm font-semibold transition-colors ${pathname === "/blog"
                                ? "text-[#0878df]"
                                : "text-[#172033] hover:text-[#0878df]"
                                }`}
                        >
                            Our Blog

                            <span
                                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#ffbd00] transition-transform duration-300 ${pathname === "/blog"
                                    ? "scale-x-100"
                                    : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                            />
                        </Link>

                        {/* CONTACT */}

                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="..."
                        >
                            Contact
                        </Link>

                    </nav>


                    {/* CTA */}

                    <a
                        href="#contact"
                        className="hidden min-h-12 items-center gap-2 rounded-md bg-[#ffbd00] px-6 text-sm font-black text-[#172033] shadow-[0_8px_25px_rgba(255,189,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0878df] hover:text-white hover:shadow-[0_10px_30px_rgba(8,120,223,0.25)] lg:inline-flex"
                    >

                        Let&apos;s Talk

                        <ArrowUpRight
                            size={17}
                            strokeWidth={2.5}
                        />

                    </a>


                    {/* MOBILE BUTTON */}

                    <button
                        type="button"
                        onClick={() =>
                            setMobileOpen((open) => !open)
                        }
                        className="flex h-11 w-11 items-center justify-center rounded-md border border-[#d4dde8] text-[#172033] transition hover:border-[#0878df] hover:text-[#0878df] lg:hidden"
                        aria-label={
                            mobileOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                        aria-expanded={mobileOpen}
                    >

                        {mobileOpen ? (
                            <X size={22} />
                        ) : (
                            <Menu size={22} />
                        )}

                    </button>

                </div>


                {/* =======================================================
                    MOBILE NAVIGATION
                ======================================================= */}

                <div
                    className={`overflow-hidden border-t border-[#e4eaf1] bg-white transition-all duration-300 lg:hidden ${mobileOpen
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 border-t-0 opacity-0"
                        }`}
                >

                    <nav className="vortex-container py-4">

                        {/* HOME */}

                        <Link
                            href="/"
                            onClick={() => setMobileOpen(false)}
                            className={`block border-b border-[#eef1f5] py-4 text-sm font-semibold transition ${isHome
                                ? "text-[#0878df]"
                                : "text-[#172033] hover:text-[#0878df]"
                                }`}
                        >
                            Home
                        </Link>


                        {/* ABOUT */}

                        <Link
                            href="/about-us"
                            onClick={() => setMobileOpen(false)}
                            className={`block border-b border-[#eef1f5] py-4 text-sm font-semibold transition ${isAbout
                                ? "text-[#0878df]"
                                : "text-[#172033] hover:text-[#0878df]"
                                }`}
                        >
                            About Us
                        </Link>


                        {/* MOBILE SERVICES */}

                        <div className="border-b border-[#eef1f5]">

                            <div className="flex items-center justify-between">

                                <Link
                                    href="/services"
                                    onClick={() =>
                                        setMobileOpen(false)
                                    }
                                    className={`flex-1 py-4 text-sm font-semibold transition ${isServices
                                        ? "text-[#0878df]"
                                        : "text-[#172033] hover:text-[#0878df]"
                                        }`}
                                >
                                    Services
                                </Link>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setServicesOpen((open) => !open)
                                    }
                                    className="flex h-[52px] w-12 items-center justify-center text-[#172033] transition hover:text-[#0878df]"
                                    aria-label="Toggle services menu"
                                    aria-expanded={servicesOpen}
                                >

                                    <ChevronDown
                                        size={17}
                                        className={`transition-transform duration-200 ${servicesOpen
                                            ? "rotate-180"
                                            : ""
                                            }`}
                                    />

                                </button>

                            </div>


                            {/* MOBILE SERVICE LINKS */}

                            <div
                                className={`overflow-hidden transition-all duration-300 ${servicesOpen
                                    ? "max-h-[600px] pb-3"
                                    : "max-h-0"
                                    }`}
                            >

                                <Link
                                    href="/services"
                                    onClick={() => {
                                        setServicesOpen(false);
                                        setMobileOpen(false);
                                    }}
                                    className="mb-2 block rounded-md bg-[#f8fafc] px-4 py-3 transition hover:bg-[#eef6ff]"
                                >

                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0878df]">
                                        Our Services
                                    </p>

                                    <p className="mt-1 text-xs text-[#667085]">
                                        View all engineering services
                                    </p>

                                </Link>


                                {services.map((service, index) => (

                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setMobileOpen(false);
                                        }}
                                        className={`group flex items-center gap-3 px-4 py-2.5 ${pathname === service.href
                                            ? "text-[#0878df]"
                                            : ""
                                            }`}
                                    >

                                        <span className="text-[10px] font-bold text-[#ffbd00]">
                                            0{index + 1}
                                        </span>

                                        <span
                                            className={`text-sm transition ${pathname === service.href
                                                ? "text-[#0878df]"
                                                : "text-[#667085] group-hover:text-[#0878df]"
                                                }`}
                                        >
                                            {service.name}
                                        </span>

                                    </Link>

                                ))}

                            </div>

                        </div>


                        {/* BLOG */}

                        <Link
                            href="/blog"
                            onClick={() => setMobileOpen(false)}
                            className={`block border-b border-[#eef1f5] py-4 text-sm font-semibold transition ${pathname === "/blog"
                                ? "text-[#0878df]"
                                : "text-[#172033] hover:text-[#0878df]"
                                }`}
                        >
                            Our Blog
                        </Link>

                        {/* CONTACT */}


                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="..."
                        >
                            Contact
                        </Link>


                        {/* CTA */}

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