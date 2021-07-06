import React from 'react'
import { DatePicker, ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/lib/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/antd.less'
import './index.less'
import img from '@/assets/image/smile.jpg'
dayjs.locale('zh-cn')
export default class App extends React.Component {
    render() {
        return <ConfigProvider locale={zhCN}><div>
            <DatePicker />
            hello App
            <img src={img} alt="" />
        </div></ConfigProvider>
    }
}
