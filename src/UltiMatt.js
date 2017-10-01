import React from 'react';
import styled from 'styled-components';

const DEFAULT_WIDTH = '27.11px'
const DEFAULT_HEIGHT = '103.48px';
const DEFAULT_COLOR = '#4A9543';

// const DEFAULT_GRAY = '#5E5E5F';
// const DEFAULT_BRAND_COLOR = '#509E2F';
// const WIDTH_HEIGHT_RATIO = 26.198;

const Container = styled.div`
  width: ${props => props.width || DEFAULT_WIDTH };
  height: ${props => props.height || DEFAULT_HEIGHT };
`;

const Head = styled.div`
  display: block;
  border-radius: 50%;
  height: 17.984%;
  width: 68.64%;
  margin: 0 auto;
  background-color: ${props => props.fillColor || DEFAULT_COLOR};  
`;

const Neck = styled.div`
  height: 4.678%;
  width: 100%;
`;

const UpperTorso = styled.div`
  width: 100%;
  height: 41.552%;
  border-top-right-radius: 20% 15%;
  border-top-left-radius: 20% 15%;
  background-color: ${props => props.fillColor || DEFAULT_COLOR};
`;

const LowerTorso = styled.div`
  width: 51.641%;
  height: 33.8221%;
  margin: 0 auto;
  background-color: ${props => props.fillColor || DEFAULT_COLOR};  
`;

const UltiMatt = ({ width, height, ...props }) => (
  <Container width={width} height={height}>
    <Head {...props} />
    <Neck />
    <UpperTorso {...props} />
    <LowerTorso {...props} />
  </Container>
);

export {
  UltiMatt,
}



