import React from 'react'
import './index.less'
const testObj = Object.assign({}, { a: 1 }, { b: 2 })
console.log(testObj)
export default class App extends React.Component {
    render() {
        return <div>
            hello Test1 {testObj.a}
        </div>
    }
}