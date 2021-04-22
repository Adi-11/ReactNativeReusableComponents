import React, {createContext} from 'react';

export const GlobalContext = createContext({
  toggleTheme: async () => {},
  theme: '',
});
