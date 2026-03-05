// 1 
// 2 1 
// 3 2 1 
// 4 3 2 1 

let n=4;


for(let i=0; i<n; i++){
    let row=""
    for(let j=i+1; j>0; j--)
    {
        row+=j+" "
    }
    console.log(row)
}