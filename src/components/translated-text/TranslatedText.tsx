import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

export interface ITranslatedText {
  text?: string;
}

const StyledText = styled(Text)`
  font-family: "Helvetica Neue";
`;

const TranslatedText = (props: ITranslatedText) => {
  const { text, ...otherProps } = props;

  return (
    <StyledText {...otherProps}>
      {text}
    </StyledText>
  )
}

export default TranslatedText;