export function D2(input){
    const lines = input.trim().split('\n')
    lines.forEach(line => {if(!RegExp('^[0-9]{1,2}-[0-9]{1,2} [a-z]: [a-z]+\n?$').test(line)) throw "Invalid Input"});
}