var sleep = require('sleep');
var async = require('async');
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
                         console.log(sprite);
                         sleep.usleep(usPerFrame);
                     });
                     callback();
                 },
                 callback);
};

module.exports = {
    secondsPerFrame: secondsPerFrame,
    usecondsPerFrame: usecondsPerFrame,
    updateCondition: updateCondition,
    animate: animate
};
