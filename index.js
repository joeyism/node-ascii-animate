var async = require('async');
require('colors');
var colors= ['black','red','green','yellow','blue','magenta','cyan','white','grey'];
var colorize = false;
var bold = false;
var condition = true;
var clear = '\033[2J';
var msPerFrame = 200;
var globCallback;

var colorizeFunction = function(){
    colorize = true;
    return {
        bold: boldFunction
    }
};
var boldFunction = function(){
    bold = true;
    return {
        colorize: colorizeFunction
    }
};

var randColor = function(){
    var rand = Math.floor(Math.random()*(colors.length));
    return colors[rand];
};

var secondsPerFrame = function(seconds){
    msPerFrame = 1000*seconds;
};

var msecondsPerFrame = function(us){
    msPerFrame = us;
};

var updateCondition = function(cond){
    condition = cond;
};

var fancyDisplay = function(sprite){
    var display = colorize ? sprite[randColor()]: sprite;
    display = bold ? display['bold'] : bold;
    return display;
};

var nextFrame = function(animationArray, i){
    var sprite = animationArray[i];
    i = (animationArray.length-1 === i)? 0: i+1;
    if(condition()){
        setTimeout(function(){
            console.log(clear);
            console.log(fancyDisplay(sprite));
            nextFrame(animationArray, i);
        }, msPerFrame);
    }
    else {
        globCallback();
    }
};

var animationFunction = function(animationArray){
    nextFrame(animationArray, 0);
};

var animate = function(animationArray, cond, callback){
    globCallback = callback;
    condition = cond || condition;
    async.whilst(condition,
    function(){
        animationFunction(animationArray);
    },
    callback);

    return {
        colorize: colorizeFunction(),
        bold: boldFunction
    };
};

module.exports = {
    secondsPerFrame: secondsPerFrame,
    msecondsPerFrame: msecondsPerFrame,
    updateCondition: updateCondition,
    animate: animate
};
