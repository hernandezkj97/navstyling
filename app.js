const btn = document.getElementById('toggle');

btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
    removeClass();
})

function removeClass(){
    btn.classList.remove('active');
}