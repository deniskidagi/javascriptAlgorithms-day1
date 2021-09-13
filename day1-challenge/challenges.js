//sum all primes 1
function sumPrimes(num) {
    //helper function
    function isPrime(num) {
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0) return false;
        }
        return true;
    }
    let sum = 0;
    for(let i = 2; i <= num; i++){
        if(isPrime(i)) sum += i;
    }
    return sum;
}
console.log(sumPrimes(977))


//sum all primes 2
function sumPrimes(num){
    let primes = [];
    for(let i = 2; i <= num; i++){
        if(primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}

//reverse string;
function reverse(str){
    let newArr =  [];
    for(let i = 0; i < str.length; i++){
        newArr.unshift(str[i]);
    }
    return newArr.join('');
}
console.log(reverse('denis'));

//smallest common multiple
function smallestCommon(arr){
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
    .fill(0)
    .map((_,i) => i += min);

    const upperBound = range.reduce((prod, sum) => prod * sum);
    for(let multiple = max; multiple <= upperBound; multiple += max){
        const divisible = range.every((value) => multiple % value === 0);
        if(divisible){
            return multiple;
        }
    }
}
console.log(smallestCommon([10, 5]));

//drop it
function dropElements(arr, func){
    let sliceIndex =  arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
console.log(dropElements([1,2,3], function(n){
    return n > 2;
}));