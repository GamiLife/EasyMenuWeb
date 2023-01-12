import styled from '@emotion/styled'; 
import { Container } from '@gamiui/standard'; 

import { lightTheme } from '../../../../styles/design-system/theme'; 
 
export const EasyLoader = styled(Container)` 
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100vw; 
  height: 100vh; 
 
  background-color: #ffffff9c; 
 
  z-index: 2; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
 
  &.hide{ 
    transition: all 3s; 
    opacity: 0; 
    z-index: -1; 
  } 
`; 
 
export const ContentLoader = styled(Container)` 
  align-items: center; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
 
  color: ${lightTheme.primary.jordyBlue}; 
`;