/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {usePomodoro} from '../../context/PomodoroContext';

const options = ['Pomodoro', 'Short Break', 'Long Break'];
// enum CurrentTimeType {
//   POMO = 'POMO',
//   SHORT = 'SHORT',
//   BREAK = 'BREAK',
// }
const Header = () => {
  const {setTime, setCurrentTime, currentTime} = usePomodoro();
  // const [currentTime, setCurrentTime] = useState<CurrentTimeType>(
  //   CurrentTimeType.POMO,
  // );

  const handlePress = (index: number) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    // const value = Object.values(CurrentTimeType)[index];
    setCurrentTime(index);
    setTime(newTime * 60);
  };
  return (
    <View style={styles.viewContainer}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyle,
            currentTime !== index && {borderColor: 'transparent'},
          ]}>
          <Text style={{fontWeight: 'bold'}}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
  },
  itemStyle: {
    width: '33%',
    alignItems: 'center',
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: 'white',
    marginVertical: 20,
  },
});

export default Header;
