var init = function (window) {
    'use strict';

    var 
        opspark = window.opspark,
        draw = opspark.draw,
        physikz = opspark.racket.physikz,
        world = opspark.world,
        
        data = 'assets/spritesheet/halle/data-v9.json',
        app = opspark.makeApp(world.makeRules()),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
    
    var 
        space, 
        rules,
        ground,
        spritesheet,
        halle,
        hud, 
        orbManager, 
        playerManager, 
        particleManager;
    
    var debugHalleHitZones = false;

    space = app.space;
    rules = app.rules,
    particleManager = opspark.makeParticleManager(app.stage);
    ground = opspark.makeGround(app);

    // TODO 2 : add background
    var background = opspark.makeBackground(app,ground);
    view.addChild(background);
    
    var help = draw.textfield('CONTROLS: W - Jump | S - Duck | Space - Shoot | Q - Quit Game', '20px Arial','#ccc', 'left');
    help.x = 10;
    help.y = ground.y + ground.getBounds().height + 10;
    view.addChild(help);
    
    window.opspark.makeSpriteSheet(data)
        .then(function (ss) {
            spritesheet = ss;
            halle = window.opspark.makeHalle(spritesheet, particleManager,debugHalleHitZones);
            halle.x = halle.getBounds().width * 2;
            halle.y = ground.y - halle.getBounds().height + 3;
            app.addUpdateable(halle);
            view.addChild(halle);
            
            playerManager = opspark.makePlayerManager(
                halle, 
                app, 
                opspark.makeProjectileManager(view, space, particleManager));
            
            app.addUpdateable(playerManager);
            app.addUpdateable({update: update});
        });
    
    view.addChild(fps);
    app.addUpdateable(fps);
    
    function update() {
        space.forEach(function (body) {
            physikz.updatePosition(body);
            physikz.updateSpace(space, physikz.hitTestRadial, rules.handleCollision);
            playerManager.hitTest(body);
        });
    }
    
    // TODO 1 : add a heads-up display to game
    var hud = opspark.makeHud();
    view.addChild(hud);
    window.hud = hud;
    
    /** Hi jacob, I've commented out this code here which was causing errors. You can use these 
    functions to update the heads-up display by providing values for score, maxScore, and value
    for updateScore, updateOf and setIntegrity respectively. You don't need to do this here but we
    told you about those functions so that in the future you can use them.
    
    Note: the error that you were getting was "score is undefined". that is because you were giving 
    an argument of <score> to the function updateScore and nowhere in your code did you define a var
    called "score" and assign it a value. This will cause your program to not run properly and potentially
    break. */
    // hud.updateScore(score);
    // hud.updateOf(maxScore);
    // hud.setIntegrity(value);
    // TODO 6 : create game manager
    var game = opspark.createGameManager(app,hud);
    opspark.runLevelInGame(game);
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}