let box = document.querySelector('#box')
let houseBalloons = document.querySelector('#houseBalloons')

box.addEventListener('click', e => {
    let c1 = Math.floor(Math.random() * 255)
    let c2 = Math.floor(Math.random() * 255)
    let c3 = Math.floor(Math.random() * 255)
    let pos1 = Math.floor(Math.random() * 6 + 3)
    let pos2 = Math.floor(Math.random() * 10 + 5)
    let pos3 = Math.floor(Math.random() * -5 - 5)
    houseBalloons.innerHTML += 
    `<a-sphere color="rgb(${c1}, ${c2}, ${c3})" radius="1" position="${pos1} ${pos2} ${pos3}"></a-sphere>`
})