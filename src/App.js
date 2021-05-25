import React from 'react'
import './index.less'
import './test.less'
import img from '../assets/image/smile.jpg'
console.log(img)
export default class App extends React.Component {
    render() {
        return <div>
            hello App
            <img src={img} alt="" />
        </div>
    }
}