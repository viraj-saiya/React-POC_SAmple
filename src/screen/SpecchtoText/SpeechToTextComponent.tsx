import { View, Text, Button, Modal, Pressable, StyleSheet, } from 'react-native'
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import Voice from '@react-native-voice/voice'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, Easing, withTiming } from 'react-native-reanimated';
import { MotiView } from 'moti';

interface TTS {
  children?:  ReactNode;
  result: (data:string) => void;
};

export default function SpecchtoTextComponent(props: TTS) {


  const [ttsOnModel, setTtsOnModel] = useState(false)
  // const [recognized, setRecognized] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [end, setEnd] = useState('');
  const [serror, setSError] = useState(false);
  const [lowHighState, setLowHighState] = useState("low")


  const fromScale = useMemo(() => { console.log("from", lowHighState); if (lowHighState == 'low') { return 1 } else { return 1.4 } }, [lowHighState]);
  const animatescale = useMemo(() => { console.log("animate", lowHighState); if (lowHighState == 'low') { return 1.2 } else { return 1.4 } }, [lowHighState]);


  useEffect(() => {
    // Voice._listeners
    // return () => Voice.removeAllListeners()
  })


  // <Button title="Start" onPress={startRecognition} />
  //     <Text style={{ color: 'red' }}>Started: {started}</Text>
  //     {/* <Text style={{color:'red'}}>Error: {JSON.stringify(error)}</Text> */}
  //     <Text style={{ color: 'red' }}>Results:</Text>
  //     {results.map((result, index) => (
  //       <Text style={{ color: 'black' }} key={index}>{result}</Text>
  //     ))}


  try {
    // Voice.onSpeechStart = () => setStarted('start');
    // Voice.onSpeechEnd = () => { setEnd('end'); setTtsOnModel(false) };

    Voice.onSpeechResults = (sp: any) => { console.log("OnSpeechVoice",sp); if (sp.value[0]) {setResults([sp.value[0]]); props?.result(sp.value[0]) ; setTtsOnModel(false)} else  { setSError(true) }  };
    Voice.onSpeechError = (e: any) => { console.log("OnSpeechVoiceError",e); if (e?.error?.code) { setSError(true) }; };

    // Voice.onSpeechVolumeChanged = (v: any) => {
    //   if (Math.trunc(v?.value) < 6) {
    //     // console.log("onSpeechVolumeChanged - low ", v.value)
    //     setLowHighState('low');
    //   }
    //   else if (Math.trunc(v?.value) > 6) {
    //     // console.log("onSpeechVolumeChanged - high", v.value)
    //     setLowHighState('high');

    //   }

    // }

  } catch (error) {
    console.error(error)
  }


  const startRecognition = async () => {
    try {
      if (await Voice.isAvailable()) {

        setTtsOnModel(true);
        setSError(false);
        await Voice.start('en-US');
      }
      // const a = await Voice.getSpeechRecognitionServices()
      // console.log(a)
    } catch (error) {
      console.error(error);
    }
  };


  const RipleCircle = () => {

    return (

      <MotiView

        from={{ opacity: 0.4, transform: [{ scale: fromScale }] }}
        animate={{ opacity: 0.4, transform: [{ scale: animatescale }] }}
        transition={{
          type: 'timing',
          loop: true,
          repeatReverse: false,
          easing: Easing.out(Easing.ease),
          duration: 1500,

        }}

        style={[StyleSheet.absoluteFillObject, styles.circle]}
      />
    )
  }
  const PulseEffect = () => {
    return (
      <View style={[styles.circle, styles.center]}>
        <RipleCircle />
        <Ionicons name="mic" size={45} color={'black'} />
      </View>
    )
  }

  const ErrorMic = () => {
    return (
      <View style={[styles.circle, styles.center]}>
        <View style={[StyleSheet.absoluteFillObject, styles.circle, { backgroundColor: '#303030', borderWidth: 10, borderColor: "#FA7070" }]}></View>
        <Ionicons name="mic" size={45} color={'#7EA1FF'} />
      </View>
    )
  }



  const ModalSTT = () => {
    return (

      <Modal visible={ttsOnModel} transparent>
        <Pressable onPress={() => { setTtsOnModel(false); Voice.destroy() }} style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 10, backgroundColor: "#30303080" }}>
          <Pressable style={{ backgroundColor: '#303030', borderRadius: 10, alignItems: 'center', paddingVertical: 20 }}>
            {/* Header */}
            <View>
              <Text style={{ color: '#FFF', fontSize: 25 }}>Wave</Text>
            </View>
            <View style={{ paddingVertical: 35 }}>
              {(!serror) ?
                <PulseEffect /> : <ErrorMic />
              }</View>
            <View style={styles.center}>
              {
                (!serror) ?
                  <Text style={{ color: '#FFF', fontSize: 20, textAlign: 'center' }}> Try saying something</Text> :
                  <Text style={{ color: '#FFF', fontSize: 20, padding: 0 }}>Didn't catch that. Try speaking again.</Text>
              }
            </View>
            {
              (!serror) ?
                null
                :
                <View>
                  <Pressable style={[styles.tryAgainBox, { marginTop: 10 }]} onPress={startRecognition}>
                    <Text style={styles.tryAgainTxt}> Try again</Text>
                  </Pressable>
                </View>
            }
            <View style={{ paddingTop: 30 }}>
              <Text style={styles.language}>English (United States)</Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    )

  }
  return (

    <View>

      <Pressable onPress={startRecognition} >
        {props.children ? props.children
          : <Ionicons name="mic" size={30} color={'#303030'} />
        }
      </Pressable>
      <ModalSTT />
    </View>

  );
};
// { elevation:2,shadowColor:'red', shadowRadius:100}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor: '#7EA1FF',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tryAgainBox: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FFFFFF80",
    justifyContent: 'center',
    alignItems: 'center'

  },
  tryAgainTxt: {
    color: '#7EA1FF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  language: {
    color: '#FFF',
    fontSize: 15
  }


})
