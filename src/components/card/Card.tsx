import styled from "styled-components";
import { View, Image } from "react-native";
import React from "react";
import TranslatedText, {
  ITranslatedText
} from "../translated-text/TranslatedText";
import Button from "../button/Button";
import { BUTTON_TYPES } from "../../common/constants";

const CardContainer = styled(View)`
  padding: 14px 14px 10px;
  flex-direction: row;
`;

const CardDetail = styled(View)`
  margin-left: 15px;
`;

const CardName = styled(TranslatedText)`
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.theme.black};
  font-weight: 700;
  margin-bottom: 10px;
`;

const CardDate = styled<
  {
    disabled?: boolean;
  } & ITranslatedText
>(({ disabled, ...rest }) => <TranslatedText {...rest} />)`
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.darkGray};

  position: absolute;
  right: 12px;
  top: ${props => props.disabled ? 'undefined' : '14px'};
  bottom: ${props => props.disabled ? '15px' : 'undefined'};
`;

const CardButtonWrapper = styled(View)`
  flex-direction: row;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
`;

interface ICard {
  children: any;
  profileName: string;
  date?: string;
  disabled?: boolean;
}

const Card = (props: ICard) => {
  const { profileName, children, date, disabled } = props;

  return (
    <CardContainer>
      <View>
        <Image source={require("../../assets/images/profile2.png")} />
      </View>
      <CardDetail>
        <CardName text={profileName} />
        {children}
        <CardButtonWrapper>
          <StyledButton
            width="90"
            disabled={disabled}
            title="Take Action"
            buttonType={BUTTON_TYPES.PRIMARY}
          />
          <StyledButton
            width="90"
            disabled={disabled}
            title="Dismiss"
            buttonType={BUTTON_TYPES.OUTLINE}
          />
        </CardButtonWrapper>
      </CardDetail>
      <CardDate disabled={disabled} text={date} />
    </CardContainer>
  );
};

export default Card;
