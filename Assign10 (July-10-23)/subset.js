let str = "cake"

add =[]

for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
    add.push(str.slice(i, j));
    }
}
  
console.log(add)
