export function onclick_fn(x: string, result: string){
// export ให้ไปใช้ในโค้ดอื่นได้
// input เป็น x,result ที่เป็น string
    if (result == '0'){
        return x;
    } else {
        return result+x
    }
}