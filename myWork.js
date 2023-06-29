//Question 1
function palinDrome(words) {
    return words.split("").reverse().join("")
}

console.log(palinDrome("nurses run"))

//Question 2

function counT(str) {
  no =['a','e','i','o','u']  
    let vow = 0
    for(let e of no){
    for (let i=0; i<str.length; i++) {
        if (str[i]== e){
            vow +=1
        }
    }
}
  return vow
}
console.log(counT('beautiful'))


// Question 3
function typeT(obj){
    return typeof obj
}
console.log(typeT([1,'me', true,]))


//Question 4
function countN(str, letter) 
{
 let CountL = 0;
 for (let j = 0; j < str.length; j++) 
 {
    if (str[j] == letter) 
      {
      CountL += 1;
      }
  }
  return CountL;
}

console.log(countN('cuteness', 'e'));


