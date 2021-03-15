const styles = ({ palette }) => ({
  item: {
    display: 'inline-block',
  },
  rubberBand: {
    animation: '$rubberBandEffect 0.6s ease infinite',
  },
  heartBeat: {
    animation: '$heartBeatEffect 0.6s ease-in-out infinite',
  },
  '@keyframes rubberBandEffect': {
    '0%': {
      '-webkit-transform': 'scale(1.0)',
      '-ms-transform': 'scale(1.0)',
      transform: 'scale(1.0)',
    },
    '30%': {
      '-webkit-transform': 'scaleX(1.25) scaleY(0.75)',
      '-ms-transform': 'scaleX(1.25) scaleY(0.75)',
      transform: 'scaleX(1.25) scaleY(0.75)',
    },
    '40%': {
      '-webkit-transform': 'scaleX(0.75) scaleY(1.25)',
      '-ms-transform': 'scaleX(0.75) scaleY(1.25)',
      transform: 'scaleX(0.75) scaleY(1.25)',
    },
    '60%': {
      '-webkit-transform': 'scaleX(1.15) scaleY(0.85)',
      '-ms-transform': 'scaleX(1.15) scaleY(0.85)',
      transform: 'scaleX(1.15) scaleY(0.85)',
    },
    '100%': {
      '-webkit-transform': 'scale(1.0)',
      '-ms-transform': 'scale(1.0)',
      transform: 'scale(1.0)',
    },
  },
  '@keyframes heartBeatEffect': {
    '0%': {
      transform: 'scale(1)',
    },
    '14%': {
      transform: 'scale(1.1)',
    },
    '28%': {
      transform: 'scale(1)',
    },
    '42%': {
      transform: 'scale(1.1)',
    },
    '70%': {
      transform: 'scale(1)',
    },
  },
});

export default styles;
