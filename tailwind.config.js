/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			gray: {
  				'300': '#D1D5DB',
  				'400': '#9CA3AF',
  				'500': '#4B5563',
  				'600': '#2E3247',
  				'700': '#23263A',
  				'800': '#181C2F',
  				'850': '#15192B',
  				'900': '#101322',
  				'950': '#0B0E17'
  			},
  			purple: {
  				'400': '#501C58',
  				'500': '#3E047E'
  			},
  			magenta: {
  				'400': '#8E0F6D'
  			},
  			orange: {
  				'400': '#E08D49'
  			},
  			green: {
  				'500': '#23D893'
  			},
  			cyan: {
  				'400': '#00FFC8'
  			},
  			blue: {
  				'400': '#3ABFF8',
  				'500': '#249BD9'
  			},
  			teal: {
  				'400': '#4ECDC4'
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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  		fontFamily: {
  			sans: [
  				'Geist',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica Neue',
  				'Arial',
  				'sans-serif'
  			],
  			mono: [
  				'Geist Mono',
  				'monospace'
  			]
  		},
  		boxShadow: {
  			'elev-1': '0 1px 2px rgba(0,0,0,0.20)',
  			'elev-2': '0 2px 6px rgba(0,0,0,0.24)',
  			'elev-4': '0 4px 12px rgba(0,0,0,0.18)'
  		},
  		borderRadius: {
  			xs: '4px',
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: '32px',
  			'2xl': '40px'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem'
  		},
  		animation: {
  			'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
  			'fade-in': 'fadeIn 0.6s ease-out forwards',
  			'scale-in': 'scaleIn 0.3s ease-out forwards'
  		},
  		keyframes: {
  			fadeInUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			scaleIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.9)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};