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
        // Control, score, floor, and image variables
        var controlBackground;
        var scoreBackground;
        var floor;
        var chipOne;
        var chipTwo;
        var chipThree;
        var chipFour;
        var chipFive;
        
        var cornerOnePartOne;
        var cornerOnePartTwo;
        
        var boxOnePartOne;
        var boxOnePartTwo;
        var boxOnePartThree;
        var boxTwoPartOne;
        var boxTwoPartTwo;
        var boxTwoPartThree;
        var boxThree;
        var boxFourPartOne;
        var boxFourPartTwo;
        var boxFourPartThree;
        var boxFivePartOne;
        var boxFivePartTwo;
        var boxFivePartThree;
        var boxSixPartOne;
        var boxSixPartTwo;
        var boxSixPartThree;
        var boxSevenPartOne;
        var boxSevenPartTwo;
        var boxSevenPartThree;
        var boxEight;
        
        var lineOnePartOne;
        var lineOnePartTwo;
        var lineOnePartThree;
        var lineTwoPartOne;
        var lineTwoPartTwo;
        var lineTwoPartThree;
        var lineThreePartOne;
        var lineThreePartTwo;
        var lineThreePartThree;
        var lineFourPartOne;
        var lineFourPartTwo;
        var lineFourPartThree;
        var lineFivePartOne;
        var lineFivePartTwo;
        var lineFivePartThree;
        var lineFivePartFour;
        var lineFivePartFive;
        var lineSixPartOne;
        var lineSixPartTwo;
        var lineSixPartThree;
        var lineSeven;
        var lineEight;
        var lineNinePartOne;
        var lineNinePartTwo;
        var lineNinePartThree;
        var lineTenPartOne;
        var lineTenPartTwo;
        var lineTenPartThree;
        var lineEleven;
        var lineTwelvePartOne;
        var lineTwelvePartTwo;
        var lineTwelvePartThree;
        var lineThirteenPartOne;
        var lineThirteenPartTwo;
        var lineThirteenPartThree;
        var lineFourteenPartOne;
        var lineFourteenPartTwo;
        var lineFourteenPartThree;
        var lineFifteenPartOne;
        var lineFifteenPartTwo;
        var lineFifteenPartThree;
        var line16PartOne;
        var line16PartTwo;
        var line16PartThree;
        var line17PartOne;
        var line17PartTwo
        var line17PartThree;
        var line18PartOne;
        var line18PartTwo;
        var line18PartThree;
        var line19PartOne;
        var line19PartTwo;
        var line19PartThree;
        
        var slotOneBorder;
        var slotOnePort;
        var slotTwoBorder;
        var slotTwoPort;
        var slotThreeBorder;
        var slotThreePort;
        var slotFourBorder;
        var slotFourPort;
        var slotFiveBorder;
        var slotFivePort;
        var slotSixBorder;
        var slotSixPort;
        var slotSevenBorder;
        var slotSevenPort;
        var slotEightBorder;
        var slotEightPort;
        var ramSlotOne;
        var ramPortOne;
        var ramSlotTwo;
        var ramPortTwo;
        
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
            
            // TODO: 3 - Add a moon and starfield
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'#00972d');
            background.addChild(backgroundFill);
            
            chipOne = draw.bitmap('img/chip.png');
            background.addChild(chipOne);
            chipOne.x = 150;
            chipOne.y = 50;
            chipOne.scaleX = 0.2;
            chipOne.scaleY = 0.2;
            
            chipTwo = draw.bitmap('img/chip.png');
            background.addChild(chipTwo);
            chipTwo.x = 500;
            chipTwo.y = 500;
            chipTwo.scaleX = 0.2;
            chipTwo.scaleY = 0.2;
            
            chipThree = draw.bitmap('img/chip.png');
            background.addChild(chipThree);
            chipThree.x = 725;
            chipThree.y = 10;
            chipThree.scaleX = 0.2;
            chipThree.scaleY = 0.2;
            
            chipFour = draw.bitmap('img/chip.png');
            background.addChild(chipFour);
            chipFour.x = 1000;
            chipFour.y = 650;
            chipFour.scaleX = 0.2;
            chipFour.scaleY = 0.2;
            
            chipFive = draw.bitmap('img/chip.png');
            background.addChild(chipFive);
            chipFive.x = 1125;
            chipFive.y = 300;
            chipFive.scaleX = 0.2;
            chipFive.scaleY = 0.2;
            
            cornerOnePartOne = draw.rect(110, 25, '#e8ff4c');
            background.addChild(cornerOnePartOne);
            cornerOnePartOne.y = 600;
            
            cornerOnePartTwo = draw.rect(25, 100, '#e8ff4c');
            background.addChild(cornerOnePartTwo);
            cornerOnePartTwo.y = 600;
            cornerOnePartTwo.x = 100;
            
            boxOnePartOne = draw.rect(25, 351, '#e8ff4c');
            boxOnePartOne.x = 80;
            background.addChild(boxOnePartOne);
            
            boxOnePartTwo = draw.rect(130, 25, '#e8ff4c');
            boxOnePartTwo.x = 80;
            boxOnePartTwo.y = 351;
            background.addChild(boxOnePartTwo);
            
            boxOnePartThree = draw.rect(25, 500, '#e8ff4c');
            boxOnePartThree.x = 210;
            boxOnePartThree.y = 351;
            background.addChild(boxOnePartThree);
            
            boxTwoPartOne = draw.rect(25, 500, '#e8ff4c');
            boxTwoPartOne.x = 350;
            background.addChild(boxTwoPartOne);
            
            boxTwoPartTwo = draw.rect(55, 25, '#e8ff4c');
            boxTwoPartTwo.x = 295;
            boxTwoPartTwo.y = 475;
            background.addChild(boxTwoPartTwo);
            
            boxTwoPartThree = draw.rect(25, 500, '#e8ff4c');
            boxTwoPartThree.x = 295;
            boxTwoPartThree.y = 475;
            background.addChild(boxTwoPartThree);
            
            boxThree = draw. rect(25, 1000, '#e8ff4c');
            boxThree.x = 460;
            background.addChild(boxThree);
            
            boxFourPartOne = draw.rect(25, 180, '#e8ff4c');
            boxFourPartOne.x = 895;
            background.addChild(boxFourPartOne);
            
            boxFourPartTwo = draw.rect(190, 25, '#e8ff4c');
            boxFourPartTwo.x = 730;
            boxFourPartTwo.y = 180;
            background.addChild(boxFourPartTwo);
            
            boxFourPartThree = draw.rect(25, 700, '#e8ff4c');
            boxFourPartThree.x = 730;
            boxFourPartThree.y = 180;
            background.addChild(boxFourPartThree);
            
            boxFivePartOne = draw.rect(25, 360, '#e8ff4c');
            boxFivePartOne.x = 1005;
            background.addChild(boxFivePartOne);
            
            boxFivePartTwo = draw.rect(75, 25, '#e8ff4c');
            boxFivePartTwo.x = 930;
            boxFivePartTwo.y = 335;
            background.addChild(boxFivePartTwo);
            
            boxFivePartThree = draw.rect(25, 700, '#e8ff4c');
            boxFivePartThree.x = 930;
            boxFivePartThree.y = 335;
            background.addChild(boxFivePartThree);
            
            boxSixPartOne = draw.rect(25, 510, '#e8ff4c');
            boxSixPartOne.x = 1070;
            background.addChild(boxSixPartOne);
            
            boxSixPartTwo = draw.rect(120, 25, '#e8ff4c');
            boxSixPartTwo.x = 1070;
            boxSixPartTwo.y = 485;
            background.addChild(boxSixPartTwo);
            
            boxSixPartThree = draw.rect(25, 500, '#e8ff4c');
            boxSixPartThree.x = 1190;
            boxSixPartThree.y = 485;
            background.addChild(boxSixPartThree);
            
            boxSevenPartOne = draw.rect(25, 200, '#e8ff4c');
            boxSevenPartOne.x = 1200;
            background.addChild(boxSevenPartOne);
            
            boxSevenPartTwo = draw.rect(120, 25, '#e8ff4c');
            boxSevenPartTwo.x = 1200;
            boxSevenPartTwo.y = 175;
            background.addChild(boxSevenPartTwo);
            
            boxSevenPartThree = draw.rect(25, 1000, '#e8ff4c');
            boxSevenPartThree.x = 1320,
            boxSevenPartThree.y = 175;
            background.addChild(boxSevenPartThree);
            
            boxEight = draw.rect(25, 1000, '#e8ff4c');
            boxEight.x = 1425;
            background.addChild(boxEight);
            
            lineOnePartOne = draw.line(20, 0, 20, 400, '#006700', 3);
            background.addChild(lineOnePartOne);
            
            lineOnePartTwo = draw.line(20, 400, 150, 550, '#006700', 3);
            background.addChild(lineOnePartTwo);
            
            lineOnePartThree = draw.line(150, 550, 150, 1000, '#006700', 3);
            background.addChild(lineOnePartThree);
            
            lineTwoPartOne = draw.line(40, 0, 40, 393, '#006700', 3);
            background.addChild(lineTwoPartOne);
            
            lineTwoPartTwo = draw.line(40, 393, 170, 543, '#006700', 3);
            background.addChild(lineTwoPartTwo);
            
            lineTwoPartThree = draw.line(170, 543, 170, 1000, '#006700', 3);
            background.addChild(lineTwoPartThree);
            
            lineThreePartOne = draw.line(60, 0, 60, 386, '#006700', 3);
            background.addChild(lineThreePartOne);
            
            lineThreePartTwo = draw.line(60, 386, 190, 536, '#006700', 3);
            background.addChild(lineThreePartTwo);
            
            lineThreePartThree = draw.line(190, 536, 190, 1000, '#006700', 3);
            background.addChild(lineThreePartThree);
            
            lineFourPartOne = draw.line(125, 0, 125, 330, '#006700', 3);
            background.addChild(lineFourPartOne);
            
            lineFourPartTwo = draw.line(125, 330, 255, 330, '#006700', 3);
            background.addChild(lineFourPartTwo);
            
            lineFourPartThree = draw.line(255, 330, 255, 1000, '#006700', 3);
            background.addChild(lineFourPartThree);
            
            lineFivePartOne = draw.line(200, 0, 200, 30, '#006700', 3);
            background.addChild(lineFivePartOne);
            
            lineFivePartTwo = draw.line(200, 30, 325, 30, '#006700', 3);
            background.addChild(lineFivePartTwo);
            
            lineFivePartThree = draw.line(325, 30, 325, 250, '#006700', 3);
            background.addChild(lineFivePartThree);
            
            lineFivePartFour = draw.line(325, 250, 275, 250, '#006700', 3);
            background.addChild(lineFivePartFour);
            
            lineFivePartFive = draw.line(275, 250, 275, 1000, '#006700', 3);
            background.addChild(lineFivePartFive);
            
            lineSixPartOne = draw.line(400, 0, 400, 525, '#006700', 3);
            background.addChild(lineSixPartOne);
            
            lineSixPartTwo = draw.line(400, 525, 340, 585, '#006700', 3);
            background.addChild(lineSixPartTwo);
            
            lineSixPartThree = draw.line(340, 585, 340, 1000, '#006700', 3);
            background.addChild(lineSixPartThree);
            
            lineSeven = draw.line(420, 0, 420, 1000, '#006700', 3);
            background.addChild(lineSeven);
            
            lineEight = draw.line(440, 0, 440, 1000, '#006700', 3);
            background.addChild(lineEight);
            
            lineNinePartOne = draw.line(505, 0, 505, 485, '#006700', 3);
            background.addChild(lineNinePartOne);
            
            lineNinePartTwo = draw.line(505, 485, 665, 485, '#006700', 3);
            background.addChild(lineNinePartTwo);
            
            lineNinePartThree = draw.line(665, 485, 665, 1000, '#006700', 3);
            background.addChild(lineNinePartThree);
            
            lineTenPartOne = draw.line(525, 0, 525, 465, '#006700', 3);
            background.addChild(lineTenPartOne);
            
            lineTenPartTwo = draw.line(525, 465, 685, 465, '#006700', 3);
            background.addChild(lineTenPartTwo);
            
            lineTenPartThree = draw.line(685, 465, 685, 1000, '#006700', 3);
            background.addChild(lineTenPartThree);
            
            lineEleven = draw.line(705, 0, 705, 1000, '#006700', 3);
            background.addChild(lineEleven);
            
            lineTwelvePartOne = draw.line(945, 0, 945, 230, '#006700', 3);
            background.addChild(lineTwelvePartOne);
            
            lineTwelvePartTwo = draw.line(945, 230, 780, 395, '#006700', 3);
            background.addChild(lineTwelvePartTwo);
            
            lineTwelvePartThree = draw.line(780, 395, 780, 1000, '#006700', 3);
            background.addChild(lineTwelvePartThree);
            
            lineThirteenPartOne = draw.line(965, 0, 965, 239, '#006700', 3);
            background.addChild(lineThirteenPartOne);
            
            lineThirteenPartTwo = draw.line(965, 239, 802, 402, '#006700', 3);
            background.addChild(lineThirteenPartTwo);
            
            lineThirteenPartThree = draw.line(802, 402, 802, 1000, '#006700', 3);
            background.addChild(lineThirteenPartThree);
            
            lineFourteenPartOne = draw.line(985, 0, 985, 248, '#006700', 3);
            background.addChild(lineFourteenPartOne);
            
            lineFourteenPartTwo = draw.line(985, 248, 910, 325, '#006700', 3);
            background.addChild(lineFourteenPartTwo);
            
            lineFourteenPartThree = draw.line(910, 325, 910, 1000, '#006700', 3);
            background.addChild(lineFourteenPartThree);
            
            lineFifteenPartOne = draw.line(1050, 0, 1050, 515, '#006700', 3);
            background.addChild(lineFifteenPartOne);
            
            lineFifteenPartTwo = draw.line(1050, 515, 1170, 612, '#006700', 3);
            background.addChild(lineFifteenPartTwo);
            
            lineFifteenPartThree = draw.line(1170, 612, 1170, 1000, '#006700', 3);
            background.addChild(lineFifteenPartThree);
            
            line16PartOne = draw.line(1180, 0, 1180, 200, '#006700', 3);
            background.addChild(line16PartOne);
            
            line16PartTwo = draw.line(1180, 200, 1300, 320, '#006700', 3);
            background.addChild(line16PartTwo);
            
            line16PartThree = draw.line(1300, 320, 1300, 1000, '#006700', 3);
            background.addChild(line16PartThree);
            
            line17PartOne = draw.line(1250, 0, 1250, 50, '#006700', 3);
            background.addChild(line17PartOne);
            
            line17PartTwo = draw.line(1250, 50, 1365, 165, '#006700', 3);
            background.addChild(line17PartTwo);
            
            line17PartThree = draw.line(1365, 165, 1365, 1000, '#006700', 3);
            background.addChild(line17PartThree);
            
            line18PartOne = draw.line(1270, 0, 1270, 41, '#006700', 3);
            background.addChild(line18PartOne);
            
            line18PartTwo = draw.line(1270, 41, 1385, 156, '#006700', 3);
            background.addChild(line18PartTwo);
            
            line18PartThree = draw.line(1385, 156, 1385, 1000, '#006700', 3);
            background.addChild(line18PartThree);
            
            line19PartOne = draw.line(1290, 0, 1290, 32, '#006700', 3);
            background.addChild(line19PartOne);
            
            line19PartTwo = draw.line(1290, 32, 1405, 147, '#006700', 3);
            background.addChild(line19PartTwo);
            
            line19PartThree = draw.line(1405, 147, 1405, 1000, '#006700', 3);
            background.addChild(line19PartThree);
            
            slotOneBorder = draw.rect(40, 160, '#000000');
            slotOneBorder.x = 293;
            slotOneBorder.y = 280;
            background.addChild(slotOneBorder);
            
            slotOnePort = draw.rect(20, 140, '#333333');
            slotOnePort.x = 303;
            slotOnePort.y = 290;
            background.addChild(slotOnePort);
            
            slotTwoBorder = draw.rect(50, 500, '#000000');
            slotTwoBorder.x = 356;
            slotTwoBorder.y = 600;
            background.addChild(slotTwoBorder);
            
            slotTwoPort = draw.rect(30, 490, '#333333');
            slotTwoPort.x = 366;
            slotTwoPort.y = 610;
            background.addChild(slotTwoPort);
            
            slotThreeBorder = draw.rect(40, 400, '#000000');
            slotThreeBorder.x = 850;
            slotThreeBorder.y = 400;
            background.addChild(slotThreeBorder);
            
            slotThreePort = draw.rect(20, 380, '#333333');
            slotThreePort.x = 860;
            slotThreePort.y = 410;
            background.addChild(slotThreePort);
            
            slotFourBorder = draw.rect(80, 40, '#000000');
            slotFourBorder.x = 962;
            slotFourBorder.y = 367;
            background.addChild(slotFourBorder);
            
            slotFourPort = draw.rect(60, 20, '#333333');
            slotFourPort.x = 972;
            slotFourPort.y = 377;
            background.addChild(slotFourPort);
            
            slotFiveBorder = draw.rect(80, 40, '#000000');
            slotFiveBorder.x = 962;
            slotFiveBorder.y = 415;
            background.addChild(slotFiveBorder);
            
            slotFivePort = draw.rect(60, 20, '#333333');
            slotFivePort.x = 972;
            slotFivePort.y = 425;
            background.addChild(slotFivePort);
            
            slotSixBorder = draw.rect(80, 40, '#000000');
            slotSixBorder.x = 962;
            slotSixBorder.y = 463;
            background.addChild(slotSixBorder);
            
            slotSixPort = draw.rect(60, 20, '#333333');
            slotSixPort.x = 972;
            slotSixPort.y = 473;
            background.addChild(slotSixPort);
            
            slotSevenBorder = draw.rect(40, 250, '#000000');
            slotSevenBorder.x = 1115;
            slotSevenBorder.y = 20;
            background.addChild(slotSevenBorder);
            
            slotSevenPort = draw.rect(20, 230, '#333333');
            slotSevenPort.x = 1125;
            slotSevenPort.y = 30;
            background.addChild(slotSevenPort);
            
            slotEightBorder = draw.rect(40, 500, '#000000');
            slotEightBorder.x = 1237;
            slotEightBorder.y = 500;
            background.addChild(slotEightBorder);
            
            slotEightPort = draw.rect(20, 480, '#333333');
            slotEightPort.x = 1247;
            slotEightPort.y = 510;
            background.addChild(slotEightPort);
            
            ramSlotOne = draw.rect(40, 425, '#000000');
            ramSlotOne.x = 545;
            ramSlotOne.y = 20;
            background.addChild(ramSlotOne);
            
            ramPortOne = draw.rect(20, 405, '#333333');
            ramPortOne.x = 555;
            ramPortOne.y = 30;
            background.addChild(ramPortOne);
            
            ramSlotTwo = draw.rect(40, 425, '#000000');
            ramSlotTwo.x = 605;
            ramSlotTwo.y = 20;
            background.addChild(ramSlotTwo);
            
            ramPortTwo =  draw.rect(20, 405, '#333333');
            ramPortTwo.x = 615;
            ramPortTwo.y = 30;
            background.addChild(ramPortTwo);
            
            scoreBackground = draw.rect(300, 25, '#1a1a1a');
            scoreBackground.x = 1230;
            background.addChild(scoreBackground);
            
            controlBackground = draw.rect(1440, 45, '#1a1a1a');
            controlBackground.y = 350;
            background.addChild(controlBackground);
            
            floor = draw.rect(1440, 10,'#404040');
            floor.y = 341;
            background.addChild(floor);
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
            chipOne.x = chipOne.x - 0.2;
            chipTwo.x = chipTwo.x - 0.2;
            chipThree.x = chipThree.x - 0.2;
            chipFour.x = chipFour.x - 0.2;
            chipFive.x = chipFive.x - 0.2;
            
            cornerOnePartOne.x = cornerOnePartOne.x - 0.2;
            cornerOnePartTwo.x = cornerOnePartTwo.x - 0.2;
            
            boxOnePartOne.x = boxOnePartTwo.x - 0.2;
            boxOnePartTwo.x = boxOnePartTwo.x - 0.2;
            boxOnePartThree.x = boxOnePartThree.x - 0.2;
            boxTwoPartOne.x = boxTwoPartOne.x - 0.2;
            boxTwoPartTwo.x = boxTwoPartTwo.x - 0.2;
            boxTwoPartThree.x = boxTwoPartThree.x - 0.2;
            boxThree.x = boxThree.x - 0.2;
            boxFourPartOne.x = boxFourPartOne.x - 0.2;
            boxFourPartTwo.x = boxFourPartTwo.x - 0.2;
            boxFourPartThree.x = boxFourPartThree.x - 0.2;
            boxFivePartOne.x = boxFivePartOne.x - 0.2;
            boxFivePartTwo.x = boxFivePartTwo.x - 0.2;
            boxFivePartThree.x = boxFivePartThree.x - 0.2;
            boxSixPartOne.x = boxSixPartOne.x - 0.2;
            boxSixPartTwo.x = boxSixPartTwo.x - 0.2;
            boxSixPartThree.x = boxSixPartThree.x - 0.2;
            boxSevenPartOne.x = boxSevenPartOne.x - 0.2;
            boxSevenPartTwo.x = boxSevenPartTwo.x - 0.2;
            boxSevenPartThree.x = boxSevenPartThree.x - 0.2;
            boxEight.x = boxEight.x - 0.2;
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
