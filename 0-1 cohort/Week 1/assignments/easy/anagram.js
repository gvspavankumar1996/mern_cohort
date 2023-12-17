/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false
  }
  const str1Values={}
  for(let i=0; i<str1.length;i++){
    const letter=str1[i].toLowerCase()
    if(str1Values[letter]){
      str1Values[letter]=str1Values[letter]+1;

    }
    else{
      str1Values[letter]=1;
    }
  }

  console.log(str1Values,"strValues")
  for(let i=0; i<str2.length;i++){
    // console.log(str1Values[str2[i]].toLowerCase())
    const letter=str2[i].toLowerCase()
    if(str1Values[letter]){
      str1Values[letter]=str1Values[letter]-1;
    }
    else{
      return false;
    }
    
  }
  console.log(str1Values,"ending")
return true;

}
isAnagram("openai","openaa")

module.exports = isAnagram;
