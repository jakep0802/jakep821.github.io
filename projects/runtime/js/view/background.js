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
        var boxNine;
        
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
        var line17PartTwo;
        var line17PartThree;
        var line18PartOne;
        var line18PartTwo;
        var line18PartThree;
        var line19PartOne;
        var line19PartTwo;
        var line19PartThree;
        var lineTwentyPartOne;
        var lineTwentyPartTwo;
        var lineTwentyPartThree;
        var lineTwentyOne;
        var lineTwentyTwo;
        var lineTwentyThree;
        
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
        var slotNineBorder;
        var slotNinePort;
        var slotTenBorder;
        var slotTenPort;
        var slotElevenBorder;
        var slotElevenPort;
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
            
            boxNine = draw.rect(25, 625, '#e8ff4c');
            boxNine.x = -20;
            background.addChild(boxNine);
            
            lineOnePartOne = draw.rect(3, 400, '#006700');
            lineOnePartOne.x = 20;
            background.addChild(lineOnePartOne);
            
            lineOnePartTwo = draw.bitmap('img/lineOnePartTwo.png');
            lineOnePartTwo.x = 20;
            lineOnePartTwo.y = 400;
            background.addChild(lineOnePartTwo);
            
            //lineOnePartTwo = draw.line(20, 400, 150, 550, '#006700', 3);
            //background.addChild(lineOnePartTwo);
            
            lineOnePartThree = draw.rect(3, 450, '#006700');
            lineOnePartThree.x = 148;
            lineOnePartThree.y = 550;
            background.addChild(lineOnePartThree);
            
            lineTwoPartOne = draw.rect(3, 393, '#006700');
            lineTwoPartOne.x = 40;
            background.addChild(lineTwoPartOne);
            
            lineTwoPartTwo = draw.bitmap('img/lineOnePartTwo.png');
            lineTwoPartTwo.x = 40;
            lineTwoPartTwo.y = 393;
            background.addChild(lineTwoPartTwo);
            
            //lineTwoPartTwo = draw.line(40, 393, 170, 543, '#006700', 3);
            //background.addChild(lineTwoPartTwo);
            
            lineTwoPartThree = draw.rect(3, 457, '#006700');
            lineTwoPartThree.x = 168;
            lineTwoPartThree.y = 543;
            background.addChild(lineTwoPartThree);
            
            lineThreePartOne = draw.rect(3, 386, '#006700');
            lineThreePartOne.x = 60;
            background.addChild(lineThreePartOne);
            
            lineThreePartTwo = draw.bitmap('img/lineOnePartTwo.png');
            lineThreePartTwo.x = 60;
            lineThreePartTwo.y = 386;
            background.addChild(lineThreePartTwo);
            
            //lineThreePartTwo = draw.line(60, 386, 190, 536, '#006700', 3);
            //background.addChild(lineThreePartTwo);
            
            lineThreePartThree = draw.rect(3, 464, '#006700');
            lineThreePartThree.x = 188;
            lineThreePartThree.y = 534;
            background.addChild(lineThreePartThree);
            
            lineFourPartOne = draw.rect(3, 330, '#006700');
            lineFourPartOne.x = 125;
            background.addChild(lineFourPartOne);
            
            lineFourPartTwo = draw.rect(130, 3, '#006700');
            lineFourPartTwo.x = 125;
            lineFourPartTwo.y = 330;
            background.addChild(lineFourPartTwo);
            
            lineFourPartThree = draw.rect(3, 670, '#006700');
            lineFourPartThree.x = 255;
            lineFourPartThree.y = 330;
            background.addChild(lineFourPartThree);
            
            lineFivePartOne = draw.rect(3, 30, '#006700');
            lineFivePartOne.x = 200;
            background.addChild(lineFivePartOne);
            
            lineFivePartTwo = draw.rect(125, 3, '#006700');
            lineFivePartTwo.x = 200;
            lineFivePartTwo.y = 30;
            background.addChild(lineFivePartTwo);
            
            lineFivePartThree = draw.rect(3, 223, '#006700');
            lineFivePartThree.x = 325;
            lineFivePartThree.y = 30;
            background.addChild(lineFivePartThree);
            
            lineFivePartFour = draw.rect(50, 3, '#006700');
            lineFivePartFour.x = 275;
            lineFivePartFour.y = 250;
            background.addChild(lineFivePartFour);
            
            lineFivePartFive = draw.rect(3, 750, '#006700');
            lineFivePartFive.x = 275;
            lineFivePartFive.y = 250;
            background.addChild(lineFivePartFive);
            
            lineSixPartOne = draw.rect(3, 525, '#006700');
            lineSixPartOne.x = 398;
            background.addChild(lineSixPartOne);
            
            lineSixPartTwo = draw.bitmap('img/lineSixPartTwo.png');
            lineSixPartTwo.x = 340;
            lineSixPartTwo.y = 525;
            background.addChild(lineSixPartTwo);
            
            //lineSixPartTwo = draw.line(400, 525, 340, 585, '#006700', 3);
            //background.addChild(lineSixPartTwo);
            
            lineSixPartThree = draw.rect(3, 415, '#006700');
            lineSixPartThree.x = 338;
            lineSixPartThree.y = 585;
            background.addChild(lineSixPartThree);
            
            lineSeven = draw.rect(3, 1000, '#006700');
            lineSeven.x = 420;
            background.addChild(lineSeven);
            
            lineEight = draw.rect(3, 1000, '#006700');
            lineEight.x = 440;
            background.addChild(lineEight);
            
            lineNinePartOne = draw.rect(3, 485, '#006700');
            lineNinePartOne.x = 505;
            background.addChild(lineNinePartOne);
            
            lineNinePartTwo = draw.rect(160, 3, '#006700');
            lineNinePartTwo.x = 505;
            lineNinePartTwo.y = 485;
            background.addChild(lineNinePartTwo);
            
            lineNinePartThree = draw.rect(3, 515, '#006700');
            lineNinePartThree.x = 665;
            lineNinePartThree.y = 485;
            background.addChild(lineNinePartThree);
            
            lineTenPartOne = draw.rect(3, 465, '#006700');
            lineTenPartOne.x = 525;
            background.addChild(lineTenPartOne);
            
            lineTenPartTwo = draw.rect(160, 3, '#006700');
            lineTenPartTwo.x = 525;
            lineTenPartTwo.y = 465;
            background.addChild(lineTenPartTwo);
            
            lineTenPartThree = draw.rect(3, 535, '#006700');
            lineTenPartThree.x = 685;
            lineTenPartThree.y = 465;
            background.addChild(lineTenPartThree);
            
            lineEleven = draw.rect(3, 1000, '#006700');
            lineEleven.x = 705;
            background.addChild(lineEleven);
            
            lineTwelvePartOne = draw.rect(3, 230, '#006700');
            lineTwelvePartOne.x = 943;
            background.addChild(lineTwelvePartOne);
            
            lineTwelvePartTwo = draw.bitmap('img/lineTwelvePartTwo.png');
            lineTwelvePartTwo.x = 780;
            lineTwelvePartTwo.y = 230;
            background.addChild(lineTwelvePartTwo);
            
            //lineTwelvePartTwo = draw.line(945, 230, 780, 395, '#006700', 3);
            //background.addChild(lineTwelvePartTwo);
            
            lineTwelvePartThree = draw.rect(3, 605, '#006700');
            lineTwelvePartThree.x = 779;
            lineTwelvePartThree.y = 390;
            background.addChild(lineTwelvePartThree);
            
            lineThirteenPartOne = draw.rect(3, 239, '#006700');
            lineThirteenPartOne.x = 963;
            background.addChild(lineThirteenPartOne);
            
            lineThirteenPartTwo = draw.bitmap('img/lineTwelvePartTwo.png');
            lineThirteenPartTwo.x = 801;
            lineThirteenPartTwo.y = 238;
            background.addChild(lineThirteenPartTwo);
            
            //lineThirteenPartTwo = draw.line(965, 239, 802, 402, '#006700', 3);
            //background.addChild(lineThirteenPartTwo);
            
            lineThirteenPartThree = draw.rect(3, 598, '#006700');
            lineThirteenPartThree.x = 801;
            lineThirteenPartThree.y = 401;
            background.addChild(lineThirteenPartThree);
            
            lineFourteenPartOne = draw.rect(3, 250, '#006700');
            lineFourteenPartOne.x = 983;
            background.addChild(lineFourteenPartOne);
            
            lineFourteenPartTwo = draw.bitmap('img/lineFourteenPartTwo.png');
            lineFourteenPartTwo.x = 910;
            lineFourteenPartTwo.y = 248;
            background.addChild(lineFourteenPartTwo);
            
            //lineFourteenPartTwo = draw.line(985, 248, 910, 325, '#006700', 3);
            //background.addChild(lineFourteenPartTwo);
            
            lineFourteenPartThree = draw.rect(3, 675, '#006700');
            lineFourteenPartThree.x = 909;
            lineFourteenPartThree.y = 323;
            background.addChild(lineFourteenPartThree);
            
            lineFifteenPartOne = draw.rect(3, 515, '#006700');
            lineFifteenPartOne.x = 1050;
            background.addChild(lineFifteenPartOne);
            
            lineFifteenPartTwo = draw.bitmap('img/lineFifteenPartTwo.png');
            lineFifteenPartTwo.x = 1051;
            lineFifteenPartTwo.y = 515;
            background.addChild(lineFifteenPartTwo);
            
            //lineFifteenPartTwo = draw.line(1050, 515, 1170, 612, '#006700', 3);
            //background.addChild(lineFifteenPartTwo);
            
            lineFifteenPartThree = draw.rect(3, 388, '#006700');
            lineFifteenPartThree.x = 1170;
            lineFifteenPartThree.y = 612;
            background.addChild(lineFifteenPartThree);
            
            line16PartOne = draw.rect(3, 200, '#006700');
            line16PartOne.x = 1179;
            background.addChild(line16PartOne);
            
            line16PartTwo = draw.bitmap('img/lineSixteenPartTwo.png');
            line16PartTwo.x = 1181;
            line16PartTwo.y = 200;
            background.addChild(line16PartTwo);
            
            //line16PartTwo = draw.line(1180, 200, 1300, 320, '#006700', 3);
            //background.addChild(line16PartTwo);
            
            line16PartThree = draw.rect(3, 680, '#006700');
            line16PartThree.x = 1299;
            line16PartThree.y = 320;
            background.addChild(line16PartThree);
            
            line17PartOne = draw.rect(3, 50, '#006700');
            line17PartOne.x = 1249;
            background.addChild(line17PartOne);
            
            line17PartTwo = draw.bitmap('img/lineSeventeenPartTwo.png');
            line17PartTwo.x = 1251;
            line17PartTwo.y = 50;
            background.addChild(line17PartTwo);
            
            //line17PartTwo = draw.line(1250, 50, 1365, 165, '#006700', 3);
            //background.addChild(line17PartTwo);
            
            line17PartThree = draw.rect(3, 835, '#006700');
            line17PartThree.x = 1364;
            line17PartThree.y = 165;
            background.addChild(line17PartThree);
            
            line18PartOne = draw.rect(3, 41, '#006700');
            line18PartOne.x = 1269;
            background.addChild(line18PartOne);
            
            line18PartTwo = draw.bitmap('img/lineSeventeenPartTwo.png');
            line18PartTwo.x = 1271;
            line18PartTwo.y = 41;
            background.addChild(line18PartTwo);
            
            //line18PartTwo = draw.line(1270, 41, 1385, 156, '#006700', 3);
            //background.addChild(line18PartTwo);
            
            line18PartThree = draw.rect(3, 844, '#006700');
            line18PartThree.x = 1384;
            line18PartThree.y = 156;
            background.addChild(line18PartThree);
            
            line19PartOne = draw.rect(3, 32, '#006700');
            line19PartOne.x = 1289;
            background.addChild(line19PartOne);
            
            line19PartTwo = draw.bitmap('img/lineSeventeenPartTwo.png');
            line19PartTwo.x = 1291;
            line19PartTwo.y = 32;
            background.addChild(line19PartTwo);
            
            //line19PartTwo = draw.line(1290, 32, 1405, 147, '#006700', 3);
            //background.addChild(line19PartTwo);
            
            line19PartThree = draw.rect(3, 853, '#006700');
            line19PartThree.x = 1404;
            line19PartThree.y = 147;
            background.addChild(line19PartThree);
            
            lineTwentyPartOne = draw.rect(3, 577, '#006700');
            lineTwentyPartOne.x = 1573;
            background.addChild(lineTwentyPartOne);
            
            lineTwentyPartTwo = draw.bitmap('img/lineTwentyPartTwo.png');
            lineTwentyPartTwo.x = 1530;
            lineTwentyPartTwo.y = 575;
            background.addChild(lineTwentyPartTwo);
            
            lineTwentyPartThree = draw.rect(3, 675, '#006700');
            lineTwentyPartThree.x = 1530;
            lineTwentyPartThree.y = 625;
            background.addChild(lineTwentyPartThree);
            
            lineTwentyOne = draw.rect(3, 1000, '#006700');
            lineTwentyOne.x = 1470;
            background.addChild(lineTwentyOne);
            
            lineTwentyTwo = draw.rect(3, 1000, '#006700');
            lineTwentyTwo.x = 1490;
            background.addChild(lineTwentyTwo);
            
            lineTwentyThree = draw.rect(3, 1000, '#006700');
            lineTwentyThree.x = 1510;
            background.addChild(lineTwentyThree);
            
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
            
            slotNineBorder = draw.rect(150, 40, '#000000');
            slotNineBorder.x = -65;
            slotNineBorder.y = 640;
            background.addChild(slotNineBorder);
            
            slotNinePort = draw.rect(130, 20, '#333333');
            slotNinePort.x = -55;
            slotNinePort.y = 650;
            background.addChild(slotNinePort);
            
            slotTenBorder = draw.rect(40, 270, '#000000');
            slotTenBorder.x = 1523;
            slotTenBorder.y = 10;
            background.addChild(slotTenBorder);
            
            slotTenPort = draw.rect(20, 250, '#333333');
            slotTenPort.x = 1533;
            slotTenPort.y = 20;
            background.addChild(slotTenPort);
            
            slotElevenBorder = draw.rect(40, 270, '#000000');
            slotElevenBorder.x = 1523;
            slotElevenBorder.y = 300;
            background.addChild(slotElevenBorder);
            
            slotElevenPort = draw.rect(20, 250, '#333333');
            slotElevenPort.x = 1533;
            slotElevenPort.y = 310;
            background.addChild(slotElevenPort);
            
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
            chipOne.x = chipOne.x - 0.3;
            chipTwo.x = chipTwo.x - 0.3;
            chipThree.x = chipThree.x - 0.3;
            chipFour.x = chipFour.x - 0.3;
            chipFive.x = chipFive.x - 0.3;
            
            cornerOnePartOne.x = cornerOnePartOne.x - 0.3;
            cornerOnePartTwo.x = cornerOnePartTwo.x - 0.3;
            
            boxOnePartOne.x = boxOnePartTwo.x - 0.3;
            boxOnePartTwo.x = boxOnePartTwo.x - 0.3;
            boxOnePartThree.x = boxOnePartThree.x - 0.3;
            boxTwoPartOne.x = boxTwoPartOne.x - 0.3;
            boxTwoPartTwo.x = boxTwoPartTwo.x - 0.3;
            boxTwoPartThree.x = boxTwoPartThree.x - 0.3;
            boxThree.x = boxThree.x - 0.3;
            boxFourPartOne.x = boxFourPartOne.x - 0.3;
            boxFourPartTwo.x = boxFourPartTwo.x - 0.3;
            boxFourPartThree.x = boxFourPartThree.x - 0.3;
            boxFivePartOne.x = boxFivePartOne.x - 0.3;
            boxFivePartTwo.x = boxFivePartTwo.x - 0.3;
            boxFivePartThree.x = boxFivePartThree.x - 0.3;
            boxSixPartOne.x = boxSixPartOne.x - 0.3;
            boxSixPartTwo.x = boxSixPartTwo.x - 0.3;
            boxSixPartThree.x = boxSixPartThree.x - 0.3;
            boxSevenPartOne.x = boxSevenPartOne.x - 0.3;
            boxSevenPartTwo.x = boxSevenPartTwo.x - 0.3;
            boxSevenPartThree.x = boxSevenPartThree.x - 0.3;
            boxEight.x = boxEight.x - 0.3;
            boxNine.x = boxNine.x - 0.3;
            
            lineOnePartOne.x = lineOnePartOne.x - 0.3;
            lineOnePartTwo.x = lineOnePartTwo.x - 0.3;
            lineOnePartThree.x = lineOnePartThree.x - 0.3;
            lineTwoPartOne.x = lineTwoPartOne.x - 0.3;
            lineTwoPartTwo.x = lineTwoPartTwo.x - 0.3;
            lineTwoPartThree.x = lineTwoPartThree.x - 0.3;
            lineThreePartOne.x = lineThreePartOne.x - 0.3;
            lineThreePartTwo.x = lineThreePartTwo.x - 0.3;
            lineThreePartThree.x = lineThreePartThree.x - 0.3;
            lineFourPartOne.x = lineFourPartOne.x - 0.3;
            lineFourPartTwo.x = lineFourPartTwo.x - 0.3;
            lineFourPartThree.x = lineFourPartThree.x - 0.3;
            lineFivePartOne.x = lineFivePartOne.x - 0.3;
            lineFivePartTwo.x = lineFivePartTwo.x - 0.3;
            lineFivePartThree.x = lineFivePartThree.x - 0.3;
            lineFivePartFour.x = lineFivePartFour.x - 0.3;
            lineFivePartFive.x = lineFivePartFive.x - 0.3;
            lineSixPartOne.x = lineSixPartOne.x - 0.3;
            lineSixPartTwo.x = lineSixPartTwo.x - 0.3;
            lineSixPartThree.x = lineSixPartThree.x - 0.3;
            lineSeven.x = lineSeven.x - 0.3;
            lineEight.x = lineEight.x - 0.3;
            lineNinePartOne.x = lineNinePartOne.x - 0.3;
            lineNinePartTwo.x = lineNinePartTwo.x - 0.3;
            lineNinePartThree.x = lineNinePartThree.x - 0.3;
            lineTenPartOne.x = lineTenPartOne.x - 0.3;
            lineTenPartTwo.x = lineTenPartTwo.x - 0.3;
            lineTenPartThree.x = lineTenPartThree.x - 0.3;
            lineEleven.x = lineEleven.x - 0.3;
            lineTwelvePartOne.x = lineTwelvePartOne.x - 0.3;
            lineTwelvePartTwo.x = lineTwelvePartTwo.x - 0.3;
            lineTwelvePartThree.x = lineTwelvePartThree.x - 0.3;
            lineThirteenPartOne.x = lineThirteenPartOne.x - 0.3;
            lineThirteenPartTwo.x = lineThirteenPartTwo.x - 0.3;
            lineThirteenPartThree.x = lineThirteenPartThree.x - 0.3;
            lineFourteenPartOne.x = lineFourteenPartOne.x - 0.3;
            lineFourteenPartTwo.x = lineFourteenPartTwo.x - 0.3;
            lineFourteenPartThree.x = lineFourteenPartThree.x - 0.3;
            lineFifteenPartOne.x = lineFifteenPartOne.x - 0.3;
            lineFifteenPartTwo.x = lineFifteenPartTwo.x - 0.3;
            lineFifteenPartThree.x = lineFifteenPartThree.x - 0.3;
            line16PartOne.x = line16PartOne.x - 0.3;
            line16PartTwo.x = line16PartTwo.x - 0.3;
            line16PartThree.x = line16PartThree.x - 0.3;
            line17PartOne.x = line17PartOne.x - 0.3;
            line17PartTwo.x = line17PartTwo.x - 0.3;
            line17PartThree.x = line17PartThree.x - 0.3;
            line18PartOne.x = line18PartOne.x - 0.3;
            line18PartTwo.x = line18PartTwo.x - 0.3;
            line18PartThree.x = line18PartThree.x - 0.3;
            line19PartOne.x = line19PartOne.x - 0.3;
            line19PartTwo.x = line19PartTwo.x - 0.3;
            line19PartThree.x = line19PartThree.x - 0.3;
            lineTwentyPartOne.x = lineTwentyPartOne.x - 0.3;
            lineTwentyPartTwo.x = lineTwentyPartTwo.x - 0.3;
            lineTwentyPartThree.x = lineTwentyPartThree.x - 0.3;
            lineTwentyOne.x = lineTwentyOne.x - 0.3;
            lineTwentyTwo.x = lineTwentyTwo.x - 0.3;
            lineTwentyThree.x = lineTwentyThree.x - 0.3;
            
            slotOneBorder.x = slotOneBorder.x - 0.3;
            slotOnePort.x = slotOnePort.x - 0.3;
            slotTwoBorder.x = slotTwoBorder.x - 0.3;
            slotTwoPort.x = slotTwoPort.x - 0.3;
            slotThreeBorder.x = slotThreeBorder.x - 0.3;
            slotThreePort.x = slotThreePort.x - 0.3;
            slotFourBorder.x = slotFourBorder.x - 0.3;
            slotFourPort.x = slotFourPort.x - 0.3;
            slotFiveBorder.x = slotFiveBorder.x - 0.3;
            slotFivePort.x = slotFivePort.x - 0.3;
            slotSixBorder.x = slotSixBorder.x - 0.3;
            slotSixPort.x = slotSixPort.x - 0.3;
            slotSevenBorder.x = slotSevenBorder.x - 0.3;
            slotSevenPort.x = slotSevenPort.x - 0.3;
            slotEightBorder.x = slotEightBorder.x - 0.3;
            slotEightPort.x = slotEightPort.x - 0.3;
            slotNineBorder.x = slotNineBorder.x - 0.3;
            slotNinePort.x = slotNinePort.x - 0.3;
            slotTenBorder.x = slotTenBorder.x - 0.3;
            slotTenPort.x = slotTenPort.x - 0.3;
            slotElevenBorder.x = slotElevenBorder.x - 0.3;
            slotElevenPort.x = slotElevenPort.x - 0.3;
            
            ramSlotOne.x = ramSlotOne.x - 0.3;
            ramPortOne.x = ramPortOne.x - 0.3;
            ramSlotTwo.x = ramSlotTwo.x - 0.3;
            ramPortTwo.x = ramPortTwo.x - 0.3;
            
            if (chipOne.x < -175) {
                chipOne.x = canvasWidth;
            }
            
            if (chipTwo.x < -175) {
                chipTwo.x = canvasWidth;
            }
            
            if (chipThree.x < -175) {
                chipThree.x = canvasWidth;
            }
            
            if (chipFour.x < -175) {
                chipFour.x = canvasWidth;
            }
            
            if (chipFive.x < -175) {
                chipFive.x = canvasWidth;
            }
            
            if (cornerOnePartOne.x < -175) {
                cornerOnePartOne.x = canvasWidth;
            }
            
            if (cornerOnePartTwo.x < -175) {
                cornerOnePartTwo.x = canvasWidth;
            }
            
            if (boxOnePartOne.x < -175) {
                boxOnePartOne.x = canvasWidth;
            }
            
            if (boxOnePartTwo.x < -175) {
                boxOnePartTwo.x = canvasWidth;
            }
            
            if (boxOnePartThree.x < -175) {
                boxOnePartThree.x = canvasWidth;
            }
            
            if (boxTwoPartOne.x < -175) {
                boxTwoPartOne.x = canvasWidth;
            }
            
            if (boxTwoPartTwo.x < -175) {
                boxTwoPartTwo.x = canvasWidth;
            }
            
            if (boxTwoPartThree.x < -175) {
                boxTwoPartThree.x = canvasWidth;
            }
            
            if (boxThree.x < -175) {
                boxThree.x = canvasWidth;
            }
            
            if (boxFourPartOne.x < -175) {
                boxFourPartOne.x = canvasWidth;
            }
            
            if (boxFourPartTwo.x < -175) {
                boxFourPartTwo.x = canvasWidth;
            }
            
            if (boxFourPartThree.x < -175) {
                boxFourPartThree.x = canvasWidth;
            }
            
            if (boxFivePartOne.x < -175) {
                boxFivePartOne.x = canvasWidth;
            }
            
            if (boxFivePartTwo.x < -175) {
                boxFivePartTwo.x = canvasWidth;
            }
            
            if (boxFivePartThree.x < -175) {
                boxFivePartThree.x = canvasWidth;
            }
            
            if (boxSixPartOne.x < -175) {
                boxSixPartOne.x = canvasWidth;
            }
            
            if (boxSixPartTwo.x < -175) {
                boxSixPartTwo.x = canvasWidth;
            }
            
            if (boxSixPartThree.x < -175) {
                boxSixPartThree.x = canvasWidth;
            }
            
            if (boxSevenPartOne.x < -175) {
                boxSevenPartOne.x = canvasWidth;
            }
            
            if (boxSevenPartTwo.x < -175) {
                boxSevenPartTwo.x = canvasWidth;
            }
            
            if (boxSevenPartThree.x < -175) {
                boxSevenPartThree.x = canvasWidth;
            }
            
            if (boxEight.x < -175) {
                boxEight.x = canvasWidth;
            }
            
            if (boxNine.x < -175) {
                boxNine.x = canvasWidth;
            }
            
            if (lineOnePartOne.x < -175) {
                lineOnePartOne.x = canvasWidth;
            }
            
            if (lineOnePartTwo.x < -175) {
                lineOnePartTwo.x = canvasWidth;
            }
            
            if (lineOnePartThree.x < -175) {
                lineOnePartThree.x = canvasWidth;
            }
            
            if (lineTwoPartOne.x < -175) {
                lineTwoPartOne.x = canvasWidth;
            }
            
            if (lineTwoPartTwo.x < -175) {
                lineTwoPartTwo.x = canvasWidth;
            }
            
            if (lineTwoPartThree.x < -175) {
                lineTwoPartThree.x = canvasWidth;
            }
            
            if (lineThreePartOne.x < -175) {
                lineThreePartOne.x = canvasWidth;
            }
            
            if (lineThreePartTwo.x < -175) {
                lineThreePartTwo.x = canvasWidth;
            }
            
            if (lineThreePartThree.x < -175) {
                lineThreePartThree.x = canvasWidth;
            }
            
            if (lineFourPartOne.x < -175) {
                lineFourPartOne.x = canvasWidth;
            }
            
            if (lineFourPartTwo.x < -175) {
                lineFourPartTwo.x = canvasWidth;
            }
            
            if (lineFourPartThree.x < -175) {
                lineFourPartThree.x = canvasWidth;
            }
            
            if (lineFivePartOne.x < -175) {
                lineFivePartOne.x = canvasWidth;
            }
            
            if (lineFivePartTwo.x < -175) {
                lineFivePartTwo.x = canvasWidth;
            }
            
            if (lineFivePartThree.x < -175) {
                lineFivePartThree.x = canvasWidth;
            }
            
            if (lineFivePartFour.x < -175) {
                lineFivePartFour.x = canvasWidth;
            }
            
            if (lineFivePartFive.x < -175) {
                lineFivePartFive.x = canvasWidth;
            }
            
            if (lineSixPartOne.x < -175) {
                lineSixPartOne.x = canvasWidth;
            }
            
            if (lineSixPartTwo.x < -175) {
                lineSixPartTwo.x = canvasWidth;
            }
            
            if (lineSixPartThree.x < -175) {
                lineSixPartThree.x = canvasWidth;
            }
            
            if (lineSeven.x < -175) {
                lineSeven.x = canvasWidth;
            }
            
            if (lineEight.x < -175) {
                lineEight.x = canvasWidth;
            }
            
            if (lineNinePartOne.x < -175) {
                lineNinePartOne.x = canvasWidth;
            }
            
            if (lineNinePartTwo.x < -175) {
                lineNinePartTwo.x = canvasWidth;
            }
            
            if (lineNinePartThree.x < -175) {
                lineNinePartThree.x = canvasWidth;
            }
            
            if (lineTenPartOne.x < -175) {
                lineTenPartOne.x = canvasWidth;
            }
            
            if (lineTenPartTwo.x < -175) {
                lineTenPartTwo.x = canvasWidth;
            }
            
            if (lineTenPartThree.x < -175) {
                lineTenPartThree.x = canvasWidth;
            }
            
            if (lineEleven.x < -175) {
                lineEleven.x = canvasWidth;
            }
            
            if (lineTwelvePartOne.x < -175) {
                lineTwelvePartOne.x = canvasWidth;
            }
            
            if (lineTwelvePartTwo.x < -175) {
                lineTwelvePartTwo.x = canvasWidth;
            }
            
            if (lineTwelvePartThree.x < -175) {
                lineTwelvePartThree.x = canvasWidth;
            }
            
            if (lineThirteenPartOne.x < -175) {
                lineThirteenPartOne.x = canvasWidth;
            }
            
            if (lineThirteenPartTwo.x < -175) {
                lineThirteenPartTwo.x = canvasWidth;
            }
            
            if (lineThirteenPartThree.x < -175) {
                lineThirteenPartThree.x = canvasWidth;
            }
            
            if (lineFourteenPartOne.x < -175) {
                lineFourteenPartOne.x = canvasWidth;
            }
            
            if (lineFourteenPartTwo.x < -175) {
                lineFourteenPartTwo.x = canvasWidth;
            }
            
            if (lineFourteenPartThree.x < -175) {
                lineFourteenPartThree.x = canvasWidth;
            }
            
            if (lineFifteenPartOne.x < -175) {
                lineFifteenPartOne.x = canvasWidth;
            }
            
            if (lineFifteenPartTwo.x < -175) {
                lineFifteenPartTwo.x = canvasWidth;
            }
            
            if (lineFifteenPartThree.x < -175) {
                lineFifteenPartThree.x = canvasWidth;
            }
            
            if (line16PartOne.x < -175) {
                line16PartOne.x = canvasWidth;
            }
            
            if (line16PartTwo.x < -175) {
                line16PartTwo.x = canvasWidth;
            }
            
            if (line16PartThree.x < -175) {
                line16PartThree.x = canvasWidth;
            }
            
            if (line17PartOne.x < -175) {
                line17PartOne.x = canvasWidth;
            }
            
            if (line17PartTwo.x < -175) {
                line17PartTwo.x = canvasWidth;
            }
            
            if (line17PartThree.x < -175) {
                line17PartThree.x = canvasWidth;
            }
            
            if (line18PartOne.x < -175) {
                line18PartOne.x = canvasWidth;
            }
            
            if (line18PartTwo.x < -175) {
                line18PartTwo.x = canvasWidth;
            }
            
            if (line18PartThree.x < -175) {
                line18PartThree.x = canvasWidth;
            }
            
            if (line19PartOne.x < -175) {
                line19PartOne.x = canvasWidth;
            }
            
            if (line19PartTwo.x < -175) {
                line19PartTwo.x = canvasWidth;
            }
            
            if (line19PartThree.x < -175) {
                line19PartThree.x = canvasWidth;
            }
            
            if (lineTwentyPartOne.x < -175) {
                lineTwentyOne.x = canvasWidth;
            }
            
            if (lineTwentyPartTwo.x < -175) {
                lineTwentyPartTwo.x = canvasWidth;
            }
            
            if (lineTwentyPartThree.x < -175) {
                lineTwentyPartThree.x = canvasWidth;
            }
            
            if (lineTwentyOne.x < -175) {
                lineTwentyOne.x = canvasWidth;
            }
            
            if (lineTwentyTwo.x < -175) {
                lineTwentyTwo.x = canvasWidth;
            }
            
            if (lineTwentyThree.x < -175) {
                lineTwentyThree.x = canvasWidth;
            }
            
            
            if (slotOneBorder.x < -175) {
                slotOneBorder.x = canvasWidth;
            }
            
            if (slotOnePort.x < -175) {
                slotOnePort.x = canvasWidth;
            }
            
            if (slotTwoBorder.x < -175) {
                slotTwoBorder.x = canvasWidth;
            }
            
            if (slotTwoPort.x < -175) {
                slotTwoPort.x = canvasWidth;
            }
            
            if (slotThreeBorder.x < -175) {
                slotThreeBorder.x = canvasWidth;
            }
            
            if (slotThreePort.x < -175) {
                slotThreePort.x = canvasWidth;
            }
            
            if (slotFourBorder.x < -175) {
                slotFourBorder.x = canvasWidth;
            }
            
            if (slotFourPort.x < -175) {
                slotFourPort.x = canvasWidth;
            }
            
            if (slotFiveBorder.x < -175) {
                slotFiveBorder.x = canvasWidth;
            }
            
            if (slotFivePort.x < -175) {
                slotFivePort.x = canvasWidth;
            }
            
            if (slotSixBorder.x < -175) {
                slotSixBorder.x = canvasWidth;
            }
            
            if (slotSixPort.x < -175) {
                slotSixPort.x = canvasWidth;
            }
            
            if (slotSevenBorder.x < -175) {
                slotSevenPort.x = canvasWidth;
            }
            
            if (slotSevenPort.x < -175) {
                slotSevenPort.x = canvasWidth;
            }
            
            if (slotEightBorder.x < -175) {
                slotEightBorder.x = canvasWidth;
            }
            
            if (slotEightPort.x < -175) {
                slotEightPort.x = canvasWidth;
            }
            
            if (slotNineBorder.x < -175) {
                slotNineBorder.x = canvasWidth;
            }
            
            if (slotNinePort.x < -175) {
                slotNinePort.x = canvasWidth;
            }
            
            if (slotTenBorder.x < -175) {
                slotTenBorder.x = canvasWidth;
            }
            
            if (slotTenPort.x < -175) {
                slotTenPort.x = canvasWidth;
            }
            
            if (slotElevenBorder.x < -175) {
                slotElevenBorder.x = canvasWidth;
            }
            
            if (slotElevenPort.x < -175) {
                slotElevenPort.x = canvasWidth;
            }
            
            if (ramSlotOne.x < -175) {
                ramSlotOne.x = canvasWidth;
            }
            
            if (ramPortOne.x < -175) {
                ramPortOne.x = canvasWidth;
            }
            
            if (ramSlotTwo.x < -175) {
                ramSlotTwo.x = canvasWidth;
            }
            
            if (ramPortTwo.x < -175) {
                ramPortTwo.x = canvasWidth;
            }
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
