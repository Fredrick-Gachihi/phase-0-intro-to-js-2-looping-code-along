// Code your solutions in this file
function writeCards(names) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const message = `Thank you, ${name}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
}
function countDown(startNumber) {
    for (let p = startNumber; p >= 0; p--) { 
      console.log(p);
    }
  }