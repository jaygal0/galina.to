import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			bg: {
  				menu: '#ffe5d9',
  				home: '#dfe6e5',
  				projects: '#eef1f6',
  				now: '#dfe6e5',
  				timeline: '#dbe7e4',
  				blog: '#eef1f6',
  				contact: '#d6e2e9'
  			},
  			chips: {
  				one: '#ffaf91',
  				two: '#a4bcbc',
  				three: '#b8c9c8',
  				four: '#a1bfb9',
  				five: '#b5c4d2',
  				six: '#ffc8b2'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		fontFamily: {
  			sans: [
  				'DM Sans',
  				'sans-serif'
  			],
  			krona: [
  				'Krona One',
  				'sans-serif'
  			],
  			mono: [
  				'Share Tech Monospace',
  				'monospace'
  			]
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: '100%'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	keyframes: {
  		bounce: {
  			'0%': {
  				transform: 'scale(0)'
  			},
  			'50%': {
  				transform: 'scale(1.2)'
  			},
  			'70%': {
  				transform: 'scale(0.9)'
  			},
  			'100%': {
  				transform: 'scale(1)'
  			}
  		}
  	},
  	animation: {
  		bounceScaleSm: 'bounce .4s ease-out forwards',
  		bounceScaleMd: 'bounce .6s ease-out forwards',
  		bounceScaleLg: 'bounce .8s ease-out forwards'
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};

export default config;
