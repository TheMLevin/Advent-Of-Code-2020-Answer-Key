export function D6(input){
    const lines = input.trim().split('\n\n')
    lines.forEach(line => {if (!RegExp("^[a-z\n]+$").test(line)) throw "Invalid Input"})
}