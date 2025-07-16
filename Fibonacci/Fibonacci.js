let fib = [0,1]
const fibonacci = (n) => {
for (let i =2 ; i<=n ;i){
    fib[i] = fib[i-1]+ fib[i-2]
}
return fib;
}
fibonacci(6)
console.log(fib);

