
// IMPORTANAT
// Syntax: regex.test(string)
//Syntax: string.match(regex)


console.log("1",/abc/.test("anbc")); //CHECK WHETHER THE STRING CONRTAIN ABC OR NOT
console.log("2",/ab*c/.test("ac"));//CHECK WHETHER THE PATTERN CONTAINS ABBBC B CAN CONTAIN 
//0 OR MORE TIME ABC = AC =ABBBBC ALL ARE SAME
//* MEANS PRECEEDING ITEM CAN CONTAIN 0 OR MORE TIMES

console.log("3",/[a-z]/.test("Aa"));
//[a-z] Means it check whether the text contain any element with in the sque bracket
//[a-d]=abcd IF THE TEXT CONTAIN ANY OF THESE WORDS THEN IT WILL TRUE

console.log("4",/[a-zA-Z]/.test("a",1));
//IT CHECK BOTH SMAL AND CAPITAL ALPHABETS

console.log("5",/[a-zA-Z]/.test("a",1));

console.log("6",/[a-z]/.test("Aa"));




// let find = /\d/;
// let text = "Hello1";
// console.log(text.match(find));

let find = /\d/;
let text = "Hello123World456";
// console.log(text.match(find)); 
console.log("7",find.test(text)); //it wil check whether integer exist or not it will give a boolean 
console.log("8",text.match(find));//it will retn the  index value of 1st integer find

let finds = /\d/g;
let texts = "Hello123World456";
console.log("9",text.match(finds));//this wil give as an array of each integer valuer\e



function order(words) {
    return words.split(" ").sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(" ")
      
   }
   console.log( "Qstn",order("is2 Thi1s T4est 3a"));
   
   
   /*94.Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/


function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2'); //(1)(2) capture small letter in group 1 and capitl in group 2 and g means occur for all means not for just one and for all , then repalce function
    //$1 means 1st group that means 1st small lettre before capital letter 2nd means 1st capital letter =lC and for this replace qwith just space( )
      
  }
  console.log(solution("camelCasingTest"));


  //OR

  function solution(string) {
    return string.replace(/([A-Z])/g, ' $1'); //CHECK THE OCCURANCE OF CAPITAL LETTERS AND FOR ALL JUST REPLACE WITH SPACE BEFORE IT 
  
      
  }
  console.log(solution("camelCasingTest"));


function kk(params) {
  console.log(params);
}

kk("hello")


let b=[1,3,2]
console.log(b.sort());


