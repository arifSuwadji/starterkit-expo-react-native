import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import { HomeScreen, InboxScreen, ProfileScreen, WorkingScreen } from '../screens';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator() {
    return (
            <Tab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let icon;
                        size = 30;
                            
                        if (route.name === 'Home') {
                            icon = "MaterialCommunityIcons";
                            iconName = focused
                            ? 'home-variant'
                            : 'home-variant-outline';
                        } else if (route.name === 'Inbox') {
                            icon = "MaterialCommunityIcons";
                            iconName = focused ? 'file-document-box-multiple' : 'file-document-box-multiple-outline';
                        } else if (route.name === 'Working'){
                            icon = "Ionicons";
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        } else if (route.name === 'Profile'){
                            icon = "MaterialIcons";
                            iconName = focused ? 'person' : 'person-outline';
                        }
            
                        // You can return any component that you like here!
                        return <TabBarIcon typeIcon={icon} focused={focused} name={iconName} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor: Colors.menuActive,
                    inactiveTintColor: Colors.menuDefault,
                    labelStyle: {
                        fontSize: 11,
                        fontWeight: 'bold',
                        height:15,
                        marginBottom:5,
                        flexWrap: "wrap",
                        flexDirection: "column"
                    },
                    activeBackgroundColor: Colors.headerColor,
                    inactiveBackgroundColor: Colors.bodyColor,
                    style:{
                        borderTopWidth:3,
                        borderTopColor: Colors.headerColor,
                        height:65,
                    },
                }}
                animationEnabled={true}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'HOME' }} />
                <Tab.Screen name="Inbox" component={InboxScreen} options={{ title: 'INBOX' }} />
                <Tab.Screen name="Working" component={WorkingScreen} options={{ title: 'WORKING ORDER' }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'PROFILE' }} />
            </Tab.Navigator>
    );
}