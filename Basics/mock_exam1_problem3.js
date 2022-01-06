let input = [
    '132',
    '242',
    '123'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sum = 0;
 
for (let i = 0; i < input.length; i++) {
    let numberSplit = input[i].split('');
    print(numberSplit);
    if ((Number(numberSplit[0]) + Number(numberSplit[2])) === Number(numberSplit[1])) {
        sum += Number(input[i]);
    } else {
        break;
    }
}
print(sum);
