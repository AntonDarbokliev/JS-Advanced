function listOfNames(arr) {
  let res = [];
  arr
    .sort((a, b) => a.localeCompare(b))
    .forEach((el, i) => res.push(`${i + 1}.${el}`));
    return res.join("\n")
}
console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));
