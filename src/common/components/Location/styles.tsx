import styled from '@emotion/styled';
import { Container, Icon, RichText, Title } from '@gamiui/standard';
import { ICard } from '@gamiui/standard/lib/types/designSystem/molecules/Card/Card';

import { lightTheme, tokens } from '../../../../styles/design-system';
import { Block } from '../../layouts';

export const StoreItem = styled(Block<ICard>)``;

export const StoreItemTitle = styled(Title)`
  font-size: 18px;
  text-transform: uppercase;
`;

export const PhoneAddressContainer = styled(Container)`
  color: ${lightTheme.primary.black};
  font-size: ${tokens.font.size.base};
`;

export const PhoneContainer = styled(Container)`
  column-gap: 3px;
`;

export const PhoneIcon = styled(Icon)`
  filter: invert(15%) sepia(110%) saturate(4773%) hue-rotate(339deg)
    brightness(90%) contrast(113%);
`;

export const PhoneHeader = styled(Title)`
  color: ${lightTheme.primary.black};
`;

export const Phone = styled(RichText)``;
