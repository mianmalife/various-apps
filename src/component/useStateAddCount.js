import React, { useEffect, useState } from 'react'
import useGetWidth from './useGetInnerWidth'
import { Button, Input } from 'antd'
function Example1() {
  const [count, addCount] = useState(0)
  const [value, setValue] = useState()
  const [title, setTitle] = useState(document.title)
  const width = useGetWidth(window.innerWidth)
  function handleInput(e) {
    setValue(e.target.value)
  }
  function handleInputTitle(e) {
    setTitle(e.target.value)
  }
  useEffect(() => {
    document.title = title
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
export default Example1