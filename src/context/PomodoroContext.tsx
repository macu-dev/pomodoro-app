import React, {createContext, useContext, useState, ReactNode} from 'react';

type PomodoroContextType = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
};

const PomodoroContext = createContext<PomodoroContextType | undefined>(
  undefined,
);

export const usePomodoro = () => {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error('usePomodoro must be used within a TimeProvider');
  }
  return context;
};

type Props = {
  children: ReactNode;
};

export const PomodoroProvider = ({children}: Props) => {
  const [time, setTime] = useState<number>(25 * 60);
  const [currentTime, setCurrentTime] = useState<number>(0);

  return (
    <PomodoroContext.Provider
      value={{time, setTime, currentTime, setCurrentTime}}>
      {children}
    </PomodoroContext.Provider>
  );
};
