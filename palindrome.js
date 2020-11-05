/*
*	This method check if the string is a palindrome
* 	@param {String} srt
*	@return {Boolean} True or False	
*/
function palindrome(str) {
	
	if(str.length < 2) return true;

	str = str.toLowerCase().replace(/[^a-z]+/g,"");
	return str === str.split("").reverse().join("");
}