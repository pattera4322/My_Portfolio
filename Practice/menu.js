    console.log('Menu 1 : Reverse');
    console.log('Menu 2 : Replace');
    console.log('Menu 3 : Getvowels');

function menu(word , num){
    console.log('----------')
    console.log(`Word : ${word}`)
    console.log(`You choose : ${num}`);
    switch(num){
        case 1:
            reverse(word);
            break;
        case 2:
            replace(word);
            break;
        case 3:
            getVowels(word);
            break;
    }
}

function reverse(word){
    var str = String(word);
    let new_text = '';
    for (let i = str.length - 1; i >= 0; i--) {
        new_text += str[i];
    }
    console.log(new_text);
}

function replace(word){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var str = String(word);
    let new_text = '';
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            new_text += '*';
        }else
            new_text += str[i];
    }
    console.log(new_text);
}

function getVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var str = String(word);
    let vowelsCount = 0;
    for (let i = 0; i < str.length ; i++) {
      if (vowels.includes(str[i])) {
        vowelsCount += 1;
      }
    }
    console.log(vowelsCount);
}

menu('Hello World' , 1);
menu('Hello World' , 2);
menu('Hello World' , 3);
menu('Javascript' , 1);
menu('Javascript' , 2);
menu('Javascript' , 3);
menu('Aj.Umaporn' , 1);
menu('Aj.Umaporn' , 2);
menu('Aj.Umaporn' , 3);
console.log('----')
menu(12345 , 1);
menu(12345 , 2);
menu(12345 , 3);
console.log('----')
menu('Opal' , 2);
menu('PGreen' , 2);
menu('Bew' , 2);
menu('Fight' , 2);
menu('Tle' , 2);
menu('Game' , 2);


