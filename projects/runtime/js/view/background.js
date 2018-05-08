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
            
            var boxThree = draw. rect(25, 1000, '#e8ff4c');
            boxThree.x = 460;
            background.addChild(boxThree);
            // Chip left of yellow line
            var chipTwo = draw.bitmap('img/chip-1.png');
            background.addChild(chipTwo);
            chipTwo.x = 500;
            chipTwo.y = 500;
            chipTwo.scaleX = 0.2;
            chipTwo.scaleY = 0.2;
            // Green lines above chip
            var lineNinePartOne = draw.line(505, 0, 505, 485, '#006700', 3);
            background.addChild(lineNinePartOne);
            
            var lineNinePartTwo = draw.line(505, 485, 665, 485, '#006700', 3);
            background.addChild(lineNinePartTwo);
            
            var lineNinePartThree = draw.line(665, 485, 665, 1000, '#006700', 3);
            background.addChild(lineNinePartThree);
            
            var lineTenPartOne = draw.line(525, 0, 525, 465, '#006700', 3);
            background.addChild(lineTenPartOne);
            
            var lineTenPartTwo = draw.line(525, 465, 685, 465, '#006700', 3);
            background.addChild(lineTenPartTwo);
            
            var lineTenPartThree = draw.line(685, 465, 685, 1000, '#006700', 3);
            background.addChild(lineTenPartThree);
            
            var ramSlotOne = draw.rect(40, 425, '#000000');
            ramSlotOne.x = 545;
            ramSlotOne.y = 20;
            background.addChild(ramSlotOne);
            
            var ramPortOne = draw.rect(20, 405, '#333333');
            ramPortOne.x = 555;
            ramPortOne.y = 30;
            background.addChild(ramPortOne);
            
            var ramSlotTwo = draw.rect(40, 425, '#000000');
            ramSlotTwo.x = 605;
            ramSlotTwo.y = 20;
            background.addChild(ramSlotTwo);
            
            var ramPortTwo =  draw.rect(20, 405, '#333333');
            ramPortTwo.x = 615;
            ramPortTwo.y = 30;
            background.addChild(ramPortTwo);
            
            var lineEleven = draw.line(705, 0, 705, 1000, '#006700', 3);
            background.addChild(lineEleven);
            
            var chipThree = draw.bitmap('img/chip-2.png');
            background.addChild(chipThree);
            chipThree.x = 725;
            chipThree.y = 10;
            chipThree.scaleX = 0.2;
            chipThree.scaleY = 0.2;
            
            var boxFourPartOne = draw.rect(25, 180, '#e8ff4c');
            boxFourPartOne.x = 895;
            background.addChild(boxFourPartOne);
            
            var boxFourPartTwo = draw.rect(190, 25, '#e8ff4c');
            boxFourPartTwo.x = 730;
            boxFourPartTwo.y = 180;
            background.addChild(boxFourPartTwo);
            
            var boxFourPartThree = draw.rect(25, 700, '#e8ff4c');
            boxFourPartThree.x = 730;
            boxFourPartThree.y = 180;
            background.addChild(boxFourPartThree);
            
            var lineTwelvePartOne = draw.line(945, 0, 945, 230, '#006700', 3);
            background.addChild(lineTwelvePartOne);
            
            var lineTwelvePartTwo = draw.line(945, 230, 780, 395, '#006700', 3);
            background.addChild(lineTwelvePartTwo);
            
            var lineTwelvePartThree = draw.line(780, 395, 780, 1000, '#006700', 3);
            background.addChild(lineTwelvePartThree);
            
            var lineThirteenPartOne = draw.line(965, 0, 965, 239, '#006700', 3);
            background.addChild(lineThirteenPartOne);
            
            var lineThirteenPartTwo = draw.line(965, 239, 802, 402, '#006700', 3);
            background.addChild(lineThirteenPartTwo);
            
            var lineThirteenPartThree = draw.line(802, 402, 802, 1000, '#006700', 3);
            background.addChild(lineThirteenPartThree);
            
            var slotThreeBorder = draw.rect(40, 400, '#000000');
            slotThreeBorder.x = 850;
            slotThreeBorder.y = 400;
            background.addChild(slotThreeBorder);
            
            var slotThreePort = draw.rect(20, 380, '#333333');
            slotThreePort.x = 860;
            slotThreePort.y = 410;
            background.addChild(slotThreePort);
            
            var lineFourteenPartOne = draw.line(985, 0, 985, 248, '#006700', 3);
            background.addChild(lineFourteenPartOne);
            
            var lineFourteenPartTwo = draw.line(985, 248, 910, 325, '#006700', 3);
            background.addChild(lineFourteenPartTwo);
            
            var lineFourteenPartThree = draw.line(910, 325, 910, 1000, '#006700', 3);
            background.addChild(lineFourteenPartThree);
            
            var boxFivePartOne = draw.rect(25, 360, '#e8ff4c');
            boxFivePartOne.x = 1005;
            background.addChild(boxFivePartOne);
            
            var boxFivePartTwo = draw.rect(75, 25, '#e8ff4c');
            boxFivePartTwo.x = 930;
            boxFivePartTwo.y = 335;
            background.addChild(boxFivePartTwo);
            
            var boxFivePartThree = draw.rect(25, 700, '#e8ff4c');
            boxFivePartThree.x = 930;
            boxFivePartThree.y = 335;
            background.addChild(boxFivePartThree);
            
            var chipFour = draw.bitmap('img/chip-3.png');
            background.addChild(chipFour);
            chipFour.x = 1000;
            chipFour.y = 650;
            chipFour.scaleX = 0.2;
            chipFour.scaleY = 0.2;
            
            var lineFifteenPartOne = draw.line(1050, 0, 1050, 515, '#006700', 3);
            background.addChild(lineFifteenPartOne);
            
            var lineFifteenPartTwo = draw.line(1050, 515, 1170, 612, '#006700', 3);
            background.addChild(lineFifteenPartTwo);
            
            var lineFifteenPartThree = draw.line(1170, 612, 1170, 1000, '#006700', 3);
            background.addChild(lineFifteenPartThree);
            
            var boxSixPartOne = draw.rect(25, 510, '#e8ff4c');
            boxSixPartOne.x = 1070;
            background.addChild(boxSixPartOne);
            
            var boxSixPartTwo = draw.rect(120, 25, '#e8ff4c');
            boxSixPartTwo.x = 1070;
            boxSixPartTwo.y = 485;
            background.addChild(boxSixPartTwo);
            
            var boxSixPartThree = draw.rect(25, 500, '#e8ff4c');
            boxSixPartThree.x = 1190;
            boxSixPartThree.y = 485;
            background.addChild(boxSixPartThree);
            
            var slotFourBorder = draw.rect(80, 40, '#000000');
            slotFourBorder.x = 962;
            slotFourBorder.y = 367;
            background.addChild(slotFourBorder);
            
            var slotFourPort = draw.rect(60, 20, '#333333');
            slotFourPort.x = 972;
            slotFourPort.y = 377;
            background.addChild(slotFourPort);
            
            var slotFiveBorder = draw.rect(80, 40, '#000000');
            slotFiveBorder.x = 962;
            slotFiveBorder.y = 415;
            background.addChild(slotFiveBorder);
            
            var slotFivePort = draw.rect(60, 20, '#333333');
            slotFivePort.x = 972;
            slotFivePort.y = 425;
            background.addChild(slotFivePort);
            
            var slotSixBorder = draw.rect(80, 40, '#000000');
            slotSixBorder.x = 962;
            slotSixBorder.y = 463;
            background.addChild(slotSixBorder);
            
            var slotSixPort = draw.rect(60, 20, '#333333');
            slotSixPort.x = 972;
            slotSixPort.y = 473;
            background.addChild(slotSixPort);
            
            var chipFive = draw.bitmap('img/chip-4.png');
            background.addChild(chipFive);
            chipFive.x = 1125;
            chipFive.y = 300;
            chipFive.scaleX = 0.2;
            chipFive.scaleY = 0.2;
            
            var slotSevenBorder = draw.rect(40, 250, '#000000');
            slotSevenBorder.x = 1115;
            slotSevenBorder.y = 20;
            background.addChild(slotSevenBorder);
            
            var slotSevenPort = draw.rect(20, 230, '#333333');
            slotSevenPort.x = 1125;
            slotSevenPort.y = 30;
            background.addChild(slotSevenPort);
            
            var line16PartOne = draw.line(1180, 0, 1180, 200, '#006700', 3);
            background.addChild(line16PartOne);
            
            var line16PartTwo = draw.line(1180, 200, 1300, 320, '#006700', 3);
            background.addChild(line16PartTwo);
            
            var line16PartThree = draw.line(1300, 320, 1300, 1000, '#006700', 3);
            background.addChild(line16PartThree);
            
            var slotEightBorder = draw.rect(40, 500, '#000000');
            slotEightBorder.x = 1237;
            slotEightBorder.y = 500;
            background.addChild(slotEightBorder);
            
            var slotEightPort = draw.rect(20, 480, '#333333');
            slotEightPort.x = 1247;
            slotEightPort.y = 510;
            background.addChild(slotEightPort);
            
            var boxSevenPartOne = draw.rect(25, 200, '#e8ff4c');
            boxSevenPartOne.x = 1200;
            background.addChild(boxSevenPartOne);
            
            var boxSevenPartTwo = draw.rect(120, 25, '#e8ff4c');
            boxSevenPartTwo.x = 1200;
            boxSevenPartTwo.y = 175;
            background.addChild(boxSevenPartTwo);
            
            var boxSevenPartThree = draw.rect(25, 1000, '#e8ff4c');
            boxSevenPartThree.x = 1320,
            boxSevenPartThree.y = 175;
            background.addChild(boxSevenPartThree);
            
            var line17PartOne = draw.line(1250, 0, 1250, 50, '#006700', 3);
            background.addChild(line17PartOne);
            
            var line17PartTwo = draw.line(1250, 50, 1365, 165, '#006700', 3);
            background.addChild(line17PartTwo);
            
            var line17PartThree = draw.line(1365, 165, 1365, 1000, '#006700', 3);
            background.addChild(line17PartThree);
            
            var line18PartOne = draw.line(1270, 0, 1270, 41, '#006700', 3);
            background.addChild(line18PartOne);
            
            var line18PartTwo = draw.line(1270, 41, 1385, 156, '#006700', 3);
            background.addChild(line18PartTwo);
            
            var line18PartThree = draw.line(1385, 156, 1385, 1000, '#006700', 3);
            background.addChild(line18PartThree);
            
            var line19PartOne = draw.line(1290, 0, 1290, 32, '#006700', 3);
            background.addChild(line19PartOne);
            
            var line19PartTwo = draw.line(1290, 32, 1405, 147, '#006700', 3);
            background.addChild(line19PartTwo);
            
            var line19PartThree = draw.line(1405, 147, 1405, 1000, '#006700', 3);
            background.addChild(line19PartThree);
            
            var boxEight = draw.rect(25, 1000, '#e8ff4c');
            boxEight.x = 1425
            background.addChild(boxEight);
            
            var controlBackground = draw.rect(1440, 45, '#1a1a1a');
            controlBackground.y = 350;
            background.addChild(controlBackground);
            
            var floor = draw.rect(1440, 10,'#404040');
            floor.y = 341;
            background.addChild(floor);
            
            var scoreBackground = draw.rect(300, 25, '#1a1a1a');
            scoreBackground.x = 1230;
            background.addChild(scoreBackground);
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
