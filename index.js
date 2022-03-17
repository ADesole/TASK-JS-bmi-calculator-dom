function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let BMI = weight / ((height / 100) * (height / 100));
  BMI = BMI.toFixed(2);
  //challenge 1
  //alert(`Your BMI is ${BMI}`);

  //challenge 2
  // if (BMI < 18.5) {
  //   alert(`Your BMI is ${BMI} you are Underweight`);
  // } else if (BMI >= 18.5 && BMI < 25.0) {
  //   alert(`Your BMI is ${BMI} You are Healthyweight `);
  // } else if (BMI >= 25.0 && BMI < 30.0) {
  //   alert(`Your BMI is ${BMI} You are Overweight`);
  // } else if (BMI >= 30.0) {
  //   alert(`Your BMI is ${BMI} You are Obese`);
  // }

  // Challenge 3
  // note I couldn't undesrstand what was asked of me from the warehouse text so I used the image from readme.md/github

  if (age >= 19 && age <= 24) {
    if (BMI >= 19 && BMI <= 24) {
      alert(`Your BMI is ${BMI} you are Healthy`);
    } else {
      alert(`Your BMI is ${BMI} you are Unhealthy`);
    }
  }

  if (age >= 25 && age <= 34) {
    if (BMI >= 20 && BMI <= 25) {
      alert(`Your BMI is ${BMI} you are Healthy`);
    } else {
      alert(`Your BMI is ${BMI} you are Unhealthy`);
    }
  }
  if (age >= 35 && age <= 44) {
    if (BMI >= 21 && BMI <= 26) {
      alert(`Your BMI is ${BMI} you are Healthy`);
    } else {
      alert(`Your BMI is ${BMI} you are Unhealthy`);
    }
  }
  if (age >= 45 && age <= 54) {
    if (BMI >= 22 && BMI <= 27) {
      alert(`Your BMI is ${BMI} you are Healthy`);
    } else {
      alert(`Your BMI is ${BMI} you are Unhealthy`);
    }
  }
  if (age >= 55 && age <= 64) {
    if (BMI >= 23 && BMI <= 28) {
      alert(`Your BMI is ${BMI} you are Healthy`);
    } else {
      alert(`Your BMI is ${BMI} you are Unhealthy`);
    }
  }
  if (age >= 65) {
    if (BMI >= 24 && BMI <= 29) {
      alert(`Your BMI is ${BMI} you are Healthy`);
    } else {
      alert(`Your BMI is ${BMI} you are Unhealthy`);
    }
  }
}
