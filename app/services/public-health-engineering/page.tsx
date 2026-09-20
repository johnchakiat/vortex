import ServiceDetailPage from "@/components/ServiceDetailPage";

const publicHealthEngineering = {
    title: "Public Health Engineering",

    description:
        "Public health engineering solutions covering water supply, drainage, wastewater, rainwater management, irrigation and sanitary systems.",

    coreServices: [
        "Potable cold and hot water system design",
        "Drainage and wastewater system design",
        "Rainwater harvesting and management",
        "Sanitary fixture scheduling and specification",
        "Pump sizing and pressurisation system design",
    ],

    technicalScope: [
        "Domestic water supply and distribution networks",
        "Soil, waste and vent pipe system design",
        "Grease trap and interceptor design",
        "Swimming pool and water feature engineering",
        "Irrigation system design",
        "Legionella risk assessment and water hygiene",
        "Compliance with UAE municipality regulations, BS EN 806, BS 8558 and CIBSE standards",
    ],

    projectTypes: [
        "Commercial office towers and retail developments",
        "Hospitality — hotels, resorts and serviced apartments",
        "Hospitals, healthcare facilities and laboratories",
        "Residential complexes and villas",
        "Airports and transport infrastructure",
    ],

    images: [
        "https://images.unsplash.com/photo-1765277789190-22f77c5e7046?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1768321916212-17ae334a3d63?auto=format&fit=crop&w=1600&q=85",
        "https://vincivilworld.com/wp-content/uploads/2021/07/public-health-engineer.jpg?w=1024",
    ],
};

export default function PublicHealthEngineeringPage() {
    return <ServiceDetailPage service={publicHealthEngineering} />;
}