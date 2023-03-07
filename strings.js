let b = "beautiful";

console.log(b[5],b[6],b[7],b[8]);

String.prototype.insert = function(index, string){
    if (index > 0)
    {
        return food.substring(0,index) + string + food.substring(index, food.length);
    }
    return string + food
}