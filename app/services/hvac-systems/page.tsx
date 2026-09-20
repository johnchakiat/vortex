import ServiceDetailPage from "@/components/ServiceDetailPage";

const hvacSystems = {
    title: "HVAC Systems",

    description:
        "Heating, ventilation and air conditioning engineering focused on thermal comfort, indoor air quality, energy performance and reliable building operation.",

    coreServices: [
        "Cooling and heating load calculations",
        "HVAC system selection and design",
        "Ventilation strategy and fresh air planning",
        "Duct sizing, routing and distribution design",
        "Equipment specification and scheduling",
    ],

    technicalScope: [
        "Chilled water and VRF/VRV system design",
        "Air handling units (AHU), fan coil units (FCU) and CRAC unit",
        "Pressurisation, smoke control and stairwell ventilation",
        "Thermal comfort and indoor air quality (IAQ) analysis",
        "Energy modelling and building simulation",
        "Compliance with ASHRAE, CIBSE, UAE Civil Defence and local authority standards",
    ],

    projectTypes: [
        "Commercial office towers and retail malls",
        "Hospitality and residential developments",
        "Hospitals, laboratories and pharmaceutical facilities",
        "Data centres requiring precision cooling",
        "District cooling network integration",
    ],

    images: [
        "https://vortexenveco.com/wp-content/uploads/2026/04/hv1-1.jpg",
        "https://vortexenveco.com/wp-content/uploads/2026/04/hv2.jpg",
        "https://vortexenveco.com/wp-content/uploads/2026/04/hv3.jpg",
    ],
};

export default function HVACSystemsPage() {
    return <ServiceDetailPage service={hvacSystems} />;
}