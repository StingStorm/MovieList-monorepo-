import { Box } from '@mui/material';

const Loader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '9999999',
        width: '100%',
        height: '100dvh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      }}
    >
      Loading...
    </Box>
  );
};

export default Loader;
