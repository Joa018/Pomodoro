//Proyecto Num 1 POMODORO

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, Touchable, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/component/Header';
import Timer from './src/component/Timer';
//1. array de colores Backrown
const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]


export default function App() {

  //2. se usa el useState
  const [isWorking, setIsWorking] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK")
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval = null
 
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000)
    } else {
      clearImmediate(interval)
    }

    if(time === 0){
      setIsActive(false)
      setIsWorking((prev) => !prev)
      setTime(isWorking ? 300 : 1500)
    }

    return () => clearImmediate(interval)
  }, [isActive, time])


  function handleStartStop() {
    setIsActive(!isActive)
  }


  return (


    // 3. retorna los datos del componente header
    <SafeAreaView style={Platform.OS === "android" && [styles.container, { backgroundColor: colors[currentTime] }]}>
      <View style={{
        flex: 1,
        

      }}>
        <Text style={styles.text}>Pomodoro</Text>


        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}

        />
        <Timer time={time}></Timer>

        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

//4. estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },

  text: {
    fontSize: 32,
    fontWeight: "bold"
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 15,
    marginTop: 15,
    borderRadius: 15

  }
});
