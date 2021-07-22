function reverseInt(num){
  let rev=0;
  while(num!==0){
    rev=(num%10)+(rev*10);
    num=parseInt(num/10)

  }
  return rev
}

console.log(reverseInt(-123))