import React from 'react'
import intl from 'react-intl-universal'
import { DatePicker } from 'antd'
import Icon from '@ant-design/icons'
import { SmileOutlined } from '@ant-design/icons'
import CmpUrl, { ReactComponent as Cmp } from '@/assets/icon/cmp.svg'
import './index.less'
export default class App extends React.Component {
    render() {
        return <div>
            <h2>hello Test1</h2>
            <img src={CmpUrl} alt="123" />
            <Icon component={Cmp} className="computer" />
            <SmileOutlined style={{ color: '#f00', fontSize: 50 }} />
            <DatePicker />
            <div>
                {intl.get("intl.name")}
                <br />
                {intl.getHTML('content')}
                <br />
            </div>
        </div>
    }
}

