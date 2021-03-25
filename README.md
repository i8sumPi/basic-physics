# Basic Physics
![image](http://kiraprograms.com/cat-throwing-game/final-demo.gif)

My basic 2d physics engine with everything you need for JavaScript games.

Creating your own physics for a JavaScript game can be a lot of work, 
and real physics engines can be really complicated, 
so unless you are trying to create very realistic physics simulations, 
my basic physics engine will be perfect for you!

It has everything you need for most games, for example platformers or angry birds.

## Features
1. Gravity
2. Collision detection between moving objects and static objects
3. Realistic bouncing
4. Spinning

## Limitations
1. Does not support moving objects bouncing against other moving objects
2. Moving objects must be generally circle/square shaped


# Table of Contents
1. Examples
  a. Cat Throwing Game
3. Installation
4. Objects
  a. Static Objects
  b. Moving Objects
3. Make Time Happen
4. Graphics
  a. Make the Moving Object an Image
5. Custom Parameters
6. Level Design


# Examples:
## Cat Throwing Game:
![image](http://kiraprograms.com/cat-throwing-game/final-demo.gif)

Play with it yourself at http://kiraprograms.com/cat-throwing-game

## Example Platformer
![image](...)

http://kiraprograms.com/...

# Installation
The easiest way to install and add this to a project is to download the script [basic-physics.js] and include it in your html.
```html
<script src="/path/to/basic-physics.js"></script>
```
Or, if you don't want to download anything, you can use the file on my website:
```html
<script src="http://kiraprograms.com/basic-physics.js"></script>
```

# Objects
There are two types of objects: static objects, and moving objects. Static objects are background objects that don't move, for example, the ground, or a level's obstacle. 
Moving objects are objects that move, and are impacted by gravity, etc. Note that, as of now, basic physics does not support moving objects bouncing against other moving objects.

## Static Objects
There are two types of static objects: rectangles and diagonals. You can add a rectangle using:
```js
new Rectangle(x, y, width, height, params);
```
Where x, y, width, and height are replaced with their corresponding values. `params` is an optional object which you can include to add extra customization (see [custom parameters]). For now, you can ignore it.

You can add a diagonal line using:
```js
new Diagonal(x1, y1, x2, y2, params);
```
Where the diagonal line goes from the point (x1,y1) to the point (x2,y2).

## Moving Objects
As of now, the only moving objects supported are circles. A moving object would be the player in a game (see [how to use static objects for enemies]). You can add a moving object using:
```js
var player = new MovingObject({
  x: ___, //the initial x position of the object
  y: ___, //the initial y position of the object
  xSp: ___, //the initial x speed of the object
  ySp: ___, //the initial y speed of the object
  size: ___, //the diameter of the circle
  rotation: ___, //the initial rotation, in degrees
  rotSp: ___, //the initial rotation speed, in degrees
  bounciness: ___ //how bouncy the object is
});
```
A low bounciness, such as 0.2, would make it not bounce very much, while a high bounciness, such as 0.9, would make it bounce to 90% of its previous height. 

You do not need to include all of these parameters because some of them have default values. The default of `rotation` is 0, the default of `rotSp` is 0, the default of `bounciness` is 0.8, and the default of `size` is 50.

After creating the object, you can access and change these parameters using `player.x`, `player.y`, etc.

# Make Time Happen
The function `timestep()` represents 30 milliseconds of time passing, and moves all of the moving objects. In order to make time happen, use the code:
```js
setInterval(timestep, 30);
```

# Graphics
Right now, the graphics and display of the objects is pretty bland. You might want to add your own custom graphics. You can do this by changing the function used to draw the objects. Make sure to change ths function before defining the first object in order to not use the old drawing function.

To change the function for drawing rectangles, to make all of the rectangles red, use:
```js
Rectangle.prototype.draw = function(){
  //enter custom drawing function here
  ctx.fillStyle = "red";
  ctx.fillRect(this.x,this.y,this.width,this.height);
}
```
Note that I am using `function(){` instead of `()=>{`. To access information about the object you are drawing, use `this`.

To change the function for diagonals, use:
```js
Diag.prototype.draw = function(){
  //enter custom drawing function here
}
```

## Make the Moving Object an Image
You can use the same thing to change how a moving object is drawn. In this example, I will make the moving object an image of a cat. The code for this is:
```js
MovingObject.prototype.draw = function(){
  //this is the code to draw a rotated image.
  
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.rotation*Math.PI/180); // rotate the canvas around the center, which is this.x and this.y
  
  ctx.drawImage(
    document.getElementById("catImg"), // what image to draw
    -this.size/2, // x position
    -this.size/2, // y position
    this.size, // width
    this.size // height
  );

  ctx.restore(); // un-rotate the canvas
}
```
In this case, you also have to have an image with the id `catImg`, so in the HTML, you need:
```html
<img src="weet.png" id="catImg" style="display:none;">
```

# 
