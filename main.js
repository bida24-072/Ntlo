/* ============================================
   NTLO — Botswana Property Platform
============================================ */

/* ---------- PROPERTY DATA ---------- */
const properties = [
    { id: 1, title: "Modern Family Villa", suburb: "Phakalane", type: "house", price: 3850000, beds: 5, baths: 4, parking: 3, area: 480, lat: -24.5833, lng: 25.9833, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "A stunning contemporary villa in Phakalane's most sought-after street. Double-storey, with a private pool, landscaped garden, and a self-contained guest cottage. Perfect for a growing family.", features: ["Private Pool","Guest Cottage","Solar Power","Borehole","Alarm System","Double Garage","Landscaped Garden","Air Conditioning"] },
    { id: 2, title: "Executive Apartment", suburb: "CBD", type: "apartment", price: 1250000, beds: 3, baths: 2, parking: 2, area: 145, lat: -24.6581, lng: 25.9088, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Sleek city-centre apartment with panoramic views over Gaborone. Walking distance to offices, restaurants, and the Main Mall.", features: ["City Views","Concierge","Gym","Pool Access","Secure Parking","Air Conditioning"] },
    { id: 3, title: "Charming Townhouse", suburb: "Extension 12", type: "townhouse", price: 1650000, beds: 3, baths: 2, parking: 2, area: 190, lat: -24.6380, lng: 25.9350, img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Well-maintained townhouse in a quiet gated community. Ideal first home or investment property.", features: ["Gated Community","Private Garden","Patio","Built-in Cupboards","Pet Friendly"] },
    { id: 4, title: "Luxury Estate Home", suburb: "Phakalane", type: "house", price: 6200000, beds: 6, baths: 5, parking: 4, area: 620, lat: -24.5780, lng: 25.9780, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "One of Phakalane's finest homes. Six bedrooms, a home cinema, a wine cellar, and a landscaped garden with a tennis court.", features: ["Tennis Court","Home Cinema","Wine Cellar","Pool","Staff Quarters","Smart Home"] },
    { id: 5, title: "Cosy Starter Home", suburb: "Block 8", type: "house", price: 950000, beds: 3, baths: 2, parking: 1, area: 120, lat: -24.6720, lng: 25.9230, img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Affordable family home in Block 8, close to schools and shopping centres. Move-in ready.", features: ["Newly Renovated","Walled Yard","Prepaid Electricity","Close to Schools"] },
    { id: 6, title: "Riverfront Plot", suburb: "Tlokweng", type: "plot", price: 680000, beds: 0, baths: 0, parking: 0, area: 1200, lat: -24.6833, lng: 25.9500, img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Prime residential plot in Tlokweng, ready for development. Services available at the boundary.", features: ["1200m²","Serviced","Zoned Residential","River Views"] },
    { id: 7, title: "Broadhurst Family Home", suburb: "Broadhurst", type: "house", price: 2100000, beds: 4, baths: 3, parking: 2, area: 320, lat: -24.6450, lng: 25.9450, img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Spacious 4-bedroom family home in Broadhurst. Massive entertainment area, pool, and a double garage.", features: ["Pool","Entertainment Area","Double Garage","Borehole","Alarm"] },
    { id: 8, title: "Gaborone West Apartment", suburb: "Gaborone West", type: "apartment", price: 750000, beds: 2, baths: 1, parking: 1, area: 95, lat: -24.6500, lng: 25.8900, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Affordable 2-bedroom apartment with secure parking and 24-hour security. Ideal for young professionals.", features: ["24hr Security","Secure Parking","Balcony","Fitted Kitchen"] },
    { id: 9, title: "Mogoditshane Villa", suburb: "Mogoditshane", type: "house", price: 1850000, beds: 4, baths: 3, parking: 2, area: 290, lat: -24.6300, lng: 25.8700, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Beautiful family villa in Mogoditshane. Modern finishes, large garden, and easy access to the Western Bypass.", features: ["Modern Finishes","Large Garden","Borehole","Solar Geyser"] },
    { id: 10, title: "CBD Penthouse", suburb: "CBD", type: "apartment", price: 2450000, beds: 3, baths: 3, parking: 2, area: 210, lat: -24.6570, lng: 25.9100, img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "The ultimate city living. Top-floor penthouse with wraparound terrace and views across Gaborone.", features: ["Penthouse","Wraparound Terrace","Concierge","Gym","Pool","2 Parking Bays"] },
    { id: 11, title: "Extension 12 Duplex", suburb: "Extension 12", type: "townhouse", price: 1350000, beds: 3, baths: 2, parking: 2, area: 175, lat: -24.6400, lng: 25.9330, img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Stylish modern duplex in a secure complex. Low maintenance and perfect for a young family.", features: ["Complex Security","Modern Kitchen","Patio","Pet Friendly"] },
    { id: 12, title: "Phakalane Golf Estate", suburb: "Phakalane", type: "house", price: 5200000, beds: 4, baths: 4, parking: 3, area: 550, lat: -24.5850, lng: 25.9880, img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Luxury estate living on the Phakalane Golf Course. Panoramic views over the 12th green.", features: ["Golf Course Views","Pool","Home Gym","Wine Cellar","Smart Home","Staff Quarters"] },
    { id: 13, title: "Block 8 Apartment", suburb: "Block 8", type: "apartment", price: 680000, beds: 2, baths: 1, parking: 1, area: 88, lat: -24.6730, lng: 25.9210, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Modern 2-bedroom apartment in Block 8. Ideal rental investment — currently tenanted.", features: ["Currently Tenanted","Balcony","Lift Access","Secure Complex"] },
    { id: 14, title: "Tlokweng Family Home", suburb: "Tlokweng", type: "house", price: 1450000, beds: 4, baths: 2, parking: 2, area: 250, lat: -24.6850, lng: 25.9480, img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Welcoming 4-bedroom home in Tlokweng. Perfect for a growing family wanting space and security.", features: ["Large Stand","Walled Yard","Borehole","Easy River Access"] },
    { id: 15, title: "Broadhurst Townhouse", suburb: "Broadhurst", type: "townhouse", price: 1100000, beds: 3, baths: 2, parking: 2, area: 160, lat: -24.6480, lng: 25.9430, img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Low-maintenance townhouse in a well-run complex. Close to shopping and schools.", features: ["Complex Pool","Paved Parking","Built-in Braai","Fibre Ready"] },
    { id: 16, title: "Mogoditshane Plot", suburb: "Mogoditshane", type: "plot", price: 520000, beds: 0, baths: 0, parking: 0, area: 1000, lat: -24.6320, lng: 25.8750, img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "1000m² plot in a growing Mogoditshane neighbourhood. Build your dream home.", features: ["1000m²","Flat Ground","Serviced Area","Ready to Build"] },
    { id: 17, title: "Gaborone West Villa", suburb: "Gaborone West", type: "house", price: 1750000, beds: 4, baths: 3, parking: 2, area: 280, lat: -24.6480, lng: 25.8880, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Charming villa in Gaborone West. Fully renovated kitchen and bathrooms, move-in ready.", features: ["Renovated","Solar Geyser","Prepaid Utilities","Landscaped Yard"] },
    { id: 18, title: "CBD Studio Apartment", suburb: "CBD", type: "apartment", price: 480000, beds: 1, baths: 1, parking: 1, area: 48, lat: -24.6590, lng: 25.9070, img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Smart city studio apartment. Compact, functional, and perfect for a first-time buyer.", features: ["Studio","Fitted Kitchen","Secure Building","Walking Distance to CBD"] },
    { id: 19, title: "Phakalane Family Estate", suburb: "Phakalane", type: "house", price: 2950000, beds: 5, baths: 4, parking: 3, area: 420, lat: -24.5800, lng: 25.9800, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Impressive 5-bedroom home with a large pool, landscaped garden, and a triple garage.", features: ["Large Pool","Triple Garage","Borehole","Alarm","Fibre Ready"] },
    { id: 20, title: "Extension 12 Apartment", suburb: "Extension 12", type: "apartment", price: 890000, beds: 2, baths: 2, parking: 1, area: 105, lat: -24.6350, lng: 25.9300, img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Modern 2-bedroom apartment with 2 bathrooms. Close to shops and public transport.", features: ["2 Bathrooms","Balcony","Complex Pool","Gated"] }
];

const agents = [
    { name: "Kabelo Sekgoma", role: "Senior Property Consultant", bio: "12 years in Botswana real estate. Specialist in Phakalane and luxury estates.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", phone: "+267 71 111 222", email: "kabelo@ntlo.co.bw" },
    { name: "Neo Mothibi", role: "Residential Agent", bio: "Focused on family homes across Extension 12, Block 8, and Broadhurst.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", phone: "+267 71 222 333", email: "neo@ntlo.co.bw" },
    { name: "Tshepo Ramotswe", role: "Commercial Specialist", bio: "Office, retail, and industrial property across Gaborone's business districts.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", phone: "+267 71 333 444", email: "tshepo@ntlo.co.bw" },
    { name: "Amantle Kgosi", role: "First-Time Buyer Advisor", bio: "Guides young Batswana through their first home purchase, step by step.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", phone: "+267 71 444 555", email: "amantle@ntlo.co.bw" }
];

/* ---------- UTILITIES ---------- */
function formatPrice(n) {
    return 'P' + n.toLocaleString('en-BW');
}

/* ---------- STATE ---------- */
let activePropertyId = null;
let currentFilters = { minPrice: 0, maxPrice: Infinity, beds: 'all', type: 'all', search: '' };
let map, markers = [], satelliteLayer, streetLayer;
let currentPropertyId = null;

/* ============================================
   INITIALISE MAP (index.html)
============================================ */
function initMapPage() {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;

    map = L.map('map', { zoomControl: false }).setView([-24.6545, 25.9085], 12);

    streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri',
        maxZoom: 19
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    renderPropertyList();
    renderMarkers();

    // Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value.toLowerCase();
            applyFilters();
        });
    }

    // Price inputs
    const minInput = document.getElementById('min-price');
    const maxInput = document.getElementById('max-price');
    if (minInput) minInput.addEventListener('input', (e) => { currentFilters.minPrice = parseInt(e.target.value) || 0; applyFilters(); });
    if (maxInput) maxInput.addEventListener('input', (e) => { currentFilters.maxPrice = parseInt(e.target.value) || Infinity; applyFilters(); });

    // Filter chips
    document.querySelectorAll('#beds-filter .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#beds-filter .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilters.beds = chip.dataset.beds;
            applyFilters();
        });
    });
    document.querySelectorAll('#type-filter .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#type-filter .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilters.type = chip.dataset.type;
            applyFilters();
        });
    });

    // Map controls
    document.getElementById('reset-map')?.addEventListener('click', () => map.setView([-24.6545, 25.9085], 12));
    document.getElementById('toggle-satellite')?.addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            map.removeLayer(streetLayer);
            satelliteLayer.addTo(map);
        } else {
            map.removeLayer(satelliteLayer);
            streetLayer.addTo(map);
        }
    });
}

/* ============================================
   FILTERING
============================================ */
function getFilteredProperties() {
    return properties.filter(p => {
        if (p.price < currentFilters.minPrice) return false;
        if (p.price > currentFilters.maxPrice) return false;
        if (currentFilters.beds !== 'all' && p.beds < parseInt(currentFilters.beds)) return false;
        if (currentFilters.type !== 'all' && p.type !== currentFilters.type) return false;
        if (currentFilters.search && !p.suburb.toLowerCase().includes(currentFilters.search) && !p.title.toLowerCase().includes(currentFilters.search)) return false;
        return true;
    });
}

function applyFilters() {
    renderPropertyList();
    renderMarkers();
}

/* ============================================
   RENDER PROPERTY LIST (sidebar)
============================================ */
function renderPropertyList() {
    const list = document.getElementById('property-list');
    const countEl = document.getElementById('results-num');
    if (!list) return;

    const filtered = getFilteredProperties();
    if (countEl) countEl.innerText = filtered.length;

    list.innerHTML = '';
    filtered.forEach(p => {
        list.innerHTML += `
            <div class="property-item" data-id="${p.id}" onclick="selectProperty(${p.id})">
                <div class="property-item-img" style="background-image: url('${p.img}');"></div>
                <div class="property-item-info">
                    <h4>${p.title}</h4>
                    <div class="property-item-suburb"><i class="fas fa-map-marker-alt"></i> ${p.suburb}</div>
                    <div class="property-item-price">${formatPrice(p.price)}</div>
                    <div class="property-item-meta">
                        ${p.beds ? `<span><i class="fas fa-bed"></i> ${p.beds}</span>` : ''}
                        ${p.baths ? `<span><i class="fas fa-bath"></i> ${p.baths}</span>` : ''}
                        <span><i class="fas fa-vector-square"></i> ${p.area}m²</span>
                    </div>
                </div>
            </div>
        `;
    });
}

/* ============================================
   RENDER MARKERS (map pins)
============================================ */
function renderMarkers() {
    if (!map) return;
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    const filtered = getFilteredProperties();
    filtered.forEach(p => {
        const priceLabel = 'P' + (p.price / 1000000).toFixed(2) + 'M';
        const icon = L.divIcon({
            className: '',
            html: `<div class="custom-marker${p.id === activePropertyId ? ' active' : ''}" data-id="${p.id}">${priceLabel}</div>`,
            iconSize: [80, 30],
            iconAnchor: [40, 30]
        });
        const marker = L.marker([p.lat, p.lng], { icon }).addTo(map);
        marker.on('click', () => selectProperty(p.id));
        markers.push(marker);
    });
}

/* ============================================
   SELECT PROPERTY (opens drawer)
============================================ */
function selectProperty(id) {
    const p = properties.find(x => x.id === id);
    if (!p) return;
    activePropertyId = id;

    // Highlight marker
    renderMarkers();
    map.flyTo([p.lat, p.lng], 14, { duration: 1 });

    // Highlight sidebar item
    document.querySelectorAll('.property-item').forEach(el => el.classList.toggle('active', parseInt(el.dataset.id) === id));

    // Open drawer
    document.getElementById('drawer-hero').style.backgroundImage = `url('${p.img}')`;
    document.getElementById('drawer-title').innerText = p.title;
    document.getElementById('drawer-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> <span>${p.suburb}, Gaborone</span>`;
    document.getElementById('drawer-price').innerText = formatPrice(p.price);
    document.getElementById('drawer-beds').innerText = p.beds || '—';
    document.getElementById('drawer-baths').innerText = p.baths || '—';
    document.getElementById('drawer-parking').innerText = p.parking || '—';
    document.getElementById('drawer-area').innerText = p.area;
    document.getElementById('drawer-desc').innerText = p.desc;
    document.getElementById('drawer-view-btn').setAttribute('href', 'property.html?id=' + p.id);
    document.getElementById('drawer-contact-btn').setAttribute('href', 'https://wa.me/26771234567?text=Hi, I\'m interested in ' + encodeURIComponent(p.title));

    document.getElementById('property-drawer').classList.add('active');

    // Favourite state
    const favBtn = document.getElementById('drawer-fav');
    const saved = JSON.parse(localStorage.getItem('ntloSaved') || '[]');
    favBtn.classList.toggle('saved', saved.includes(id));
}

function closeDrawer() {
    document.getElementById('property-drawer').classList.remove('active');
    activePropertyId = null;
    renderMarkers();
}

/* ============================================
   FAVOURITES
============================================ */
function toggleFavourite(e) {
    e.stopPropagation();
    const saved = JSON.parse(localStorage.getItem('ntloSaved') || '[]');
    const id = activePropertyId;
    const idx = saved.indexOf(id);
    if (idx > -1) saved.splice(idx, 1); else saved.push(id);
    localStorage.setItem('ntloSaved', JSON.stringify(saved));
    document.getElementById('drawer-fav').classList.toggle('saved', saved.includes(id));
}

/* ============================================
   PROPERTIES GRID PAGE
============================================ */
function initPropertiesPage() {
    const grid = document.getElementById('properties-grid');
    if (!grid) return;

    properties.forEach(p => {
        grid.innerHTML += `
            <a href="property.html?id=${p.id}" class="property-card">
                <div class="property-card-img" style="background-image: url('${p.img}');">
                    <span class="property-card-badge">${p.type.charAt(0).toUpperCase() + p.type.slice(1)}</span>
                </div>
                <div class="property-card-body">
                    <h3>${p.title}</h3>
                    <div class="property-card-location"><i class="fas fa-map-marker-alt"></i> ${p.suburb}</div>
                    <div class="property-card-price">${formatPrice(p.price)}</div>
                    <div class="property-card-meta">
                        ${p.beds ? `<span><i class="fas fa-bed"></i> ${p.beds} Beds</span>` : ''}
                        ${p.baths ? `<span><i class="fas fa-bath"></i> ${p.baths} Baths</span>` : ''}
                        <span><i class="fas fa-vector-square"></i> ${p.area}m²</span>
                    </div>
                </div>
            </a>
        `;
    });
}

/* ============================================
   AGENTS PAGE
============================================ */
function initAgentsPage() {
    const grid = document.getElementById('agents-grid');
    if (!grid) return;

    agents.forEach(a => {
        grid.innerHTML += `
            <div class="agent-card">
                <div class="agent-card-img" style="background-image: url('${a.img}');"></div>
                <div class="agent-card-body">
                    <h3>${a.name}</h3>
                    <span class="agent-role">${a.role}</span>
                    <p>${a.bio}</p>
                    <div class="agent-contact">
                        <a href="tel:${a.phone.replace(/\s/g,'')}"><i class="fas fa-phone"></i> Call</a>
                        <a href="mailto:${a.email}"><i class="fas fa-envelope"></i> Email</a>
                    </div>
                </div>
            </div>
        `;
    });
}

/* ============================================
   SINGLE PROPERTY PAGE
============================================ */
function initPropertyDetailPage() {
    const titleEl = document.getElementById('detail-title');
    if (!titleEl) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const p = properties.find(x => x.id === id) || properties[0];

    document.getElementById('detail-title').innerText = p.title;
    document.getElementById('detail-location').innerHTML = `<i class="fas fa-map-marker-alt" style="color: var(--gold);"></i> ${p.suburb}, Gaborone`;
    document.getElementById('detail-price').innerText = formatPrice(p.price);
    document.getElementById('detail-price-2').innerText = formatPrice(p.price);
    document.getElementById('detail-beds').innerText = p.beds || '—';
    document.getElementById('detail-baths').innerText = p.baths || '—';
    document.getElementById('detail-parking').innerText = p.parking || '—';
    document.getElementById('detail-area').innerText = p.area;
    document.getElementById('detail-desc').innerText = p.desc;
    document.getElementById('detail-hero-img').style.backgroundImage = `url('${p.img}')`;
    document.getElementById('detail-img-2').style.backgroundImage = `url('${p.img}')`;
    document.getElementById('detail-img-3').style.backgroundImage = `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`;

    // Mortgage monthly estimate (rough)
    const monthly = Math.round((p.price * 0.9) * (0.075/12) / (1 - Math.pow(1 + 0.075/12, -240)));
    document.getElementById('detail-monthly').innerText = formatPrice(monthly);

    // Features list
    const featuresEl = document.getElementById('detail-features');
    if (featuresEl && p.features) {
        p.features.forEach(f => {
            featuresEl.innerHTML += `<li><i class="fas fa-check" style="color: var(--gold-dark); margin-right: 8px;"></i>${f}</li>`;
        });
    }

    // Detail map
    const detailMapEl = document.getElementById('detail-map');
    if (detailMapEl && typeof L !== 'undefined') {
        const dmap = L.map('detail-map').setView([p.lat, p.lng], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(dmap);
        L.marker([p.lat, p.lng]).addTo(dmap);
    }
}

function calcMortgage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const p = properties.find(x => x.id === id) || properties[0];
    const deposit = parseFloat(document.getElementById('mort-deposit').value) || p.price * 0.1;
    const rate = parseFloat(document.getElementById('mort-rate').value) / 100 || 0.075;
    const years = parseInt(document.getElementById('mort-years').value) || 20;
    const principal = p.price - deposit;
    const monthlyRate = rate / 12;
    const n = years * 12;
    const monthly = monthlyRate > 0 ? (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n)) : principal / n;
    document.getElementById('mort-monthly').innerText = formatPrice(Math.round(monthly));
    document.getElementById('mort-result').style.display = 'block';
}

/* ============================================
   INIT ON LOAD
============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initMapPage();
    initPropertiesPage();
    initAgentsPage();
    initPropertyDetailPage();
});
