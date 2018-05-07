var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        
        // Add any variables that will be used by render AND update here:
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'#00972d');
            background.addChild(backgroundFill);
            
            // Strip of line near bottom left yellow corner of screen (Horizontal)
            var cornerOnePartOne = draw.rect(100, 25, '#e8ff4c');
            background.addChild(cornerOnePartOne);
            cornerOnePartOne.y = 600;
            // Strip of line near bottom left yellow corner of screen (Vertical)
            var cornerOnePartTwo = draw.rect(25, 100, '#e8ff4c');
            background.addChild(cornerOnePartTwo);
            cornerOnePartTwo.y = 600;
            cornerOnePartTwo.x = 100;
            // Three green lines with diagonal
            var lineOnePartOne = draw.line(20, 0, 20, 400, '#006700', 3);
            background.addChild(lineOnePartOne);
            
            var lineOnePartTwo = draw.line(20, 400, 150, 550, '#006700', 3);
            background.addChild(lineOnePartTwo);
            
            var lineOnePartThree = draw.line(150, 550, 150, 1000, '#006700', 3);
            background.addChild(lineOnePartThree);
            
            var lineTwoPartOne = draw.line(40, 0, 40, 393, '#006700', 3);
            background.addChild(lineTwoPartOne);
            
            var lineTwoPartTwo = draw.line(40, 393, 170, 543, '#006700', 3);
            background.addChild(lineTwoPartTwo);
            
            var lineTwoPartThree = draw.line(170, 543, 170, 1000, '#006700', 3);
            background.addChild(lineTwoPartThree);
            
            var lineThreePartOne = draw.line(60, 0, 60, 386, '#006700', 3);
            background.addChild(lineThreePartOne);
            
            var lineThreePartTwo = draw.line(60, 386, 190, 536, '#006700', 3);
            background.addChild(lineThreePartTwo);
            
            var lineThreePartThree = draw.line(190, 536, 190, 1000, '#006700', 3);
            background.addChild(lineThreePartThree);
            // Strip of line to left of chip
            var boxOnePartOne = draw.rect(25, 351, '#e8ff4c');
            boxOnePartOne.x = 80;
            background.addChild(boxOnePartOne);
            
            var boxOnePartTwo = draw.rect(130, 25, '#e8ff4c');
            boxOnePartTwo.x = 80;
            boxOnePartTwo.y = 351;
            background.addChild(boxOnePartTwo);
            
            var boxOnePartThree = draw.rect(25, 500, '#e8ff4c');
            boxOnePartThree.x = 210;
            boxOnePartThree.y = 351;
            background.addChild(boxOnePartThree);
            // Green line of chip
            var lineFourPartOne = draw.line(125, 0, 125, 330, '#006700', 3);
            background.addChild(lineFourPartOne);
            
            var lineFouPartTwo = draw.line(125, 330, 255, 330, '#006700', 3);
            background.addChild(lineFouPartTwo);
            
            var lineFourPartThree = draw.line(255, 330, 255, 1000, '#006700', 3);
            background.addChild(lineFourPartThree);
            // Chip
            var chipOne = draw.bitmap('img/chip.png');
            background.addChild(chipOne);
            chipOne.x = 150;
            chipOne.y = 50;
            chipOne.scaleX = 0.2;
            chipOne.scaleY = 0.2;
            // Green line right of chip
            var lineFivePartOne = draw.line(200, 0, 200, 30, '#006700', 3);
            background.addChild(lineFivePartOne);
            
            var lineFivePartTwo = draw.line(200, 30, 325, 30, '#006700', 3);
            background.addChild(lineFivePartTwo);
            
            var lineFivePartThree = draw.line(325, 30, 325, 250, '#006700', 3);
            background.addChild(lineFivePartThree);
            
            var lineFivePartFour = draw.line(325, 250, 275, 250, '#006700', 3);
            background.addChild(lineFivePartFour);
            
            var lineFivePartSix = draw.line(275, 250, 275, 1000, '#006700', 3);
            background.addChild(lineFivePartSix);
            // Strip of line right of chip
            var boxTwoPartOne = draw.rect(25, 500, '#e8ff4c');
            boxTwoPartOne.x = 350;
            background.addChild(boxTwoPartOne);
            
            var boxTwoPartTwo = draw.rect(55, 25, '#e8ff4c');
            boxTwoPartTwo.x = 295;
            boxTwoPartTwo.y = 475;
            background.addChild(boxTwoPartTwo);
            
            var boxTwoPartThree = draw.rect(25, 500, '#e8ff4c');
            boxTwoPartThree.x = 295;
            boxTwoPartThree.y = 475;
            background.addChild(boxTwoPartThree);
            // Port to left of yellow strip
            var slotOneBorder = draw.rect(40, 160, '#000000');
            slotOneBorder.x = 293;
            slotOneBorder.y = 280;
            background.addChild(slotOneBorder);
            
            var slotOnePort = draw.rect(20, 140, '#333333');
            slotOnePort.x = 303;
            slotOnePort.y = 290;
            background.addChild(slotOnePort);
            // Lines right of port
            var lineSixPartOne = draw.line(400, 0, 400, 525, '#006700', 3);
            background.addChild(lineSixPartOne);
            
            var lineSixPartTwo = draw.line(400, 525, 340, 585, '#006700', 3);
            background.addChild(lineSixPartTwo);
            
            var lineSixPartThree = draw.line(340, 585, 340, 1000, '#006700', 3);
            background.addChild(lineSixPartThree);
            
            var lineSeven = draw.line(420, 0, 420, 1000, '#006700', 3);
            background.addChild(lineSeven);
            
            var lineEight = draw.line(440, 0, 440, 1000, '#006700', 3);
            background.addChild(lineEight);
            
            var slotTwoBorder = draw.rect(50, 500, '#000000');
            slotTwoBorder.x = 356;
            slotTwoBorder.y = 600;
            background.addChild(slotTwoBorder);
            
            var slotTwoPort = draw.rect(30, 490, '#333333');
            slotTwoPort.x = 366;
            slotTwoPort.y = 610;
            background.addChild(slotTwoPort);
            // TODO: 3 - Add a moon and starfield
            
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            
            // TODO 4: Part 1 - Add a tree
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
            
            // TODO 5: Part 2 - Parallax
            

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
