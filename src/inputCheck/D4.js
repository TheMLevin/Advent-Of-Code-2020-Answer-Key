export function D4(input){
    const lines = input.trim().split('\n\n')
    lines.forEach(line => {if(!RegExp('^(?:[a-z]{3}:[#0-9a-z]+[ \n]?){1,8}$').test(line)) throw "Invalid Input"});
}