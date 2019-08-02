
import React from 'react';
import { createStackNavigator, createBottomTabNavigator, BottomTabNavigatorConfig, NavigationContainer } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import TabBarIcon from '../shared/TabBarIcon';
import Home from '../screen/Home';
import HomeCalendar from '../screen/HomeCalendar';
import HomeFavorite from '../screen/HomeFavorite';
import HomeSetting from '../screen/HomeSetting';

/**
 * HOME STACK NAVIGATOR
 */
const HomeStack = createStackNavigator({
  Home: { screen: Home }
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" type="MaterialIcons" />,
};


/**
 * CALENDAR STACK NAVIGATOR
 */
const HomeCalendarStack = createStackNavigator({
  Home: { screen: HomeCalendar }
});

HomeCalendarStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="calendar" type="AntDesign" />,
};


/**
 * FAVORITE STACK NAVIGATOR
 */
const HomeFavoriteStack = createStackNavigator({
  Home: { screen: HomeFavorite }
});

HomeFavoriteStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="favorite-border" type="MaterialIcons" />,
};


/**
 * SETTING STACK NAVIGATOR
 */
const HomeSettingStack = createStackNavigator({
  Home: { screen: HomeSetting }
});

HomeSettingStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="setting" type="AntDesign" />,
};


/**
 * Setting Route Configuration
 */
const routeConfig: NavigationRouteConfigMap = {
  HomeStack,
  HomeCalendarStack,
  HomeFavoriteStack,
  HomeSettingStack,
};

const bottomNavigatorConfig: BottomTabNavigatorConfig = {
  initialRouteName: 'HomeStack',
  tabBarOptions: {
    showLabel: false,
  },
  tabBarComponent: props =>
    <BottomTabBar
      {...props}
      style={{ height: 70 }}
    />,
}


/**
 * Create Bottom Tab Navigator
 */
const RootTabNavigator: NavigationContainer = createBottomTabNavigator(routeConfig, bottomNavigatorConfig);

interface Props {
  navigation?: any;
  theme?: object;
}

/**
 * Set Theme and Navigation to NavigationContainer
 * 
 */
class RootNavigator extends React.Component<Props> {
  private static router = RootTabNavigator.router;

  public render() {
    return (
      <RootTabNavigator
        navigation={this.props.navigation}
        screenProps={{ theme: this.props.theme }}
      />
    );
  }
}

export default RootNavigator;