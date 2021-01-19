export function D7(input){
    const lines = input.trim().split('\n')
    lines.forEach(line => {if (!RegExp("^[a-z ]+ bags contain(?: (?:[1-9]|no) (?:other|[a-z ]+) bags?,?)+\.$").test(line.trim())) throw "Invalid Input"})
}