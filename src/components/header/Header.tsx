import React from 'react';
import { StatusBar, View, Image, TouchableOpacity, TouchableOpacityProps, ImageProps } from 'react-native';
import styled, {StyledFunction} from "styled-components";
import TranslatedText from '../translated-text/TranslatedText';

interface IStyledImage {
  isLastChild?: boolean;
}

const StatusBarContainer = styled(View)`
  background-color: ${props => props.theme.statusGray};
  height: 80px;
`;

const StatusBarWrapper = styled(View)`
  height: 22px;
`;

const Navbar = styled(View)`
  padding: 13px 14px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.lightGray};
`;

const NavbarRight = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const StyledImage = styled(Image)`
  margin: ${(props: IStyledImage) => props.isLastChild ? '0' : '0 15px'};
`

const StyledTouchableOpacity = styled(TouchableOpacity)`
  padding: 5px;
`
const Header = () => {
  return (
    <>
      <StatusBarContainer>
        <StatusBarWrapper>
          <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FAFAFA" translucent={true}/>
        </StatusBarWrapper>
        <Navbar>
          <View>
            <StyledTouchableOpacity>
              <Image source={require('../../assets/images/back.png')}></Image>
            </StyledTouchableOpacity>
          </View>
          <NavbarRight>
            <StyledTouchableOpacity>
              <StyledImage source={require('../../assets/images/upload.png')} />
            </StyledTouchableOpacity>
            <StyledTouchableOpacity>
              <StyledImage source={require('../../assets/images/plus.png')} />
            </StyledTouchableOpacity>
            <StyledTouchableOpacity>
              <StyledImage isLastChild source={require('../../assets/images/plus.png')} />
            </StyledTouchableOpacity>
          </NavbarRight>
        </Navbar>
      </StatusBarContainer>
    </>
  )
}

export default Header;