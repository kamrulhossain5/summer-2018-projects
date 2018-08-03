console.log("loaded!")

let target=document.querySelector("#target")
console.log(target)
let player = document.querySelector("#player")

setInterval(checkIfDead, 1000)

function checkIfDead(){
     let pos = player.getAttribute('position')
     console.log(pos)
     
     if (pos.y < -20) {
         console.log('dead')
     //    player.body.position.set(0, 5, 0)
          player.setAttribute('position', '-55.98 7.14, 1.99')
          player.setAttribute('velocity', '0 0 0')
     }
}

function resetPlayerPosition(){
    player.setAttribute('position', '-55.98 7.14, 1.99')
    // x: -55.980862858014866, y: 7.145389744355794, z: 1.9942425807321438
}

target.addEventListener("click", e=>{
    console.log("Target clicked!")
    let pos = player.getAttribute('position')
    
    if (pos.y > 37) {
        console.log('You win!')
    target.innerHTML += '<a-light type="point" intensity="10"></a-light>'
    }
})
