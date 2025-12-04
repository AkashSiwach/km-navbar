// app/page.js
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
            Navigation Components
          </h1>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8">
            Responsive navbar with desktop dropdowns, mobile menu, and dark mode support
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-5 w-5" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5" />
                  Dark Mode
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-50">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Responsive Design"
              description="Automatically switches between desktop and mobile navigation based on screen size."
            />
            <FeatureCard
              title="Dark Mode"
              description="Built-in dark mode support with smooth transitions using next-themes."
            />
            <FeatureCard
              title="Dropdown Menus"
              description="Rich dropdown menus with product images and categorized links on desktop."
            />
            <FeatureCard
              title="Mobile Menu"
              description="Slide-out mobile menu with nested navigation and smooth animations."
            />
            <FeatureCard
              title="Keyboard Navigation"
              description="Full keyboard accessibility with arrow keys and escape key support."
            />
            <FeatureCard
              title="Customizable"
              description="Easy to customize colors, content, and layout through data configuration."
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-neutral-900 dark:text-neutral-50">
            Try It Out
          </h2>
          <p className="text-center text-neutral-700 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
            Resize your browser window to see the responsive behavior. Click on menu items
            to see dropdowns. Toggle between light and dark modes.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <DemoCard
              title="Desktop Navigation"
              description="Hover over 'Motorbikes', 'Scooter', or 'More' to see dropdown menus with rich content."
            />
            <DemoCard
              title="Mobile Navigation"
              description="Reduce window width below 1024px to see the mobile hamburger menu in action."
            />
          </div>
        </div>
      </section>

      {/* Content Section (for scrolling) */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
            Sticky Navigation
          </h2>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>
              The navigation bar is sticky and stays at the top of the page as you scroll.
              This provides consistent access to navigation throughout the user experience.
            </p>
            <p>
              Scroll down this page to see the navbar remain fixed at the top. The navbar
              includes a subtle border to separate it from the content below.
            </p>
            <p>
              The navigation components are built with performance in mind, using React
              hooks for state management and Framer Motion for smooth animations.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer for scroll demonstration */}
      <section className="py-40 px-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
            Keep Scrolling
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Notice how the navbar stays at the top? That's the sticky positioning in action.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-neutral-900 dark:bg-black text-neutral-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">Navbar Components Demo</p>
          <p className="text-sm text-neutral-500">
            Built with Next.js, Tailwind CSS, Radix UI, and Framer Motion
          </p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
      <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-50">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  );
}

function DemoCard({ title, description }) {
  return (
    <div className="p-8 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm">
      <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-50">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  );
}
