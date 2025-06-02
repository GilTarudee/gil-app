export function calculator(
    x: number,
    y: number,
    sym:string
): number {
    if (sym == "+"){
        return x+y
    }
    else if (sym == "-"){
        return x-y
    }
    else if (sym == "*"){
        return x*y
    }
    else if (sym == "/"){
        return x/y
    }
    else {
        throw new Error(`Unsupported operator ${sym}`)
    }   
}

export function solve_equation(
    equa:string
):any{
    let num_set:string[] = equa.split("+")
    var b = new Array(); 
    let each_symbol = ""
    for (var i in num_set) {
        // console.log(num_set[i]) 
        if (!(isNaN(Number(num_set[i])))) {
            b.push(Number(num_set[i]))
        } else {
            // console.log(num_set[i]) 
            let a = num_set[i].split("-")
            for (var ii in a) {
                if (!(isNaN(Number(a[ii])))) {
                    b.push(Number(a[ii]))
                } else {
                    let c = a[ii].split("*")
                    for (var iii in c) {
                        if (!(isNaN(Number(c[iii])))) {
                            b.push(Number(c[iii]))
                        } else {
                            let d = c[iii].split("/")
                            for (var i4 in d) {
                                if (!(isNaN(Number(d[i4])))) {
                                    b.push(Number(d[i4]))
                                } else {
                                    throw new Error("There is an error occur")
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (var char of equa) {
        if (char == "+" || char == "-" || char == "*" || char == "/"){
            each_symbol = each_symbol + char
        }
    }
   

    // let index1 = (each_symbol.includes("*"))
    // let index2 = (each_symbol.includes("/"))

    let index : number = each_symbol.indexOf("*")
    let index2 : number = each_symbol.indexOf("/")

    while (each_symbol.includes("*") || each_symbol.includes("/")){
        if (index != -1 && index2 != -1){ 
        if (index != -1 && index <= index2) {
            b[index] = calculator(b[index],b[index+1],each_symbol[index])
            b.splice(index+1, 1)
            each_symbol = each_symbol.substring(0,index) + each_symbol.substring(index+1,b.length)
            index = each_symbol.indexOf("*")
            index2 = each_symbol.indexOf("/")
        }else if (index2 != -1 && index2 <= index) {
            b[index2] = calculator(b[index2],b[index2+1],each_symbol[index2])
            b.splice(index2+1, 1)
            each_symbol = each_symbol.substring(0,index2) + each_symbol.substring(index2+1,b.length)
            index = each_symbol.indexOf("*")
            index2 = each_symbol.indexOf("/") 
        }
        } else {
            if (index != -1) {
                b[index] = calculator(b[index],b[index+1],each_symbol[index])
                b.splice(index+1, 1)
                each_symbol = each_symbol.substring(0,index) + each_symbol.substring(index+1,b.length)
                index = each_symbol.indexOf("*")
                index2 = each_symbol.indexOf("/")
            }else if (index2 != -1) {
                b[index2] = calculator(b[index2],b[index2+1],each_symbol[index2])
                b.splice(index2+1, 1)
                each_symbol = each_symbol.substring(0,index2) + each_symbol.substring(index2+1,b.length)
                index = each_symbol.indexOf("*")
                index2 = each_symbol.indexOf("/") 
            }  
        }
    }

    let index3:number = each_symbol.indexOf("+")
    let index4:number = each_symbol.indexOf("-")
    if (index3 != -1 || index4 != -1){
        for(let i: number = 0;i<b.length-1;i++){
            b[i+1] = calculator(b[i],b[i+1],each_symbol[i])
            
        }
        return b[b.length-1]
    }
    else{
        return b[0]
    }
}
