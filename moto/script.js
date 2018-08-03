var options = {}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });
  
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

let happy = document.querySelector('#happy')
let calm = document.querySelector('#calm')
let neutral = document.querySelector('#neutral')
let annoyed = document.querySelector('#annoyed')
let sad = document.querySelector('#sad')
let angry = document.querySelector("#angry")
let playlist = document.querySelector('#playlist')
let allface = document.querySelectorAll(".face")


allface.forEach(face => {
    face.addEventListener('click',e=>{
        face.classList.toggle('active')
    })
})

happy.addEventListener('click', e => {
    playlist.innerHTML += `<p><iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXdPec7aLTmlC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>`
})

calm.addEventListener('click', e => {
    playlist.innerHTML += `<p><iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX6VdMW310YC7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>`
})

neutral.addEventListener('click', e => {
    playlist.innerHTML += `<p><iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWY4xHQp97fN6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>`
})

annoyed.addEventListener('click', e => {
    playlist.innerHTML += `<p>https://open.spotify.com/user/callielujan/playlist/4by4UWeEzeEx8iBPnmzQUY</p>`
})

sad.addEventListener('click', e => {
    playlist.innerHTML += `<p><iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX7gIoKXt0gmx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>`
})

angry.addEventListener('click', e => {
    playlist.innerHTML += `<p><iframe src="https://open.spotify.com/embed?uri=spotify:user:jewlgurl:playlist:7L08IETH8EQmm7k4r8rivb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>`
})