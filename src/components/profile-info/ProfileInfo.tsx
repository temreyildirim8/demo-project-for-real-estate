import { View, Image } from "react-native"
import React from "react"
import styled from "styled-components"
import TranslatedText from "../translated-text/TranslatedText";
import Notification from "../notification/Notification";
import Button from "../button/Button";
import { BUTTON_TYPES } from "../../common/constants";

const ProfileInfoContainer = styled(View)`
  flex-direction: row;
`;

const ProfileInfoLeft = styled(View)`
  margin-right: 24px;
`;

const ProfileInfoRight = styled(View)`
  flex-direction: row;
`;

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const BlackText = styled(TranslatedText)`
  color: ${props => props.theme.black};
  font-size: 20px;
  line-height: 24px;
`;

const GrayText = styled(TranslatedText)`
  color: ${props => props.theme.darkGray};
  font-size: 13px;
  line-height: 16px;
  margin-bottom: 13px;
`;

const StyledView = styled(View)`
  align-items: center;
`;

const RightView = styled(View)`
  margin-left: 15px;
`

const NotificationView = styled(View)`
  position: absolute;
  top: -4px;
  right: -4px;
`;

const ProfileInfo = () => {
  return (
    <>
      <ProfileInfoContainer>
        <ProfileInfoLeft>
          <Image source={require('../../assets/images/profile.png')} />
        </ProfileInfoLeft>
        <ProfileInfoRight>
          <StyledView>
            <BlackText text="25" />
            <GrayText text="Sent" />
            <Button buttonType={BUTTON_TYPES.OUTLINE} title="Add Showing"/>
          </StyledView>
          <RightView>
            <Row>
              <StyledView>
                <BlackText text="8"/>
                <GrayText text="Showing"/>
              </StyledView>
              <StyledView>
                <BlackText text="3"/>
                <GrayText text="Offer"/>
              </StyledView>
            </Row>
            <View>
              <Button title="Show Matchings" />
              <NotificationView>
                <Notification title="9" />
              </NotificationView>
            </View>
          </RightView>
        </ProfileInfoRight>
      </ProfileInfoContainer>
    </>
    
  );
}

export default ProfileInfo;