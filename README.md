# Navbar Components Demo

A collection of responsive, accessible navigation components built with Next.js, Tailwind CSS, Radix UI, and Framer Motion.

## Features

- ✅ **Responsive Design** - Automatically switches between desktop and mobile layouts
- ✅ **Dark Mode Support** - Full theming with `next-themes`
- ✅ **Dropdown Menus** - Rich dropdown content with images and categorized links
- ✅ **Mobile Slide Menu** - Smooth slide-out menu with nested navigation
- ✅ **Keyboard Accessible** - Full keyboard navigation support
- ✅ **Smooth Animations** - Framer Motion animations for transitions
- ✅ **Sticky Navigation** - Navbar stays at the top while scrolling
- ✅ **Customizable** - Easy to configure through data files

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout with ThemeProvider
│   ├── page.js            # Demo homepage
│   └── globals.css        # Global styles and CSS variables
├── components/
│   ├── features/
│   │   └── navigation/
│   │       ├── NavigationContainer.jsx    # Main container (responsive logic)
│   │       ├── DesktopNavigation.jsx      # Desktop navbar
│   │       ├── MobileNavigation.jsx       # Mobile navbar
│   │       └── components/
│   │           ├── NavBar.jsx             # Shared navbar component
│   │           ├── NavLogo.jsx            # Logo component
│   │           ├── DesktopDropdown.jsx    # Desktop dropdown menus
│   │           └── MobileMenu.jsx         # Mobile slide menu
│   └── ui/
│       ├── button.jsx                     # Button component
│       ├── dialog.jsx                     # Dialog primitives
│       ├── sheet.jsx                      # Sheet/drawer component
│       ├── navigation-menu.jsx            # Navigation menu primitives
│       └── separator.jsx                  # Separator component
├── lib/
│   ├── navigation-data.js                 # Menu configuration
│   ├── theme.js                           # Theme utilities
│   └── utils.js                           # Utility functions (cn)
└── package.json
```

## Usage

### Basic Implementation

The navbar is already integrated in the root layout. To use it in your own project:

1. **Import the NavigationContainer**

```jsx
import NavigationContainer from "@/components/features/navigation/NavigationContainer";
```

2. **Add it to your layout**

```jsx
<body>
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <NavigationContainer />
    {children}
  </ThemeProvider>
</body>
```

### Customizing Menu Items

Edit `lib/navigation-data.js` to customize the navigation menu:

```javascript
export const desktopMenuItems = [
  { id: "nav-home", label: "Home", hasDropdown: false, url: "/" },
  { id: "nav-products", label: "Products", hasDropdown: true, url: "#" },
  // ... add more items
];

export const motorbikesDropdownItems = [
  {
    label: "Product Name",
    type: "model",
    image: "https://example.com/image.png",
    url: "/products/product-name",
  },
  // ... add more items
];
```

### Customizing Colors

The navbar uses Tailwind CSS classes. You can customize colors by:

1. **Editing CSS variables** in `app/globals.css`
2. **Passing color props** to NavigationContainer:

```jsx
<NavigationContainer
  logoColorClass="text-blue-700 dark:text-blue-200"
  logoHoverColorClass="hover:text-blue-900 dark:hover:text-blue-50"
/>
```

### Dark Mode Toggle

Use the `useTheme` hook from `next-themes`:

```jsx
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  );
}
```

## Component Breakdown

### NavigationContainer

The main wrapper that handles responsive switching between desktop and mobile views.

**Props:**
- `logoColorClass` - CSS class for logo color
- `logoHoverColorClass` - CSS class for logo hover color

### DesktopNavigation

Desktop navbar with hover-triggered dropdowns.

**Features:**
- Hover to open dropdowns
- Keyboard navigation (ArrowUp/Down/Left/Right, Escape)
- Click outside to close
- Smooth animations

### MobileNavigation

Mobile navbar with hamburger menu and slide-out drawer.

**Features:**
- Hamburger icon toggle
- Slide-out sheet animation
- Nested navigation support
- Touch-friendly interface

### NavLogo

Customizable logo component with SVG support.

### Dropdown Components

- **DesktopDropdown** - Rich dropdown with images and categorized links
- **MobileMenu** - Hierarchical mobile menu with back navigation

## Technologies Used

- **[Next.js 15](https://nextjs.org/)** - React framework
- **[React 19](https://react.dev/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** - Accessible UI primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Lucide React](https://lucide.dev/)** - Icon library

## Accessibility

The navbar components are built with accessibility in mind:

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader support
- ✅ Reduced motion support

## Responsive Breakpoints

- **Mobile:** `< 1024px` - Shows mobile hamburger menu
- **Desktop:** `≥ 1024px` - Shows full desktop navbar with dropdowns

## Customization Guide

### Adding New Menu Items

1. Open `lib/navigation-data.js`
2. Add items to `desktopMenuItems` or `mobileMenuItems`
3. If adding dropdown, create corresponding items array
4. Update dropdown mapping in navigation components if needed

### Changing Fonts

Fonts are configured in `app/layout.js`. To use different fonts:

```jsx
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ 
  variable: "--font-inter",
  subsets: ["latin"] 
});
```

### Styling the Navbar

The navbar uses Tailwind classes. Key classes to modify:

- Background: `bg-white dark:bg-neutral-950`
- Border: `border-b border-neutral-300 dark:border-neutral-700`
- Text: `text-neutral-700 dark:text-neutral-200`

## Performance

- Server-side rendering for initial load
- Client-side hydration for interactivity
- Optimized re-renders with React memoization
- Lazy-loaded animations
- Minimal bundle size (83 dependencies)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use in your projects.

## Credits

Original design from [Kabira Mobility](https://github.com/sagarsiwach/booking-next/)