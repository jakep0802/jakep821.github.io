(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        /** Comment from Ben:
        You had these as "create.cannon.onTop" etc...
        which was giving you errors so I've fixed them :)
        */
        
        cannon.create.onTop(300); 
        cannon.create.onRight(300);
        cannon.create.onLeft(300);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
