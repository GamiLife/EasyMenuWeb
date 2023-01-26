import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';
import { PageTitle } from '../../../styles/design-system/commons';

export const ContentWrapper = styled(Container)`
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  padding-inline: 100px;
`;

export const TitleContainer = styled(Container)`
  padding-bottom: 35px;
  padding-top: 50px;
  text-align: center;
`;

export const LocationsTitle = styled(PageTitle)``;

export const StoresContainer = styled(Container)`
  flex: 1;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  width: 100%;
`;
