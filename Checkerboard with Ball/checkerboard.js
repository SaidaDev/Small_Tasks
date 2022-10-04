const hop = document.querySelector('.hop')
const black = document.querySelector('.black')
const white = document.querySelector('.white')
const circle = document.querySelector('.circle')
const box = document.querySelector('.box')
const big = document.querySelector('.big') //commited div

// hop Button_________________________________commit div "big"
// hop.addEventListener('click', function () {
//   circle.style.left = Math.floor(Math.random() * 8) * 50 + 5 + 'px'
//   circle.style.top = Math.floor(Math.random() * 4) * 50 + 5 + 'px'
// })

// onclick move_________________________uncommit div "big"
// big.addEventListener('click', function (event) {
//   const x = event.offsetX
//   const y = event.offsetY

//   const cellX = Math.floor(x / 50)

//   const cellY = Math.floor(y / 50)

//   circle.style.left = cellX * 50 + 5 + 'px'
//   circle.style.top = cellY * 50 + 5 + 'px'

//   console.log(cellX, cellY)
// })

//change box color____________________commit div "big"
box.addEventListener('mouseover', function (event) {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  event.target.style.backgroundColor =
    'rgb(' + red + ',' + green + ',' + blue + ')'
})
