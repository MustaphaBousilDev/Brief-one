let game=document.querySelector('.tac-gaming')


//let x=false

let  X=0
let  O=0

let arrs=Array(20).fill().map(()=>Array(20).fill(''))

let currentPlayer='X'





function createTac(d=20){
    for(let i=0; i<d;i++){
        for(let j=0;j<d;j++){
            let caree=document.createElement('div')
            caree.className='carree'
            let label =document.createElement('label')
            label.setAttribute('for',`${i}-${j}`)
            label.setAttribute('for',`${i}-${j}`)
            label.setAttribute('data-i',`${i}`)
            label.setAttribute('data-j',`${j}`)
            label.addEventListener('click',handleClick)
            caree.appendChild(label)
            
            caree.style.width=`calc(${100/d}% - 1px)`
            caree.style.height=`calc(${100/d}% - 1px)`
            game.appendChild(caree)
            if(j==3 && i==2){
                caree.style.backgroundColor="red"
            }
        }
    }
}

createTac(20)

function handleClick(event){
   let row=event.target.dataset.i 
   let col=event.target.dataset.j
   arrs[row][col]=currentPlayer
   event.target.textContent=currentPlayer
   let winner=Winner(row,col)
   if(winner){
    CounterWinner()
    Done()
   }
   else{
    currentPlayer= currentPlayer==='X' ? 'O' : 'X'
    event.target.removeEventListener('click',handleClick)
    
   }
}


let carree =document.querySelectorAll('.tac-gaming .carree')

/*carree.forEach((carr)=>{
    //console.log('totto')
    carr.querySelector('label').addEventListener('click',(e)=>{
        
        //console.log(carr.querySelector('label').nextSibling.id)
        if(!carr.querySelector('label').classList.contains('blue') && !carr.querySelector('label').classList.contains('orange')){
            x= !x
            switchXO(x,carr)
        }
        
        carr.querySelector('label').style.cursor='not-allowed'
        
        
    })
})*/

function CounterWinner(){
    if(currentPlayer==='X' ){
        X++
    }else{
        O++
    }
    console.log('winner is X=',X)
    console.log('winner is O=',O)
}



function switchXO(x,carr){
    let carree =document.querySelectorAll('.tac-gaming .carree')
    //console.log(x)
    switch(x){
        case true :
            
            if(!carr.querySelector('label').classList.contains('orange')){
                //console.log('x')
                carr.querySelector('label').classList.add('blue')
                const str=carr.querySelector('label').nextSibling.id
                //console.log(str)
                const numbersArray = str.split('-').map(Number);
                const numbersArray2 =numbersArray;
                const numbersArray3= numbersArray;
                const numbersArray4= numbersArray;
                let dd=0
                let dd2=0
                let dd3=0
                let dd4=0
                let dd5=0
                //console.log(numbersArray)
                //console.log(numbersArray[0])
                
                carree.forEach((carrs,index)=>{ 
                    //console.log('index')
                    //console.log(index)
                    //console.log('toto')
                    //console.log(carrs.querySelector('label').dataset.i)
                    if(parseInt(carrs.querySelector('label').dataset.i)===numbersArray[0]){
                        if(carrs.querySelector('label').classList.contains('blue')){
                            console.log('++')
                            dd++
                            if(dd >=5){
                                alert('blue is fucking succeess')
                            }  
                        }else{
                            dd=0
                        }
                    }
                   
                    
                    
                    
                    y_demonsion=parseInt(carr.querySelector('label').dataset.j)
                    x_demonsion=parseInt(carr.querySelector('label').dataset.i)
                    
                    
                    
                })
                carree.forEach((carrs,index)=>{ 
                    //console.log('index')
                    //console.log(index)
                    //console.log('toto')
                    //console.log(carrs.querySelector('label').dataset.i)
                    
                    //------------------------------------------------------------------------
                    if(parseInt(carrs.querySelector('label').dataset.j)===numbersArray[1]){
                        if(carrs.querySelector('label').classList.contains('blue')){
                            console.log('+++')
                            dd2++
                            if(dd2 >=5){
                                alert('blue is fucking success')
                            }  
                        }else{
                            dd2=0
                        }
                    }
                    //-------------------------------------------------------------------------
                    
                    
                    
                    
                    
                    
                    
                    y_demonsion=parseInt(carr.querySelector('label').dataset.j)
                    x_demonsion=parseInt(carr.querySelector('label').dataset.i)
                    
                    
                    
                })
                carree.forEach((carrs,index)=>{ 
                    //--------------------------------------------------
                    if(parseInt(carrs.querySelector('label').dataset.j)===(numbersArray4[1] ) && parseInt(carrs.querySelector('label').dataset.i)===(numbersArray4[0] )){
                        if(carrs.querySelector('label').classList.contains('blue')){
                            console.log('dd3')
                            console.log(dd3)
                            dd3++
                            if(dd3 >=5){
                                alert('blue is fucking success gouche')
                            }  
                        }else{
                            dd3=0
                        }
                        numbersArray4[1]++
                        numbersArray4[0]++
                    } 
                    
                   
                    
                    
                    
                    y_demonsion=parseInt(carr.querySelector('label').dataset.j)
                    x_demonsion=parseInt(carr.querySelector('label').dataset.i)
                    
                    
                    
                })
                carree.forEach((carrs,index)=>{ 
                    //--------------------------------------------------
                    if(parseInt(carrs.querySelector('label').dataset.j)===(numbersArray2[1] -5 ) && parseInt(carrs.querySelector('label').dataset.i)===(numbersArray2[0] -5 )){
                        if(carrs.querySelector('label').classList.contains('blue')){
                            console.log('dd4')
                            console.log(dd4)
                            dd4++
                            if(dd4 >=5){
                                alert('blue is fucking success gouche')
                            }  
                        }else{
                            dd4=0
                        }
                        numbersArray2[1]++
                        numbersArray2[0]++
                    } 
                    
                   
                    
                    
                    
                    y_demonsion=parseInt(carr.querySelector('label').dataset.j)
                    x_demonsion=parseInt(carr.querySelector('label').dataset.i)
                    
                    
                    
                })
                carree.forEach((carrs, index) =>{
                    if(parseInt(carrs.querySelector('label').dataset.j)===(numbersArray3[1] -5 ) && parseInt(carrs.querySelector('label').dataset.i)===(numbersArray3[0] -5 )){
                        if(carrs.querySelector('label').classList.contains('blue')){
                            console.log('dd5')
                            console.log(dd5)
                            dd5++
                            if(dd5 >=5){
                                alert('blue is fucking success gouche')
                            }  
                        }else{
                            dd5=0
                        }
                        numbersArray3[1]--
                        numbersArray3[0]--
                    } 
                })
                /*carree.forEach((carrs,index)=>{ 
                    //console.log('index')
                    //console.log(index)
                    //console.log('toto')
                    //console.log(carrs.querySelector('label').dataset.i)
                    
                    if(parseInt(carrs.querySelector('label').dataset.j)===(numbersArray3[1]) && parseInt(carrs.querySelector('label').dataset.i)===(numbersArray3[0])){
                        if(carrs.querySelector('label').classList.contains('blue')){
                            console.log('dd5')
                            console.log(dd5)
                            dd5++
                            if(dd5 >=5){
                                alert('blue is fucking success gouche')
                            }  
                        }else{
                            dd5=0
                        }
                        numbersArray3[1]--
                        numbersArray3[0]++
                    }
                    //--------------------------------------------
                    
                    
                    
                    y_demonsion=parseInt(carr.querySelector('label').dataset.j)
                    x_demonsion=parseInt(carr.querySelector('label').dataset.i)
                    
                    
                    
                })*/
                    
               
                
                
            
            }
            break;
        case false: 
            
            if(!carr.querySelector('label').classList.contains('blue')){
                //console.log('o')
                carr.querySelector('label').classList.add('orange')
            }
            break;
    }
}


function Winner(row,col){
    let win = (checkRight(row,col) + checkLeft(row,col) +1)===5 || 
    (checkTop(row,col) + checkBottom(row,col) +1)===5 || 
    (checkDiagLeftTop(row,col) + checkDiagRightBottom(row,col) +1)===5 ||
    (checkDiagRightTop(row,col) + checkDiagLeftBottom(row,col) +1)===5

    if(win) return true 
    return false 
}

function Done(){
    alert('game is over')
}

function checkBottom(row,col){
    let count = 0;

    // Check down
    for (let i = parseInt(row + 1); i < 20; i++) {
        if (arrs[i][col] === currentPlayer) {
            count++;
        } else { 
            break; // Stop counting if a different symbol is encountered
        }
    }

    return count;
}
function checkDiagLeftBottom(row,col){
    let count = 0;
    // Check down and left
    for(let i = parseInt(row) + 1, j = parseInt(col) - 1; i < 20 && j >= 0; i++, j--) {
        if (arrs[i][j] === currentPlayer) {
            count++;
        } else {
            break; // Stop counting if a different symbol is encountered
        }
    }
    return count;
}
function checkDiagLeftTop(row,col){
    let count = 0;
    // Check up and left
    for(let i = parseInt(row) - 1, j = parseInt(col) - 1; i >= 0 && j >= 0; i--, j--) {
        if (arrs[i][j] === currentPlayer) {
            count++;
        } else {
            break; // Stop counting if a different symbol is encountered
        }
    }
    return count;
}
function checkDiagRightBottom(row,col){
    let count = 0;
    // Check down and right
    for(let i = parseInt(row) + 1, j = parseInt(col) + 1; i < 20 && j < 20; i++, j++) {
        if (arrs[i][j] === currentPlayer) {
            count++;
        } else {
            break; // Stop counting if a different symbol is encountered
        }
    }
    return count;
}
function checkDiagRightTop(row,col){
    let count = 0;
    // Check up and right
    for(let i = parseInt(row) - 1, j = parseInt(col) + 1; i >= 0 && j < 20; i--, j++) {
        if (arrs[i][j] === currentPlayer) {
            count++;
        } else {
            break;
        }
    }
    return count;
}
function checkLeft(row,col){
    let count = 0;
    for (let i = col - 1; i >= 0; i--) {
        if (arrs[row][i] === currentPlayer) {
            count++;
        } else {
            break;
        }
    }
    return count;
}
function checkRight(row,col){
    let count = 0;
    for (let i = (parseInt(col) + 1) ; i < 20; i++) {
        console.log('current player right know is ')
        if (arrs[row][i] === currentPlayer) {
            count++;
        } else {
            break;
        }
    }
    return count;
}
function checkTop(row,col){
    let count = 0;

    // Check up
    for (let i = (row - 1); i >= 0; i--) {
        if (arrs[i][col] === currentPlayer) {
            count++;
        } else {
            break; 
        }
    }

    return count;
}