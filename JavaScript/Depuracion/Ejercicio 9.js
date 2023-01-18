function fibo(limit){
    const number = [0, 1]

    for (let i = 2; i< limit; i ++){ 
    number[i] = number [i -1] + number[i -2]
}
        return number
}

console.log(fibo(10))