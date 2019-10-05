

// 1.1 make a button with an event listener 
$('button').on('click', () => {
  console.log('button works')

  // invoke function to populate squares
  game.createSquares(50);
  game.setTimer();
  
});





// 1.4 adding event listener on div square class, and when I click on a square the opacity will be zero
$('.squares').on('click',(e) => {
  console.log(e.target);

  // this make the squares look like they're being remove but actually just turning white 
  $(e.target).css('opacity','white')

// 1.5 this allows me to get the rgb of the square I selected 
const $color = $(e.target).css('backgroundColor')
console.log($color)



//1.6 this checks for the square colors 
game.checkValidPoke($color);

});





//1.2 make the game object to make the squares populate 
const game = {

  score: 0,
  time: 5,

//1.7 this make a timer and increase by one
  setTimer(){
    // grabs timer from the html
    const $timer = $('#timer');
    
    // makes the timers and if it reach 0 it stops  with clear interval
    const interval = setInterval(()=>{

      if (this.time === 0){
        clearInterval(interval)
        
      } else {
        this.time --
      }
      
      
      // updates the time on the DOM
      $timer.text(`timer:${this.time}s`)

    }, 1000)

  },

  createSquares(numberOfSquares){
    for (let i = 0; i < numberOfSquares; i++){
        const $square = $('<div/>');
        
        this.applyRandomColor($square)
        
        $('.squares').append($square);
    }
  },

 //1.3
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
  },

//1.6 this allows us to check the color and add score or not 
  checkValidPoke($color){

    if($color === 'rgb(0, 0, 255)'){
      this.score +=1;
    } else {
      this.score -=1;
    }

    // allows me to update the scoreboard once it clicks 
    $('#score').text(`Scoreboard:${this.score}`)
  }
}