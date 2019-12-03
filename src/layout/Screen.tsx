import React, { ReactChildren } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

import Header from '../components/header/Header';

interface IScreen {
  children?: any;
}

const Screen = (props: IScreen) => {
  const {children} = props;
  return (
    <>
      <Header />
      <ScrollView >
        {children}
      </ScrollView>
    </>
  )
}

export default Screen;