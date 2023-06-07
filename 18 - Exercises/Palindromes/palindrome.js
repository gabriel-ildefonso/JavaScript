const word = prompt("Enter a word:")
let invertedWord = ""

for (let i = word.length - 1; i >= 0; i--) {
   invertedWord += word[i]
}

if (word === invertedWord) {
   alert(word + " is a palindrome!")
} else {
   alert(word + " is not a palindrome!\n\n" + word + " !== " + invertedWord)
}