let n=2

arrey = [10,20,30,40,50]

element = el()

function el() {
    
    if ( n === 0 )
        console.log(arrey[0])
        
    else if(n>arrey.length)
        console.log(n+" is greater than array length")

    else
        console.log(arrey.slice(0,n))
}