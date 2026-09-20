import ServiceDetailPage from "@/components/ServiceDetailPage";

const electricalSystems = {
    title: "Electrical Systems",

    description:
        "Comprehensive electrical engineering solutions covering power distribution, lighting, standby power, protection and energy management for modern developments.",

    coreServices: [
        "Power distribution system design (LV/MV networks)",
        "Lighting design — interior, exterior and emergency",
        "Standby power — generators, UPS and battery systems",
        "Earthing, bonding and lightning protection",
        "Load scheduling and demand analysis",
    ],

    technicalScope: [
        "Single line diagrams and schematic drawings",
        "Cable sizing, selection and routing",
        "Switchgear and transformer specification",
        "Power factor correction",
        "Energy metering and monitoring systems",
        "Compliance with IEC, BS 7671, UAE regulations",
    ],

    projectTypes: [
        "Commercial office towers and retail developments",
        "Hospitality and residential complexes",
        "Hospitals, laboratories and clean rooms",
        "Data centres and server rooms",
        "Industrial plants and warehouses",
    ],

    images: [
        "https://vortexenveco.com/wp-content/uploads/2026/04/New-Project-11.jpg",
        "https://vortexenveco.com/wp-content/uploads/2026/04/sdd.jpg",
        "https://vortexenveco.com/wp-content/uploads/2026/04/aqw1.jpg",
    ],
};

export default function ElectricalSystemsPage() {
    return <ServiceDetailPage service={electricalSystems} />;
}