/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// sort string1 
// sort string2
// if str1 == str2 
// return true or false

function isAnagram(str1, str2){
  const sorted1 = str1.toLowerCase().split("").sort().join("");
  
  const sorted2 = str2.toLowerCase().split("").sort().join("");

  if(sorted1 == sorted2){
    return true;
  }
  return false;
}
module.exports = isAnagram;
