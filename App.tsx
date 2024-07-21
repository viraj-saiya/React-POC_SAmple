import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'src/screen/Home/Home';
import HorizontalScroll from 'src/screen/HorizontalPagination/Horizontal';
import HorizontalAnimationScroll from 'src/screen/HorizontalPagination/HorizontalAnimateScroll';
import CalenderTest from 'src/screen/CalenderTest/CalenderTest';
import OTPINPUT from 'src/OTPInput/OTPINPUT';
import SQL from 'src/screen/SQL/SQL';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
// import DatePicker from 'src/screen/PickerDate';
import FCM from 'src/screen/FCM/FCM';
const Stack = createNativeStackNavigator();
// No task registered for key ReactNativeFirebaseMessagingHeadlessTask
import '@react-native-firebase/app';
import notifee, { AndroidColor, EventType, AuthorizationStatus } from '@notifee/react-native';
import { Alert } from 'react-native';
import Scrolling from 'src/screen/HorizontalPagination/Scrolling';
import SpecchtoText from 'src/screen/SpecchtoText/SpecchtoText';
import PerfomanceList from 'src/screen/Performance-List/PerfomanceList';
import PopoverComponent from 'src/screen/Popover/Popover';

// import firestore from '@react-native-firebase/firestore';

function App() {

  React.useEffect(() => {
    messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

  }, []);



  async function onDisplayNotification(
    remoteMessage: FirebaseMessagingTypes.RemoteMessage,
  ) {
    try {
      console.log("remoteMessage",remoteMessage)
      if (remoteMessage?.data?.notifee) {
        const message = JSON.parse(remoteMessage.data.notifee);
        console.log(" JSON.parse message",message)
        await notifee.displayNotification({
          title:message.title,
          body:message.body,
          android: {
            channelId:'pika'
          }
        //   ...message,
        //   android: {
        //     channelId: remoteMessage.data?.channelId || 'default',
        //     // smallIcon: 'logo',
        //     color: 'blue',
        //     pressAction: {
        //       id: 'default',
        //     },
        //   },
        });
      }
    } catch (err) {
      console.log({ err });
    }
  }

  
  async function onBackgroundMessage(message:any): Promise<void> {
    console.log('onBackgroundMessage New FCM Message', message);
    onDisplayNotification(message);
  }

  const setBackgroundMessageHandler = () => {
  messaging().setBackgroundMessageHandler(onBackgroundMessage);
  }

  const onBackgroundEvent = () =>
  notifee.onBackgroundEvent(async ({ type, detail }) => {
    console.log('HERE', type, detail);
  });

   const setupBackgroundMessageEvents = () => {
    try {
      setBackgroundMessageHandler();
      onBackgroundEvent();
      console.log('Background notification events registered!');
    } catch (err) {
      console.log({ err });
    }
  };
  
  
  
  
//   React.useEffect(() => {
//     setupBackgroundMessageEvents()
// }, []);








return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HorizontalScroll" component={HorizontalScroll} />
      <Stack.Screen
        name="HorizontalAnimationScroll"
        component={HorizontalAnimationScroll}
      />
      <Stack.Screen name="FCM" component={FCM} />
      {/* <Stack.Screen name="CalenderTest" component={DatePicker} /> */}
      <Stack.Screen name="CalenderTest" component={CalenderTest} />
      <Stack.Screen name="OTPINPUT" component={OTPINPUT} />
      <Stack.Screen name="SQL" component={SQL} />
      <Stack.Screen name="Scrolling" component={Scrolling} />
      <Stack.Screen name="SpecchtoText" component={SpecchtoText} />
      <Stack.Screen name="PerfomanceList" component={PerfomanceList} />
      <Stack.Screen name="PopoverComponent" component={PopoverComponent} />

    </Stack.Navigator>
  </NavigationContainer>
);
}

export default App;

// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function EmptyScreen() {
//   return <View />;
// }

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Feed Screen</Text>
//       <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
//       <Button
//         title="Go to Root, Profile"
//         onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
//       />
//     </View>
//   );
// }

// function Home({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// function Root() {
//   return (
//     <Drawer.Navigator >
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Profile" component={EmptyScreen} />
//       <Stack.Screen name="Settings" component={EmptyScreen} />
//     </Drawer.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Root" component={Root} />
//         <Stack.Screen name="Feed" component={Feed} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function EmptyScreen() {
//   return <View />;
// }

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Feed Screen</Text>
//       <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
//       <Button
//         title="Go to Root, Profile"
//         onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
//       />
//     </View>
//   );
// }

// function Home({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// function Root() {
//   return (
//     <Drawer.Navigator >
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Profile" component={EmptyScreen} />
//       <Stack.Screen name="Settings" component={EmptyScreen} />
//     </Drawer.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Root" component={Root} />
//         <Stack.Screen name="Feed" component={Feed} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
