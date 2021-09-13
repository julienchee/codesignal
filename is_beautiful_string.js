function isBeautifulString(inputString) {
  let len = inputString.length;
  let count_limit = Number.MAX_SAFE_INTEGER;
  
  for (let j=0; j < 26; j++) {
    let count_character = 0;
    for (let i = 0; i < len; i++) {
        if (inputString.charCodeAt(i) == 97 + j) {
            count_character++;
        }
    }
    
    if (count_character > count_limit) {
        return false;
    }
    
    count_limit = count_character;
  }

  
  return true;
}
