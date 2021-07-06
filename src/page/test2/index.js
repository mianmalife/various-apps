import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
export default class App extends React.Component {
    render() {
        return <div className="test2">
            hello Test3
            {[1,2,4,5].includes(1) ? '2' : '3'}
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))