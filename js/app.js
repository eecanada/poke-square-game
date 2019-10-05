// make a button with an event listener 
$('button').on('click', () => {
  console.log('button works')

  // invoke function to populate squares
  game.createSquares(50);
});

// make the game object to make the squares populate 
const game = {
  createSquares(numberOfSquares){
    for (let i = 0; i < numberOfSquares; i++){
        const $square = $('<div/>');
        
        this.applyRandomColor($square)
        
        $('.squares').append($square);
    }
  },

 
  applyRandomColor($square){
    // 3 colors are assigned a digit 
    const randomNUmber = Math.floor(Math.random() * 3)
    if (randomNUmber === 0){
       $square.css('background-color','red')
    } else if (randomNUmber === 1 ){
      $square.css('background-color','blue')
    } else if (randomNUmber === 2){
      $square.css('background-color','green')
    }

    


  }
}