import React from 'react'
import { ThemeContext } from './themContext'
export default class H2Demo extends React.Component {
  static contextType = ThemeContext
  render() {
    const { theme } = this.context
    return <h3 style={{ color: theme.color }}>BESTWAR</h3>
  }
}