// Code your solutions in this file
function countDown(num){
  while (num >= 0){
    console.log(num)
    num--
  }
}

function writeCards(gift, event){
<<<<<<< HEAD
  let cards = []
  for (let i = 0; i < gift.length; i++) {
   cards.push(`Thank you, ${gift[i]}, for the wonderful ${event} gift!`);
  }
  return cards
  
=======
  for (i = 0, i < gift.length(), i++){
    console.log(`Thank you, ${gift[i]}, for the wonderful ${event} gift!`);
  }
>>>>>>> 0e84738a752c7bb51671e83cb0097d48c660c704
}
