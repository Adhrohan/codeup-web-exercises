let num;
for(num = 5; num <= 100; num += 5){
    console.log(num);
    if (num === 50){
        break;
    }
    console.log("num is still less than 50")
}
