const box = document.querySelector('.box')
const ball = document.querySelector('.ball')

let x = 125
let addX = -20
let y = 125
let addY = -5

let colored = color()
box.addEventListener('click', move)

function move() {
  x += addX
  y += addY

  if (x >= 400) {
    x = 400
    addX *= -1
    colored = color()
  }
  if (x <= 0) {
    x = 0
    addX *= -1
    colored = color()
  }
  if (y >= 400) {
    y = 400
    addY *= -1
    colored = color()
  }
  if (y <= 0) {
    colored = color()
    y = 0
    addY *= -1
  }
  render()
}

setInterval(move, 100)

function color() {
  red = Math.floor(Math.random() * 256)
  green = Math.floor(Math.random() * 256)
  blue = Math.floor(Math.random() * 256)
  return 'rgb(' + red + ',' + green + ',' + blue + ')'
}
function render() {
  ball.style.left = x + 'px'
  ball.style.top = y + 'px'
  ball.style.background = colored
}
