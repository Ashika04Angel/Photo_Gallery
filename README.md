# Photo_Gallery
Project Overview
- A responsive photo gallery web application built with HTML, CSS, and JavaScript.
- Displays images in a grid layout that adapts to different screen sizes.
- Clicking an image opens it in a lightbox modal with navigation arrows and keyboard support.

Technologies Used
- HTML5 → Semantic structure
- CSS3 → Responsive design with Grid, Flexbox, transitions
- JavaScript (ES6) → DOM manipulation, event handling, lightbox logic
- Font Awesome → Icons for close button and navigation arrows

 Features
- Responsive grid layout
- Lightbox modal with enlarged image
- Navigation arrows for previous/next image
- Keyboard support (←, →, Esc)
- Backdrop click to close modal
- Hover zoom effect on thumbnails

 Implementation Details
- Maintains currentIndex for active image
- Uses modulo arithmetic for circular navigation
- Event listeners for thumbnails, arrows, close button, and keyboard keys
- Backdrop-only close logic to avoid accidental closing

Challenges & Solutions
- Accidental close on arrow click → Fixed with stopPropagation() and backdrop-only detection
- Responsiveness → Achieved with CSS Grid auto-fit and relative units
- Accessibility → Added alt text, keyboard navigation, ARIA roles

 Scalability & Extensions
- Can be extended into a portfolio showcase, e-commerce product gallery, or API-driven gallery
- Future improvements: captions, swipe support for mobile, smooth transitions


