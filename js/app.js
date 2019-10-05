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
        $('.squares').append($square);
    }
  }
}