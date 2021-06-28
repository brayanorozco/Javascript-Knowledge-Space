let printVowels = (writtenSentence) => {

    let vowelsList = ['a', 'e', 'i', 'o', 'u'];
    let filteredVowels = [];

    for (i = 0; i <= writtenSentence.length; i++) {

        let selectedVowel = writtenSentence[i];

        if (selectedVowel === vowelsList[0] || selectedVowel === vowelsList[1] ||
            selectedVowel === vowelsList[2] || selectedVowel === vowelsList[3] ||
            selectedVowel === vowelsList[4]) {

            filteredVowels += selectedVowel;
        }
    }
    console.log(filteredVowels);
}

printVowels("hello world");
printVowels("kangaroo");
printVowels("cheeseburger");
printVowels("alice mccutcheon and brayan orozco");
printVowels("rhythm");