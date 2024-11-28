/* let num = +prompt("1-shy sandy engiz")

while (true) {
    let num2 = +prompt("bolynetyn sandy engiz")
    if (num%2) {
        alert("sizdin zhauabynyz: " +num +"bul san jup san") 
    }
    else{
        alert("sizdin zhauabynyz: " +num +"bul san taq san") 
    }
} */






let sandar = []
while (true) {
    let num = +prompt("1-shy sandy engiz")
    if (num%2) {
        sandar.push(num)
    }
    else{
        sandar.unshift(num)
    }
    if (num == 0) {
        break;
    }
}
console.log("syzdyn zhabynyz" + sandar)