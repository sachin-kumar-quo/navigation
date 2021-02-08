import React from 'react';
import Feed from './src/feed';
import Detail from './src/details'
import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';
import Tab1 from './src/screens/tabs/tab1';
import Tab2 from './src/screens/tabs/tab2';
import Tab3 from './src/screens/tabs/tab3';


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();



const App = () =>{

  createHomeStack = () =>{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} options={{title:"My Feed",headerStyle:{backgroundColor:"pink"},headerTintColor:"blue"}}/>
        <Stack.Screen name="Details" component={Detail}/>
        <Stack.Screen name="Bottom Tabs" children={createBottomTabs}/>
        <Stack.Screen name="Top Tabs" component={createTopTabs}/>

      </Stack.Navigator>
    )
  }

  createTopTabs = () =>{
    
    return(
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen name="Tab1" component={Tab1} options={{title:'Hello Tab1'}}/>
        <MaterialTopTabs.Screen name="Tab2" component={Tab2} options={{title:'Hello Tab2'}}/>
        <MaterialTopTabs.Screen name="Tab3" component={Tab3} options={{title:'Hello Tab3'}}/>
      </MaterialTopTabs.Navigator>
    )
  }

  createBottomTabs = () =>{

    return(
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Tab1" component={Tab1} />
        <MaterialBottomTabs.Screen name="Tab2" component={Tab2} />
        <MaterialBottomTabs.Screen name="Tab3" component={Tab3} />
      </MaterialBottomTabs.Navigator>
    )
  }


  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="home" children={createHomeStack}/>
        <Drawer.Screen name="contacts" component={Screen1}/>
        <Drawer.Screen name="favorites" component={Screen2}/>
        <Drawer.Screen name="settings" component={Screen3}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;