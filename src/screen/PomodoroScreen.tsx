/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header/Header';
import Timer from '../components/Timer/Timer';
import {usePomodoro} from '../context/PomodoroContext';

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    margin: 15,
    borderRadius: 15,
  },
});

const PomodoroScreen = () => {
  const {currentTime, setTime, time} = usePomodoro();
  const windowHeight = Dimensions.get('window').height;
  const [isActive, setIsActive] = useState(false);
  const [isWorking, setIsWorking] = useState<boolean>(false);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (time === 0) {
      setIsActive(false);
      setIsWorking(prev => !prev);
      setTime(isWorking ? 300 : 1500);
    }
    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, time]);

  const viewStyles = {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    backgroundColor: colors[currentTime],
    height: windowHeight,
  };

  const handleStartStop = () => {
    setIsActive(!isActive);
  };
  return (
    <SafeAreaView style={viewStyles}>
      <View>
        <Text style={styles.text}>Pomodoro</Text>
        <Header />
        <Timer />
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {isActive ? 'STOP' : 'START'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PomodoroScreen;
