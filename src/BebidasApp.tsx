import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, FavoriteScreen} from './presentation/screens';
import {Icon} from './presentation/components/ui';
import {colors} from './config/theme';

const Tab = createBottomTabNavigator();

export const BebidasApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            padding: 5,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarActiveTintColor: colors.brown,
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarIcon: ({focused}) => (
              <Icon
                name="home-outline"
                color={focused ? colors.brown : colors.black}
                size={28}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: colors.brown,
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarIcon: ({focused}) => (
              <Icon
                name="heart-outline"
                color={focused ? colors.brown : colors.black}
              />
            ),
          }}
          name="Favorites"
          component={FavoriteScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
