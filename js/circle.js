function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
}
console.log(getRandomInt(3, 10));

console.log(Math.round(20.49));
console.log(Math.round(20.5));
console.log(Math.round(-20.5));
console.log(Math.round(-20.51));


console.log(Math.floor(45.95));
console.log(Math.floor(-45.95));

console.log(Math.ceil(.95));
console.log(Math.ceil(4));

console.log(Math.pow(2, 16));
console.log(Math.pow(2, 16));

(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * (Math.pow(this.radius, 2))
            return area ; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding){
                var roundedNum = Math.round(this.getArea())
                console.log("Area of a circle with radius: " + this.radius + ", is: " + roundedNum);

            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }

    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();