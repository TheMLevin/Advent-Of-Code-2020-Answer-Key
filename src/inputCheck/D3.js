export function D3(input){
    const lines = input.trim().split('\n')
    return lines.every(line => RegExp('^[#\.]+\n?$').test(line));
}