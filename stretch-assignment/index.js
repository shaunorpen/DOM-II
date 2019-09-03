let rockets = document.querySelectorAll('.block');

rockets.forEach(
    rocket => rocket.addEventListener('click', (e) => {
        rockets.forEach(rocket => rocket.style.order = 0);
        e.target.style.order = -1;
    })
);

rockets.forEach(
    rocket => rocket.addEventListener('mousedown', (e) => {
        // rockets.forEach(rocket => rocket.style.marginLeft = 0);
        // e.target.style.marginLeft = parseInt(e.target.style.marginLeft) + 10 + 'px';
        console.log(e);
    }
));