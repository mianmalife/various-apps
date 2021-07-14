import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import { antdLocale, loadLocales} from '@/locales/index'
import dayjs from 'dayjs'
import 'antd/dist/antd.css'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import App from './App'
dayjs.locale('zh-cn')

loadLocales().then(() => {
    ReactDOM.render(<ConfigProvider locale={antdLocale}><App /></ConfigProvider>, document.getElementById('app'))
})