const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
        const morseArr = Object.entries(MORSE_TABLE).map(subArr => {
          subArr[0] = subArr[0].split('');
          return subArr;
        });  
        morseArr.forEach(subArr => {
          for (let i = 0; i < subArr[0].length; i++) {
            if (subArr[0][i] == '.') subArr[0][i] = '10';
            else subArr[0][i] = '11';
          };
          if (subArr[0].length < 5) {
            let zeroCounter = 5 - subArr[0].length;
            subArr[0].unshift('00'.repeat(zeroCounter))
          };
          subArr[0] = subArr[0].join('');
        });
        morseArr.push(['**********', ' '])
        let arr = [];
        for (let i = 0; i < expr.length - 1; i += 10) {
          arr.push(expr.substr(i, 10));
        };
        let newArr = arr.map((string, i) => {
          let newValue;
          morseArr.forEach(substr => {
            if (substr[0] == string) newValue = substr[1]});
          return newValue;
        });
        return newArr.join('');
}
module.exports = {
    decode
}