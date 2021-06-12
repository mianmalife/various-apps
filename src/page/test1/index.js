import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import smile from '@/image/a.jpg'
import { getUserInfo } from '../../request/api'
export default class App extends React.Component {
    componentDidMount() {
        getUserInfo({ a: 1, b: 2 }).then(res => {
            console.log(res)
        }).catch(err => {
            console.warn(err)
        })
    }
    render() {
        return <div>
            <h2>hello Test1</h2>
            <img src={smile} alt="" />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))