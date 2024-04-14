const btn = document.querySelector('.body__btn');
const blockImg = document.querySelector('.body__img');
const loade = document.querySelector(".loader");


btn.addEventListener('click', () => {
    loade.style.display = 'flex'
    console.dir(loade);   
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then((res) => {return res.json()})
    .then((dat) => {
        let block = ''
        dat.forEach(element => {
            block += `<img src="${element.url}"/>`
        });
        blockImg.innerHTML = block;
    })
    .finally(() =>{
        loade.style.display = 'none'
    })
});
