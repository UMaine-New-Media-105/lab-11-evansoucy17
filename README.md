[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/tWjfPfxP)


The variables are -

frogX: Which holds the x-coordinate of the frog sprite.
frogY: Which holds the y-coordinate of the frog sprite.
frogSize: Which holds the size of the frog sprite.
cars: The array that holds all the Car objects.
carY: The array of y-coordinates for the cars.
carColor: The array of colors for the cars.

The functions are -

setup(): Which sets up the canvas, creates Car objects and pushes them to the cars array.
draw(): Which draws the lanes, moves the cars, checks for collisions, and displays the frog.
keyPressed(): Which checks for keyboard input and moves the frog accordingly.
displayFrog(): Which displays the frog on the canvas.
lanes(): Which draws the lanes on the canvas.
moveCars(): Which moves the cars and displays them on the canvas.
checkCollisions(): Which checks for collisions between the frog and the cars.

There is only one class which is -
  Car: a class that represents a car in the game. Within the car class it has many variables which are-
    x: Which represents the x-coordinate of the car.
    y: Which represents the y-coordinate of the car.
    speed: Which effects the speed at which the car moves.
    color: Which effects the color of the car.
    width: Which effects the width of the car.
    height: Which effects the height of the car.
    direction: Which effectsthe direction in which the car moves (left or right).
    
 The car class also contains functions - 
 constructor (x, y, speed, color): The constructor initializes the Car object with the given parameters.
 move(): This moves the car horizontally on the canvas.
 display(): This displays the car on the canvas.
 
SUGGESTIONS- 
    GRAPHICS-
      1. If I had more time I would create sprites that look more like cars as well as a frog that actually looks like a frog and not a green square.
      2. I would add in a river with logs to make the game more intresting. 
      3. I might add some things in the background like bushes or a bee buzzing but to make the atmosphere of the world feel more real.
    
   GAMEPLAY-
      1. I would have lives so everytime you get hit you loose a lise and after 3 or so the game is over. 
      2. I would have a scoreboard that factors in how many attempts it took you to get across as well as moves and time. 
      3. I would create more levels so once you got to the top edge of the canvas instead of going back to the start it continued to another level.
