function createCircle(){
  return{
    radius:5,
    location:{
     x:4,
     y:6
    },
    draw: function (){
      console.log(this.location)
    },
    move: function(a,b){
      this.location.x=a;
      this.location.y=b;
    }
  }
}

const newCircle= createCircle()
newCircle.move(2,4);
console.log(newCircle.draw())
