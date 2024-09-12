const form = document.querySelector('form');

//getting values here will give empty

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = "Please enter valid height!!"
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please enter valid weight!!"
    } else {
        const index = (weight / ((height * height) / 10000)).toFixed(2)  //bmi formula weight in kilograms (kg) divided by height in meters (m) squared (fix with 2 decimal places)
        results.innerHTML = `<span>${index}</span>`

        const div = document.createElement("div")

        if (index < 18.6) {
            div.innerHTML = `<span>Under Weight</span>`
        } else if (index >= 18.6 && index <= 24.9) {
            div.innerHTML = `<span>Normal Range</span>`
        } else if (index > 24.9) {
            div.innerHTML = `<span>Over Weight</span>`
        } else {
            div.innerHTML = ""
        }

        results.appendChild(div)
    }

})