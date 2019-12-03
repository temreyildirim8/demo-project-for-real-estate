import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';

import TranslatedText, { ITranslatedText } from "../translated-text/TranslatedText";

interface NotificationProps {
  title: string;
  fontSize?: string;
}

const StyledView = styled(TouchableOpacity)`
  height: 14px;
  width: 14px;
  background-color: ${props => props.theme.red};
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled<
  {
    fontSize?: string;
  } & ITranslatedText
>(({ fontSize, ...rest }) => (
  <TranslatedText {...rest} />
))`
  color: ${props => props.theme.white};
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '12px'};
`;

const Notification = (props: NotificationProps) => {
  const {title, fontSize} = props;

  return (
    <StyledView>
      <StyledText fontSize={fontSize} text={title} />
    </StyledView>
  );
};

export default Notification;