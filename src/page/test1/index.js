import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd'
import Icon from '@ant-design/icons'
import { SmileOutlined } from '@ant-design/icons'
import CmpUrl, { ReactComponent as Cmp } from '@/assets/icon/cmp.svg'
import dayjs from 'dayjs'
import 'antd/dist/antd.css'
import 'dayjs/locale/zh-cn'
import './index.less'
dayjs.locale('zh-cn')
console.log(CmpUrl)
export default class App extends React.Component {
    render() {
        return <div>
            <h2>hello Test1</h2>
            <img src={CmpUrl} alt="123" />
            <Icon component={Cmp} className="computer" />
            <SmileOutlined style={{color: '#f00', fontSize: 50}} />
            <DatePicker />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))