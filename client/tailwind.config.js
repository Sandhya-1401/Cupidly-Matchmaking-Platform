

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				'xs': '475px',
				'3xl': '1600px',
			},
			spacing: {
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
			},
			fontSize: {
				'responsive-xs': 'clamp(0.75rem, 1.5vw, 0.875rem)',
				'responsive-sm': 'clamp(0.875rem, 2vw, 1rem)',
				'responsive-base': 'clamp(1rem, 2.5vw, 1.125rem)',
				'responsive-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
				'responsive-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
				'responsive-2xl': 'clamp(1.5rem, 5vw, 2rem)',
				'responsive-3xl': 'clamp(1.875rem, 6vw, 2.25rem)',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'bounce-gentle': 'bounceGentle 2s infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				bounceGentle: {
					'0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
					'40%': { transform: 'translateY(-10px)' },
					'60%': { transform: 'translateY(-5px)' },
				},
			},
		},
	},
	plugins: [],
};
