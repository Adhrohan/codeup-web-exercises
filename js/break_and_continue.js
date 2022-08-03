var number = prompt ("Enter an odd number between 1 and 50");
for (var i = 1; i <=50; i++) {
    if(number % 2 !== 0){
        console.log('Here is an odd number: ' + number);
    }
    else if(number % 2 === 0){
        console.log("")
    }
}
console.log(number)