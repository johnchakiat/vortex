import ServiceDetailPage from "@/components/ServiceDetailPage";

const fireProtection = {
    title: "Fire Protection",

    description:
        "Fire protection engineering solutions designed to support life safety, fire detection, suppression, emergency systems and compliance across complex developments.",

    coreServices: [
        "Fire suppression system design (sprinkler, gaseous, foam)",
        "Fire detection and alarm system design",
        "Emergency lighting and exit signage design",
        "Fire fighting water supply and hydrant design",
        "Smoke control and extraction system design",
        "Fire risk assessment and fire strategy reports",
    ],

    technicalScope: [
        "Wet pipe, dry pipe and pre-action sprinkler systems",
        "Addressable and conventional fire alarm systems",
        "Voice evacuation and public address systems",
        "Firefighter lift and stairwell pressurisation systems",
        "Passive fire protection — compartmentation and fire stopping",
        "Compliance with UAE Civil Defence, NFPA, BS 5839, BS 9999 and local authority standards",
    ],

    projectTypes: [
        "High-rise commercial towers and mixed-use developments",
        "Hospitality — hotels, resorts and serviced apartments",
        "Hospitals, healthcare facilities and laboratories",
        "Industrial facilities, warehouses and logistics centres",
        "Airports, metro stations and transport hubs",
    ],

    images: [
        "https://images.unsplash.com/photo-1785682117611-586d39bfd5f2?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1743698205310-cd814a95afab?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1665655034446-1536f6de3fe6?auto=format&fit=crop&w=1600&q=85",
    ],
};

export default function FireProtectionPage() {
    return <ServiceDetailPage service={fireProtection} />;
}