export function D11(input){
    const lines = input.trim().split('\n')
    lines.forEach(line => {if(!RegExp('^[L\.]+$').test(line.trim())) throw "Invalid Input"})
}