import React from 'react'
import ReactDOM from 'react-dom'
import intl from 'react-intl-universal'
import CN from '@/locales/zh-CN'
import US from '@/locales/en-US'
import { DatePicker, ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'
import zhCN from 'antd/lib/locale/zh_CN'
import Icon from '@ant-design/icons'
import { SmileOutlined } from '@ant-design/icons'
import CmpUrl, { ReactComponent as Cmp } from '@/assets/icon/cmp.svg'
import dayjs from 'dayjs'
import 'antd/dist/antd.css'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import './index.less'
dayjs.locale('zh-cn')
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.locales = {
            "zh_CN": CN,
            "en_US": US
        }
        this.state = {
            intlDone: false,
            locale: zhCN
        }
        this.defaultLocale = sessionStorage['locale'] ? sessionStorage['locale'] : 'zh_CN'
    }
    componentDidMount() {
        this.initLocale()
    }
    initLocale(locale = "zh_CN") {
        intl.init({
            currentLocale: sessionStorage['locale'] ? sessionStorage['locale'] : locale,
            locales: this.locales
        }).then(() => {
            this.setState({ intlDone: true })
        })
    }
    changeLanguage = () => {
        if (this.defaultLocale === 'zh_CN') {
            this.defaultLocale = 'en_US'
            this.setState({
                locale: enUS
            }, () => {
                dayjs.locale('en')
            })
        } else {
            this.defaultLocale = 'zh_CN'
            this.setState({
                locale: zhCN
            }, () => {
                dayjs.locale('zh-cn')
            })
        }
        sessionStorage['locale'] = this.defaultLocale
        this.initLocale(this.defaultLocale)
    }
    render() {
        const { locale } = this.state
        return <ConfigProvider locale={locale}><div>
            <h2>hello Test1</h2>
            <img src={CmpUrl} alt="123" />
            <Icon component={Cmp} className="computer" />
            <SmileOutlined style={{ color: '#f00', fontSize: 50 }} />
            <DatePicker />
            {this.state.intlDone && <div>
                {intl.get("intl.name")}
                <br />
                {intl.getHTML('content')}
                <br />
                <button onClick={() => this.changeLanguage()}>  {intl.getHTML('intl.changeLang')}</button>
            </div>}
        </div>
        </ConfigProvider>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))