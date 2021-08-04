import React from 'react'
import { Button } from 'antd'
import { ThemeContext, themes } from './themContext'
export default class MyContextDemo extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) =>
        (
          <Button
            type="primary"
            style={{ color: theme.color }}
            onClick={toggleTheme}>
            切换主题</Button>)}
      </ThemeContext.Consumer>)
  }
}