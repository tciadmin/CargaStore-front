import { Box } from '@mui/material';
import React from 'react';

const ResponsiveImageBox = ({ w = '100%', h = '100%', url }) => {
  return (
    <Box
      width={w}
      height={h}
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        backgroundColor: 'black',
      }}
    >
      <img
        src={url}
        alt={'indefinido'}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </Box>
  );
};

export default ResponsiveImageBox;
