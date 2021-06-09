import React from 'react'
import _ from 'lodash'
import './index.less'
// import smile from '../../assets/image/a.jpg'
import smile from '@/image/a.jpg'
const testObj = Object.assign({}, { a: 99 }, { b: 2 })
console.log(testObj, smile)
let arr = [1,2,3,4]
console.log(_.isEmpty({}))
if (arr.includes(1)) {
    console.log('hello')
}
export default class App extends React.Component {
    render() {
        return <div>
            <h2>hello Test22332 {testObj.a}{_.isEmpty({})}</h2>
            <img src={smile} alt="" />
        </div>
    }
}