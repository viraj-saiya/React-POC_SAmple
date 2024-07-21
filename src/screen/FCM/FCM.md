# How to install FCM in React native 

`npm install @react-native-firebase/app`
`npm install @react-native-firebase/messaging`


```gradle

buildscript {
  dependencies {
    // ... other dependencies
    // NOTE: if you are on react-native 0.71 or below, you must not update
    //       the google-services plugin past version 4.3.15
    classpath 'com.google.gms:google-services:4.4.0'
    // Add me --- /\
  }
}

```
```gradle

apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services'


```


Wrote code in FCM


