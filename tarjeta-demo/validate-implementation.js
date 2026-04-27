console.log('🔍 All In One Cabo - Collapsible Menu Implementation Validation\n');

// Test 1: HTML Structure
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('📋 HTML Structure Tests:');
const tests = [
    { name: 'Collapsible Menu Container', check: html.includes('collapsible-menu') },
    { name: 'Services/Associates Menu', check: html.includes('services-menu-content') },
    { name: 'Social Media Menu', check: html.includes('social-menu-content') },
    { name: 'Toggle Button Right', check: html.includes('collapsible-menu-right') },
    { name: 'Toggle Button Left', check: html.includes('collapsible-menu-left') },
    { name: 'Yacht Rental Link', check: html.includes('yacht Rental') },
    { name: 'Video Marketing Link', check: html.includes('Video Marketing') },
    { name: 'Activities Link', check: html.includes('Activities') },
    { name: 'Transportation Link', check: html.includes('Transportation') },
    { name: 'Helicopter Ride Button', check: html.includes('Helicopter Ride') },
    { name: 'Bachelor Party Link', check: html.includes('Bachelor') },
    { name: 'Wedding Planner Link', check: html.includes('Wedding Planner') },
    { name: 'Real Estate Link', check: html.includes('Real Estate') },
    { name: 'Fishing Link', check: html.includes('Fishing') },
    { name: 'Restaurants Link', check: html.includes('Restaurants') },
    { name: 'Night Clubs Link', check: html.includes('Night Clubs') },
    { name: 'Golf Rounds Link', check: html.includes('Golf Rounds') },
    { name: 'Join the Team Link', check: html.includes('Join the team') }
];

tests.forEach(test => {
    console.log(`  ${test.check ? '✅' : '❌'} ${test.name}`);
});

// Test 2: CSS Structure
console.log('\n🎨 CSS Structure Tests:');
const css = fs.readFileSync('css/styles.css', 'utf8');

const cssTests = [
    { name: 'Collapsible Menu Styles', check: css.includes('collapsible-menu') },
    { name: 'Menu Toggle Styles', check: css.includes('menu-toggle') },
    { name: 'Menu Content Styles', check: css.includes('menu-content') },
    { name: 'Animation Transitions', check: css.includes('transition') },
    { name: 'Right Position Styles', check: css.includes('collapsible-menu-right') },
    { name: 'Left Position Styles', check: css.includes('collapsible-menu-left') },
    { name: 'Services Content Styles', check: css.includes('services-content') },
    { name: 'Responsive Design', check: css.includes('@media') },
    { name: 'Hover Effects', check: css.includes(':hover') }
];

cssTests.forEach(test => {
    console.log(`  ${test.check ? '✅' : '❌'} ${test.name}`);
});

// Test 3: JavaScript Functionality
console.log('\n⚙️ JavaScript Functionality Tests:');
const js = fs.readFileSync('js/script.js', 'utf8');

const jsTests = [
    { name: 'CollapsibleMenuManager Class', check: js.includes('CollapsibleMenuManager') },
    { name: 'Toggle Menu Function', check: js.includes('toggleMenu') },
    { name: 'Open Menu Function', check: js.includes('openMenu') },
    { name: 'Close Menu Function', check: js.includes('closeMenu') },
    { name: 'Click Outside Handler', check: js.includes('clickedOutside') },
    { name: 'Escape Key Handler', check: js.includes('Escape') },
    { name: 'Accessibility Features', check: js.includes('aria-expanded') },
    { name: 'Focus Management', check: js.includes('focus') },
    { name: 'Analytics Tracking', check: js.includes('trackEvent') },
    { name: 'Component Initialization', check: js.includes('collapsibleMenuManager') }
];

jsTests.forEach(test => {
    console.log(`  ${test.check ? '✅' : '❌'} ${test.name}`);
});

// Test 4: URL Validation
console.log('\n🔗 URL Validation Tests:');
const urlTests = [
    { name: 'Yacht Rental URL', check: html.includes('allin1cabo.com/yates') },
    { name: 'Video Marketing URL', check: html.includes('allin1cabo.com/videomarketing') },
    { name: 'Activities URL', check: html.includes('allin1cabo.com/activities-1') },
    { name: 'Transportation URL', check: html.includes('allin1cabo.com/transportacion') },
    { name: 'Bachelor Party URL', check: html.includes('allin1cabo.com/bachelorandbacheloretteparties') },
    { name: 'Wedding Planner URL', check: html.includes('allin1cabo.com/weddingplanner') },
    { name: 'Real Estate URL', check: html.includes('allin1cabo.com/realestatemenu') },
    { name: 'Fishing URL', check: html.includes('allin1cabo.com/fishing') },
    { name: 'Restaurants URL', check: html.includes('allin1cabo.com/restaurants') },
    { name: 'Night Clubs URL', check: html.includes('allin1cabo.com/nightclubs') },
    { name: 'Golf URL', check: html.includes('allin1cabo.com/golf') },
    { name: 'Join Team URL', check: html.includes('allin1cabo.com/copia-de-contact') }
];

urlTests.forEach(test => {
    console.log(`  ${test.check ? '✅' : '❌'} ${test.name}`);
});

// Summary
console.log('\n📊 Implementation Summary:');
const htmlPass = tests.filter(t => t.check).length;
const cssPass = cssTests.filter(t => t.check).length;
const jsPass = jsTests.filter(t => t.check).length;
const urlPass = urlTests.filter(t => t.check).length;

console.log(`  HTML Structure: ${htmlPass}/${tests.length} tests passed`);
console.log(`  CSS Styling: ${cssPass}/${cssTests.length} tests passed`);
console.log(`  JavaScript Functionality: ${jsPass}/${jsTests.length} tests passed`);
console.log(`  URL Validation: ${urlPass}/${urlTests.length} tests passed`);

const overallPass = htmlPass + cssPass + jsPass + urlPass;
const totalTests = tests.length + cssTests.length + jsTests.length + urlTests.length;
const percentage = Math.round((overallPass / totalTests) * 100);

console.log(`\n🎯 Overall Implementation: ${overallPass}/${totalTests} (${percentage}%)`);

if (percentage >= 95) {
    console.log('🎉 EXCELLENT! Implementation is complete and ready for use.');
} else if (percentage >= 80) {
    console.log('👍 GOOD! Most functionality implemented, minor issues may need attention.');
} else if (percentage >= 60) {
    console.log('⚠️ FAIR! Core functionality implemented, some areas need improvement.');
} else {
    console.log('🚨 NEEDS WORK! Significant implementation gaps detected.');
}

console.log('\n✨ Validation Complete!');