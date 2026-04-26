import { createContext, useContext, useState } from 'react';

const RideContext = createContext(null);

export function RideProvider({ children }) {
  const [activeRide, setActiveRide] = useState(null);

  function clearRide() {
    setActiveRide(null);
  }

  return (
    <RideContext.Provider value={{ activeRide, setActiveRide, clearRide }}>
      {children}
    </RideContext.Provider>
  );
}

export function useRide() {
  return useContext(RideContext);
}
