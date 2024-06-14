import React, { createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme as setThemeAction } from '../../redux/themeSlice';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();

  const changeTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    dispatch(setThemeAction(theme));
  };

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
