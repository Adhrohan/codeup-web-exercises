var allcones =math.floor(math.random()* 5)+ 50;

do{
    var soldcones = math.floor(math.random() *5)+1;
    if(soldcones<allcones){
        console.log(`${soldcones} cones sold...`);
        allcones -= soldcones
    }else if (soldcones>allcones){
        console.log(`cannot sale you ${soldcones} cones I only have ${allcones} cones.`)
    }else{
        console.log(``)
    }
}