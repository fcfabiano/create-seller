import { Paper, Typography, Link, Box } from '@mui/material';
import { Form } from '../Form';
import GoogleIcon from '../GoogleIcon';

export default function CreateSellerForm() {
  return (
    <Paper
      sx={{
        maxWidth: '450px',
        maxHeight: '650px',
        width: '100%',
        height: '100%',
        padding: '38px'
      }}
    >
      <Form.FormControl
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'space-between'
        }}
      >
        <header>
          <Typography
            sx={{
              fontWeight: '900',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              textAlign: 'center'
            }}
          >
          Crie sua conta e comece a vender
          </Typography>

          <Typography
            sx={{
              fontWeight: '300',
              fontSize: '0.95rem',
              lineHeight: '1.5rem',
              marginTop: '0.375rem'
            }}
          >
          Preencha suas informações básicas para continuar
          </Typography>
        </header>

        <Box
          style={{
            height: '100%',
            margin: '0 auto',
            marginTop: '2.5rem'
          }}
        >
          <Typography
            sx={{
              fontWeight: '300',
              fontSize: '1.25rem',
              lineHeight: '1.5rem'
            }}
          >
            Cadastrar com conta google
          </Typography>

          <Form.Button
            sx={{
              textTransform: 'inherit',
              width: '100%',
              gap: '2.25rem',
              marginTop: '1.5rem',
              backgroundColor: (theme) => theme.palette.background.default,
              color: (theme) => theme.palette.text.secondary
            }}
            endIcon={<GoogleIcon />}
          >
            Conta google
          </Form.Button>
        </Box>

        <footer
          style={{
            textAlign: 'center'
          }}
        >
          <Link
            href="#"
            sx={{
              fontSize: '0.75rem',
              color: (theme) => theme.palette.text.secondary,
              textDecoration: 'none',
            }}
          >
            Esqueceu a senha ?
          </Link>
        </footer>
      </Form.FormControl>
    </Paper>
  );
}
