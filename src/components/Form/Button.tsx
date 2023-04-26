import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material';

export default function CustomButton(props: ButtonProps) {
  return <Button
    variant="contained"
    {...props}
  />;
}
