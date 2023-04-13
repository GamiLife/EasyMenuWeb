import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';
import { Block } from '../../layouts';

export const ComboArea = styled(Block<IContainer>)`
  background-color: ${lightTheme.primary.white};
  border: 1px solid ${lightTheme.neutral[400]};
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
  margin: 0 auto 15px;
`;

export const ComboAreaTitle = styled(Title)`
  font-size: 19px;
  color: ${lightTheme.primary.black};
  /* min-width: 70px; */
`;

export const ProductSetWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

export const ElementWrapper = styled(Container)`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SelectionCheck = styled(Container)`
  align-items: center;
  display: flex;
  margin-bottom: 9px;
`;

export const Check = styled(Container)`
  cursor: pointer;
  position: relative;
  width: 51px;
  & input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 6px;
    left: 19px;
    width: 9px;
    height: 19px;
    border: solid ${lightTheme.primary.first};
    border-width: 0 2px 2px 0;
    transform: rotate(40deg);
  }
`;

export const CheckInput = styled.input`
  display: none;
  background-color: ${lightTheme.primary.white};
`;

export const CheckboxLabel = styled.label`
  &:before {
    content: '';
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    margin-right: 5px;
    height: 36px;
    width: 46px;
    border: 1px solid #e8e8e8;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
  }
`;

export const ProductNameWithoutPrice = styled.label`
  color: #2e2e2e;
`;

export const ErrorText = styled.span`
  color: ${lightTheme.semantic.danger};
  display: block;
  font-size: 93%;
  font-weight: 100;
  margin-top: -2px;
`;

export const ProductName = styled.label`
  color: #2e2e2e;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.strong`
  color: gray;
`;

export const OperatorsImageWrapper = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ProductImage = styled(NextImage)`
  flex-basis: 50px;
`;
