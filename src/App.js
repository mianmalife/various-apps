import React from 'react'
import { ConfigProvider } from 'antd'
import AddCount from './component/useStateAddCount'
import dayjs from 'dayjs'
import zhCN from 'antd/lib/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/antd.less'
import './index.less'
dayjs.locale('zh-cn')
export default class App extends React.Component {
    render() {
        return <ConfigProvider locale={zhCN}>
            <div className="container">
                <AddCount></AddCount>
            </div>
        </ConfigProvider>
    }
}
