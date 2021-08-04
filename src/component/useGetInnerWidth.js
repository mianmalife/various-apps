import { useState, useEffect } from 'react'

function GetInnerWidth(docWidth) {
  const [width, setWidth] = useState(docWidth)
  useEffect(() => {
    function handleSize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  })
  return width
}
export default GetInnerWidth