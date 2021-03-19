export function D11(input){
    const lines = input.trim().split('\n')
    return lines.every(line => RegExp('^[NSEWLRF][0-9]{1,3}$').test(line.trim()))
}