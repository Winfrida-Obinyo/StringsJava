let b = "beautiful";

console.log(b[5],b[6],b[7],b[8]);

String.prototype.insert = function(index, string){
    if (index > 0)
    {
        return food.substring(0,index) + string + food.substring(index, food.length);
    }
    return string + food
}
var food = "I was feeling hungry today";
food = food.insert(5," eat");

console.log([food]);

const story = "the quick brown fox jumps over the lazy dog";
let count = (story.match(/the/g) || []).length;


console.log("count",count);

let tell = (story.match(/fox/g) || []).length;
console.log("tell",tell);



const string1 = "We are now going to school";

const word = "now";

console.log(`The word "${word}" ${string1.includes(word)? "is" : "is not"} in the sentence`);

const string2 = "The child was sitting on the table before it fell";

const text = "sitting";

console.log(`The word "${text}" ${string2.includes(text)?
     "is" : "is not"} in the sentence`);

const string3 = "wonderful";

console.log(string3.toUpperCase());

const string4 = "amazing";

const string5 = "BEneath"

console.log(string4.toLowerCase(),string5.toLowerCase());

const string6 = "A beautiful wedding"

const string7 = string6.split(" ")

.map(w=>w[0].toUpperCase () + w.substring(1).toLowerCase())
.join(" ");

console.log(string7);






