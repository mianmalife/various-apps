import React from 'react'
const themes = {
  light: {
    background: '#fff',
    color: '#000'
  },
  dark: {
    background: '#000',
    color: '#fff'
  }
}
const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})
export { themes, ThemeContext }