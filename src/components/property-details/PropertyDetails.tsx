import React, { Component } from "react";
import {
  TouchableOpacity,
  Image,
  View,
  ViewPropTypes,
  ViewProps
} from "react-native";
import styled from "styled-components";

import TranslatedText from "../translated-text/TranslatedText";
import Link from "../link/Link";
import { bool } from "prop-types";

interface PropertDetailsProps {}

interface PropertDetailsState {
  isDetailShowed: boolean;
}

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const PropertyContainer = styled(View)`
  padding: 15px 0 0;
`;

const StyledImage = styled(Image)`
  margin-right: 10px;
`;

const DarkText = styled(TranslatedText)`
  color: ${props => props.theme.black};
  font-size: 16px;
  line-height: 19px;
`;

const PropertyHeader = styled(View)`
  padding: 0 14px 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-color: ${props => props.theme.darkGray2};
  border-bottom-width: 1px;
`;

const PropertyContent = styled(View)`
  padding: 0 14px;

  border-bottom-color: ${props => props.theme.darkGray2};
  border-bottom-width: 1px;
`;

const StyledRow = styled<{ isDescription?: boolean } & ViewProps>(
  ({ isDescription, ...rest }) => <Row {...rest} />
)`
  padding: 12px 0 8px;
  height: ${props => (props.isDescription ? "100px" : "auto")};

  border-bottom-color: ${props => props.theme.lightGray};
  border-bottom-width: 1px;

  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledText = styled(TranslatedText)`
  color: ${props => props.theme.darkGray3};
  font-size: 14px;
  line-height: 16px;
`;

const StyledRow2 = styled(Row)`
  padding: 15px 0 15px;
`;

const ImageRow = styled(Row)`
  justify-content: space-around;
  padding: 15px 0;
`;

const ImageView = styled(View)`
  width: 105px;
  align-items: center;
  text-align: center;
`;

const ImageText = styled(TranslatedText)`
  text-align: center;
  font-size: 17px;
  line-height: 21px;
`;

const Br = styled(View)`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.lightGray};
`;

class PropertDetails extends Component<
  PropertDetailsProps,
  PropertDetailsState
> {
  state= {
    isDetailShowed: false,
  }

  handleClick = () => {
    this.setState((prevState:PropertDetailsState) => ({
      isDetailShowed: !prevState.isDetailShowed
    }));
  }

  render() {
    return (
      <PropertyContainer>
        <PropertyHeader>
          <Row>
            <StyledImage source={require("../../assets/images/home.png")} />
            <DarkText text="Property of Jeremy Walsh" />
          </Row>
          <DarkText text="€165.000" />
        </PropertyHeader>
        <PropertyContent>
          <StyledRow>
            <StyledText text="{Status} | For {Selling Type} | {Property Type}" />
          </StyledRow>
          <StyledRow>
            <StyledText text="{Room} | {SurfaceArea} | {Bahtroom} | {SelectedAnqituity}" />
          </StyledRow>
          {this.state.isDetailShowed && (
            <>
              <StyledRow2>
                <Link fontSize="14" title="Edit Property Details" />
              </StyledRow2>
              <ImageRow>
                <ImageView>
                  <ImageText text="{X}" />
                  <ImageText text="Parking Lot" />
                </ImageView>
                <ImageView>
                  <ImageText text="{X}" />
                  <ImageText text="WC Number" />
                </ImageView>
              </ImageRow>
              <Br />
              <ImageRow>
                <ImageView>
                  <ImageText text="{X}" />
                  <ImageText text="Property Floor" />
                </ImageView>
                <ImageView>
                  <ImageText text="{X}" />
                  <ImageText text="Total Building Floor" />
                </ImageView>
              </ImageRow>
              <Br />
              <StyledRow>
                <StyledText text="Heating: {Heating Option}" />
              </StyledRow>
              <StyledRow>
                <StyledText text="In Sıte: Yes | No" />
              </StyledRow>
              <StyledRow>
                <StyledText text="Furnished: Yes | No" />
              </StyledRow>
              <StyledRow>
                <StyledText text="Loan Status: Yes | No" />
              </StyledRow>
              <StyledRow>
                <StyledText text="Min Carpet Area: {MinCarpetArea}" />
              </StyledRow>
              <StyledRow>
                <StyledText text="View Side: {Selection1}, {Selection2}..." />
              </StyledRow>
              <StyledRow isDescription>
                <StyledText text="Description" />
              </StyledRow>
              <StyledRow>
                <StyledText text="Indoor Features: [Selected Feature Name]" />
              </StyledRow>
              <StyledRow>
                <StyledText text="Outdoor Features: [Selected Feature Name]" />
              </StyledRow>
            </>
          )}
          <StyledRow2>
            <Link onClick={this.handleClick} fontSize="14" title={`${this.state.isDetailShowed ? "Show Less Details" : "Show More Details"}`} />
          </StyledRow2>
        </PropertyContent>
      </PropertyContainer>
    );
  }
}

export default PropertDetails;
