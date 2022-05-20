import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ManageExpense from '../screens/ManageExpense';
import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';
import {GlobalStyles} from '../constants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
function ExpenseOverview() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary200},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary200},
        tabBarActiveTintColor: {
          backgroundColor: GlobalStyles.colors.gray500,
        },
      }}>
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'RecentExpenses',
          tabBarLabel: 'recent',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'AllExpenses',
          tabBarLabel: 'AllExpenses',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ExpenseOverview"
          component={ExpenseOverview}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ManageExpense" component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
