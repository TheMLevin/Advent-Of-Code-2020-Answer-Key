export function D8(input){
    const lines = input.trim().split('\n')
    lines.forEach(line => {if(!RegExp("^(?:nop|acc|jmp) [\+\-][0-9]+$").test(line.trim())) throw "Invalid Input"})
}