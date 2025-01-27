import { Box, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  sx?: SxProps<Theme>;
};

const Section = ({ children, sx = {} }: Props) => {
  return <Box sx={{ padding: '75px 0', ...sx }}>{children}</Box>;
};

export default Section;
