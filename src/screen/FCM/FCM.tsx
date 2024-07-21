/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line prettier/prettier
import { View, Text, Platform, Button } from 'react-native';
import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';
import notifee, { AndroidColor, EventType, AuthorizationStatus, AndroidImportance } from '@notifee/react-native';


export default function FCM() {


  async function requestUserPermission() {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings);
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('token', token);

      return true;
    } else {
      console.log('User declined permissions');
      return false;
    }
  }

  const createChannelId = async () => {

    const channelId = await notifee.createChannel({
      id: 'pika',
      name: 'pika',
      sound:'default',
      importance: AndroidImportance.HIGH,
    });

    return channelId;
  };


  useEffect(()=>{
    createChannelId()
  })


  // const onDisplayNotification = async (defaultPressActionId = 'default') => {
  //   try {

  //     const channelId = await createChannelId();
  //     const notificationId = await notifee.displayNotification({
  //       title: 'Notification Title',
  //       body: 'Main body content of the notification',
  //       android: {
  //         channelId,
  //         smallIcon: 'ic_small_icon',
  //         // actions: [
  //         //   {
  //         //     title: pressActionTitle || '',
  //         //     pressAction: { id: pressActionId || '' },
  //         //   },
  //         // ],
  //         pressAction: {
  //           id: defaultPressActionId,
  //         },

  //       },

  //     });
  //   }
  //   catch (error) {
  //     console.error('Error onDisplayNotification', error);
  //   }
  // };

  // async function CancelNotification(notificationId) {
  //   await notifee.cancelNotification(notificationId);
  // }

  useEffect(() => {
    requestUserPermission();
  }, []);





  // async function requestUserPermission() {
  //   // if (Platform.OS === 'ios') {

  //   //   const authStatus = await messaging().requestPermission();
  //   //   const enabled =
  //   //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //   //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   //   if (enabled) {
  //   //     console.log('Authorization status:', authStatus);
  //   //   }
  //   // }
  //   // else 
  //   // const authStatus = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  //   console.log('Authorization status:', authStatus);
  //   





  // }
  // async function onDisplayNotification() {
  //   try {
  //     //  -------------Step1--------------------------
  //     // Request permissions (required for iOS and andriod) 
  //     await notifee.requestPermission()

  //     // Create a channel (required for Android)
  //     const channelId = await notifee.createChannel({
  //       id: 'default',
  //       name: 'Wave 2.0',
  //     });
  //     //  -------------Step1------------------------
  //     //  -------------Step2------------------------

  //     // Display a notification
  //     const notificationId = await notifee.displayNotification({
  //       // id: '123',
  //       title: 'Notification Title',
  //       body: 'Main body content of the notification',
  //       android: {
  //         channelId,
  //         color:'#f44336',
  //         smallIcon: 'ic_small_icon', // optional, defaults to 'ic_launcher'.
  //         // pressAction is needed if you want the notification to open the app when pressed
  //         actions: [
  //           {
  //             title: '<b>Dance</b>',
  //             pressAction: { id: 'dance' },
  //           },
  //           // {
  //           //   title: '<p style="color: #f44336;"><b>Cry</b></p>',
  //           //   pressAction: { id: 'cry' },
  //           // },
  //         ],





  //         pressAction: {
  //           id: 'default',
  //         },
  //       },
  //     });
  //   } catch (error) {
  //     console.error("onDisplayNotification", error)
  //   }
  // }

  // async function cancel(notificationId) {
  //   await notifee.cancelNotification(notificationId);
  // }

  // // const getDeviceNotificationToken = () => {

  // // }




  // useEffect(() => {
  //   try {
  //     // requestUserPermission();
  //     // console.log("I am in FCM")
  //     messaging()
  //       .subscribeToTopic('all')
  //       .then(res => console.log('Sub to viraj', res));

  //     // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     //   console.log('Message handled in the background!', remoteMessage);
  //     // });
  //   } catch (error) {
  //     console.error('Error', error);
  //   }


  // }, []);

  // async function onMessageReceived(message) {
  //   // Do something
  //   console.log("message",message)
  // }

  // useEffect(() => {

  //   console.log("HelloWorld")
    
  //   messaging().onMessage(onMessageReceived);

  //   messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //     console.log('Message handled in the background!', remoteMessage);
  //   });
    

  // //   return notifee.onForegroundEvent(({ type, detail }) => {
  // //     switch (type) {
  // //       case EventType.DISMISSED:
  // //         console.log('User dismissed notification', detail.notification);
  // //         break;
  // //       case EventType.PRESS:
  // //         console.log('User pressed notification', detail.notification);
  // //         break;
  // //     }
  // //   });
  // }, []);





  return (
    <View>
      <Text>FCM</Text>
      {/* <Button title="Display Notification" /> */}
      <Button title="Display Notification" onPress={() => onDisplayNotification('mark-as-read')} />
    </View>
  );
}
