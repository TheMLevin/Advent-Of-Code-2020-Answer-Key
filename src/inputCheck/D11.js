export function D11(input){
    const lines = input.trim().split('\n')
    return lines.every(line => RegExp('^[L\.]+$').test(line.trim()))
}