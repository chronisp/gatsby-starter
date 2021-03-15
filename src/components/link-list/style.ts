const styles = ({ palette, typography }) => ({
  container: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    position: 'relative',
    flexWrap: 'wrap',
  },
  linkText: {
    paddingLeft: typography.pxToRem(8),
  },
  link: {
    border: 'none',
    display: 'flex',
    padding: `${typography.pxToRem(8)} ${typography.pxToRem(8)}`,
    textDecoration: 'none',
    color: palette.text.secondary,
  },
});

export default styles;
