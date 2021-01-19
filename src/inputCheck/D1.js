export function D1(input){
    const lines = input.trim().split('\n')
    lines.forEach(line => {if(!RegExp('^[0-9]{1,4}\n?$').test(line)) throw "Invalid Input"});
}