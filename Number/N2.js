// 1 2 3 
// 4 5 6 
// 7 8 9 


let n=3;
let num=1
for(let i=0; i<n; i++)
{
    let row=""
    for(let j=0; j<n; j++)
    {
        row+=num+" "
        num++
    }
    console.log(row)
}