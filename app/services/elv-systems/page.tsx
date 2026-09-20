import ServiceDetailPage from "@/components/ServiceDetailPage";

const elvSystems = {
    title: "ELV Systems",

    description:
        "Extra-low-voltage engineering solutions integrating security, surveillance, communications, audio visual, access control and intelligent building systems.",

    coreServices: [
        "Security and surveillance system design",
        "Building Management System (BMS) design and integration",
        "Audio Visual (AV) and public address system design",
        "Access control and intrusion detection design",
        "Telecommunications and IT infrastructure planning",
    ],

    technicalScope: [
        "Security & Surveillance",
        "CCTV and video surveillance systems",
        "Access control — card readers, biometrics and turnstiles",
        "Intruder alarm and perimeter protection systems",
        "Video intercom and visitor management systems",
    ],

    projectTypes: [
        "Structured cabling — Cat6, Cat6A, fibre optic networks",
        "Telephone and PABX systems",
        "Public address and voice evacuation systems",
        "Master antenna television (MATV/IPTV) systems",
        "Nurse call and patient entertainment systems (healthcare)",
    ],

    images: [
        "https://vortexenveco.com/wp-content/uploads/2026/04/el1.jpg",
        "https://vortexenveco.com/wp-content/uploads/2026/04/elv2.jpg",
        "https://vortexenveco.com/wp-content/uploads/2026/04/elv3.jpg",
    ],
};

export default function ELVSystemsPage() {
    return <ServiceDetailPage service={elvSystems} />;
}