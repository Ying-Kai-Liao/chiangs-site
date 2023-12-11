/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'fancy': 'linear-gradient(-45deg, rgb(72, 79, 248), rgb(228, 79, 252), rgb(48, 181, 255))',
        'grid-slate-100': `url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'%23f1f5f9\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")`,
        'grid-slate-900': `url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(15 23 42)\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")`,
        'stripes-gray': "linear-gradient(135deg, #6b728080 10%, #0000 0, #0000 50%, #6b728080 0, #6b728080 60%, #0000 0, #0000)",
        'stripes-cyan': "linear-gradient(135deg, #22d3ee1a 10%, #0000 0, #0000 50%, #06b6d480 0, #06b6d480 60%, #0000 0, #0000)",
        'stripes-sky': "linear-gradient(135deg, #38bdf81a 10%, #0000 0, #0000 50%, #0ea5e980 0, #0ea5e980 60%, #0000 0, #0000)",
        'stripes-blue': "linear-gradient(135deg, #60a5fa1a 10%, #0000 0, #0000 50%, #3b82f680 0, #3b82f680 60%, #0000 0, #0000)",
        'stripes-indigo': "linear-gradient(135deg, #818cf81a 10%, #0000 0, #0000 50%, #6366f180 0, #6366f180 60%, #0000 0, #0000)",
        'stripes-violet': "linear-gradient(135deg, #a78bfa1a 10%, #0000 0, #0000 50%, #8b5cf680 0, #8b5cf680 60%, #0000 0, #0000)",
        'stripes-purple': "linear-gradient(135deg, #c084fc1a 10%, #0000 0, #0000 50%, #a855f780 0, #a855f780 60%, #0000 0, #0000)",
        'stripes-fuchsia': "linear-gradient(135deg, #e879f91a 10%, #0000 0, #0000 50%, #d946ef80 0, #d946ef80 60%, #0000 0, #0000)",
        'stripes-pink': "linear-gradient(135deg, #f472b61a 10%, #0000 0, #0000 50%, #ec489980 0, #ec489980 60%, #0000 0, #0000)",
        'stripes-white': "linear-gradient(135deg, #ffffffbf 10%, #0000 0, #0000 50%, #ffffffbf 0, #ffffffbf 60%, #0000 0, #0000)",
      
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}