// A
// BB
// CCC
// DDDD

let n=4

for(let i=0; i<n; i++){
    let row=""
    let ch=String.fromCharCode(65+i)
    
    for(let j=0; j<i+1; j++){
       row+=ch
    }
    console.log(row)
}