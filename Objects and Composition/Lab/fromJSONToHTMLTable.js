function jsonToHtml(string){
let arr = JSON.parse(string)
let res = []
let keys = Object.keys(arr[0]) 
res.push('<table>');
res.push(`   <tr>${keys.map((key) => `<th>${key}</th>`).join("")}</tr>`)
for(const el of arr){
    res.push(`   <tr>${keys.map((key) => `<td>${el[key]}</td>`).join("")}</tr>`)
}
res.push('</table>');
return res.join("\n");
} console.log(jsonToHtml(`[{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}]`))