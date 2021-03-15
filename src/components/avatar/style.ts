const styles = ({ typography }) => ({
  container: {
    borderRadius: '50%',
    overflow: 'hidden',
    border: `${typography.pxToRem(2)} solid white`,
    boxShadow: `0 0 0 ${typography.pxToRem(2)} rgba(0,0,0,.1)`,
    height: typography.pxToRem(36),
    width: typography.pxToRem(36),
  },
  avatar: {
    width: '100%',
  },
});

export default styles;
