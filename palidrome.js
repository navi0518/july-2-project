// check weather string is palindrom or not

function check_palid() {
    let str = prompt('Enter the text')
    let count = 0;
    for (let i = 0; i < str.length; i = i + 1) {
        if (str[i] == str[str.length]) {
            count = count + 1;
        }
    }
    if (count == str.length) {
        alert('palindrom');
    } else {
        alert('not palindrom');
    }
}