
const purchaseNow = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, purchase now!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Purchased!",
            text: "Your programm was successfully purchased.",
            icon: "success"
          });
        }
      });
}


function commingSoon() {
    Swal.fire({
        title: "Comming Soon!",
        text: "This option is not available yet",
        icon: "info"
      });
}

function calculate(){
    let $height = document.getElementById('height').value
    let $weight = document.getElementById('weight').value
    let bmi = Math.round(($weight/($height * $height)))
    if(bmi <= 18.4){
        document.getElementById('result').textContent = `Your BMI is ${bmi}. You are underweight 😥 `
    }else if(bmi >=18.5 && bmi <= 24.9){
        document.getElementById('result').textContent = `Your BMI is ${bmi}. You are in a normal weight 👍`
    }else if(bmi >= 25 && bmi <=39.9){
        document.getElementById('result').textContent = `Your BMI is ${bmi}. You are overweight 😓`
    }else if(bmi >= 40.0){
        document.getElementById('result').textContent = `Your BMI is ${bmi}. You are obese 😧`
    }

}

 // Function to check if an element is in the viewport
 function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

let $first = document.getElementById('first-data');
let $second = document.getElementById('second-data');
let $third = document.getElementById('third-data');
let $fourth = document.getElementById('fourth-data');
let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

// Function to start the counter
function startCounter() {
    setInterval(() => {
        if (counter < 12) {
            counter++;
            $first.textContent = counter;
        }
    }, 100);
    setInterval(() => {
        if (counter1 < 14) {
            counter1++;
            $second.textContent = `+${counter1}`;
        }
    }, 100);
    setInterval(() => {
        if (counter2 < 150) {
            counter2++;
            $third.textContent = `+${counter2}`;
        }
    }, 10);
    setInterval(() => {
        if (counter3 < 14) {
            counter3++;
            $fourth.textContent = counter3;
        }
    }, 100);
}

// Function that will run each time the page is scrolled
function handleScroll() {
    if (isElementInViewport($first) || isElementInViewport($second) || isElementInViewport($third) || isElementInViewport($fourth)) {
        // At least one of the elements is in the viewport, so we start the counter
        startCounter();

        // Unregister the scroll event after starting the counter (optional)
        window.removeEventListener('scroll', handleScroll);
    }
}

// Register the scroll event to execute the handleScroll function
window.addEventListener('scroll', handleScroll);