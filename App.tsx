/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PomodoroProvider} from './src/context/PomodoroContext';
import PomodoroScreen from './src/screen/PomodoroScreen';

function App(): JSX.Element {
  return (
    <PomodoroProvider>
      <PomodoroScreen />
    </PomodoroProvider>
  );
}

export default App;
