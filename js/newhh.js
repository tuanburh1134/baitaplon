let nav =document.getElementById('nav');
document.addEventListener('scroll', (event) => {
    if(window.scrollY>100){
        nav.classList.add('tofixed');
    }else{
        nav.classList.remove('tofixed');
    }
})