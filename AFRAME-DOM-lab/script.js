let face = document.querySelector('#face')
let leftEye = document.querySelector('#leftEye');
let rightEye = document.querySelector('#rightEye');
let changeEyes = document.querySelector('#changeEyes')
let antenna1 = document.querySelector('#antenna1')
let antenna2 = document.querySelector('#antenna2')
let mouth = document.querySelector('#mouth')
let hello = document.querySelector('#hello')
let evil = document.querySelector('#evil')
let grow = document.querySelector('#grow')
let sky = document.querySelector('#sky')

face.addEventListener('click', e => {
    leftEye.setAttribute("color","yellow")
    rightEye.setAttribute("color","yellow")
})

antenna1.addEventListener('click', e => {
    antenna1.setAttribute("rotation", "0 0 0")
    antenna1.setAttribute("color", "purple")
})

antenna2.addEventListener('click', e => {
    antenna2.setAttribute("rotation", "0 0 0")
    antenna2.setAttribute("color", "purple")
})

mouth.addEventListener('click', e => {
    hello.setAttribute("visible", "true")
})

evil.addEventListener('click', e => {
    leftEye.setAttribute("color", "red")
    rightEye.setAttribute("color", "red")
    mouth.setAttribute("color", "black")
})

grow.addEventListener('click', e => {
    face.setAttribute("scale", "2")
    leftEye.setAttribute("scale", "2")
    rightEye.setAttribute("scale", "2")
    antenna1.setAttribute("scale", "2")
    antenna2.setAttribute("scale", "2")
    mouth.setAttribute("scale", "2")
    hello.setAttribute("scale", "2")
    evil.setAttribute("scale", "2")
    grow.setAttribute("scale", "2")
    sky.setAttribute("scale", "2")
})