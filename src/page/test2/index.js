import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
export default class App extends React.Component {
    render() {
        return <div>
            hello Test3
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))