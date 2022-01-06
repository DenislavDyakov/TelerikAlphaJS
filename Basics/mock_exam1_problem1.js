let input = [
    '237'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let number = gets();

do {
    let sum = 0;

    for (i = 0; i < number.length; i++) {
        let digit = +number[i];
        sum += digit;
    }
    number = sum.toString();
} while ( number.length > 1);

print(number);
