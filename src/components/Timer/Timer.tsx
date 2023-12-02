import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {usePomodoro} from '../../context/PomodoroContext';

const styled = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    display: 'flex',
    borderRadius: 15,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 80,
    fontWeight: 'bold',
  },
});

const Timer = () => {
  const {time} = usePomodoro();
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}: ${(time % 60).toString().padStart(2, '0')}`;
  return (
    <View style={styled.container}>
      <Text style={styled.time}>{formattedTime}</Text>
    </View>
  );
};

export default Timer;
