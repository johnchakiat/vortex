import ServiceDetailPage from "@/components/ServiceDetailPage";

const verticalTransport = {
    title: "Vertical Transport",

    description:
        "Specialist vertical transportation engineering covering lift and elevator traffic analysis, escalator planning, performance assessment and vertical transport strategies for modern developments.",

    coreServices: [
        "Lift/elevator traffic analysis and studies — calculating optimum number, size and speed of lifts for a building",
        "Escalator and moving walkway planning and specification",
        "Vertical transport strategy for new developments and refurbishments",
        "Performance assessments of existing lift installations",
    ],

    technicalScope: [
        "Traffic analysis simulations (up-peak, inter-floor, down-peak)",
        "Shaft sizing, machine room requirements and structural coordination",
        "Energy efficiency and modernisation studies",
        "Compliance with local codes and international standards (EN 81, ASME A17.1, BS EN 115)",
        "Compliance with local codes and international standards (EN 81, ASME A17.1, BS EN 115) & Dubai Building Code (DBC)",
    ],

    projectTypes: [
        "High-rise commercial towers and mixed-use developments",
        "Hospitality and residential buildings",
        "Energy efficiency and modernisation studies",
        "Hospitals and healthcare facilities",
        "Airports, metro stations and transport hubs",
        "Data centres and industrial facilities",
    ],

    images: [
        "https://images.unsplash.com/photo-1743662490169-342a322f98b4?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1729487151710-5cc0f72b63b5?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1743698205310-cd814a95afab?auto=format&fit=crop&w=1600&q=85",
    ],
};

export default function VerticalTransportPage() {
    return <ServiceDetailPage service={verticalTransport} />;
}