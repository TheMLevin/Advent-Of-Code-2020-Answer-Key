export function D3(input){
    const lines = input.trim().split('\n')
    lines.forEach(line => {if(!RegExp('^[#\.]+\n?$').test(line)) throw "Invalid Input"});
}