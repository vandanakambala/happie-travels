/**
 * HAPPIE TRAVELS - Business Configuration & Verified Contact Directory
 * 
 * Ramavarapadu, Vijayawada, Andhra Pradesh
 */

const HAPPIE_CONFIG = {
    businessName: "HAPPIE TRAVELS",
    tagline: "Comfortable journeys. Reliable service.",
    
    // Primary WhatsApp Contact Number
    whatsappNumber: "919494900314", // 9494900314 in international format
    
    // Team Contacts Directory
    team: [
        {
            name: "Nandu",
            role: "Founder",
            phone: "9494900314",
            formattedPhone: "+91 94949 00314",
            whatsapp: "919494900314"
        },
        {
            name: "Khagan",
            role: "Management Partner",
            phone: "9000275984",
            formattedPhone: "+91 90002 75984",
            whatsapp: "919000275984"
        },
        {
            name: "Vandana",
            role: "Manager",
            phone: "9652990994",
            formattedPhone: "+91 96529 90994",
            whatsapp: "919652990994"
        }
    ],

    // Business Email
    email: "happietravels00@gmail.com",
    
    // Business Address Details
    address: {
        street: "Maruthi Street",
        colony: "Gowrishankar Nagar",
        municipality: "Tadigadapa Municipality – 520007",
        city: "Vijayawada",
        landmark: "Ramavarapadu",
        availability: "24/7 Available"
    },
    
    // Direct Google Maps Link
    googleMapsUrl: "https://maps.app.goo.gl/ABgvHTPor4pYPE9M7?g_st=aw",
    
    // SEO Site URL
    siteUrl: "https://www.happietravels.com"
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = HAPPIE_CONFIG;
}
