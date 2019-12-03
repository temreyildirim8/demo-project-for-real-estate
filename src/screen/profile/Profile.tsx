import React, { Component } from "react";
import { View, Image, TouchableOpacity, ViewProps } from "react-native";
import styled from "styled-components";

import Screen from "../../layout/Screen";
import Link from "../../components/link/Link";
import TranslatedText from "../../components/translated-text/TranslatedText";
import ProfileInfo from "../../components/profile-info/ProfileInfo";
import PropertDetails from "../../components/property-details/PropertyDetails";
import Tag from "../../components/tag/Tag";
import Agenda from "./Agenda";
import TabView, { TabMap } from "../../components/tab-view/TabView";
import Activities from "./Activities";

const DOT_SİZE = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small"
};

const Contact = styled(View)`
  flex-direction: row;
  padding: 4px 0;

  border-bottom-color: ${props => props.theme.lightGray};
  border-bottom-width: 1px;
`;

const ContactLinkWrapper = styled(View)`
  height: 40px;
  border-right-width: 1px;
  border-right-color: ${props => props.theme.lightGray};

  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContractInfoWrapper = styled(View)`
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.lightGray};

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContractInfoText = styled(TranslatedText)`
  color: ${props => props.theme.darkGray};
  font-size: 14px;
`;

const ProfileInfoContainer = styled(View)`
  padding: 14px 14px 0;
`;

const TagsContainer = styled(View)`
  padding: 15px 14px;

  flex-direction: row;
`;

const SliderContainer = styled(View)``;

const SliderTag = styled(View)`
  width: 100px;
  height: 22px;
  background-color: ${props => props.theme.orange};
  border-radius: 5px;

  position: absolute;
  top: 10px;
  left: 10px;

  justify-content: center;
  align-items: center;
`;

const SliderTagText = styled(TranslatedText)`
  color: ${props => props.theme.white};
  font-size: 12px;
`;

const SliderRightArrowWrapper = styled(TouchableOpacity)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: rgba(196, 196, 196, 0.2);
  margin-top: -35px;
  margin-right: -35px;

  position: absolute;
  top: 50%;
  right: 0;

  justify-content: center;
  padding-left: 15px;
`;

const SliderLefttArrowWrapper = styled(TouchableOpacity)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: rgba(196, 196, 196, 0.2);
  margin-top: -35px;
  margin-left: -35px;

  position: absolute;
  top: 50%;
  left: 0;

  justify-content: center;
  align-items: flex-end;
  padding-right: 15px;
`;

const SliderDots = styled(View)`
  position: absolute;
  bottom: 10px;
  width: 100%;

  min-height: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Dot = styled<{ size?: string; isActive?: boolean } & ViewProps>(
  ({ isActive, size, ...rest }) => <View {...rest} />
)`
  background-color: ${props =>
    props.isActive ? props.theme.primaryColor : props.theme.gray};
  margin: 0 2px;

  ${props => {
    const dotStyle = {
      height: "",
      width: "",
      borderRadius: ""
    };

    switch (props.size) {
      case DOT_SİZE.MEDIUM:
        dotStyle.height = "5px";
        dotStyle.width = "5px";
        dotStyle.borderRadius = "2.5px";
        break;
      case DOT_SİZE.SMALL:
        dotStyle.height = "3px";
        dotStyle.width = "3px";
        dotStyle.borderRadius = "2px";
        break;

      default:
      case DOT_SİZE.BIG:
        dotStyle.height = "8px";
        dotStyle.width = "8px";
        dotStyle.borderRadius = "4px";
        break;
    }

    return dotStyle;
  }};
`;

const StyledImage = styled(Image)`
  margin-right: 10px;
`;

const SliderIconWrapper = styled(View)`
  height: 32px;
  width: 35px;
  border-radius: 7px;
  background-color: ${props => props.theme.white};

  position: absolute;
  left: 10px;
  bottom: 12px;

  justify-content: center;
  align-items: center;
`;

class Profile extends Component {
  tabs: TabMap = {
    Agenda: {
      title: "Agenda",
      component: () => <Agenda />
    },
    AA: {
      title: "Activities",
      component: () => <Activities />
    },
    Files: {
      title: "Files",
      component: () => <Activities />
    }
  };
  render() {
    return (
      <Screen>
        <Contact>
          <ContactLinkWrapper>
            <Link title="Call">
              <StyledImage source={require("../../assets/images/call.png")} />
            </Link>
          </ContactLinkWrapper>
          <ContactLinkWrapper>
            <Link title="Message">
              <StyledImage source={require("../../assets/images/messages.png")} />
            </Link>
          </ContactLinkWrapper>
          <ContactLinkWrapper>
            <Link title="E-mail">
              <StyledImage source={require("../../assets/images/mail.png")} />
            </Link>
          </ContactLinkWrapper>
        </Contact>
        <ContractInfoWrapper>
          <ContractInfoText text="2 months 7 days to end contract" />
        </ContractInfoWrapper>
        <ProfileInfoContainer>
          <ProfileInfo />
        </ProfileInfoContainer>
        <PropertDetails />
        <TagsContainer>
          <Tag title="sample tag 2" />
          <Tag title="sample tag 3" />
          <Tag title="oldhome" />
          <Link fontSize="13.5" title="...edit tags" />
        </TagsContainer>
        <SliderContainer>
          <Image source={require("../../assets/images/house.png")} />
          <SliderTag>
            <SliderTagText text="Fair Priced" />
          </SliderTag>
          <SliderRightArrowWrapper>
            <Image source={require("../../assets/images/slider-next.png")} />
          </SliderRightArrowWrapper>
          <SliderLefttArrowWrapper>
            <Image source={require("../../assets/images/slider-back.png")} />
          </SliderLefttArrowWrapper>
          <SliderDots>
            <Dot isActive size={DOT_SİZE.BIG} />
            <Dot size={DOT_SİZE.BIG} />
            <Dot size={DOT_SİZE.BIG} />
            <Dot size={DOT_SİZE.MEDIUM} />
            <Dot size={DOT_SİZE.SMALL} />
          </SliderDots>
          <SliderIconWrapper>
            <Image source={require("../../assets/images/location.png")} />
          </SliderIconWrapper>
        </SliderContainer>
        <TabView tabs={this.tabs} />
      </Screen>
    );
  }
}

export default Profile;
