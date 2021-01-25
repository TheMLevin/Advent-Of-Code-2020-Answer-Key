export function D2(input){
    const lines = input.trim().split('\n')
    return lines.every(line => RegExp('^[0-9]{1,2}-[0-9]{1,2} [a-z]: [a-z]+\n?$').test(line));
}