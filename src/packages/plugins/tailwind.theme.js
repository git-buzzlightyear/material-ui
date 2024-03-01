const themeExtends = {
  colors: {
    brand: {
      500: '#8749F5',
      600: '#8041ee',
    },
    success: {
      500: '#65ca16',
      600: '#58b70e',
    },
    info: {
      500: '#4277f7',
      600: '#305bd4',
    },
    warn: {
      500: '#ffc000',
      600: '#f3ae0a',
    },
    danger: {
      500: '#FF4C3F',
      600: '#eb3e31',
    },
  },
  padding: {
    'button-ty': '10px',
    'button-sm': '16px',
    'button-md': '20px',
    'button-lg': '24px',
    cell: '14px',
  },
  height: {
    'global-ty': '28px',
    'global-sm': '32px',
    'global-md': '40px',
    'global-lg': '48px',
  },
  borderRadius: ({ theme }) => ({
    tiny: '2px',
    small: '3px',
    medium: '4px',
    large: '6px',
    ...theme('height'),
  }),
  zIndex: {
    popup: 100,
    toast: 101,
  },
  animation: {
    flicker: 'flicker 2s infinite ease',
    shimmer: 'shimmer 2s infinite linear',
  },
  keyframes: {
    flicker: {
      '0%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0 50%' },
    },
    shimmer: {
      '50%': { opacity: 0.5 },
    },
  },
  backgroundImage: {
    'skeleton-flicker': 'linear-gradient(90deg, rgb(0 0 0 / 5%) 20%, rgb(0 0 0 / 10%) 40%, rgb(0 0 0 / 5%) 60%)',
    'striped-gradient':
      'linear-gradient(45deg,rgba(0,0,0,.1) 25%,transparent 0,transparent 50%,rgba(0,0,0,.1) 0,rgba(0,0,0,.1) 75%,transparent 0,transparent)',
  },
  boxShadow: {
    around: [
      '0px 6px 16px 0px rgba(0, 0, 0, 0.08)',
      '0px 3px 6px -4px rgba(0, 0, 0, 0.12)',
      '0 -3px 6px rgba(0,0,0,0.04)',
    ],
  },
  dropShadow: {
    around: ['0 14px 8px rgb(0 0 0 / 0.08)', '0 -14px 8px rgb(0 0 0 / 0.06)'],
  },
};

export default themeExtends;
module.exports = themeExtends;
