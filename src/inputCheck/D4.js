export function D4(input){
    const lines = input.trim().split('\n\n')
    return lines.every(line => RegExp('^(?:[a-z]{3}:[#0-9a-z]+[ \n]?){1,8}$').test(line));
}