var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        /*var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = 400;
        myObstacle.y = 100;
        game.addGameItem(myObstacle);
        
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;*/
        
        function createGroundObstacle(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var hitBox = game.createObstacle(hitZoneSize,damageFromObstacle);
            hitBox.x = x;
            hitBox.y = y;
            game.addGameItem(hitBox);
        
            var obstacleImage = draw.bitmap('img/power-button.png');
            hitBox.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -22;
            obstacleImage.scaleX = 0.07;
            obstacleImage.scaleY = 0.07;
        }
        
        function createDuckObstacle(x, y) {
            var hitZoneSize = 10;
            var damageFromObstacle = 25;
            
            var hitBox = game.createObstacle(hitZoneSize,damageFromObstacle);
            hitBox.x = x;
            hitBox.y = y;
            game.addGameItem(hitBox);
            
            var hitBoxTwo = game.createObstacle(13,damageFromObstacle);
            hitBoxTwo.x = (x + 25);
            hitBoxTwo.y = y;
            game.addGameItem(hitBoxTwo);
            
            var hitBoxThree = game.createObstacle(13,damageFromObstacle);
            hitBoxThree.x = (x + 46);
            hitBoxThree.y = y;
            game.addGameItem(hitBoxThree);
            
            var hitBoxFour = game.createObstacle(13,damageFromObstacle);
            hitBoxFour.x = (x + 67);
            hitBoxFour.y = y;
            game.addGameItem(hitBoxFour);
            
            var hitBoxLast = game.createObstacle(13,damageFromObstacle);
            hitBoxLast.x = (x + 88);
            hitBoxLast.y = y;
            game.addGameItem(hitBoxLast);
        
            var obstacleImage = draw.bitmap('img/usb-stick.png');
            hitBox.addChild(obstacleImage);
            obstacleImage.x = -27;
            obstacleImage.y = -15;
            obstacleImage.scaleX = 0.2;
            obstacleImage.scaleY = 0.2;
        }
        
        function createDustBall(x, y) {
            var dust =  game.createGameItem('enemy',15);
            var dustball = draw.bitmap('img/dust-ball.png');
            dustball.x = -19;
            dustball.y = -18;
            dust.addChild(dustball);
            dust.x = x;
            dust.y = y;
            dust.rotationalVelocity = -2;
            dust.velocityX = -2;
            dustball.scaleX = 0.05;
            dustball.scaleY = 0.05;
            game.addGameItem(dust);
        
            dust.onPlayerCollision = function() {
                game.changeIntegrity(-50);
            };
        
            dust.onProjectileCollision = function() {
                dust.shrink();  
                game.increaseScore(500);
                game.changeIntegrity(25);
            };
        }
        
        function createCard(x, y, points) {
            var card = game.createGameItem('sd-card',20);
            var cardImage = draw.bitmap('img/sd-card.png');
            cardImage.x = -15;
            cardImage.y = -18;
            card.addChild(cardImage);
            card.x = x;
            card.y = y;
            card.velocityX = -2;
            cardImage.scaleX = 0.04;
            cardImage.scaleY = 0.04;
            game.addGameItem(card);
            
            card.onPlayerCollision = function() {
                game.increaseScore(1000);
                game.changeIntegrity(10);
                card.shrink();
            };
        }
        
        function createFlag(x, y) {
            var flag = game.createGameItem('flag', 70);
            var flagImage = draw.bitmap('img/flag.png');
            var finish = draw.bitmap('img/finish.png');
            flagImage.x = -70;
            flagImage.y = -50;
            
            finish.x = 55;
            finish.y = -180;
            finish.scaleX = 0.3;
            finish.scaleY = 0.3;
            
            flag.addChild(flagImage);
            flag.addChild(finish);
            flag.x = x;
            flag.y = y;
            flag.velocityX = -2;
            flagImage.scaleX = 0.25;
            flagImage.scaleY = 0.25;
            game.addGameItem(flag);
            
            flag.onPlayerCollision = function() {
                game.changeIntegrity(-10000);
            };
        }
        
        createGroundObstacle(600, groundY);
        createGroundObstacle(1400, groundY);
        createGroundObstacle(2200, groundY);
        createGroundObstacle(3000, groundY);
        createGroundObstacle(3150, groundY);
        createGroundObstacle(4000, groundY);
        createGroundObstacle(4600, groundY);
        createGroundObstacle(5200, groundY);
        createGroundObstacle(5800, groundY);
        createGroundObstacle(6000, groundY);
        createGroundObstacle(6800, groundY);
        createGroundObstacle(7200, groundY);
        
        createDuckObstacle(800, (groundY - 90));
        createDuckObstacle(1600, (groundY - 90));
        createDuckObstacle(1900, (groundY - 90));
        createDuckObstacle(2600, (groundY - 90));
        createDuckObstacle(3300, (groundY - 90));
        createDuckObstacle(3800, (groundY - 90));
        createDuckObstacle(4200, (groundY - 90));
        createDuckObstacle(4800, (groundY - 90));
        createDuckObstacle(5600, (groundY - 90));
        createDuckObstacle(6200, (groundY - 90));
        createDuckObstacle(7000, (groundY - 90));
        
        createDustBall(1200, (groundY - 45));
        createDustBall(2100, (groundY - 45));
        createDustBall(2400, (groundY - 45));
        createDustBall(3500, (groundY - 45));
        createDustBall(4500, (groundY - 45));
        createDustBall(5000, (groundY - 45));
        createDustBall(6600, (groundY - 45));
        
        createCard(1200,(groundY - 140));
        createCard(1800, (groundY - 140));
        createCard(3150, (groundY - 140));
        createCard(3600, (groundY - 140));
        createCard(4400, (groundY - 140));
        createCard(5400, (groundY - 140));
        createCard(5800, (groundY - 140));
        createCard(6400, (groundY - 140));
        createCard(7400, (groundY - 140));
        
        createFlag(7600, (groundY - 135));
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}