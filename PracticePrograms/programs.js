/*
1. string is palindrome or not

let str = 'Madam';
let pal = "";
let p = str.toUpperCase();
for(let i=str.length-1;i>=0;i--){
        pal += p[i];
}
        if(pal == p){
            console.log("String is Palindrome");
        }
         else{
            console.log("String is not Palindrome");
         } 
    
console.log(pal);


2. swap two digits
let a = 20;
let b = 30;
let c ;
c=a;
a=b;
b=c;
console.log('a =',a);
console.log('b =' ,b);

3. swap digits inside array
let arr = [35,25];
let temp;
for(let i=0;i<=arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        temp = arr[i];
        arr[i] =arr[j];
        arr[j] = temp;
    }
   
}
 console.log(arr);

4. sort an array using function
function sort(arr){
    let n;
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
         if(arr[i]>arr[j]){
            n=arr[i];
            arr[i]=arr[j];
            arr[j]=n;
}
  }
}
return arr;
}
console.log('Sorted Array', sort([25,35,15,45,10]));    

5. Number is Prime or not
let num = 9;
let count =0;
for(let i=1;i<=num;i++){
if(num%i === 0){
   count++;
}}
if (count == 2) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}

//prime no using sq root

6. Factorial of a number
let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log("Factorial:", fact);

7. Fibonacci Series
let a = 0;
let b = 1;
for (let i = 1; i <= 10; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}

*/