/**
 * HAPPIE TRAVELS - Vehicle Fleet Inventory
 * Exclusively 3 authorized vehicles: Ertiga (7-seater), Innova (7-seater), Swift Dzire (5-seater)
 */

const CARS_FLEET = [
    {
        id: "ertiga",
        name: "Ertiga",
        makeModel: "Maruti Suzuki Ertiga",
        category: "7-seater",
        seats: 7,
        badge: "7 SEATER",
        tagline: "Comfortable for family and group travel",
        description: "Spacious, fuel-efficient 7-seater MPV ideal for family vacations, temple trips, and long outstation travel with ample luggage room.",
        image: "images/ertiga.jpg",
        pricingPreview: "12 Hours / 100 KM @ ₹2,600",
        features: ["7 Comfortable Seats", "Dual AC Vents", "Clean & Sanitized", "Experienced Driver Option", "Outstation @ ₹18/KM"]
    },
    {
        id: "innova",
        name: "Innova",
        makeModel: "Toyota Innova",
        category: "7-seater",
        seats: 7,
        badge: "7 SEATER",
        tagline: "Spacious and comfortable premium travel",
        description: "The ultimate long-distance travel vehicle offering legendary ride quality, captain seats, and superior highway comfort for all group sizes.",
        image: "images/innova.jpg",
        pricingPreview: "12 Hours / 100 KM @ ₹2,600",
        features: ["Captains & Bench Seating", "High Highway Stability", "Deep Cleaned & Sanitized", "Spacious Boot Space", "Outstation @ ₹18/KM"]
    },
    {
        id: "swift-dzire",
        name: "Swift Dzire",
        makeModel: "Maruti Suzuki Swift Dzire",
        category: "5-seater",
        seats: 5,
        badge: "5 SEATER",
        tagline: "Comfortable for small groups and local travel",
        description: "Modern, smooth, and compact sedan perfect for city rides, airport transfers, quick local errands, and budget family trips.",
        image: "images/swift_dzire.jpg",
        pricingPreview: "6 Hours / 70 KM @ ₹1,100",
        features: ["5 Comfortable Seats", "Chilled Air Conditioning", "Quiet Smooth Engine", "Airport Pickup @ ₹800+", "Outstation @ ₹14/KM"]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CARS_FLEET;
}
