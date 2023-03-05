import styled from '@emotion/styled';
import { Container, Icon, RichText } from '@gamiui/standard';
import { IGenericEvents } from '@gamiui/standard/lib/types/core/domain/interfaces/IGeneralProps';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';
import { IContent } from '@gamiui/standard/lib/types/designSystem/molecules/Card/Content';
import { ITitle } from '@gamiui/standard/lib/types/designSystem/atoms/Title/Title';
import { ICard } from '@gamiui/standard/lib/types/designSystem/molecules/Card/Card';

import { lightTheme, tokens } from '../../../../styles/design-system';
import { Block } from '../../layouts';

export const StoreItem = styled(Block<ICard>)``;

export const CardContent = styled(Block<IContent & IGenericEvents>)``;

export const StoreItemTitle = styled(Block<ITitle>)`
  font-size: 18px;
  text-transform: uppercase;
`;

export const PhoneAddressContainer = styled(Block<IContainer>)`
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

export const PhoneHeader = styled(Block<ITitle>)`
  color: ${lightTheme.primary.black};
`;

export const Phone = styled(RichText)``;
