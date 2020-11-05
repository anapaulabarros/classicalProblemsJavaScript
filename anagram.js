/*
*   This method check if the string is a anagram
*   @param {String, String} s1, s2
*   @return {Boolean} True or False 
*/
function anagram(s1, s2 ) {

  if(s1 === undefined || s2 === undefined) return false;
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;
  
  var c = '',
    i = 0,
    limit = s1.length,
    match = 0,
    idx;
  while(i < s1.length){
    c = s1.substr(i++, 1);
    idx = s2.indexOf(c);
    if (idx > -1) {
      match++;
      s2 = s2.substr(0, idx) + s2.substr(idx + 1);
    } else {
      return false;
    }
  }
  return match === s1.length;
}

/*
*   This method check if the string is a anagram
*   @param {String, String} s1, s2
*   @return {Boolean} True or False 
*/
function anagramFast(s1, s2) {
  if(s1 === undefined || s2 === undefined) return false;
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}