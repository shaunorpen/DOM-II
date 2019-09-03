// Your code goes here

// mouseover

document.querySelector('h1').addEventListener('mouseover', (e) => {
    return e.target.textContent = 'FUN BUS';
});

// keydown

document.querySelector('body').addEventListener('keydown', (e) => {
    return e.target.style = 'background: lightgrey;';
});

// wheel

document.querySelector('body').addEventListener('wheel', (e) => {
    return e.target.style = 'background: grey;';
});

// drag / drop

document.querySelectorAll('img').forEach(
    item => item.addEventListener(
        'drag', (e) => {
            return e.target.style = 'transform: rotate(180deg);';
        }
    )
);

// load

window.addEventListener('load', (e) => {
    console.log('Page is loaded');
});

// focus

document.querySelector('input').addEventListener('focus', (e) => e.target.style.background = 'pink');
document.querySelector('input').addEventListener('blur', (e) => e.target.style.background = 'white');

// resize

window.addEventListener('resize', (e) => console.log('Window was resized to', e.currentTarget.innerHeight, 'x', e.currentTarget.innerWidth));

// scroll

window.addEventListener('scroll', () => console.log('Window was scrolled!'));

// select

document.querySelector('input').addEventListener('select', () => alert('No copying!'));

// dblclick

document.querySelectorAll('.content-pick .btn').forEach(btn => btn.addEventListener('dblclick', (e) => e.target.style.display = 'none'));

// Nest two similar events somewhere in the site and prevent the event propagation properly

// Stop the navigation from items from refreshing the page by using preventDefault()
document.querySelectorAll('nav a').forEach(navLink => {
        navLink.addEventListener('click', (e) => e.preventDefault())
    }
);