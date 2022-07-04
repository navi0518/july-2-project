// take input from user and print the num of characters of string(except vowels)


function no_vowels() {
    let str = prompt('enter character');
    let count = 0;
    for (i = 0; i < str.length; i = i + 1)
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                break;
            default:
                count = count + 1;
                break;
        }
    alert(count)
}