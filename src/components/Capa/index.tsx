import { Box, Card, Typography } from '@mui/material';
import { C } from './style';
import Image from 'next/image';
import logoLiah from '../../../public/logo.svg';

export default function Capa() {
  return (
    <C.Wrapper>
      <C.Header>
        <Image width={140} height={55} src={logoLiah} alt="Logo liah" />

        <Typography className="seja-nosso-parceiro">Seja Nosso Parceiro</Typography>
      </C.Header>

      <C.BoxContainer>
        <Card>
          test
        </Card>

        <Card>
          test
        </Card>

        <Card>
          test
        </Card>
      </C.BoxContainer>
    </C.Wrapper>
  );
}
