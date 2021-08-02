import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd'
function example1() {
    const [count, addCount] = useState(0)
    const [value, setValue] = useState()
    const [title, setTitle] = useState(document.title)
    const [width, changeWidth] = useState(window.innerWidth)
    function handleInput(e) {
        setValue(e.target.value)
    }
    function handleInputTitle(e) {
        setTitle(e.target.value)
    }
    useEffect(() => {
        document.title = title
    })
    function handleSize() {
        changeWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleSize)
        return () => {
            window.removeEventListener('resize', handleSize)
        }
    })
    return (
        <div>
            <p>you clicked {count} times</p>
            <p>
                <Button type="primary" onClick={() => addCount(count + 1)}>增加</Button>
            </p>
            <p>
                <Input
                    onChange={handleInput}
                    value={value}
                    placeholder="Basic usage"
                    style={{ width: 200 }} />
            </p>
            <p>
                <Input
                    onChange={handleInputTitle}
                    value={title}
                    placeholder="输入改变标题"
                    style={{ width: 200 }} />
            </p>
            <h2>Width</h2>
            <p>{width}</p>
        </div>
    )
}
export default example1