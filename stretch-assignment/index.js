let rockets = document.querySelectorAll('.block');

rockets.forEach(
    rocket => rocket.addEventListener('click', (e) => {
        rockets.forEach(rocket => rocket.style.order = 0);
        e.target.style.order = -1;
    })
)