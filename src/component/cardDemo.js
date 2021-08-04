import React from 'react'
import { Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import H2Demo from './h2Demo'
import { ThemeContext } from './themContext'
const { Meta } = Card

export default class CardDemo extends React.Component {
  static contextType = ThemeContext
  render() {
    const {theme} = this.context
    return <Card
      style={{ width: 300, background: theme.background }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={<p style={{color: theme.color}}>TRANSFOMER</p>}
        style={{color: theme.color}}
        description={<H2Demo></H2Demo>}
      />
    </Card>
  }
}