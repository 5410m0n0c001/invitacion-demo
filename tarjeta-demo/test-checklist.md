# All In One Cabo - Digital Business Card QA Test Checklist

**Project**: All In One Cabo Digital Business Card  
**Version**: 1.0.0  
**Test Date**: ________________  
**Tester**: __________________  
**Environment**: _______________

## 🔍 Pre-Testing Setup

- [ ] All source files are in correct directories
- [ ] Video files (hero.mp4, footer.mp4, video.mp4) are properly placed
- [ ] Image files (actividades.jpg, posters) are optimized
- [ ] SVG icons are accessible and properly sized
- [ ] vCard file (allinonecabo.vcf) contains correct contact data

## 📱 Mobile Testing

### Core Functionality
- [ ] **Call Button**: Opens native dialer with +52 624 137 8636
- [ ] **Office Button**: Opens native dialer with +52 624 137 8636
- [ ] **WhatsApp Button**: Opens WhatsApp app with pre-filled message
- [ ] **Location Button**: Opens Google Maps app with correct location
- [ ] **Add to Contacts**: Downloads vCard file successfully
- [ ] **Email Button**: Opens default email client with pre-filled subject

### Mobile UI/UX
- [ ] Social strip collapses to floating button (mobile-social-toggle)
- [ ] Social menu button is visible and functional (bottom-right position)
- [ ] Hero video plays fully without blur or distortion
- [ ] All action buttons have minimum 44x44px touch targets
- [ ] Text is readable and properly sized on mobile screens
- [ ] Videos have poster images as fallbacks

### Mobile Performance
- [ ] Page loads within 3 seconds on 4G connection
- [ ] Videos do not cause layout shift or blur
- [ ] Images are optimized and lazy-loaded
- [ ] JavaScript functionality works without errors

## 💻 Desktop Testing

### Core Functionality
- [ ] **Call Button**: Opens modal with phone number and copy functionality
- [ ] **Office Button**: Opens modal with phone number and copy functionality
- [ ] **WhatsApp Button**: Opens WhatsApp Web in new tab
- [ ] **Location Button**: Opens Google Maps in new tab
- [ ] **Add to Contacts**: Downloads vCard file
- [ ] **Email Button**: Opens default email client

### Desktop UI/UX
- [ ] Social strip is pinned to right side (desktop-only class)
- [ ] Social icons are visible and properly aligned
- [ ] Hero video plays without blur or distortion
- [ ] All videos display correctly with proper aspect ratios
- [ ] Action panel is centered at bottom with proper spacing

### Desktop Performance
- [ ] Page loads within 2 seconds on broadband
- [ ] Smooth scrolling works with Lenis integration
- [ ] Video autoplay works (if not blocked by browser)
- [ ] Animations are smooth and performant

## 🌐 Cross-Platform Testing

### Browser Compatibility
- [ ] **Chrome**: All functionality works
- [ ] **Firefox**: All functionality works
- [ ] **Safari**: All functionality works (test iOS Safari separately)
- [ ] **Edge**: All functionality works

### Navigation and Links
- [ ] Only buttons and links have redirections
- [ ] No unwanted automatic redirects
- [ ] All external links open in new tabs (target="_blank")
- [ ] Internal navigation works smoothly

### Social Media Links
- [ ] Facebook: https://facebook.com/allinonecabo
- [ ] Instagram: https://instagram.com/allinonecabo?utm_medium=copy_link
- [ ] YouTube: https://www.youtube.com/@AllIn1cabo
- [ ] All links open in new tabs with proper rel="noopener"
- [ ] Social icons display correctly in both mobile and desktop views

## 🎥 Video Testing

### Hero Video (assets/hero.mp4)
- [ ] Video displays full screen without blur
- [ ] Video maintains aspect ratio on all screen sizes
- [ ] Video autoplay works (muted, loop, playsinline)
- [ ] Poster image (assets/poster-hero.svg) displays on slow networks
- [ ] Video handles error states gracefully

### Background Video (assets/fondo.mp4)
- [ ] Background video plays in designated section
- [ ] Video doesn't interfere with text readability
- [ ] Performance impact is minimal
- [ ] Fallback content displays if video fails

### Footer Video (assets/footer.mp4)
- [ ] Footer video plays automatically
- [ ] Video doesn't interfere with footer content
- [ ] Proper looping behavior
- [ ] Poster fallback displays correctly

## ♿ Accessibility Testing

### Keyboard Navigation
- [ ] All buttons are keyboard accessible (Tab/Enter/Space)
- [ ] Focus indicators are visible and gold-colored
- [ ] Modal focus trap works correctly (desktop call modal)
- [ ] Escape key closes modal windows
- [ ] Tab order follows logical flow

### Screen Reader Support
- [ ] All images have descriptive alt attributes
- [ ] Buttons have proper aria-label attributes
- [ ] Form elements are properly labeled
- [ ] Live regions announce dynamic content changes
- [ ] Semantic HTML structure is logical

### Color and Contrast
- [ ] Text meets WCAG AA contrast requirements (4.5:1 ratio)
- [ ] Gold color (#C49A3A) has sufficient contrast on black background
- [ ] Interactive elements are clearly distinguishable
- [ ] Color is not the only means of conveying information

### Motion Preferences
- [ ] `prefers-reduced-motion` support works
- [ ] Animations are disabled when user prefers reduced motion
- [ ] Essential functionality remains intact with motion disabled
- [ ] No seizure-inducing animations or rapid flashing

## 🔧 Technical Validation

### HTML Validation
- [ ] Valid HTML5 structure
- [ ] Proper lang="en" attribute
- [ ] All required meta tags present (viewport, charset, description)
- [ ] Open Graph tags properly configured
- [ ] No broken links or 404 errors

### CSS Validation
- [ ] Valid CSS3 syntax
- [ ] Responsive design works across all breakpoints
- [ ] CSS Grid and Flexbox used appropriately
- [ ] Vendor prefixes for Safari compatibility
- [ ] No layout shifts or CLS issues

### JavaScript Functionality
- [ ] No console errors or warnings
- [ ] Modular JavaScript architecture
- [ ] Event handlers properly bound
- [ ] Toast notifications work correctly
- [ ] Modal functionality works as expected

### Performance Testing
- [ ] **Lighthouse Performance Score**: ___/100
- [ ] **Lighthouse Accessibility Score**: ___/100
- [ ] **Lighthouse Best Practices Score**: ___/100
- [ ] **Lighthouse SEO Score**: ___/100
- [ ] **Core Web Vitals**:
  - [ ] Largest Contentful Paint (LCP): < 2.5s
  - [ ] First Input Delay (FID): < 100ms
  - [ ] Cumulative Layout Shift (CLS): < 0.1

### Asset Optimization
- [ ] Images are optimized and compressed
- [ ] Videos are optimized for web (< 5MB each)
- [ ] SVG icons are properly formatted
- [ ] No unnecessary font loading
- [ ] Critical CSS is inlined

## 📞 Contact Data Validation

### Phone Numbers
- [ ] Call button uses tel:+526241378636
- [ ] Office button uses tel:+526241378636
- [ ] Phone number format is correct in modal
- [ ] Copy to clipboard functionality works

### Email Configuration
- [ ] Email button uses mailto:allinonecabo@hotmail.com
- [ ] Subject line is properly encoded: "Booking%20Inquiry"
- [ ] Body text is properly encoded with line breaks

### WhatsApp Integration
- [ ] WhatsApp URL uses correct format: wa.me/526241378636
- [ ] Pre-filled message is properly encoded
- [ ] Works on both mobile and desktop

### vCard File
- [ ] vCard file contains correct contact information
- [ ] Download triggers correctly
- [ ] File format is valid vCard 3.0
- [ ] Import works on mobile devices

## 🌍 Geographic and Social Testing

### Google Maps Integration
- [ ] Location URL works: https://maps.app.goo.gl/rYeE3fMsktMvwjTr9
- [ ] Opens correct location in Google Maps
- [ ] Works on mobile and desktop

### Social Media Links
- [ ] All 10+ social media links are functional
- [ ] Links open in new tabs with security attributes
- [ ] Social icons display properly
- [ ] Platform-specific optimizations are working

## 🚀 Deployment Testing

### GitHub Pages Deployment
- [ ] Repository is created and configured
- [ ] GitHub Pages is enabled for main branch
- [ ] All assets load correctly from GitHub Pages domain
- [ ] Custom domain configuration (if applicable)
- [ ] HTTPS is working properly

### Asset Loading
- [ ] All videos load and play correctly
- [ ] All images display properly
- [ ] CSS and JavaScript files load without errors
- [ ] Icon SVGs render correctly
- [ ] vCard file downloads properly

### Cross-Device Testing
- [ ] iPhone (iOS Safari)
- [ ] Android (Chrome Mobile)
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Tablet (iPad/Android)

## 🔍 Final Validation

### Content Verification
- [ ] Business name "All In One Cabo" displays correctly
- [ ] Owner name "CHRISTIAN" is displayed
- [ ] Tagline "Premium Tours & Activities" is present
- [ ] Activities section shows actividades.jpg image
- [ ] All contact information is accurate

### User Experience
- [ ] Professional appearance with black/gold theme
- [ ] Smooth animations and transitions
- [ ] Intuitive button placement and sizing
- [ ] Clear visual hierarchy
- [ ] Loading states are handled gracefully

### Error Handling
- [ ] Videos handle loading errors gracefully
- [ ] JavaScript errors don't break functionality
- [ ] Network failures are handled appropriately
- [ ] Fallback content displays when needed

## 📋 Test Results Summary

**Overall Status**: [ ] PASS / [ ] FAIL

**Critical Issues Found**:
1. ________________________________
2. ________________________________
3. ________________________________

**Recommendations**:
1. ________________________________
2. ________________________________
3. ________________________________

**Final Lighthouse Scores**:
- Performance: ___/100
- Accessibility: ___/100
- Best Practices: ___/100
- SEO: ___/100

**Deployment URL**: ________________________________

**Testing Completed By**: ________________________________

**Date**: ________________________________

---

## 📝 Notes and Observations

Use this space for additional testing notes, unexpected behaviors, or observations during the QA process.

________________________________________________
________________________________________________
________________________________________________
________________________________________________

**Test Checklist Completion**: All items must pass before final deployment to production.