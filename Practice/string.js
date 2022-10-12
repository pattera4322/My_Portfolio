function displayMenu() {
    const menu = 
    ***Main Menu***
    1: Reverse String
    2: Replace Vowels with '*'
    3: Count Vowels in String;
    return menu;
  }


  function findVowels(letter) {
    switch (letter) {
      case 'a':
      case 'A':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
        return '';

      default:
        return letter;
    }
  }

  function stringOps(letter, userMenu) {
    let resultString = '';
    if (userMenu === 1) {

    //   for (let i = letter.length - 1; i >= 0; i--) {
    //     resultString += letter[i];
    //   }
     return split.reverse();

    } else if (userMenu === 2) {

      for (let i = 0; i < letter.length; i++) {
        resultString += findVowels(letter[i]);
      }
        // split.forEach(findVowels());

    } else if (userMenu === 3) {
      resultString = 0;
      for (let i = 0; i < letter.length; i++) {
        if (findVowels(letter[i]) === '') {
          resultString += 1;
        }
      }
    }
    return resultString;
  }

  console.log(displayMenu());
  let choseMenu = 1;
  let letter = 'Hello World';
  let split = [...letter];

//   console.log();
  console.log(stringOps(letter, choseMenu));