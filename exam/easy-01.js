/**

Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r)
which give both respective areas and perimeter (circumference).

For help with this class,
I have provided you with a Rectangle constructor which you can use as a base example.

*/
class Circle {
	radius;

	constructor(r) {
    this.radius = r
  }

  getArea(){
		return Math.PI * this.radius * this.radius
	}
  
  getPerimeter(){
		return Math.PI * this.radius * 2
	}
}