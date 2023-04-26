import { Paper } from '@mui/material';

import capaImg from '../../../public/capa.svg';
import Image from 'next/image';

export default function Capa() {
  return (
    <Paper
      sx={{
        maxWidth: '650px',
        maxHeight: '650px',
        width: '100%',
        height: '100%',
        borderRadius: '5px',
      }}
    >
      <Image
        src={capaImg}
        alt="Seja nosso parceiro"
        width={650}
        height={650}
      />
    </Paper>
  );
}
