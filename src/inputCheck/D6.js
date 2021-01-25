export function D6(input){
    const lines = input.trim().split('\n\n')
    return lines.every(line => RegExp("^[a-z\n]+$").test(line))
}