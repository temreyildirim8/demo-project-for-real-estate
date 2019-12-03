import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';

import TranslatedText, { ITranslatedText } from "../translated-text/TranslatedText";

interface LinkProps {
  title: string;
  fontSize?: string;
  onClick?: any;
  children?: any;
}

const StyledButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

const StyledText = styled<
  {
    buttonType?: string;
    fontSize?: string;
  } & ITranslatedText
>(({ buttonType, fontSize, ...rest }) => (
  <TranslatedText {...rest} />
))`
  color: ${props => props.theme.primaryColor};
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '20px'};
`

const Link = (props: LinkProps) => {
  const {title, fontSize, onClick, children} = props;

  return (
    <StyledButton onPress={onClick}>
      {children}
      <StyledText fontSize={fontSize} text={title} />
    </StyledButton>
  );
};

export default Link;