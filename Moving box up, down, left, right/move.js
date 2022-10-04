const parent = document.querySelector('.parent')
const child = document.querySelector('.child')
const up = document.querySelector('.up')
const down = document.querySelector('.down')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const center = document.querySelector('.center')

up.addEventListener('click', () => {
  child.style.top = 0
  child.style.left = 50 + '%'
  child.style.transform = 'translate(-50%, 0%)'

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  child.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
})

down.addEventListener('click', () => {
  child.style.top = 100 + '%'
  child.style.left = 50 + '%'
  child.style.transform = 'translate(-50%, -100%)'

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  child.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
})

left.addEventListener('click', () => {
  child.style.top = 50 + '%'
  child.style.left = 0 + '%'
  child.style.transform = 'translate(0, -50%)'

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  child.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
})

right.addEventListener('click', () => {
  child.style.top = 50 + '%'
  child.style.left = 100 + '%'
  child.style.transform = 'translate(-100%, -50%)'

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  child.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
})

center.addEventListener('click', () => {
  child.style.top = 50 + '%'
  child.style.left = 50 + '%'
  child.style.transform = 'translate(-50%, -50%)'

  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  child.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
})
