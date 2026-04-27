# 🚀 Digital Business Card Template - Complete Customization Guide

A professional, responsive single-page digital business card template with floating collapsible menus, video backgrounds, and modern interactions. Built with vanilla HTML, CSS, and JavaScript for optimal performance.

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Customization Guide](#customization-guide)
4. [Step-by-Step Customization Process](#step-by-step-customization-process)
5. [What NOT to Change](#what-not-to-change)
6. [Dependencies & Requirements](#dependencies--requirements)
7. [Configuration File Option](#configuration-file-option)
8. [Testing Checklist](#testing-checklist)
9. [Troubleshooting Guide](#troubleshooting-guide)
10. [Quick Reference](#quick-reference)
11. [Advanced Customization](#advanced-customization)
12. [Performance Optimization](#performance-optimization)

---

## 🎯 Project Overview

### What This Template Is
A complete digital business card solution featuring:
- **Hero Section**: Full-screen video background with business name and tagline
- **Contact Actions**: Interactive buttons for phone, WhatsApp, email, location, and contact management
- **Floating Menus**: Collapsible left (Services/Associates) and right (Social Media) menus
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Video Integration**: Optimized hero, background, and footer videos
- **Modern Aesthetics**: Glass morphism effects with customizable color schemes

### Key Features
✅ Responsive design (mobile, tablet, desktop)  
✅ Video backgrounds with fallback images  
✅ Interactive floating menus  
✅ Social media integration  
✅ Contact management (vCard download)  
✅ Accessibility compliant (WCAG AA)  
✅ Performance optimized  
✅ No external dependencies  

### Technologies Used
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, flexbox, grid, animations
- **Vanilla JavaScript**: ES6+ modules, no frameworks
- **SVG Icons**: Scalable vector icons for all platforms
- **Web Standards**: Progressive enhancement, modern APIs

### Browser Compatibility
- ✅ Chrome/Edge 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ iOS Safari 13+
- ✅ Chrome Mobile 80+

---

## 📁 File Structure

```
digital-business-card-template/
├── 📄 index.html              ⚠️ NEEDS CUSTOMIZATION (business info, links)
├── 📄 README.md               ✅ REUSABLE (this guide)
├── 📄 .gitignore              ✅ REUSABLE
├── 📄 deploy.sh               ✅ REUSABLE
├── 📄 test-checklist.md       ✅ REUSABLE
├── 📄 validate-implementation.js ✅ REUSABLE
├── 📄 implementation-documentation.md ✅ REUSABLE
├── 📁 css/
│   └── 📄 styles.css          🔧 OPTIONAL (colors, fonts, styling)
├── 📁 js/
│   └── 📄 script.js           ✅ REUSABLE (functionality)
└── 📁 assets/
    ├── 📄 allinonecabo.vcf    ⚠️ REPLACE (contact information)
    ├── 📄 actividades.jpg     ⚠️ REPLACE (your business image)
    ├── 📄 hero.mp4           ⚠️ REPLACE (your hero video)
    ├── 📄 footer.mp4         ⚠️ REPLACE (your footer video)
    ├── 📄 video.mp4          ⚠️ REPLACE (your background video)
    ├── 📄 fondo.mp4          ⚠️ REPLACE (alternative video)
    ├── 📄 poster-hero.svg    🔧 OPTIONAL (custom poster design)
    ├── 📄 poster-bg.svg      🔧 OPTIONAL (custom poster design)
    └── 📁 icons/
        ├── 📄 call.svg       ✅ REUSABLE
        ├── 📄 office.svg     ✅ REUSABLE
        ├── 📄 whatsapp.svg   ✅ REUSABLE
        ├── 📄 location.svg   ✅ REUSABLE
        ├── 📄 contacts.svg   ✅ REUSABLE
        ├── 📄 email.svg      ✅ REUSABLE
        ├── 📄 facebook.svg   ✅ REUSABLE
        ├── 📄 instagram.svg  ✅ REUSABLE
        └── 📄 youtube.svg    ✅ REUSABLE
```

### File Status Legend
- ✅ **Reusable as-is**: No changes needed for template reuse
- ⚠️ **Needs customization**: Must be modified for each business
- 🔧 **Optional**: Can be customized but works fine as-is

---

## 🛠️ Customization Guide

### 1. Business Information

#### **Page Title & Meta Tags** 
**File:** `index.html` (Lines 6-14)

```html
<!-- BEFORE -->
<title>All In One Cabo - Digital Business Card</title>
<meta name="description" content="All In One Cabo - Premium tours and activities in Cabo San Lucas, Los Cabos">
<meta property="og:title" content="All In One Cabo - Digital Business Card">
<meta property="og:description" content="Premium tours and activities in Cabo San Lucas, Los Cabos">
<meta property="og:image" content="assets/actividades.jpg">
<meta property="og:url" content="https://allin1cabo.com">

<!-- AFTER -->
<title>Your Business Name - Digital Business Card</title>
<meta name="description" content="Your Business - Your description">
<meta property="og:title" content="Your Business Name - Digital Business Card">
<meta property="og:description" content="Your business description">
<meta property="og:image" content="assets/your-image.jpg">
<meta property="og:url" content="https://yourwebsite.com">
```

#### **Hero Section Content**
**File:** `index.html` (Lines 113-117)

```html
<!-- BEFORE -->
<h1 class="hero-title">
    <span class="title-line">CABO</span>
</h1>
<p class="hero-subtitle">Premium Tours & Activities</p>

<!-- AFTER -->
<h1 class="hero-title">
    <span class="title-line">YOUR BUSINESS</span>
</h1>
<p class="hero-subtitle">Your Business Tagline</p>
```

#### **Activities Section**
**File:** `index.html` (Lines 189-203)

```html
<!-- BEFORE -->
<h2 class="section-title">Our Activities</h2>
<div class="activity-card">
    <div class="activity-image">
        <img src="assets/actividades.jpg" alt="All In One Cabo activities and tours" loading="lazy">
    </div>
    <div class="activity-content">
        <h3>Premium Experiences</h3>
        <p>Discover the best of Cabo San Lucas with our curated selection of tours and activities.</p>
        <a href="https://allin1cabo.com" target="_blank" rel="noopener" class="activity-link">
            Learn More
        </a>
    </div>
</div>

<!-- AFTER -->
<h2 class="section-title">Our Services</h2>
<div class="activity-card">
    <div class="activity-image">
        <img src="assets/your-image.jpg" alt="Your business services" loading="lazy">
    </div>
    <div class="activity-content">
        <h3>Your Service Title</h3>
        <p>Your service description goes here.</p>
        <a href="https://yourwebsite.com" target="_blank" rel="noopener" class="activity-link">
            Learn More
        </a>
    </div>
</div>
```

#### **Footer Information**
**File:** `index.html` (Lines 464-467)

```html
<!-- BEFORE -->
<div class="footer-info">
    <h3>All In One Cabo</h3>
    <p>Christian Garcia - Owner</p>
    <p>Cabo San Lucas, Los Cabos, Baja California Sur, Mexico</p>
</div>

<!-- AFTER -->
<div class="footer-info">
    <h3>Your Business Name</h3>
    <p>Your Name - Your Title</p>
    <p>Your City, State/Country</p>
</div>
```

### 2. Contact Information

#### **Phone Numbers**
**File:** `index.html` (Lines 124, 132)

```html
<!-- BEFORE -->
<a href="tel:+526241378636" class="action-btn call-btn" 
   aria-label="Call +52 624 137 8636">

<!-- AFTER -->
<a href="tel:+1234567890" class="action-btn call-btn" 
   aria-label="Call +1 234 567 890">
```

#### **WhatsApp Number & Message**
**File:** `index.html` (Line 144)

```html
<!-- BEFORE -->
<a href="https://wa.me/526241378636?text=Hi%2C%20I%20would%20like%20to%20book%20an%20activity%20with%20All%20In%20One%20Cabo.%20Please%20share%20availability." 

<!-- AFTER -->
<a href="https://wa.me/1234567890?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services." 
```

#### **Email Address**
**File:** `index.html` (Lines 174, 471)

```html
<!-- BEFORE -->
<a href="mailto:allinonecabo@hotmail.com?subject=Booking%20Inquiry&body=Hi%20Christian%2C%0A%0AI'd%20like%20to%20ask%20about%20..." 

<!-- AFTER -->
<a href="mailto:contact@yourbusiness.com?subject=Inquiry&body=Hi%2C%0A%0AI'd%20like%20to%20ask%20about%20..." 
```

#### **Location/Address**
**File:** `index.html` (Line 154)

```html
<!-- BEFORE -->
<a href="https://maps.app.goo.gl/rYeE3fMsktMvwjTr9" target="_blank" rel="noopener" 

<!-- AFTER -->
<a href="https://maps.google.com/your-location" target="_blank" rel="noopener" 
```

#### **vCard Contact File**
**File:** `assets/allinonecabo.vcf`

```vcf
BEGIN:VCARD
VERSION:3.0
FN:Your Name                    # Update full name
N:Your;Last Name;;;             # Update name components
ORG:Your Business Name          # Update organization
TITLE:Your Title                # Update job title
TEL;TYPE=WORK,VOICE:+1234567890 # Update phone
EMAIL;TYPE=INTERNET:contact@yourbusiness.com # Update email
URL:https://yourwebsite.com     # Update website
ADR;TYPE=WORK:;;Your Address;Your City;Your State;Your Zip;Your Country # Update address
NOTE:Your Business Description
END:VCARD
```

### 3. Social Media Links

#### **Desktop Social Media Strip**
**File:** `index.html` (Lines 31-89)

Current platforms with URLs:
- Facebook: `https://facebook.com/allinonecabo`
- Instagram: `https://instagram.com/allinonecabo`
- YouTube: `https://www.youtube.com/@AllIn1cabo`
- TikTok: `https://vm.tiktok.com/ZMLev5SVt`
- LinkedIn: `https://linkedin.com/in/christian-garcia-131367251`
- Pinterest: `https://pinterest.com.mx/allinonecabo`
- Twitter: `https://twitter.com/allinonecabo`

**Update each URL:**
```html
<!-- Example for Facebook -->
<a href="https://facebook.com/yourbusiness" target="_blank" rel="noopener" 
   aria-label="Follow us on Facebook" class="social-link">

<!-- Example for Instagram -->
<a href="https://instagram.com/yourbusiness" target="_blank" rel="noopener"
   aria-label="Follow us on Instagram" class="social-link">
```

#### **Floating Social Media Menu**
**File:** `index.html` (Lines 215-273)

Update the same URLs as above in the floating menu.

#### **Footer Social Links**
**File:** `index.html` (Lines 470-472)

```html
<!-- BEFORE -->
<div class="footer-links">
    <a href="https://allin1cabo.com" target="_blank" rel="noopener">Website</a>
    <a href="mailto:allinonecabo@hotmail.com">Contact</a>
    <a href="tel:+526241378636">Call</a>
</div>

<!-- AFTER -->
<div class="footer-links">
    <a href="https://yourwebsite.com" target="_blank" rel="noopener">Website</a>
    <a href="mailto:contact@yourbusiness.com">Contact</a>
    <a href="tel:+1234567890">Call</a>
</div>
```

### 4. Services Menu (Left Side)

#### **Services Section Header**
**File:** `index.html` (Line 289)

```html
<!-- BEFORE -->
<h3 class="services-header">⚓ OUR SERVICES – Explore what we offer</h3>

<!-- AFTER -->
<h3 class="services-header">🎯 OUR SERVICES – Explore what we offer</h3>
```

#### **Complete Services List**
**File:** `index.html` (Lines 292-416)

Current services with URLs to update:

1. **Yacht Rental** → `https://www.allin1cabo.com/yates`
2. **Video Marketing** → `https://www.allin1cabo.com/videomarketing`
3. **Activities** → `https://www.allin1cabo.com/activities-1`
4. **Transportation** → `https://www.allin1cabo.com/transportacion`
5. **Helicopter Ride** (non-clickable)
6. **Bachelor & Bachelorette Parties** → `https://www.allin1cabo.com/bachelorandbacheloretteparties`
7. **Wedding Planner / Events** → `https://www.allin1cabo.com/weddingplanner`
8. **Real Estate** → `https://www.allin1cabo.com/realestatemenu`
9. **Fishing** → `https://www.allin1cabo.com/fishing`
10. **Restaurants** → `https://www.allin1cabo.com/restaurants`
11. **Night Clubs** → `https://www.allin1cabo.com/nightclubs`
12. **Golf Rounds** → `https://www.allin1cabo.com/golf`

**Template for updating services:**
```html
<!-- Example service template -->
<li>
    <a href="https://yourwebsite.com/your-service" target="_blank" rel="noopener"
       aria-label="Your Service Name" class="services-link">
        <svg class="services-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <!-- Your SVG icon here -->
        </svg>
        Your Service Name
    </a>
</li>
```

**To modify a service:**
1. Change the `href` URL
2. Update the `aria-label`
3. Change the service name text
4. Optionally update the SVG icon

**To add a new service:**
Copy one of the existing `<li>` elements and modify:
- The `href` attribute
- The `aria-label`
- The SVG icon (optional)
- The service name

**To remove a service:**
Delete the entire `<li>` element containing the service.

### 5. Associates Section

#### **Associates Header**
**File:** `index.html` (Line 426)

```html
<!-- BEFORE -->
<h3 class="associates-header">🧑‍🤝‍🧑 ASSOCIATES</h3>

<!-- AFTER -->
<h3 class="associates-header">🤝 ASSOCIATES</h3>
```

#### **Associates Links**
**File:** `index.html` (Lines 429-438)

```html
<!-- BEFORE -->
<a href="https://www.allin1cabo.com/copia-de-contact" target="_blank" rel="noopener"
   aria-label="Join the team" class="associates-link">

<!-- AFTER -->
<a href="https://yourwebsite.com/join-team" target="_blank" rel="noopener"
   aria-label="Join the team" class="associates-link">
```

### 6. Visual Assets

#### **Logo/Favicon**
**File:** `index.html` (Line 17)

```html
<!-- BEFORE -->
<link rel="icon" type="image/svg+xml" href="assets/poster-hero.svg">

<!-- AFTER -->
<link rel="icon" type="image/svg+xml" href="assets/your-logo.svg">
```

**Recommendations:**
- **Format**: SVG (scalable), PNG, or ICO
- **Size**: 32x32px (favicon), 180x180px (Apple touch icon)
- **Location**: `assets/your-logo.svg`

#### **Hero Background Video**
**File:** `index.html` (Lines 105-109)

**Current specifications:**
- File: `assets/hero.mp4`
- Poster: `assets/poster-hero.svg`
- Attributes: `autoplay muted loop playsinline`

**Recommendations:**
- **Format**: MP4 (H.264) for compatibility
- **Resolution**: 1920x1080 (Full HD)
- **Duration**: 10-30 seconds (looped)
- **File Size**: Under 5MB for web
- **Frame Rate**: 24-30 fps

```html
<!-- AFTER -->
<video class="hero-video" autoplay muted loop playsinline poster="assets/poster-hero.jpg">
    <source src="assets/your-hero-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

#### **Background Video Section**
**File:** `index.html` (Lines 445-449)

```html
<!-- AFTER -->
<video class="bg-video" autoplay muted loop playsinline poster="assets/poster-bg.jpg">
    <source src="assets/your-background-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

#### **Footer Video**
**File:** `index.html` (Lines 455-458)

```html
<!-- AFTER -->
<video class="footer-video" autoplay muted loop playsinline poster="assets/poster-footer.jpg">
    <source src="assets/your-footer-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

#### **Activities Section Image**
**File:** `index.html` (Line 193)

```html
<!-- BEFORE -->
<img src="assets/actividades.jpg" alt="All In One Cabo activities and tours" loading="lazy">

<!-- AFTER -->
<img src="assets/your-business-image.jpg" alt="Your business activities and services" loading="lazy">
```

**Image recommendations:**
- **Format**: JPG or WebP
- **Resolution**: 800x600px minimum
- **File Size**: Under 500KB
- **Alt Text**: Descriptive text for accessibility

### 7. Styling Customization

#### **Color Scheme**
**File:** `css/styles.css` (Lines 4-18)

```css
:root {
  --bg: #000000;              /* Background color */
  --accent: #C49A3A;          /* Primary accent color (gold) */
  --accent-light: #D4AF37;    /* Light accent color */
  --text-primary: #FFFFFF;    /* Primary text color */
  --text-secondary: #CCCCCC;  /* Secondary text color */
  --text-muted: #999999;      /* Muted text color */
  --glass-bg: rgba(255, 255, 255, 0.1);      /* Glass background */
  --glass-border: rgba(255, 255, 255, 0.2);  /* Glass border */
  --shadow: rgba(0, 0, 0, 0.5);              /* Shadow color */
  --shadow-light: rgba(0, 0, 0, 0.25);       /* Light shadow */
  --border-radius: 16px;      /* Border radius */
  --border-radius-small: 8px; /* Small border radius */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Transition */
}
```

**Popular color schemes:**

**Gold & Black (Current)**
```css
--bg: #000000;
--accent: #C49A3A;
--accent-light: #D4AF37;
```

**Blue & White**
```css
--bg: #001a33;
--accent: #0066cc;
--accent-light: #0088ff;
```

**Green & Black**
```css
--bg: #001a0d;
--accent: #00cc66;
--accent-light: #00ff88;
```

**Red & Black**
```css
--bg: #330000;
--accent: #cc0066;
--accent-light: #ff0088;
```

#### **Typography**
**File:** `css/styles.css` (Line 33)

```css
/* Current font stack */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* Alternative font stacks */
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

**To add Google Fonts:**
1. Add to `<head>` in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. Update CSS:
```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

#### **Menu Toggle Button Icons**

**Left Button (Services) - Current: Briefcase**
**File:** `index.html` (Lines 282-284)

```html
<!-- Current briefcase icon -->
<svg class="toggle-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
</svg>
```

**Alternative icons:**
- **Grid/Apps**: `M3 3h8v8H3V3zm0 10h8v8H3v-8zm10 0h8v8h-8v-8zM13 3v8h8V3h-8zm0 10v8h8v-8h-8z`
- **Settings**: `M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z`
- **List**: `M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z`

**Right Button (Social) - Current: Letter "S"**
**File:** `index.html` (Line 210)

```html
<!-- Current text icon -->
<span class="toggle-text">S</span>
```

**Alternative options:**
```html
<!-- Option 1: Different letter -->
<span class="toggle-text">M</span>

<!-- Option 2: Share icon (if using Font Awesome) -->
<i class="fas fa-share-alt"></i>

<!-- Option 3: Network icon -->
<svg class="toggle-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
</svg>
```

### 8. JavaScript Configuration

#### **Main Configuration**
**File:** `js/script.js` (Lines 10-20)

```javascript
const CONFIG = {
    PHONE_NUMBER: '+52 624 137 8636',     // Update phone number
    PHONE_DIGITS: '526241378636',         // Update digits only
    VCARD_PATH: 'assets/allinonecabo.vcf', // Update vCard file path
    WHATSAPP_MESSAGE: 'Hi%2C%20I%20would%20like%20to%20book%20an%20activity%20with%20All%20In%20One%20Cabo.%20Please%20share%20availability.', // Update WhatsApp message
    EMAIL_SUBJECT: 'Booking%20Inquiry',    // Update email subject
    EMAIL_BODY: 'Hi%20Christian%2C%0A%0AI\'d%20like%20to%20ask%20about%20...', // Update email body
    TOAST_DURATION: 3000,
    MODAL_FOCUS_SELECTOR: '.modal-close, .copy-btn',
    ANIMATION_DURATION: 300
};
```

**Update example:**
```javascript
const CONFIG = {
    PHONE_NUMBER: '+1 (234) 567-8900',
    PHONE_DIGITS: '2345678900',
    VCARD_PATH: 'assets/your-contact.vcf',
    WHATSAPP_MESSAGE: 'Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services.',
    EMAIL_SUBJECT: 'Service%20Inquiry',
    EMAIL_BODY: 'Hi%2C%0A%0AI\'d%20like%20to%20ask%20about%20your%20services.',
    TOAST_DURATION: 3000,
    MODAL_FOCUS_SELECTOR: '.modal-close, .copy-btn',
    ANIMATION_DURATION: 300
};
```

---

## 📝 Step-by-Step Customization Process

### Step 1: Clone/Download the Template
1. Download all template files
2. Create a new folder for your business
3. Copy all template files to your new folder

### Step 2: Replace Visual Assets
1. **Logo/Favicon**: Replace `assets/poster-hero.svg` with your logo
2. **Hero Video**: Replace `assets/hero.mp4` with your business video
3. **Background Video**: Replace `assets/video.mp4` with your background video
4. **Footer Video**: Replace `assets/footer.mp4` with your footer video
5. **Business Image**: Replace `assets/actividades.jpg` with your business image
6. **Contact vCard**: Replace `assets/allinonecabo.vcf` with your contact info

### Step 3: Update Business Information
**Files to edit:** `index.html`

1. **Page title and meta** (Lines 6-14)
2. **Hero section** (Lines 113-117)
3. **Activities section** (Lines 189-203)
4. **Footer information** (Lines 464-467)

### Step 4: Update Contact Information
**Files to edit:** `index.html`

1. **Phone numbers** (Lines 124, 132)
2. **WhatsApp** (Line 144)
3. **Email** (Lines 174, 471)
4. **Location** (Line 154)

### Step 5: Customize Services Menu
**File to edit:** `index.html` (Lines 292-416)

1. Update service URLs
2. Change service names
3. Remove unwanted services
4. Add new services as needed
5. Update service icons (optional)

### Step 6: Update Social Media Links
**File to edit:** `index.html`

1. **Desktop social strip** (Lines 31-89)
2. **Floating social menu** (Lines 215-273)
3. **Footer social links** (Lines 470-472)

### Step 7: Customize Colors (Optional)
**File to edit:** `css/styles.css` (Lines 4-18)

1. Modify CSS custom properties
2. Update color scheme
3. Adjust typography

### Step 8: Update JavaScript Configuration
**File to edit:** `js/script.js` (Lines 10-20)

1. Update CONFIG object
2. Modify phone numbers
3. Change vCard path
4. Update WhatsApp message

### Step 9: Test All Functionality
1. Open `index.html` in browser
2. Test all buttons and links
3. Verify responsive design
4. Check video playback

### Step 10: Deploy
1. Upload to your web hosting
2. Configure custom domain (optional)
3. Set up SSL certificate
4. Test live site

---

## ❌ What NOT to Change

### Core JavaScript Files
**File:** `js/script.js`

**Why not to change:**
- Contains all interactive functionality
- Handles modals, notifications, accessibility
- Manages video optimization
- Controls menu animations

**Safe to modify:**
- CONFIG object (Lines 10-20)
- Analytics tracking functions

### CSS Layout Structure
**File:** `css/styles.css`

**Why not to change:**
- Responsive breakpoints (maintains mobile compatibility)
- Grid and flexbox layouts
- Animation keyframes
- Core utility classes

**Safe to modify:**
- CSS custom properties (color variables)
- Font families
- Border radius values
- Transition durations

### HTML Semantic Structure
**File:** `index.html`

**Why not to change:**
- ARIA labels and roles (accessibility)
- Data attributes (JavaScript hooks)
- Class names (CSS and JS dependencies)
- HTML5 semantic elements

**Safe to modify:**
- Text content
- Image src attributes
- Link href attributes
- Meta tag content

### Menu Toggle Logic
**Why not to change:**
- Menu open/close animations
- Accessibility keyboard navigation
- Touch interaction handling
- Auto-close on outside click

---

## 🔧 Dependencies & Requirements

### No External Dependencies
This template uses **only** web standards - no external libraries required!

### Browser Requirements
- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+
- **JavaScript**: ES6+ support required
- **CSS**: CSS Grid and Flexbox support
- **Web APIs**: IntersectionObserver, Service Workers (optional)

### Hosting Requirements
- **Static Hosting**: GitHub Pages, Netlify, Vercel, etc.
- **HTTPS**: Required for some features (geolocation, notifications)
- **File Size**: No specific limits, but optimize for performance

### Optional Enhancements
If you want to add external features:

```html
<!-- Google Fonts (optional) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Font Awesome (if you prefer icons over SVG) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Google Analytics (optional) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## ⚙️ Configuration File Option (Recommended)

Create a centralized configuration file for easier maintenance:

### Step 1: Create `config.js`
```javascript
// config.js - Centralized configuration for your digital business card
const SITE_CONFIG = {
  // Business Information
  business: {
    name: "Your Business Name",
    tagline: "Your Business Tagline",
    description: "Your business description",
    owner: "Your Name",
    title: "Your Title",
    website: "https://yourwebsite.com"
  },

  // Contact Information
  contact: {
    phone: "+1 234 567 8900",
    phoneDigits: "1234567890",
    email: "contact@yourbusiness.com",
    address: "Your City, State/Country",
    vcardFile: "assets/your-contact.vcf"
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/yourbusiness",
    instagram: "https://instagram.com/yourbusiness",
    youtube: "https://youtube.com/yourchannel",
    tiktok: "https://tiktok.com/@yourbusiness",
    linkedin: "https://linkedin.com/in/yourprofile",
    pinterest: "https://pinterest.com/yourbusiness",
    twitter: "https://twitter.com/yourbusiness"
  },

  // Services
  services: [
    {
      name: "Service 1",
      url: "https://yourwebsite.com/service1",
      icon: "service-icon-1"
    },
    {
      name: "Service 2", 
      url: "https://yourwebsite.com/service2",
      icon: "service-icon-2"
    }
    // Add more services...
  ],

  // WhatsApp Configuration
  whatsapp: {
    number: "1234567890",
    message: "Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
  },

  // Email Configuration
  email: {
    address: "contact@yourbusiness.com",
    subject: "Service%20Inquiry",
    body: "Hi%2C%0A%0AI'd%20like%20to%20ask%20about%20your%20services."
  },

  // Assets
  assets: {
    heroVideo: "assets/your-hero-video.mp4",
    backgroundVideo: "assets/your-background-video.mp4",
    footerVideo: "assets/your-footer-video.mp4",
    heroPoster: "assets/poster-hero.jpg",
    backgroundPoster: "assets/poster-bg.jpg",
    footerPoster: "assets/poster-footer.jpg",
    businessImage: "assets/your-business-image.jpg",
    logo: "assets/your-logo.svg"
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
```

### Step 2: Update `index.html`
```html
<!-- Include config file before your custom script -->
<script src="config.js"></script>
<script src="js/script.js" defer></script>
```

### Step 3: Update `js/script.js`
```javascript
// Use configuration from config.js
const CONFIG = {
    PHONE_NUMBER: SITE_CONFIG.contact.phone,
    PHONE_DIGITS: SITE_CONFIG.contact.phoneDigits,
    VCARD_PATH: SITE_CONFIG.contact.vcardFile,
    WHATSAPP_MESSAGE: SITE_CONFIG.whatsapp.message,
    EMAIL_SUBJECT: SITE_CONFIG.email.subject,
    EMAIL_BODY: SITE_CONFIG.email.body,
    TOAST_DURATION: 3000,
    MODAL_FOCUS_SELECTOR: '.modal-close, .copy-btn',
    ANIMATION_DURATION: 300
};
```

### Step 4: Dynamic HTML Generation (Advanced)
For a more advanced setup, you can generate HTML dynamically:

```javascript
// In script.js - after DOM is loaded
function initializeDynamicContent() {
    // Update page title
    document.title = SITE_CONFIG.business.name + " - Digital Business Card";
    
    // Update hero section
    document.querySelector('.title-line').textContent = SITE_CONFIG.business.name;
    document.querySelector('.hero-subtitle').textContent = SITE_CONFIG.business.tagline;
    
    // Update footer
    document.querySelector('.footer-info h3').textContent = SITE_CONFIG.business.name;
    document.querySelector('.footer-info p').textContent = `${SITE_CONFIG.business.owner} - ${SITE_CONFIG.business.title}`;
    document.querySelector('.footer-info p:last-child').textContent = SITE_CONFIG.contact.address;
    
    // Update meta tags
    document.querySelector('meta[name="description"]').content = SITE_CONFIG.business.description;
    document.querySelector('meta[property="og:title"]').content = SITE_CONFIG.business.name + " - Digital Business Card";
    document.querySelector('meta[property="og:description"]').content = SITE_CONFIG.business.description;
}

// Call after DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDynamicContent);
```

### Benefits of Configuration File
- ✅ **Centralized Management**: All settings in one place
- ✅ **Easy Updates**: Change content without touching HTML
- ✅ **Version Control**: Track changes easily
- ✅ **Multiple Sites**: Reuse config for different businesses
- ✅ **Dynamic Content**: Generate HTML from data

---

## ✅ Testing Checklist

### Basic Functionality
- [ ] Page loads without errors
- [ ] All images display correctly
- [ ] Videos play and loop properly
- [ ] No console errors or warnings
- [ ] All links open correctly

### Contact Buttons
- [ ] Call button shows correct number
- [ ] Call button works on mobile (opens dialer)
- [ ] Call button works on desktop (shows modal)
- [ ] WhatsApp button opens correct chat
- [ ] Email button opens correct email client
- [ ] Location button opens correct map
- [ ] Add to Contacts downloads vCard
- [ ] All buttons show hover effects

### Menu Functionality
- [ ] Left menu (Services) opens and closes
- [ ] Right menu (Social) opens and closes
- [ ] Menu animations are smooth
- [ ] Menus close when clicking outside
- [ ] Menus close with Escape key
- [ ] All service links work correctly
- [ ] All social media links work
- [ ] Menu icons display correctly

### Responsive Design
- [ ] Mobile (320px-767px): Layout stacks correctly
- [ ] Tablet (768px-1023px): Layout adapts properly
- [ ] Desktop (1024px+): Full layout displays
- [ ] Touch targets are appropriately sized (44px minimum)
- [ ] Text remains readable at all sizes
- [ ] Images scale proportionally

### Performance
- [ ] Page loads in under 3 seconds
- [ ] Videos start playing quickly
- [ ] Images load without layout shifts
- [ ] Animations are smooth (60fps)
- [ ] No memory leaks in long sessions

### Accessibility
- [ ] All images have alt text
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] ARIA labels are present
- [ ] Color contrast meets WCAG AA standards
- [ ] Page works with screen readers

### Cross-Browser Testing
- [ ] Chrome (desktop/mobile)
- [ ] Firefox (desktop/mobile) 
- [ ] Safari (desktop/mobile)
- [ ] Edge (desktop)

### SEO & Meta
- [ ] Page title is descriptive
- [ ] Meta description is compelling
- [ ] Open Graph tags are correct
- [ ] Favicon displays properly
- [ ] Semantic HTML structure

---

## 🔧 Troubleshooting Guide

### Videos Not Playing

**Problem**: Videos don't autoplay or show black screens

**Solutions**:
1. **Check video format**: Ensure MP4 with H.264 codec
2. **Verify file paths**: Check that video files exist
3. **Browser autoplay policies**: Some browsers require user interaction
4. **Poster images**: Ensure poster attributes point to existing images

```html
<!-- Ensure proper video syntax -->
<video class="hero-video" autoplay muted loop playsinline poster="assets/poster-hero.jpg">
    <source src="assets/your-video.mp4" type="video/mp4">
    <source src="assets/your-video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

### Menu Not Opening/Closing

**Problem**: Floating menus don't respond to clicks

**Solutions**:
1. **JavaScript errors**: Check browser console for errors
2. **CSS conflicts**: Ensure no other styles override menu classes
3. **Event conflicts**: Verify no other scripts interfere
4. **Touch events**: Test on actual mobile devices

```javascript
// Debug menu functionality
document.querySelectorAll('.menu-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log('Menu button clicked:', e.target);
        console.log('Menu state:', btn.getAttribute('aria-expanded'));
    });
});
```

### Images Not Loading

**Problem**: Images show broken link icons

**Solutions**:
1. **File paths**: Verify images exist in assets folder
2. **File names**: Check for typos in filenames
3. **File formats**: Ensure supported formats (JPG, PNG, SVG, WebP)
4. **File sizes**: Optimize large images for web

```html
<!-- Use loading attribute for better performance -->
<img src="assets/your-image.jpg" alt="Descriptive alt text" loading="lazy">
```

### Icons Not Displaying

**Problem**: SVG icons appear as text or don't show

**Solutions**:
1. **SVG syntax**: Ensure proper SVG markup
2. **ViewBox**: Include viewBox attribute for scaling
3. **CSS conflicts**: Check for CSS overriding SVG styles
4. **Font icons**: If using icon fonts, ensure fonts load

```html
<!-- Proper SVG icon structure -->
<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>
```

### Layout Breaking on Mobile

**Problem**: Content overflows or elements overlap on mobile

**Solutions**:
1. **Viewport meta tag**: Ensure proper viewport settings
2. **CSS media queries**: Check responsive breakpoints
3. **Touch targets**: Ensure buttons are at least 44px
4. **Text size**: Use relative units (rem, em) not pixels

```html
<!-- Essential viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Performance Issues

**Problem**: Slow loading or poor performance

**Solutions**:
1. **Optimize images**: Compress images to 80-90% quality
2. **Video optimization**: Use appropriate bitrates and formats
3. **CSS/JS minification**: Minify files for production
4. **Lazy loading**: Implement lazy loading for below-fold content

```bash
# Image optimization
# Install imagemin
npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant

# Optimize images
imagemin assets/*.jpg --out-dir=assets/optimized --plugin=mozjpeg
imagemin assets/*.png --out-dir=assets/optimized --plugin=pngquant
```

### Contact Buttons Not Working

**Problem**: Call, email, WhatsApp buttons don't function

**Solutions**:
1. **Protocol syntax**: Ensure proper tel:, mailto:, https: protocols
2. **Phone format**: Use international format with country code
3. **URL encoding**: Properly encode special characters
4. **Mobile vs desktop**: Test behavior on both platforms

```html
<!-- Correct button formats -->
<a href="tel:+1234567890">Call</a>
<a href="mailto:contact@example.com?subject=Inquiry">Email</a>
<a href="https://wa.me/1234567890?text=Hello">WhatsApp</a>
```

### CSS Not Applying

**Problem**: Styles don't appear or look different than expected

**Solutions**:
1. **File paths**: Ensure CSS file loads correctly
2. **CSS specificity**: Check for conflicting styles
3. **Cache clearing**: Hard refresh (Ctrl+F5)
4. **Browser developer tools**: Inspect elements to debug

```html
<!-- Ensure CSS loads in head -->
<link rel="stylesheet" href="css/styles.css">
```

### JavaScript Errors

**Problem**: Interactive features don't work

**Solutions**:
1. **Console errors**: Check browser console for errors
2. **Script loading**: Ensure script loads after DOM
3. **Event listeners**: Verify elements exist before binding
4. **Browser compatibility**: Check for ES6+ features

```javascript
// Wait for DOM before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Your initialization code here
});
```

---

## 📖 Quick Reference

### Essential File Locations

| Element | File | Lines | What to Change |
|---------|------|-------|----------------|
| Page Title | index.html | 6 | Title text |
| Business Name (Hero) | index.html | 114 | Text content |
| Business Tagline | index.html | 116 | Text content |
| Phone Numbers | index.html | 124, 132 | tel: links |
| Email Address | index.html | 174, 471 | mailto: links |
| WhatsApp | index.html | 144 | wa.me link |
| Location | index.html | 154 | Google Maps link |
| Logo/Favicon | index.html | 17 | href attribute |
| Hero Video | index.html | 106 | src attribute |
| Business Image | index.html | 193 | src attribute |
| vCard File | js/script.js | 13 | VCARD_PATH |
| Colors | css/styles.css | 4-18 | CSS variables |

### Common URL Formats

```html
<!-- Phone -->
<a href="tel:+1234567890">Call</a>

<!-- Email -->
<a href="mailto:contact@example.com">Email</a>
<a href="mailto:contact@example.com?subject=Inquiry&body=Hello">Email with subject</a>

<!-- WhatsApp -->
<a href="https://wa.me/1234567890?text=Hello">WhatsApp</a>

<!-- SMS -->
<a href="sms:+1234567890">SMS</a>

<!-- External link -->
<a href="https://yourwebsite.com" target="_blank" rel="noopener">Website</a>

<!-- Download -->
<a href="assets/file.pdf" download>Download</a>
```

### CSS Custom Properties Quick Reference

```css
:root {
  /* Colors */
  --bg: #000000;              /* Background */
  --accent: #C49A3A;          /* Primary color */
  --accent-light: #D4AF37;    /* Light version */
  --text-primary: #FFFFFF;    /* Main text */
  --text-secondary: #CCCCCC;  /* Secondary text */
  
  /* Layout */
  --border-radius: 16px;      /* Rounded corners */
  --border-radius-small: 8px; /* Small corners */
  
  /* Effects */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow: rgba(0, 0, 0, 0.5);
}
```

### Service Menu Structure

```html
<!-- Template for adding a new service -->
<li>
    <a href="https://yourwebsite.com/service" 
       target="_blank" 
       rel="noopener"
       aria-label="Service Name" 
       class="services-link">
        <svg class="services-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <!-- SVG icon path -->
        </svg>
        Service Name
    </a>
</li>
```

### Social Media Platforms & URLs

| Platform | URL Format | Icon Class |
|----------|------------|------------|
| Facebook | `https://facebook.com/yourpage` | `fa-facebook` |
| Instagram | `https://instagram.com/yourusername` | `fa-instagram` |
| Twitter | `https://twitter.com/yourhandle` | `fa-twitter` |
| LinkedIn | `https://linkedin.com/in/yourprofile` | `fa-linkedin` |
| YouTube | `https://youtube.com/yourchannel` | `fa-youtube` |
| TikTok | `https://tiktok.com/@yourhandle` | `fa-tiktok` |
| Pinterest | `https://pinterest.com/yourusername` | `fa-pinterest` |

---

## 🎨 Advanced Customization

### Adding New Sections

To add a new section to the page:

1. **Add HTML structure**:
```html
<!-- New section example -->
<section class="new-section" role="region" aria-label="New Section">
    <div class="container">
        <h2 class="section-title">New Section Title</h2>
        <div class="new-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

2. **Add CSS styles**:
```css
.new-section {
    padding: 4rem 0;
    position: relative;
}

.new-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}
```

3. **Add responsive styles**:
```css
@media (max-width: 768px) {
    .new-section {
        padding: 2rem 0;
    }
}
```

### Custom Animations

Add custom CSS animations:

```css
/* Keyframes */
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply animation */
.animate-in {
    animation: slideInUp 0.6s ease-out;
}

/* Staggered animations */
.animate-in:nth-child(1) { animation-delay: 0.1s; }
.animate-in:nth-child(2) { animation-delay: 0.2s; }
.animate-in:nth-child(3) { animation-delay: 0.3s; }
```

### Adding Google Maps Integration

Replace the simple Google Maps link with an embedded map:

```html
<!-- Replace existing location button -->
<a href="https://maps.google.com/your-location" target="_blank" rel="noopener" 
   class="action-btn location-btn" aria-label="View location on Google Maps">
    <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="btn-text">Location</span>
</a>
```

### Integrating Google Analytics

Add to `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Track custom events in `js/script.js`:

```javascript
// Track menu interactions
trackEvent('menu_opened', 'services');

// Track button clicks
trackEvent('whatsapp_clicked', 'contact_action');

// Track function
trackEvent(action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: 'user_interaction',
            event_label: label
        });
    }
}
```

### Adding Contact Forms

For a contact form instead of just email links:

```html
<!-- Add to contact actions section -->
<form class="contact-form" action="#" method="POST">
    <div class="form-group">
        <input type="text" name="name" placeholder="Your Name" required>
    </div>
    <div class="form-group">
        <input type="email" name="email" placeholder="Your Email" required>
    </div>
    <div class="form-group">
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
    </div>
    <button type="submit" class="action-btn submit-btn">
        <span class="btn-text">Send Message</span>
    </button>
</form>
```

```css
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
}

.form-group input,
.form-group textarea {
    padding: 0.75rem;
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-small);
    background: var(--glass-bg);
    color: var(--text-primary);
    font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px rgba(196, 154, 58, 0.2);
}
```

### Adding Multiple Languages

```html
<!-- Language switcher -->
<div class="language-switcher">
    <button class="lang-btn active" data-lang="en">EN</button>
    <button class="lang-btn" data-lang="es">ES</button>
</div>

<!-- Content with data attributes -->
<h1 class="hero-title">
    <span class="title-line" data-en="YOUR BUSINESS" data-es="TU NEGOCIO">YOUR BUSINESS</span>
</h1>
```

```javascript
// Language switching functionality
function switchLanguage(lang) {
    document.querySelectorAll('[data-' + lang + ']').forEach(element => {
        const text = element.getAttribute('data-' + lang);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('[data-lang="' + lang + '"]').classList.add('active');
}

// Event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});
```

### Adding Loading Animations

```css
/* Loading spinner */
.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(196, 154, 58, 0.3);
    border-radius: 50%;
    border-top-color: var(--accent);
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Page loading state */
.page-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.3s ease;
}

.page-loaded .page-loading {
    opacity: 0;
    pointer-events: none;
}
```

```html
<!-- Add to body -->
<div class="page-loading">
    <div class="loading-spinner"></div>
</div>
```

```javascript
// Hide loading screen when page is loaded
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});
```

### Dark/Light Mode Toggle

```html
<!-- Add toggle button -->
<button class="theme-toggle" aria-label="Toggle theme">
    <span class="theme-icon">🌙</span>
</button>
```

```css
.theme-toggle {
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: var(--glass-bg);
    color: var(--text-primary);
    cursor: pointer;
    z-index: 100;
    transition: var(--transition);
}

[data-theme="light"] {
    --bg: #ffffff;
    --text-primary: #000000;
    --text-secondary: #333333;
    --glass-bg: rgba(0, 0, 0, 0.1);
    --glass-border: rgba(0, 0, 0, 0.2);
}
```

```javascript
// Theme toggle functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = document.querySelector('.theme-icon');
    icon.textContent = newTheme === 'light' ? '🌙' : '☀️';
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Event listener
document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
```

---

## ⚡ Performance Optimization

### Image Optimization

```bash
# Install optimization tools
npm install -g imagagemagick-cli imagemin-cli

# Optimize images
find assets/ -name "*.jpg" -exec jpegoptim --max=85 {} \;
find assets/ -name "*.png" -exec optipng -o2 {} \;

# Generate WebP versions
find assets/ -name "*.jpg" -exec cwebp -q 85 {} -o {}.webp \;
find assets/ -name "*.png" -exec cwebp -lossless {} -o {}.webp \;
```

```html
<!-- Responsive images with WebP support -->
<picture>
    <source srcset="assets/image.webp" type="image/webp">
    <source srcset="assets/image.jpg" type="image/jpeg">
    <img src="assets/image.jpg" alt="Description" loading="lazy">
</picture>
```

### Video Optimization

```bash
# Optimize videos for web
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -movflags +faststart -pix_fmt yuv420p output.mp4

# Generate multiple resolutions
ffmpeg -i input.mp4 -vf scale=1920:1080 -c:v libx264 -crf 23 -preset medium output-1080p.mp4
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 23 -preset medium output-720p.mp4
ffmpeg -i input.mp4 -vf scale=854:480 -c:v libx264 -crf 23 -preset medium output-480p.mp4
```

### Critical CSS Inlining

```html
<!-- Extract critical CSS and inline in head -->
<style>
/* Critical above-the-fold CSS */
.hero { /* ... */ }
.hero-title { /* ... */ }
.button-grid { /* ... */ }
</style>

<!-- Non-critical CSS loaded asynchronously -->
<link rel="preload" href="css/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="css/styles.css"></noscript>
```

### Service Worker for Caching

```javascript
// sw.js - Service Worker for caching
const CACHE_NAME = 'business-card-v1';
const urlsToCache = [
    '/',
    '/css/styles.css',
    '/js/script.js',
    '/assets/hero.mp4',
    '/assets/image.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});
```

```html
<!-- Register service worker -->
<script>
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
</script>
```

### Lazy Loading Implementation

```javascript
// Enhanced lazy loading
const lazyImages = document.querySelectorAll('img[data-src]');
const lazyVideos = document.querySelectorAll('video[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const video = entry.target;
            video.src = video.dataset.src;
            video.load();
            videoObserver.unobserve(video);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));
lazyVideos.forEach(video => videoObserver.observe(video));
```

---

## 📚 Additional Resources

### Design Inspiration
- [Dribbble - Business Card Designs](https://dribbble.com/search/business-card)
- [Behance - Digital Business Cards](https://www.behance.net/search?field=102&projects=all&q=digital%20business%20card)

### Color Palette Tools
- [Coolors.co - Color Palette Generator](https://coolors.co/)
- [Adobe Color - Color Wheel](https://color.adobe.com/)
- [Material Design Colors](https://material.io/design/color/the-color-system.html)

### Video Resources
- [Pexels - Free Videos](https://www.pexels.com/videos/)
- [Pixabay - Free Stock Videos](https://pixabay.com/videos/)

### Image Resources
- [Unsplash - Free Images](https://unsplash.com/)
- [Pexels - Free Images](https://www.pexels.com/)

### Performance Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix - Performance Analysis](https://gtmetrix.com/)
- [WebPageTest - Website Speed Test](https://www.webpagetest.org/)

### Accessibility Tools
- [WAVE - Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- [axe DevTools - Accessibility Testing](https://www.deque.com/axe/devtools/)

---

## 🆘 Getting Help

### Common Issues
1. **Check browser console** for JavaScript errors
2. **Validate HTML** using [W3C Validator](https://validator.w3.org/)
3. **Test responsive design** using browser dev tools
4. **Optimize media files** for web delivery

### Support Resources
- **MDN Web Docs**: [https://developer.mozilla.org/](https://developer.mozilla.org/)
- **Can I Use**: [https://caniuse.com/](https://caniuse.com/)
- **Stack Overflow**: [https://stackoverflow.com/](https://stackoverflow.com/)

### Template Updates
This template is designed to be future-proof and use only stable web standards. No major updates should be required unless web standards change significantly.

---

**🎯 Final Notes**

This template provides a solid foundation for any digital business card. The key to success is:

1. **Start Simple**: Begin with basic customization before adding advanced features
2. **Test Thoroughly**: Always test on multiple devices and browsers
3. **Optimize Performance**: Keep videos small and images compressed
4. **Maintain Accessibility**: Don't sacrifice accessibility for aesthetics
5. **Keep It Updated**: Regularly check links and contact information

**Version**: 2.0.0  
**Last Updated**: November 2, 2025  
**Compatibility**: Modern browsers, GitHub Pages, Static Hosting