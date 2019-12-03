import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components";
import TranslatedText from "../../components/translated-text/TranslatedText";
import Card from "../../components/card/Card";
import Link from "../../components/link/Link";

const AgendaContainer = styled(View)`

`;

const Title = styled(TranslatedText)`
  color: ${props => props.theme.darkGray3};
  padding: 20px 14px 8px;

  border-bottom-color: ${props => props.theme.lightGray2};
  border-bottom-width: 1px;
`;

const Br = styled(View)`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.lightGray2};
`;

const ProfileView = styled(View)`
  margin-top: 20px;
`;

const ProfileText = styled(TranslatedText)`
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.black};
`;

const LightText = styled(TranslatedText)`
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.darkGray};
`;

const Agenda = () => {

  return (
    <AgendaContainer>
      <Title text="Client Requests (1)"/>
      <Card profileName="Can Erenberk" date="Yesterday 12:24 pm">
        <TranslatedText text="Can requested a showing."/>
        <ProfileView>
          <ProfileText text="Can Erenberk"/>
          <LightText text="Up to €250.000  |  Essex, Kesington or Oxfordshire"/>
        </ProfileView>
      </Card>
      <Title text="Suggestions (2)"/>
      <Card profileName="Can Erenberk" date="Yesterday 12:24 pm">
        <TranslatedText text="There are potential new matches for this property if missing information is complete. Wou ...show more"/> 
      </Card>
      <Br />
      <Card profileName="Can Erenberk" date="Yesterday 12:24 pm">
        <TranslatedText text="Can liked this property! Would you like to propose a showing?”"/>
        <ProfileView>
          <Image source={require('../../assets/images/profile2.png')}/>
          <ProfileText text="Can Erenberk"/>
          <LightText text="Up to €250.000  |  Essex, Kesington or Oxfordshire"/>
        </ProfileView>
      </Card>
      <Title text="Snoozed (1)"/>
      <Card profileName="Can Erenberk" date="Snoozed : 12/12/2019">
        <TranslatedText text="Jerremy Walsh ’s birthday is tomorrow."/>
      </Card>
      <Title text="Past (2)"/>
      <Card disabled date="Snoozed : 12/12/2019" profileName="Abc">
        <TranslatedText text="Can liked this property! Would you like to propose a showing?”"/>
        <ProfileView>
          <Image source={require('../../assets/images/profile2.png')}/>
          <ProfileText text="Can Erenberk"/>
          <LightText text="Up to €250.000  |  Essex, Kesington or Oxfordshire"/>
        </ProfileView>
      </Card>
      <Br/>
      <Card disabled date="Snoozed : 12/12/2019" profileName="Abc">
        <TranslatedText text="Can liked this property! Would you like to propose a showing?”"/>
        <ProfileView>
          <Image source={require('../../assets/images/profile2.png')}/>
          <ProfileText text="Can Erenberk"/>
          <LightText text="Up to €250.000  |  Essex, Kesington or Oxfordshire"/>
        </ProfileView>
      </Card>
    </AgendaContainer>
  )
}

export default Agenda;