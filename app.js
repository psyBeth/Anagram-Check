alert("Check the console to see the output.")

let kelime1 = "Dormitory"
let kelime2 = "dirty Room"

console.log(kelime2.toLowerCase().replaceAll(" ","").split(""));

function areAnagrams(str1,str2){

    let sortedStr1=str1.toLowerCase().replaceAll(" ","").split("").sort().join()
    let sortedStr2=str2.toLowerCase().replaceAll(" ","").split("").sort().join()

    //parantez içi boşluksuz tırnak harfleri almayı sağlıyor

let isAnagram = true

    if (sortedStr1===sortedStr2) {
       

        console.log(`${str1} and ${str2} are anagram words.`);
    }else{

        console.log(`${str1} and ${str2} not anagram words.`);
    }
    
}


areAnagrams("hello","world")