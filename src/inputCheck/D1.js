export function D1(input){
    const lines = input.trim().split('\n')
    return lines.every(line => RegExp('^[0-9]{1,4}\n?$').test(line));
}