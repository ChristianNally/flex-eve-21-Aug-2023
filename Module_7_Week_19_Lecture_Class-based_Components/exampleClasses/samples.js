class Rectangle {

  constructor(x, y){
   console.log('x y:', `box details: ${x} ${y}`);
   this.x = x;
   this.y = y;
  }

  area(){
    console.log('area:', this.x * this.y);
    return this.x * this.y;
  }

};

const b1 = new Rectangle(3,4); // a new object is created here, using the 'template' (aka definition) that appears above
const b2 = new Rectangle(4,5);

b1.area();
b2.area();


class Box extends Rectangle {

  constructor(x, y, z){
    super(x, y);
    this.z = z;
  }

  volume(){
    console.log('volume:', this.area() * this.z);
  }

}

const solid1 = new Box(3, 4, 5);

solid1.volume();
console.log('monkey fuzz', solid1.area());
