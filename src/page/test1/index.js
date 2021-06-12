import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import smile from '@/image/a.jpg'
export default class App extends React.Component {
    render() {
        return <div>
            <h2>hello Test1</h2>
            <img src={smile} alt="" />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))