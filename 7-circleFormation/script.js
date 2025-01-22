let circles = []; //to hold circles

let clickCount = 0;

//listens the click event and event object has info of click object e.g. click position(event.ClientX and Y) used to determine where to create the circle
document.addEventListener("click", (event) => {
  clickCount++; //everytime user clicks, increment

  //clear circles if the count reaches 3

  if (clickCount === 3) {
    circles.forEach((circleObj) => circleObj.circle.remove()); //removes all existing circles(here removes previous 2 circles)
    circles = []; // default value
    clickCount = 1; //reset the click count to 1 after 3rd click
  }

  // Generate a random radius between 10px and 100px
  const radius = Math.floor(Math.random() * (100 - 10 + 1)) + 10; //o get a random number in the range of 10 to 100 (inclusive), Math.random - number between 0-1(exclusive) & floor() is used to round down the value to the nearest integer

  //generate a circle element with random radius
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.style.width = `${radius * 2}px`;
  circle.style.height = `${radius * 2}px`;
  circle.style.left = `${event.clientX - radius}px`;
  circle.style.top = `${event.clientY - radius}px`;

  //The width and height of the circle are both set to radius * 2 because the width/height represent the diameter of the circle, and the radius is half of the diameter.
  // The left and top properties are set to position the circle on the screen. Since we are using event.clientX and event.clientY (which give the top-left corner of the mouse click), we need to adjust the position by subtracting the radius, so the circle is centered around the click point.

  //Add the circle to the document body
  document.body.appendChild(circle);
  circles.push({
    circle,
    radius,
    x: event.clientX - radius,
    y: event.clientY - radius,
  });

  //check if 2 circles are intersecting
  if (circles.length === 2) {
    const [circle1, circle2] = circles;

    if (areCirclesIntersecting(circle1, circle2)) {
      console.log("The circles are intersecting!");
    }
  }
});

//Function to check if the circles are intersecting
function areCirclesIntersecting(circle1, circle2) {
  const dx = circle2.x + circle2.radius - (circle1.x + circle1.radius); // centerX2 - centerX1
  const dy = circle2.y + circle2.radius - (circle1.y + circle1.radius); // centerY2 - centerY1
  //The x and y coordinates in the circles array store the top-left corner of the circles.
  //To get the center of each circle, we need to add the radius to the x and y values, so the center is at (circle1.x + circle1.radius, circle1.y + circle1.radius) for circle1, and similarly for circle2.

  const distance = Math.sqrt(dx * dx + dy * dy); //distance between 2 centers
  const radiusSum = circle1.radius + circle2.radius;

  //We check if the distance between the centers of the two circles (distance) is less than the sum of their radii (radiusSum). If the distance between the centers is smaller than the sum of their radii, the circles overlap or intersect:

  return distance < radiusSum;
}
