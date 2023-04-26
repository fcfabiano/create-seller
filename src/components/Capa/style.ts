import { Box, Paper } from '@mui/material';

import styled from '@emotion/styled';
import capaImg from '../../../public/capa.png';

const Wrapper = styled(Paper)`
  max-width: 650px;
  max-height: 650px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-image: url(${capaImg.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const Header = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-inline: auto;
  gap: 4.75rem;

  .seja-nosso-parceiro {
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.5rem;
    color: #FFFFFF;
  }
`;

const BoxContainer = styled(Box)`
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;

export const C = {
  Wrapper,
  Header,
  BoxContainer
};
