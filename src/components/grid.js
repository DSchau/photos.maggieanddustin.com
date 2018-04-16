import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;

  display: grid;
  grid-template-columns: 100%;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 33% 33% 33%;
  }
`;

export function Grid({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
