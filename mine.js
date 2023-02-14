let body = document.querySelector('body');
body.style.backgroundColor = 'green';

window.onscroll = function(event){
    let y = this.scrollY;
    if(y < 400){
        body.style.backgroundColor = 'green'; 
    } else if (y >= 400 && y < 800){
        body.style.backgroundColor = 'yellow'; 
    }else if (y >= 800 && y < 1200){
        body.style.backgroundColor = 'blue'; 
    }else if (y >= 1200 && y < 1600){
        body.style.backgroundColor = 'orange'; 
    }else if (y >= 1600 && y < 2000){
        body.style.backgroundColor = 'red'; 
    }else if (y >= 2000 && y < 2400){
        body.style.backgroundColor = 'purple'; 
    }else if (y >= 2400 && y < 2800){
        body.style.backgroundColor = 'pink'; 
    }
}