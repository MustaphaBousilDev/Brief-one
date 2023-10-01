let player1=document.querySelector('.player1')
let player2=document.querySelector('.player2')
document.querySelector('.button_start').addEventListener('click',()=>{
    let name_player1=''
    let name_player2=''
    console.log('rotorotor')
    if(player1.value=='' || player2.value==''){
       console.log('error')
    }
    else{
      name_player1=player1.value
      name_player2=player2.value
      storeLocalStorage(name_player1, name_player2);
    }
})


function storeLocalStorage(player1Name, player2Name){
   // Create initial player objects with scores set to 0
   const player1Obj = { name: player1Name, score: 0 };
   const player2Obj = { name: player2Name, score: 0 };

   // Store the player objects in local storage as JSON strings
   localStorage.setItem('player1', JSON.stringify(player1Obj));
   localStorage.setItem('player2', JSON.stringify(player2Obj));

   window.location.href='index.html'
}