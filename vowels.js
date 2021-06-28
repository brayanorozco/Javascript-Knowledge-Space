const printVowels = (writtenSentence) => {

    let vowelsList = ['a', 'e', 'i', 'o', 'u'];

    const result = writtenSentence.split('').filter(c => {

        return vowelsList.includes(c);
    });

    console.log(result);
}

printVowels("hello world");
printVowels("kangaroo");
printVowels("cheeseburger");
printVowels("alice mccutcheon and brayan orozco");
printVowels("rhythm");