btn = document.querySelector('.btn')
button = document.getElementById('start-button')
link = document.getElementById('links')


button.addEventListener('click', () => {
button.classList.add('invisible')
links.classList.add('visible')
})


btn.addEventListener('click', () => {
    var randomNumber1 = Math.floor(Math.random() * 256);
    var randomNumber2 = Math.floor(Math.random() * 256);
    var randomNumber3 = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + randomNumber1 + "," + randomNumber2 + "," + randomNumber3 + ")";
    document.body.style.backgroundColor = rgb;
    document.body.classList.remove('instant-color-change');

})
