"use client";

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    ChevronDown,
    Menu,
    X,
    ArrowUpRight,
} from "lucide-react";

const services = [
    {
        name: "Busduct / Busbar Maintenance",
        href: "/services/busduct-busbar-maintenance",
    },
    {
        name: "Switchgear Maintenance",
        href: "/services/switchgear-maintenance",
    },
    {
        name: "HVAC Maintenance",
        href: "/services/hvac-maintenance",
    },
    {
        name: "Transformer Maintenance",
        href: "/services/transformer-maintenance",
    },
    {
        name: "Aircraft Warning Lights",
        href: "/services/aircraft-warning-lights",
    },
    {
        name: "Testing & Commissioning",
        href: "/services/testing-commissioning",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, [pathname]);

    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const isHome = pathname === "/";
    const isAbout = pathname === "/about-us";

    const isServices =
        pathname === "/services" ||
        pathname.startsWith("/services/");

    const isProjects = pathname === "/projects";
    const isContact = pathname === "/contact";

    const closeMenus = () => {
        setMobileOpen(false);
        setServicesOpen(false);
    };

    return (
        <>

            {/* =========================================================
                TOP INFORMATION STRIP
            ========================================================= */}

            <div className="bg-[#0B2D5C] text-white">
                <div className="mx-auto flex min-h-9 w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">

                    <div className="flex items-center gap-2">

                        <span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-[11px]">
                            DeltaCare
                        </span>

                        <span className="hidden text-[10px] uppercase tracking-[0.14em] text-white/45 sm:inline">
                            Electrical & Technical Services
                        </span>

                    </div>

                    <div className="hidden items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:flex">

                        <span>Reliable</span>

                        <span className="h-3 w-px bg-white/20" />

                        <span>Technical</span>

                        <span className="h-3 w-px bg-white/20" />

                        <span>Professional</span>

                    </div>

                </div>
            </div>


            {/* =========================================================
                MAIN STICKY NAVIGATION
                This is a sibling of the top strip so sticky can persist while scrolling.
            ========================================================= */}

            <div
                className="
                    sticky
                    top-0
                    z-[999]
                    w-full
                    border-b
                    border-[#e4eaf1]
                    bg-white/95
                    shadow-[0_4px_20px_rgba(7,17,31,0.06)]
                    backdrop-blur-md
                "
            >

                <div className="mx-auto flex min-h-[82px] w-full max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:min-h-[94px] lg:px-10">

                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <Link
                        href="/"
                        onClick={closeMenus}
                        className="group flex shrink-0 items-center"
                        aria-label="DeltaCare home"
                    >
                        <img
                            src="/deltacare-logo.png"
                            alt="DeltaCare"
                            className="
                                h-auto
                                w-[175px]
                                object-contain
                                transition-all
                                duration-300
                                ease-out
                                group-hover:scale-[1.025]
                                sm:w-[195px]
                                lg:w-[220px]
                            "
                        />
                    </Link>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <nav className="hidden items-center gap-1 lg:flex">

                        {/* HOME */}

                        <Link
                            href="/"
                            className={`group relative px-4 py-3 text-sm font-semibold transition-colors ${isHome
                                ? "text-[#0B5FA5]"
                                : "text-[#172033] hover:text-[#0B5FA5]"
                                }`}
                        >
                            Home

                            <span
                                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#1E88E5] transition-transform duration-300 ${isHome
                                    ? "scale-x-100"
                                    : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                            />
                        </Link>


                        {/* ABOUT */}

                        <Link
                            href="/about-us"
                            className={`group relative px-4 py-3 text-sm font-semibold transition-colors ${isAbout
                                ? "text-[#0B5FA5]"
                                : "text-[#172033] hover:text-[#0B5FA5]"
                                }`}
                        >
                            About Us

                            <span
                                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#1E88E5] transition-transform duration-300 ${isAbout
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
                                        ? "text-[#0B5FA5]"
                                        : "text-[#172033] hover:text-[#0B5FA5]"
                                        }`}
                                >
                                    Services

                                    <span
                                        className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#1E88E5] transition-transform duration-300 ${isServices
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
                                    className="flex h-11 w-7 items-center justify-center text-[#172033] transition hover:text-[#0B5FA5]"
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


                            {/* =================================================
                                SERVICES DROPDOWN
                            ================================================= */}

                            <div
                                className={`absolute left-1/2 top-full z-[1000] w-[320px] -translate-x-1/2 pt-3 transition-all duration-200 ${servicesOpen
                                    ? "pointer-events-auto translate-y-0 opacity-100"
                                    : "pointer-events-none -translate-y-2 opacity-0"
                                    }`}
                            >

                                <div className="overflow-hidden rounded-xl border border-[#DCE5EF] bg-white shadow-[0_20px_50px_rgba(11,45,92,0.14)]">

                                    <Link
                                        href="/services"
                                        onClick={closeMenus}
                                        className="block border-b border-[#E7EDF4] bg-[#F6F9FC] px-5 py-4 transition hover:bg-[#EDF5FC]"
                                    >
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B5FA5]">
                                            Our Services
                                        </p>

                                        <p className="mt-1 text-xs text-[#667085]">
                                            Electrical and technical solutions
                                        </p>
                                    </Link>


                                    {services.map((service, index) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            onClick={closeMenus}
                                            className={`group flex items-center justify-between border-b border-[#EEF2F6] px-5 py-3.5 transition last:border-0 hover:bg-[#F5F9FD] ${pathname === service.href
                                                ? "bg-[#F5F9FD]"
                                                : ""
                                                }`}
                                        >

                                            <div className="flex min-w-0 items-center gap-3">

                                                <span className="shrink-0 text-[10px] font-bold text-[#1E88E5]">
                                                    0{index + 1}
                                                </span>

                                                <span
                                                    className={`text-sm font-semibold transition ${pathname === service.href
                                                        ? "text-[#0B5FA5]"
                                                        : "text-[#172033] group-hover:text-[#0B5FA5]"
                                                        }`}
                                                >
                                                    {service.name}
                                                </span>

                                            </div>

                                            <ArrowUpRight
                                                size={14}
                                                className="shrink-0 text-[#98A2B3] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0B5FA5]"
                                            />

                                        </Link>
                                    ))}

                                </div>

                            </div>

                        </div>


                        {/* PROJECTS */}

                        <Link
                            href="/projects"
                            className={`group relative px-4 py-3 text-sm font-semibold transition-colors ${isProjects
                                ? "text-[#0B5FA5]"
                                : "text-[#172033] hover:text-[#0B5FA5]"
                                }`}
                        >
                            Projects

                            <span
                                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#1E88E5] transition-transform duration-300 ${isProjects
                                    ? "scale-x-100"
                                    : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                            />
                        </Link>


                        {/* CONTACT */}

                        <Link
                            href="/contact"
                            className={`group relative px-4 py-3 text-sm font-semibold transition-colors ${isContact
                                ? "text-[#0B5FA5]"
                                : "text-[#172033] hover:text-[#0B5FA5]"
                                }`}
                        >
                            Contact

                            <span
                                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#1E88E5] transition-transform duration-300 ${isContact
                                    ? "scale-x-100"
                                    : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                            />
                        </Link>

                    </nav>


                    {/* =================================================
                        DESKTOP CTA
                    ================================================= */}

                    <Link
                        href="/contact"
                        className="
                            hidden
                            min-h-11
                            items-center
                            gap-2
                            rounded-md
                            bg-[#0B2D5C]
                            px-5
                            text-sm
                            font-bold
                            text-white
                            shadow-[0_8px_22px_rgba(11,45,92,0.16)]
                            transition
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[#0B5FA5]
                            hover:shadow-[0_12px_28px_rgba(11,95,165,0.22)]
                            lg:inline-flex
                        "
                    >
                        Contact Us

                        <ArrowUpRight
                            size={16}
                            strokeWidth={2.4}
                        />
                    </Link>


                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================= */}

                    <button
                        type="button"
                        onClick={() =>
                            setMobileOpen((open) => !open)
                        }
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-md
                            border
                            border-[#D4DFEA]
                            text-[#0B2D5C]
                            transition
                            hover:border-[#0B5FA5]
                            hover:text-[#0B5FA5]
                            lg:hidden
                        "
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
                    className={`overflow-hidden border-t border-[#E4EAF2] bg-white transition-all duration-300 lg:hidden ${mobileOpen
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 border-t-0 opacity-0"
                        }`}
                >

                    <nav className="mx-auto w-full max-w-[1400px] px-5 py-3 sm:px-8">

                        {/* HOME */}

                        <Link
                            href="/"
                            onClick={closeMenus}
                            className={`block border-b border-[#EEF2F6] py-4 text-sm font-semibold transition ${isHome
                                ? "text-[#0B5FA5]"
                                : "text-[#172033] hover:text-[#0B5FA5]"
                                }`}
                        >
                            Home
                        </Link>


                        {/* ABOUT */}

                        <Link
                            href="/about-us"
                            onClick={closeMenus}
                            className={`block border-b border-[#EEF2F6] py-4 text-sm font-semibold transition ${isAbout
                                ? "text-[#0B5FA5]"
                                : "text-[#172033] hover:text-[#0B5FA5]"
                                }`}
                        >
                            About Us
                        </Link>


                        {/* SERVICES */}

                        <div className="border-b border-[#EEF2F6]">

                            <div className="flex items-center justify-between">

                                <Link
                                    href="/services"
                                    onClick={closeMenus}
                                    className={`flex-1 py-4 text-sm font-semibold transition ${isServices
                                        ? "text-[#0B5FA5]"
                                        : "text-[#172033] hover:text-[#0B5FA5]"
                                        }`}
                                >
                                    Services
                                </Link>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setServicesOpen((open) => !open)
                                    }
                                    className="flex h-[52px] w-12 items-center justify-center text-[#172033] transition hover:text-[#0B5FA5]"
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


                            {/* MOBILE SERVICES */}

                            <div
                                className={`overflow-hidden transition-all duration-300 ${servicesOpen
                                    ? "max-h-[700px] pb-3"
                                    : "max-h-0"
                                    }`}
                            >

                                <Link
                                    href="/services"
                                    onClick={closeMenus}
                                    className="mb-2 block rounded-md bg-[#F6F9FC] px-4 py-3 transition hover:bg-[#EDF5FC]"
                                >
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B5FA5]">
                                        Our Services
                                    </p>

                                    <p className="mt-1 text-xs text-[#667085]">
                                        View all services
                                    </p>
                                </Link>


                                {services.map((service, index) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        onClick={closeMenus}
                                        className={`group flex items-center gap-3 px-4 py-2.5 ${pathname === service.href
                                            ? "text-[#0B5FA5]"
                                            : ""
                                            }`}
                                    >

                                        <span className="text-[10px] font-bold text-[#1E88E5]">
                                            0{index + 1}
                                        </span>

                                        <span
                                            className={`text-sm transition ${pathname === service.href
                                                ? "text-[#0B5FA5]"
                                                : "text-[#667085] group-hover:text-[#0B5FA5]"
                                                }`}
                                        >
                                            {service.name}
                                        </span>

                                    </Link>
                                ))}

                            </div>

                        </div>


                        {/* PROJECTS */}

                        <Link
                            href="/projects"
                            onClick={closeMenus}
                            className={`block border-b border-[#EEF2F6] py-4 text-sm font-semibold transition ${isProjects
                                ? "text-[#0B5FA5]"
                                : "text-[#172033] hover:text-[#0B5FA5]"
                                }`}
                        >
                            Projects
                        </Link>


                        {/* CONTACT */}

                        <Link
                            href="/contact"
                            onClick={closeMenus}
                            className={`block border-b border-[#EEF2F6] py-4 text-sm font-semibold transition ${isContact
                                ? "text-[#0B5FA5]"
                                : "text-[#172033] hover:text-[#0B5FA5]"
                                }`}
                        >
                            Contact
                        </Link>


                        {/* MOBILE CTA */}

                        <Link
                            href="/contact"
                            onClick={closeMenus}
                            className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#0B2D5C] px-6 text-sm font-bold text-white transition hover:bg-[#0B5FA5]"
                        >
                            Contact Us

                            <ArrowUpRight size={17} />
                        </Link>

                    </nav>

                </div>

            </div>

        </>
    );
}