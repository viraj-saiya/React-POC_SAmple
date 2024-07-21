
import notifee, { AndroidColor, EventType, AuthorizationStatus } from '@notifee/react-native';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';


import React from 'react';


async function onDisplayNotification(
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) {
  try {
    console.log("remoteMessage",remoteMessage)
    if (remoteMessage?.data?.notifee) {
      const message = JSON.parse(remoteMessage.data.notifee);
      console.log(" JSON.parse message",message)
      // await notifee.displayNotification({
      //   title:message.title,
      //   body:message.body,
      //   android: {
      //     channelId:'pika'
      //   }
      // //   ...message,
      // //   android: {
      // //     channelId: remoteMessage.data?.channelId || 'default',
      // //     // smallIcon: 'logo',
      // //     color: 'blue',
      // //     pressAction: {
      // //       id: 'default',
      // //     },
      // //   },
      // });
      await notifee.displayNotification({...message});
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

 export const  setupBackgroundMessageEvents = () => {
  try {
    setBackgroundMessageHandler();
    onBackgroundEvent();
    console.log('Background notification events registered!');
  } catch (err) {
    console.log({ err });
  }
};

