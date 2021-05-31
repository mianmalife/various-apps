import React from 'react'
import './index.less'
const testObj = Object.assign({}, { a: 99 }, { b: 2 })
console.log(testObj)
export default class App extends React.Component {
    render() {
        return <div>
            <h2>hello Test455444 {testObj.a}</h2>
        </div>
    }
}