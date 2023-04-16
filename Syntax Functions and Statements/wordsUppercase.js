function upperCase(string){
    let regex = /[\w]+/g
    let result = string.match(regex)
    result = result.map(word => word.toUpperCase())
    console.log(result.join(", "));
}
upperCase('hello')