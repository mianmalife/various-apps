import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker, message } from 'antd'
import 'antd/dist/antd.css'
import './index.less'
import smile from '@/assets/image/a.jpg'
import { getUserInfo } from '@/request/api'
export default class App extends React.Component {
    componentDidMount() {
        getUserInfo({ a: 1, b: 2 }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return <div>
            <h2>hello Test1</h2>
            <img src={smile} alt="" />
            <DatePicker />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))