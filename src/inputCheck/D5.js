export function D5(input){
    const lines = input.trim().split('\n')
    return lines.every(line => RegExp('^[FB]{7}[RL]{3}$').test(line));
}