// A B C 
// D E F 
// G H I 

let n=3
let ch="A"

for(let i=0; i<n; i++){
    let row=""
    for(let j=0; j<n; j++){
        row+=ch+" "
        // ch=ch+1;
        ch=String.fromCharCode(ch.charCodeAt(0)+1)
    }
    console.log(row)
}