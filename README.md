# Basic Physics
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


# How to use it?

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

# Static Objects
There are two types of static objects: rectangles and diagonals. You can add a rectangle using:
```js
new Rectangle(x, y, width, height);
```
Where x, y, width, and height are replaced with their corresponding values.

You can add a diagonal line using:
```js
new Diagonal(x1, y1, x2, y2);
```
Where the diagonal line goes from the point (x1,y1) to the point (x2,y2).

# Moving Objects
...
