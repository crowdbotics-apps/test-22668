import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList174498Navigator from '../features/NotificationList174498/navigator';
import Settings174497Navigator from '../features/Settings174497/navigator';
import Settings174489Navigator from '../features/Settings174489/navigator';
import UserProfile174487Navigator from '../features/UserProfile174487/navigator';
import ArticleList174449Navigator from '../features/ArticleList174449/navigator';
import ArticleList174448Navigator from '../features/ArticleList174448/navigator';
import ArticleList174447Navigator from '../features/ArticleList174447/navigator';
import Maps174427Navigator from '../features/Maps174427/navigator';
import Additem174426Navigator from '../features/Additem174426/navigator';
import Maps174422Navigator from '../features/Maps174422/navigator';
import UserProfile174418Navigator from '../features/UserProfile174418/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList174498: { screen: NotificationList174498Navigator },
Settings174497: { screen: Settings174497Navigator },
Settings174489: { screen: Settings174489Navigator },
UserProfile174487: { screen: UserProfile174487Navigator },
ArticleList174449: { screen: ArticleList174449Navigator },
ArticleList174448: { screen: ArticleList174448Navigator },
ArticleList174447: { screen: ArticleList174447Navigator },
Maps174427: { screen: Maps174427Navigator },
Additem174426: { screen: Additem174426Navigator },
Maps174422: { screen: Maps174422Navigator },
UserProfile174418: { screen: UserProfile174418Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
