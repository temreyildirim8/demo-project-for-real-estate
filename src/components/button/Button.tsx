import React from "react";
import {
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import TranslatedText, { ITranslatedText } from "../translated-text/TranslatedText";
import styled from "styled-components";
import { BUTTON_TYPES } from "../../common/constants";


export interface ButtonProps {
  title: string;
  buttonType?: string;
  textColor?: string;
  disabled?: boolean;
  width?: any; // It will be handled
}

const StyledButton = styled<
  { buttonType?: string; width?: number } & TouchableOpacityProps
>(({ buttonType, ...rest }) => <TouchableOpacity {...rest} />)`
  width: ${props => props.width ? `${props.width}px` : '135px'};
  background-color: ${props => props.theme.primaryColor};
  height: 27px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  ${(props) => {
    const buttonStyle = {
      'background-color': '',
      'border': '',
      'padding': '',
      'borderColor': ''
    };

    switch (props.buttonType) {
      case BUTTON_TYPES.OUTLINE:
        buttonStyle['background-color'] = 'transparent';
        buttonStyle.border = `1px solid ${props.disabled ? props.theme.darkGray : props.theme.primaryColor}`;
        break;
      default:
      case BUTTON_TYPES.PRIMARY:
        buttonStyle['background-color'] = props.disabled ? props.theme.darkGray : props.theme.primary;
        break;
    }

    return buttonStyle;
  }};
`;

const StyledText = styled<
  {
    buttonType?: string;
    textColor?: string;
    disabled?: boolean;
  } & ITranslatedText
>(({ buttonType, textColor, ...rest }) => (
  <TranslatedText {...rest} />
))`
color: ${(props) => {
  let textColor;

  switch (props.buttonType) {
    case BUTTON_TYPES.OUTLINE:
      textColor = props.disabled ? props.theme.darkGray : props.theme.primaryColor;
      break;
    default:
    case BUTTON_TYPES.PRIMARY:
      textColor = props.theme.white;
      break;
  }

  if (props.textColor) {
    textColor = props.textColor;
  }

  return textColor;
}};

`;


const Button = (props: ButtonProps) => {
  const {title, buttonType, textColor, disabled} = props;

  return(
    <StyledButton {...props}>
      <StyledText disabled={disabled} textColor={textColor} buttonType={buttonType} text={title}/>
    </StyledButton>
  )
}

export default Button;