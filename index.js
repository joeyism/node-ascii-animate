var sleep = require('sleep');
var async = require('async');
require('colors');
var colors= ['black','red','green','yellow','blue','magenta','cyan','white','grey'];
var colorize = false;

var randColor = function(){
    var rand = Math.floor(Math.random()*(colors.length));
    return colors[rand];
};

var condition = true;
var clear = '\033[2J';

var usPerFrame = 200000;

var secondsPerFrame = function(seconds){
    usPerFrame = 1000000*seconds;
};

var usecondsPerFrame = function(us){
    usPerFrame = us;
};

var updateCondition = function(cond){
    condition = cond;
};

var animate = function(animationArray, cond, callback){
    condition = cond || condition;
    async.whilst(condition,
                 function(callback){
                     animationArray.forEach(function(sprite){
                         console.log(clear);
                         colorize? console.log(sprite[randColor()]): console.log(sprite);
                         sleep.usleep(usPerFrame);
                     });
                     callback();
                 },
                 callback);
    return {
        colorize: function(){
            colorize = true;
        }
    };
};

module.exports = {
    secondsPerFrame: secondsPerFrame,
    usecondsPerFrame: usecondsPerFrame,
    updateCondition: updateCondition,
    animate: animate
};
