// A B C D 
// A B C D 
// A B C D 
// A B C D 

let n=4;
for(let i=0; i<n; i++)
{
    let row=""
    let ch="A"
    for(let j=0; j<n; j++)
    {
        row+=j+" "
        ch=String.fromCharCode(ch.charCodeAt(0)+1)       
    }
    console.log(row)
}