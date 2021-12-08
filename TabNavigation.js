import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screen/HomeScreen";
import SearchScreen from "./screen/SearchScreen";
import UpdateScreen from "./screen/UpdateScreen";
import ProfileScreen from "./screen/ProfileScreen";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Tab = createBottomTabNavigator();

export default function Navigate() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("./assets/icons/icons8_home_125px_1.png")}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen
        name='Update'
        component={UpdateScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
}
