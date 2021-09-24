import { createContext, useContext } from "react";

import { useCarToolStore } from '../hooks/useCarToolStore';

const carToolStoreContext = createContext(null);


export const CarToolStoreProvider = ({ cars: initialCars, children }) => {

  return <carToolStoreContext.Provider value={useCarToolStore(initialCars)}>
    {children}
  </carToolStoreContext.Provider>;

};

export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};