import styled from 'styled-components';
import { View, TouchableOpacity, Text } from 'react-native';
import { colors } from '../../styles';

export const Wrapper = styled(TouchableOpacity)`
  display: flex;
  background-color: ${colors.black};
  flex-direction: column;
  width: 48%;
  height: 200px;
  border: 1px;
  border-color: ${colors.black};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeaderSection = styled(View)`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const Header = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
`;

export const IconSection = styled(View)`
  flex: 8;
  align-items: center;
  justify-content: center;
`;