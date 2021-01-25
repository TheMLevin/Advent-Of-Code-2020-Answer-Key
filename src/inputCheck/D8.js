export function D8(input){
    const lines = input.trim().split('\n')
    return lines.every(line => RegExp("^(?:nop|acc|jmp) [\+\-][0-9]+$").test(line.trim()))
}