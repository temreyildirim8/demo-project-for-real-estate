import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components";
import TranslatedText from "../../components/translated-text/TranslatedText";
import Link from "../../components/link/Link";

const ActivitiesContainer = styled(View)`
  background-color: ${props => props.theme.white};
`

const ImageWrapper = styled(View)`
  padding: 60px 0 20px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 38px;

  border-bottom-color: ${props => props.theme.lightGray3};
  border-bottom-width: 1px;
`;

const StyledText = styled(TranslatedText)`
  width: 265px;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.darkGray};
`;

const StyledRow = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 10px 0;
  border-bottom-color: ${props => props.theme.lightGray3};
  border-bottom-width: 1px;
`;

const Activities = () => {

  return (
    <ActivitiesContainer>
      <ImageWrapper>
        <Image source={require('../../assets/images/activities.png')} />
      </ImageWrapper>
      <TextWrapper>
        <StyledText text="Add your clients activities here and Aidy will keep track of all. You will no longer miss a single client task or forget an activity."/>
      </TextWrapper>
      <StyledRow>
        <Link title="Add Task"/>
      </StyledRow>
      <StyledRow>
        <Link title="Add Showing"/>
      </StyledRow>
      <StyledRow>
        <Link title="Add Offer"/>
      </StyledRow>
    </ActivitiesContainer>
  )
}

export default Activities;