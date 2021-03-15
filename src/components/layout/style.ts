const styles = ({ app, breakpoints, typography }) => ({
  '@global': {
    html: {
      [breakpoints.up('xl')]: {
        fontSize: '0.833333vw !important',
      },
    },
  },
  container: {
    minHeight: '100vh',
  },
  scrollFix: {
    marginRight: '-17px !important',
    marginBottom: '-17px !important',
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 auto',
    minHeight: '100%',
    padding: `${typography.pxToRem(16)} ${typography.pxToRem(48)}`,
    transition: 'filter .5s, opacity .5s',
    boxSizing: 'border-box',
  },
  content: {
    margin: 'auto',
    maxWidth: app.maxWidth,
    width: '100%',
  },
  background: {
    backgroundImage: ``,
    backgroundSize: 'cover',
  },
});

export default styles;
