let arr = []
let deleteCount = 0

for(let i=0;i<100;i++)
    arr.push(Math.floor(Math.random()*100+1))

for(let i=0;i<100;i++){
    if(arr[i-deleteCount]%2==0)
        arr.splice(i-deleteCount++, 1)

}
console.log(arr)
