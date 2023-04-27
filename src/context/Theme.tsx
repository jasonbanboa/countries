import React, { 
  createContext,
  useState,
  SetStateAction,
  Dispatch } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextProps {
  darkTheme: boolean;
  toggleTheme: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  darkTheme: false,
  toggleTheme: () => true,
});


export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);  
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} 
