/****************************************************************************************************************************
 * Brent Chou
 * Rocket Patrol: New Galaxy
 * Time: 15 Hours
 * Create a new scrolling tile sprite for the background (5)
 * Allow the player to control the Rocket after it's fired (5)
 * Add your own (copyright-free) background music to the Play scene (please be mindful of the volume) (5)
 * Implement the 'FIRE' UI text from the original game (5)
 * Implement the speed increase that happens after 30 seconds in the original game (5)
 * Display the time remaining (in seconds) on the screen (10)
 * Create a new title screen (e.g., new artwork, typography, layout) (10)
 * Implement parallax scrolling for the background (10)
 * 
 * Notes On Parallax Scrolling:
 * The Parallax Scrolling bounds that I have set are weird. You can go all the way to the left, but there is an
 * invisible wall towards the right to prevent you from scrolling too far. You also have to finished going to the
 * left before you go to the right again.
 * 
 * Using a texture atlas, create a new animated sprite for the Spaceship enemies (10)
 * 
 * Notes On Spaceship Texture Atlas:
 * The ship spritesheet looks like it elongates itself, it is a little hard to tell initially. When the 30 second speed
 * increase occurs, it is much easier to see the animation change.
 * 
 * Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15)
 * Implement a new timing/scoring mechanism that adds time to the clock for successful hits (15)
 * 
 * Citations:
 * https://stackoverflow.com/questions/29148886/show-hide-sprites-texts-in-phaser
 * https://phaser.discourse.group/t/how-to-remove-text/742
 ****************************************************************************************************************************/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
 
// reverse keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;


