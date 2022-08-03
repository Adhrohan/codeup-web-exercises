(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
        //creating an array and storing names in the variable:
    var names = ["john","joe","henry","hank"]


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
        //logging the length of an array:
    console.log(names.length)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
        //individually retrieving an array using index:
    console.log(names[0])
    console.log(names[1])
    console.log(names[2])
    console.log(names[3])



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
        //using forloop to log all the items in an array:
    for (var  i = 0 ; i <= names.length; i++){
        //
        console.log (i);
    }



    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(names) {
        console.log(names)
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    //creating a function....
    function firstFunction(arr) {
        return console.log(arr[0]);
    }
    firstFunction([1, 2, 3, 4, 5]);

    function secondFunction(arr){
        return console.log(arr[1]);
    }
    secondFunction([1, 2, 3, 4, 5]);

    function thirdFunction(arr) {
        return console.log(arr.length-1);s
    }
    thirdFunction([1, 2, 3, 4, 5]);
})();