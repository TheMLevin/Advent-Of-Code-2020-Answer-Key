export function D10(input){
    const lines = input.trim().split('\n')
    return lines.every(line => RegExp('^[0-9]+$').test(line.trim()))
}