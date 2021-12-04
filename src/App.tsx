import React from 'react'
import { DatePicker, ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/lib/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/antd.less'
import './index.less'
import * as TEST from '@/interfaces/test'
dayjs.locale('zh-cn')
console.log(TEST)

export default class App extends React.Component {
  render () {
    return <ConfigProvider locale={zhCN}><div>
      <DatePicker />hello world
    </div></ConfigProvider>
  }
}
