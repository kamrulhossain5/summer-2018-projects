console.log("loaded!")



const player = document.querySelector('#player')
const theball = document.querySelector('#theball')

player.addEventListener('collide', function (e) {
    console.log('Player has collided with body #' + e.detail.body.id);

    e.detail.target.el;  // Original entity (playerEl).
    e.detail.body.el;    // Other entity, which playerEl touched.
    e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
    e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
});

