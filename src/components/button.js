import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  fontWeight:'bolder',
  padding: '6px 50px',
  border: '2px solid',
  lineHeight: 1.5,
  backgroundColor: '#7FE796',
  borderColor: '#757575',
  color:'black',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#7FE796',
    borderColor: '#757575',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#7FE796',
    borderColor: '#757575',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText('#7FE796'),
//   backgroundColor: '#7FE796',
//   border: '1px solid',
//   padding: '6px 50px',
//   color:'black',
//   '&:hover': {
//     backgroundColor: '#7FE796',
//   },
// }));
export default function SaveButton() {
  return (
    <Stack spacing={2} direction='row'>
      {/* <ColorButton variant="contained">Save</ColorButton> */}
      <BootstrapButton variant="contained">
        Save
      </BootstrapButton>
    </Stack>
  );
}