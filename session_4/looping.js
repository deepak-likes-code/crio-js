function repeatStringNumTimes(str, num) {
  if(num<0){
    return ""
  }
   for(let i=0;i<num;i++){
     str+=str
   }
   return str
}

console.log(repeatStringNumTimes("abc", 3));