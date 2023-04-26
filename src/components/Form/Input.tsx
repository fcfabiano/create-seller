import { TextField, TextFieldProps } from '@mui/material';

export default function CreateSellerForm(props: TextFieldProps) {
  return <TextField
    variant="outlined"
    {...props}
  />;
}
