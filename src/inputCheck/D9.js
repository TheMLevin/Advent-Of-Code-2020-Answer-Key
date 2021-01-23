export function D9(input){
    const lines = input.trim().split('\n')
    lines.forEach(line => {if(!RegExp('^[0-9]+$').test(line.trim())) throw "Invalid Input"})
}