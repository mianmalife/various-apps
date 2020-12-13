import css from './index.css'
import logo from './logo.png'
let a = 'hello, webpack'
console.log(`${a}`, 'test', css)
let img = new Image()
img.src = logo
let app = document.getElementById('app')
app.appendChild(img)