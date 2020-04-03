let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
let vowelIndex = 0

for(let searchResult=0;(searchResult=str.search(/[aAeEiIoOuU]/))!=-1;str=str.substring(searchResult+1)){
    vowelIndex += searchResult
    console.log(vowelIndex++)
}