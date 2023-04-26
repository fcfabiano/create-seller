import { Container } from '@mui/material';

import Capa from '@/components/Capa';
import CreateSellerForm from '@/components/CreateSellerForm';

export default function CreateSeller() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '10px'
      }}
    >
      <Capa />

      <CreateSellerForm />
    </Container>
  );
}
