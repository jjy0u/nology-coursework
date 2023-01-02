// 1.write a function to find perimeter of rectangle

const calculatePerimeter = (width,height) => {
    return 2 * width + 2 * height;
}

// 2. write function for area of circle, when given radius, print the area to console

const calculateArea = (radius) => {
    const area = (Math.PI * (radius)**2);
    return area;
}
const smallArea = calculateArea(2);

//3. now do the same to find circumfrance of circle
const calculateCircumfrance = (radius) => {
    const circumfrance = (Math.PI * radius * 2);
    return circumfrance;
}
const smallCircle = calculateCircumfrance(2);