/**
 * @format
 */

import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {name as appName} from './app.json';
import notifee, { EventType } from '@notifee/react-native';

import App from './App';
import { useEffect } from 'react';
import { setupBackgroundMessageEvents } from './notification'


setupBackgroundMessageEvents()

// notifee.onBackgroundEvent(async ({ type, detail }) => {
//   const { notification, pressAction } = detail;

//   // Check if the user pressed the "Mark as read" action
//   if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
//     // Update external API
//     await fetch(`https://my-api.com/chat/${notification.data.chatId}/read`, {
//       method: 'POST',
//     });

//     // Remove the notification
//     await notifee.cancelNotification(notification.id);
//   }
// });
// function HeadlessCheck({ isHeadless }) {
//   console.log("isHeadless",isHeadless)



//   if (isHeadless) {

//     // App has been launched in the background by iOS, ignore
//     return null;
//   }

//   // Render the app component on foreground launch
//   return <App />;
// }
 

AppRegistry.registerComponent(appName, () => App);
