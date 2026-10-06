# 🏡 Ntlo — Botswana Property Platform

A map-first real estate website for Botswana. Explore properties across Gaborone on a live interactive map.

![Status](https://img.shields.io/badge/Status-Live-success)
![Made in Botswana](https://img.shields.io/badge/Made%20in-Botswana%20🇧🇼-green)
![Leaflet](https://img.shields.io/badge/Leaflet.js-1.9.4-brightgreen)

---

## ✨ Features

- 🗺️ **Interactive map** (Leaflet.js) with custom price pins for every property
- 🔍 **Live filter system** — price range, bedrooms, property type, and text search
- 🎯 **Click a pin → property drawer slides in** with full details, photos, and specs
- ⭐ **Favourites** — save properties with localStorage persistence
- 🛰️ **Satellite view toggle** — switch between street and satellite tiles
- 📍 **Map fly-to animation** when selecting a property
- 📊 **Mortgage calculator** on every property page
- 📱 **Mobile-first responsive design**
- ⚡ **Zero frameworks** — pure HTML, CSS, and vanilla JavaScript

---

## 📁 File Structure

---

## 🚀 Deploy to GitHub Pages

1. Create a repo: `ntlo-botswana`
2. Upload all 8 files to the root
3. **Settings → Pages → main branch → Save**
4. Live at `https://YOUR-USERNAME.github.io/ntlo-botswana/`

Takes 1–2 minutes.

---

## 🗺️ Map Data

- **20 sample properties** across Gaborone suburbs: Phakalane, CBD, Extension 12, Block 8, Broadhurst, Tlokweng, Mogoditshane, Gaborone West
- Coordinates based on real Gaborone neighbourhoods
- Uses **OpenStreetMap** tiles (free, no API key)

### To add your own properties
Edit the `properties` array at the top of `main.js`:
```javascript
{
    id: 21,
    title: "Your Property",
    suburb: "Suburb Name",
    type: "house",
    price: 1500000,
    beds: 3,
    baths: 2,
    parking: 2,
    area: 200,
    lat: -24.6545,
    lng: 25.9085,
    img: "URL_TO_IMAGE",
    desc: "Description...",
    features: ["Feature 1", "Feature 2"]
}
