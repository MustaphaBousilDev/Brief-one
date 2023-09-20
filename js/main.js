let game=document.querySelector('.tac-gaming')




function createTac(d=20){
    for(let i=0; i<d;i++){
        for(let j=0;j<d;j++){
            let caree=document.createElement('div')
            caree.className='carree'
            let inputRadio = document.createElement('input')
            inputRadio.setAttribute('type','radio')
            caree.appendChild(inputRadio)
            caree.style.width=`calc(${100/d}% - 1px)`
            caree.style.height=`calc(${100/d}% - 1px)`
            game.appendChild(caree)
        }
    }
}

createTac(20)