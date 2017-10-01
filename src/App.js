import React, { Component } from 'react';
import styled from 'styled-components';
import { UltiMatt } from './UltiMatt';

const FullScreenCenter = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4a9543;
`;

class App extends Component {
  render() {
    return (
      <FullScreenCenter>
        <UltiMatt fillColor={'#FFFFFF'} height="80vh" width="20.95vh" />
      </FullScreenCenter>
    );
  }
}

// /* Fill 10: */
// background: #5E5E5F;
// box-shadow: 0 1px 2px 0 rgba(0,0,0,0.40);

export default App;
