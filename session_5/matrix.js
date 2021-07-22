let canvas=[];
const size=4;

const arr= [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

function printMatrix(array){

  for(let i=0;i<array.length;i++){
    
    let str='';
    for(let j=0;j<array.length;j++){
        str=str+arr[i][j]+'\t';
       
    }
    console.log(str)
  }
}

function generateMatrix(size){
  let arr=[];
  let n=1
  for(let i=0;i<size;i++){
   arr[i]=[]
      for(let j=0;j<size;j++){
        arr[i][j]=n;
        n+=1;
      }
  }
  console.log(arr)
  return arr
}


function transpose(array){
  let newArr=[];
  for(let i=0;i<array.length;i++){ 
    newArr.push([])
      for(let j=0;j<array.length;j++){
        //print column first
          newArr[i].push(array[j][i])
      }
    
  }
  return newArr;
}

printMatrix(transpose(arr))