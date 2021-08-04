import React from 'react'
import { ConfigProvider } from 'antd'
import AddCount from './component/useStateAddCount'
import ContextDemo from './component/contextDemo'
import CardDemo from './component/cardDemo'
import dayjs from 'dayjs'
import zhCN from 'antd/lib/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/antd.less'
import './index.less'
dayjs.locale('zh-cn')
import { themes, ThemeContext } from './component/themContext'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme
        }
    }
    toggleTheme = () => {
        this.setState(state => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark
        }))
    }
    render() {
        return <ConfigProvider locale={zhCN}>
            <ThemeContext.Provider value={this.state}>
                <div className="container">
                    <AddCount></AddCount>
                    <ContextDemo></ContextDemo>
                    <CardDemo></CardDemo>
                </div>
            </ThemeContext.Provider>
        </ConfigProvider>
    }
}
