import { createContext, useContext, useState } from 'react';

const ModeContext = createContext(null);

export function ModeProvider({ children }) {
  const [mode, setMode] = useState('driver');

  function toggleMode() {
    setMode(prev => (prev === 'driver' ? 'passenger' : 'driver'));
  }

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
