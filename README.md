# Men Against Gender Apartheid - React Application

A modern React application for the Men Against Gender Apartheid campaign, featuring animated hero sections, responsive design, and interactive components.

## Features

- **Animated Hero Section**: GSAP-powered animations for the main title and Farsi text
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Menu**: Hamburger menu with smooth scrolling navigation
- **Section Components**: Modular sections for Why, What, How, Who, Act Now, Resources, About, and Contact
- **Accordion FAQ**: Interactive accordion in the How section
- **Contact Form**: Functional contact form with validation
- **Modern UI**: Clean, professional design with consistent typography
- **Dynamic Color Scheme**: Dark blue and white theme with automatic menu color adaptation

## Technologies Used

- React 18
- Tailwind CSS
- GSAP (GreenSock Animation Platform)
- React Hooks (useState, useEffect, useRef)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd men-against-gender-apartheid
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Menu.jsx              # Navigation menu component
│   ├── Hero.jsx              # Animated hero section
│   ├── WhySection.jsx        # Why section component
│   ├── WhatSection.jsx       # What section component
│   ├── HowSection.jsx        # How section with accordion
│   ├── WhoSection.jsx        # Who section component
│   ├── ActNowSection.jsx     # Call-to-action section
│   ├── ResourcesSection.jsx  # Resources section
│   ├── AboutSection.jsx      # About section
│   └── ContactSection.jsx    # Contact form section
├── App.jsx                   # Main application component
├── index.jsx                 # Application entry point
└── index.css                # Global styles with Tailwind
```

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: `#2d5dc0` (blue)
- Dark Blue: `#0f172a` (main background for dark sections)
- Navy: `#1e293b` (hover states)
- Deep Blue: `#0f1419` (alternative dark blue)

### Animations
GSAP animations are configured in the `Hero.jsx` component. You can modify timing, easing, and effects in the `useEffect` hook.

### Content
Each section component can be easily modified to update content, styling, or functionality.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.