/**
 * HAPPIE TRAVELS - Application Core & SEO Image Binding
 * Direct WhatsApp Booking Generator & Local Contacts Directory
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Cars Fleet (Ertiga, Innova, Swift Dzire) with SEO Alt Attributes
    renderFleet();

    // 2. Bind Direct WhatsApp & Phone Action Buttons across site
    initContactBindings();

    // 3. Initialize Booking Form Handler
    initBookingForm();

    // 4. Initialize Mobile Navigation Drawer
    initMobileNav();
});

/**
 * Render the 3 Fleet Vehicles (Ertiga, Innova, Swift Dzire)
 */
function renderFleet() {
    const container = document.getElementById('carsContainer');
    if (!container || typeof CARS_FLEET === 'undefined') return;

    container.innerHTML = CARS_FLEET.map(car => `
        <div class="car-card">
            <div class="car-img-wrap">
                <img src="${car.image}" alt="Happie Travels ${car.badge} ${car.makeModel} Car Rental in Ramavarapadu, Vijayawada" loading="lazy" />
                <span class="car-badge-tag">${car.badge}</span>
            </div>
            <div class="car-content">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-model-sub">${car.makeModel}</div>
                <p class="car-tagline">${car.tagline}</p>
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">
                    ${car.description}
                </div>
                <div class="car-card-footer">
                    <div style="font-size: 0.85rem; font-weight: 700; color: #997300; margin-bottom: 0.75rem;">
                        <i class="fas fa-tag"></i> ${car.pricingPreview}
                    </div>
                    <button class="btn btn-gold" style="width: 100%;" onclick="openBookingModal('${car.name}', '${car.category}')">
                        <i class="fab fa-whatsapp"></i> Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Bind team phone numbers & WhatsApp links dynamically
 */
function initContactBindings() {
    const defaultWa = (typeof HAPPIE_CONFIG !== 'undefined' && HAPPIE_CONFIG.whatsappNumber) ? HAPPIE_CONFIG.whatsappNumber : '919494900314';

    // Direct WhatsApp Buttons
    const waButtons = document.querySelectorAll('.js-wa-btn');
    const defaultMsg = encodeURIComponent('Hello Happie Travels, I would like to enquire about car rental services in Ramavarapadu, Vijayawada.');
    waButtons.forEach(btn => {
        btn.href = `https://wa.me/${defaultWa}?text=${defaultMsg}`;
        btn.target = '_blank';
    });

    // Direct Call Buttons (9494900314 primary)
    const callButtons = document.querySelectorAll('.js-call-primary');
    callButtons.forEach(btn => {
        btn.href = 'tel:9494900314';
    });
}

/**
 * Open Booking Form Modal with Pre-selected Vehicle
 */
window.openBookingModal = function(vehicleName, seaterCategory) {
    const carSelect = document.getElementById('selectVehicle');
    const seaterSelect = document.getElementById('selectSeater');

    if (carSelect) carSelect.value = vehicleName;
    if (seaterSelect) seaterSelect.value = seaterCategory;

    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.add('active');
    } else {
        const bookingSec = document.getElementById('booking');
        if (bookingSec) bookingSec.scrollIntoView({ behavior: 'smooth' });
    }
};

window.closeBookingModal = function() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.remove('active');
};

/**
 * Booking Form Handler -> Generates formatted WhatsApp link
 */
function initBookingForm() {
    const forms = document.querySelectorAll('.js-booking-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = form.querySelector('[name="custName"]');
            const vehicleInput = form.querySelector('[name="selectVehicle"]');
            const seaterInput = form.querySelector('[name="selectSeater"]');
            const pickupInput = form.querySelector('[name="pickupLocation"]');
            const destInput = form.querySelector('[name="destination"]');
            const dateInput = form.querySelector('[name="travelDate"]');
            const hoursInput = form.querySelector('[name="requiredHours"]');

            const name = nameInput ? nameInput.value.trim() : '';
            const vehicle = vehicleInput ? vehicleInput.value : 'Ertiga';
            const seater = seaterInput ? seaterInput.value : '7-seater';
            const pickup = pickupInput ? pickupInput.value.trim() : '';
            const dest = destInput ? destInput.value.trim() : 'Local / Outstation';
            const date = dateInput ? dateInput.value : '';
            const hours = hoursInput ? hoursInput.value : '8 Hours';

            if (!name || !pickup) {
                alert('Please fill in your Name and Pickup Location.');
                return;
            }

            // EXACT PRE-FILLED WHATSAPP MESSAGE FORMAT REQUESTED BY USER
            const messageText = 
`Hello Happie Travels, I would like to book a car.

Name: ${name}
Vehicle: ${vehicle}
5-Seater / 7-Seater: ${seater}
Pickup Location: ${pickup}
Destination: ${dest}
Travel Date: ${date || 'Today'}
Required Hours: ${hours}
Please share availability and final price.`;

            const encodedMsg = encodeURIComponent(messageText);
            const targetWa = (typeof HAPPIE_CONFIG !== 'undefined' && HAPPIE_CONFIG.whatsappNumber) ? HAPPIE_CONFIG.whatsappNumber : '919494900314';
            const waUrl = `https://wa.me/${targetWa}?text=${encodedMsg}`;

            // Close modal if open
            closeBookingModal();

            // Open WhatsApp
            window.open(waUrl, '_blank');
        });
    });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navDrawer = document.getElementById('mobileNavDrawer');
    const drawerLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !navDrawer) return;

    menuBtn.addEventListener('click', () => {
        navDrawer.classList.toggle('open');
    });

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            navDrawer.classList.remove('open');
        });
    });
}
