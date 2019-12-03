import React, { Component, ComponentType } from "react";
import {
  TabView as NativeTabView,
  NavigationState,
  TabBar,
  PagerPan
} from "react-native-tab-view";
import { ViewStyle, View, ViewProps, ScrollView } from "react-native";
import styled from "styled-components";
import TranslatedText, {
  ITranslatedText
} from "../translated-text/TranslatedText";

const tabBarStyle: ViewStyle = {
  height: 44,
  backgroundColor: "#ffffff",
  borderBottomColor: "#f0f8ff",
  borderBottomWidth: 1,
  elevation: 0
};

const indicatorStyle: ViewStyle = {
  height: 3,
  marginBottom: -1,
  backgroundColor: "#4A4A4A",

  shadowColor: "#4A4A4A",
  shadowOffset: {
    width: 5,
    height: 5
  },
  shadowOpacity: 0.25,
  shadowRadius: 15
};

const tabStyle: ViewStyle = {
  height: 44,
  backgroundColor: "transparent"
};

const TabLabel = styled<{ active: boolean } & ITranslatedText>(
  ({ active, ...rest }) => <TranslatedText {...rest} />
)`
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.active ? "#4A4A4A" : "#9B9B9B")};
`;

export interface Tab {
  title: string;
  component: ComponentType<any>;
}

export interface TabMap {
  [key: string]: Tab;
}

interface TabViewProps {
  readonly tabs: TabMap;
  onIndexChange?(index: number, key: string): void;
  initialTabIndex?: number;
  locationStateKey?: string;
  swipeEnabled?: boolean;
}

class TabView extends Component<TabViewProps, NavigationState<any>> {
  state: NavigationState<any> = {
    index: this.props.initialTabIndex || 0,
    routes: Object.keys(this.props.tabs).map((key: string) => ({
      key,
      title: this.props.tabs[key].title
    }))
  };

  componentWillReceiveProps(nextProps: any) {
    if (
      (this.props.initialTabIndex !== nextProps.initialTabIndex ||
        this.props.locationStateKey !== nextProps.locationStateKey) &&
      typeof nextProps.initialTabIndex !== "undefined"
    ) {
      this.handleIndexChange(nextProps.initialTabIndex);
    }
  }

  // @ts-ignore
  renderScene = ({route}) => {
    const { component: TabScene } = this.props.tabs[route.key];

    return (
      <ScrollView scrollEnabled={false}>
        <View>
          <TabScene />
        </View>
      </ScrollView>
    );
  };

  // TAB HEIGHTS ISSUE WILL BE HANDLED VIA ONLAYOUT IN VIEW OF TABSCENE
  // onLayout = (event: any, route: any) => {
  //   const { height } = event.nativeEvent.layout;
  // }

  handleIndexChange = (index: number) => {
    this.setState({ index }, () => {
      if (this.props.onIndexChange) {
        this.props.onIndexChange(
          this.state.index,
          this.state.routes[index].key
        );
      }
    });
  };

  renderTabBar = (props: any) => {
    return (
      <>
        <TabBar
          {...props}
          style={tabBarStyle}
          indicatorStyle={indicatorStyle}
          tabStyle={tabStyle}
          renderLabel={this.renderLabel}
        />
      </>
    );
  };

  renderLabel = (props: any) => (
    <TabLabel
      text={props.route.title}
      active={props.route.key === this.state.routes[this.state.index].key}
    />
  );

  renderPager = (props: any) => <PagerPan {...props} />;

  render() {
    return (
      <NativeTabView
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        renderPager={this.renderPager}
        swipeEnabled={this.props.swipeEnabled}
      />
    );
  }
}

export default TabView;
